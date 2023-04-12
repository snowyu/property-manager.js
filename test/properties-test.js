import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

import inherits from 'inherits-ex/lib/inherits';
import createObjectWith from 'inherits-ex/lib/createObjectWith';
import setPrototypeOf from 'inherits-ex/lib/setPrototypeOf';
import extend from 'util-ex/lib/_extend';
import defineProperty from 'util-ex/lib/defineProperty';
import Properties from '../src/properties';

let fnType = null;

const FakeType = (function() {
  var ctor;

  function FakeType() {
    return ctor.apply(this, arguments);
  }

  ctor = fnType = sinon.spy(function(type) {
    if (!(this instanceof FakeType)) {
      return createObjectWith(FakeType, arguments);
    }
  });

  FakeType.prototype.isValid = sinon.spy(function() {
    return this.valid;
  });

  FakeType.prototype.errors = [];

  return FakeType;

})();

describe('Properties', function() {
  var classAttrs, classAttrsDetail;
  before(function() {
    return Properties.prototype.Type = FakeType;
  });
  after(function() {
    fnType.resetHistory();
    return delete Properties.prototype.Type;
  });
  classAttrs = {
    prop1: {
      value: 432,
      alias: ['pr1', 'p1']
    },
    prop2: "233",
    prop3: void 0,
    prop4: null,
    _prop5: 'nonExport',
    prop6: 'defaultValue',
    name: {
      name: '名'
    },
    hidden: {
      enumerable: false,
      value: 123
    },
    prop7: {
      writable: false,
      value: 719
    }
  };
  classAttrsDetail = {
    prop1: {
      value: 432,
      enumerable: true,
      assigned: true,
      exported: true,
      alias: ['pr1', 'p1']
    },
    prop2: {
      value: '233',
      enumerable: true,
      assigned: true,
      exported: true
    },
    prop3: {
      value: void 0,
      enumerable: true,
      assigned: true,
      exported: true
    },
    prop4: {
      value: null,
      enumerable: true,
      assigned: true,
      exported: true
    },
    '_prop5': {
      value: 'nonExport',
      enumerable: true,
      assigned: true,
      exported: false
    },
    prop6: {
      value: 'defaultValue',
      enumerable: true,
      assigned: true,
      exported: true
    },
    name: {
      name: '名',
      enumerable: true,
      assigned: true,
      exported: true
    },
    hidden: {
      enumerable: false,
      value: 123,
      assigned: false,
      exported: false
    },
    prop7: {
      writable: false,
      value: 719,
      enumerable: true,
      assigned: false,
      exported: false
    }
  };
  it('should create a properties', function() {
    var obj, result;
    result = Properties(classAttrs, '_');
    obj = {};
    result.mergeTo(result, obj).should.be.deep.equal(classAttrsDetail);
  });
  describe('#assignTo', function() {
    it('should assign properties to another', function() {
      var c, result;
      result = Properties(classAttrs, '_');
      c = extend({}, classAttrsDetail);
      delete c.prop7;
      delete c.hidden;
      result.assignTo({}, result).should.be.deep.equal(c);
      delete c.prop1;
      result.assignTo({}, result, {
        exclude: 'prop1'
      }).should.be.deep.equal(c);
    });
    it('should assign exported properties to another', function() {
      var c, result;
      result = Properties(classAttrs, '_');
      c = extend({}, classAttrsDetail);
      delete c._prop5;
      delete c.hidden;
      delete c.prop1;
      delete c.prop7;
      result.assignTo({}, result, {
        isExported: true,
        exclude: 'prop1'
      }).should.be.deep.equal(c);
    });
    it('should assign properties to another and skip exists', function() {
      var c, result;
      result = Properties(classAttrs, '_');
      c = extend({}, classAttrsDetail);
      delete c.prop7;
      delete c.hidden;
      c.prop2 = 1;
      result.assignTo({
        prop2: 1
      }, result, {
        skipExists: true
      }).should.be.deep.equal(c);
    });
  });
  it('should validate value of property via type', function() {
    var result;
    result = Properties({
      test: {
        type: 'String'
      }
    });
    FakeType.prototype.errors.push({
      name: 'sff',
      message: 'hahha'
    });
    should["throw"](result.assignTo.bind(result, {}, {
      test: 123
    }));
    FakeType.prototype.valid = true;
    result.assignTo({}, {
      test: 123
    }).should.be.deep.equal({
      test: 123
    });
  });
  it('should check isDefaultObject', function() {
    var obj, result;
    result = Properties(classAttrs, '_');
    result.isDefaultObject({}).should.be["true"];
    result.isDefaultObject({
      prop1: 431
    }).should.be["false"];
    obj = {
      p1: 432,
      prop2: "233",
      prop4: null,
      _prop5: 'nonExport',
      prop6: 'defaultValue'
    };
    result.isDefaultObject(obj).should.be["true"];
    obj.p1 = 431;
    result.isDefaultObject(obj).should.be["false"];
  });
  it('should throw a hint error when clone object failed', function() {
    var DontClone, props, result;
    DontClone = (function() {
      function DontClone() {}

      DontClone.prototype.clone = function() {
        throw new Error('disable clone');
      };

      return DontClone;

    })();
    props = Properties({
      obj: {
        value: new DontClone()
      }
    });
    result = {};
    expect(props.initializeTo.bind(props, result)).to.be["throw"]('the attribute "obj" can not be cloned, set descriptor "clone" to false');
  });
  it('should initializeTo with src', function() {
    var props, result;
    props = Properties({
      num: {
        value: 1
      },
      undef: {
        value: void 0
      },
      unnull: {
        value: null
      }
    });
    result = {};
    props.initializeTo(result, {
      num: 34
    });
    expect(result.num).to.be.equal(34);
    expect(result).to.have.property('undef');
    expect(result).to.have.property('unnull');
  });
  it('should initializeTo with src and skip undefined or null', function() {
    var props, result;
    props = Properties({
      num: {
        value: 1
      },
      undef: {
        value: void 0
      },
      unnull: {
        value: null
      }
    });
    result = {
      num: 12
    };
    props.initializeTo(result, {}, {
      skipUndefined: true,
      skipNull: true
    });
    expect(result.num).to.be.equal(12);
    expect(result).to.not.have.property('undef');
    expect(result).to.not.have.property('unnull');
  });
  it('should initializeTo with src and overwrite', function() {
    var props, result;
    props = Properties({
      num: {
        value: 1
      }
    });
    result = {
      num: 12
    };
    props.initializeTo(result, {}, {
      overwrite: true
    });
    expect(result.num).to.be.equal(1);
  });
  describe('smart assign', function() {
    it('should smart assign readonly property value', function() {
      var props, result;
      props = Properties({
        num: {
          value: 1,
          assigned: '__num',
          writable: false
        }
      });
      result = {};
      props.initializeTo(result);
      var err
      try {result.num = 12;} catch(e) {err = e}
      expect(err).to.be.exist

      expect(result.num).to.be.equal(1);
    });
    it('should add the getter/setter to the smart assign attribute automatically', function() {
      var props, result;
      props = Properties({
        obj: {
          value: console,
          clone: false,
          assigned: '__oConsole',
          assign: function(value, dest, src, name) {
            expect(dest).be.equal(result);
            expect(src).be.equal(result);
            expect(name).be.equal('__oConsole');
            return value;
          }
        }
      });
      result = {};
      props.initializeTo(result);
      result.__oConsole = 12;
      expect(result.obj).to.be.equal(12);
      result.obj = 66;
      return expect(result.__oConsole).to.be.equal(66);
    });
    it('should call the setter when initilizing the property value', function() {
      var props, result, vAssignFn;
      vAssignFn = sinon.spy(function(value, dest, src, name) {
        return value;
      });
      props = Properties({
        num: {
          value: 1,
          assigned: '__num',
          assign: vAssignFn
        }
      });
      result = {};
      props.initializeTo(result);
      expect(result.num).to.be.equal(1);
      expect(vAssignFn).to.be.calledOnce;
      result.num = 2;
      expect(vAssignFn).to.be.calledTwice;
    });
    it('should not clone object', function() {
      var props, result, vAssignFn;
      vAssignFn = sinon.spy(function(value, dest, src, name) {
        return value;
      });
      props = Properties({
        o: {
          value: console,
          assigned: '',
          assign: vAssignFn
        }
      });
      result = {};
      props.initializeTo(result);
      expect(result.o).to.be.equal(console);
      result.o = console;
      expect(vAssignFn).to.be.calledTwice;
    });
  });
  describe('#getValue()', function() {
    it('should get value from attribute', function() {
      var props, result;
      props = Properties({
        str: {
          type: 'String'
        }
      });
      result = props.getValue({
        str: '1234'
      }, 'str');
      expect(result).to.be.equal('1234');
    });
    it('should get value from attribute name', function() {
      var props, result;
      props = Properties({
        str: {
          name: 'Str1',
          type: 'String'
        }
      });
      result = props.getValue({
        Str1: '1234'
      }, 'str');
      expect(result).to.be.equal('1234');
    });
    it('should get value from attribute alias string', function() {
      var props, result;
      props = Properties({
        str: {
          alias: 'Str1',
          type: 'String'
        }
      });
      result = props.getValue({
        Str1: '1234'
      }, 'str');
      expect(result).to.be.equal('1234');
    });
    it('should get value from attribute alias array', function() {
      var props, result;
      props = Properties({
        str: {
          alias: ['Str1'],
          type: 'String'
        }
      });
      result = props.getValue({
        Str1: '1234'
      }, 'str');
      expect(result).to.be.equal('1234');
    });
  });
  describe('#extends', function() {
    it('should inherit properties', function() {
      var obj, result;
      result = Properties({
        a: {
          value: 1
        }
      });
      result = result["extends"]({
        b: {
          value: 2
        }
      });
      obj = {};
      result.mergeTo(result, obj).should.be.deep.equal({
        b: {
          value: 2,
          enumerable: true,
          assigned: true,
          exported: true
        },
        a: {
          value: 1,
          enumerable: true,
          assigned: true,
          exported: true
        }
      });
    });
  });
});
