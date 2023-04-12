import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

import inherits from 'inherits-ex/lib/inherits';
import ArrayPropertyManager from '../src/array';
import Normal from '../src/normal';

const arrayOf = ArrayPropertyManager.arrayOf;

describe('ArrayOf', function() {
  var PM, TypedPM, TypedPM1, classAttrs, typedAttrs, typedAttrs1;
  classAttrs = {
    prop1: 432,
    prop2: {
      type: String,
      value: '233'
    },
    prop3: void 0,
    prop4: null,
    $prop5: 'nonExport',
    prop6: 'defaultValue',
    hidden: {
      enumerable: false,
      value: 123
    },
    prop7: {
      writable: false,
      value: 719
    }
  };
  PM = (function() {
    inherits(PM, Normal);

    function PM(args) {
      if (!this) return new PM(args)
      this.defineProperties(classAttrs);
      PM.__super__.constructor.apply(this, arguments);
    }

    return PM;

  })();
  typedAttrs = {
    propTyped: {
      type: arrayOf(PM),
      value: {
        prop1: 500
      }
    }
  };
  TypedPM = (function() {
    inherits(TypedPM, Normal);

    function TypedPM() {
      if (!(this instanceof TypedPM)) {
        return (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor, result = func.apply(child, args);
          return Object(result) === result ? result : child;
        })(TypedPM, args, function(){});
      }
      this.defineProperties(typedAttrs);
      TypedPM.__super__.constructor.apply(this, arguments);
    }

    return TypedPM;

  })();
  typedAttrs1 = {
    propTyped1: {
      type: arrayOf(String)
    }
  };
  TypedPM1 = (function() {
    inherits(TypedPM1, Normal);

    function TypedPM1() {
      if (!(this instanceof TypedPM1)) {
        return (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor, result = func.apply(child, args);
          return Object(result) === result ? result : child;
        })(TypedPM1, args, function(){});
      }
      this.defineProperties(typedAttrs1);
      TypedPM1.__super__.constructor.apply(this, arguments);
    }

    return TypedPM1;

  })();
  it('should assign default typed array', function() {
    var obj, result;
    result = new TypedPM({
      propTyped: [
        {
          prop2: 1233
        }
      ]
    });
    result.should.have.property('propTyped');
    expect(result.propTyped).to.be["instanceof"](ArrayPropertyManager);
    expect(result.propTyped[0]).to.be["instanceof"](PM);
    obj = {};
    result.exportTo(obj);
    return obj.should.be.deep.equal({
      propTyped: [
        {
          prop2: '1233'
        }
      ]
    });
  });
  it('should export default typed array', function() {
    var obj, result;
    result = new TypedPM;
    result.should.have.property('propTyped');
    expect(result.propTyped).to.be.ok;
    expect(result.propTyped).to.be["instanceof"](ArrayPropertyManager);
    expect(result.propTyped).to.have.length(1);
    expect(result.propTyped[0]).to.be["instanceof"](PM);
    obj = {};
    result.exportTo(obj);
    return obj.should.be.deep.equal({
      propTyped: [
        {
          prop1: 500
        }
      ]
    });
  });
  it('should export empty typed array', function() {
    var result;
    result = new TypedPM1;
    result = result.toObject({});
    expect(result).to.have.property('propTyped1');
    return expect(result.propTyped1).to.have.length(0);
  });
  it('should splice typed array', function() {
    var result;
    result = new TypedPM1;
    expect(result).to.have.property('propTyped1');
    expect(result.propTyped1).to.have.length(0);
    result.propTyped1.push(['12', '44', '11']);
    expect(result.propTyped1.toJSON()).to.have.deep.equal(['12', '44', '11']);
    result.propTyped1.splice(1, 1);
    return expect(result.propTyped1.toJSON()).to.have.deep.equal(['12', '11']);
  });
  it('should push typed array', function() {
    var result;
    result = new TypedPM1;
    expect(result).to.have.property('propTyped1');
    expect(result.propTyped1).to.have.length(0);
    result.propTyped1.push(['12', '44', '11'], 66, 7, 8);
    return expect(result.propTyped1.toJSON()).to.have.deep.equal(['12', '44', '11', '66', '7', '8']);
  });
  return it('should unshift typed array', function() {
    var result;
    result = new TypedPM1;
    expect(result).to.have.property('propTyped1');
    expect(result.propTyped1).to.have.length(0);
    result.propTyped1.push(1);
    result.propTyped1.unshift(['12', '44', '11'], 66, 7, 8);
    return expect(result.propTyped1.toJSON()).to.have.deep.equal(['12', '44', '11', '66', '7', '8', '1']);
  });
});
