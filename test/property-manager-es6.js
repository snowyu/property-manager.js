import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

import inherits from 'inherits-ex/lib/inherits';
import createObjectWith from 'inherits-ex/lib/createObjectWith';
import extend from 'util-ex/lib/_extend';
import Properties from '../src/properties';

const getPropertyDescriptor = Object.getOwnPropertyDescriptor;

class CustomType {
  constructor(value) {
    var err;
    if (!(this instanceof CustomType)) {
      return new CustomType(value);
    }
    try {
      value = JSON.parse(value);
    } catch (error) {
      err = error;
    }
    this.value = value;
  }
  toJSON() {
    return JSON.stringify(this.value);
  }
  valueOf() {
    return this.value;
  }
}

module.exports = function(name, ManagerClass, optsPos) {
  if (optsPos == null) {
    optsPos = 0;
  }
  const typedAttrs = {
    propTyped: {
      type: CustomType,
      value: 123
    }
  };
  const classAttrs = {
    prop1: 432,
    prop2: "233",
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
  let defaultValueSupport = false;
  let assignmentSupport = false;
  let smartAssignSupport = false;
  let aliasSupport = false;
  let inheritSupport = false;
  if (ManagerClass.defineProperties) {
    defaultValueSupport = true;
    assignmentSupport = true;
    aliasSupport = true;
    inheritSupport = true;
  }
  if (ManagerClass.prototype.$attributes instanceof Properties) {
    smartAssignSupport = true;
  }
  describe(name, function() {
    class TypedPM extends ManagerClass {
      constructor() {
        super(...arguments)
        this.defineProperties(typedAttrs);
        this.initialize(...arguments)
      }
    }

    class PM extends ManagerClass {
      constructor() {
        super(...arguments)
        this.defineProperties(classAttrs);
        this.initialize(...arguments)
      }
    }

    function makeArgs(options) {
      var args, i, j, ref;
      args = [];
      if (optsPos) {
        for (i = j = 1, ref = optsPos; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          args.push(i);
        }
      }
      args.push(options);
      return args;
    };
    describe('typed properties', function() {
      it('should assign typed property', function() {
        var result;
        if (name.startsWith('Simple')) {
          return;
        }
        result = new TypedPM;
        result.should.have.property('propTyped');
        result.propTyped.should["instanceof"](CustomType);
        result.propTyped.value.should.be.equal(123);
        result = createObjectWith(TypedPM, makeArgs({
          propTyped: 121
        }));
        result.should.have.property('propTyped');
        result.propTyped.should["instanceof"](CustomType);
        result.propTyped.value.should.be.equal(121);
      });
      if (defaultValueSupport) {
        describe('.getProperties', function() {
          it('should get all properties with inherited', function() {
            class PM1 extends ManagerClass{}
            ManagerClass.defineProperties(PM1, classAttrs);
            class SPM extends PM1{}
            ManagerClass.defineProperties(SPM, {
              'propName': {
                name: 'meaning'
              }
            });

            const result = SPM.getProperties();
            expect(Object.keys(result)).to.be.deep.equal(['propName', 'prop1', 'prop2', 'prop3', 'prop4', '$prop5', 'prop6', 'hidden', 'prop7']);
          });
        });
      }
    });
    describe('.constructor', function() {
      it('should create an object', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        result.should.have.property('hidden', 123);
        result.should.have.property('prop1', 121);
        result.should.have.property('prop2', 453);
        result.should.have.ownProperty('prop3');
        result.should.have.property('prop4', null);
        result.should.have.property('$prop5', 'nonExport');
        result.should.have.property('prop6', 'defaultValue');
        return result.should.not.have.property('notExi');
      });
      it('should create an object and assign options', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          $prop5: 111
        }));
        return result.should.have.property('$prop5', 111);
      });
      it('should create an object and not assign readonly', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop7: 121
        }));
        return result.should.have.property('prop7', 719);
      });
      it('should create an object with an default value array property only', function() {
        const defaultArr = [1];

        class SPM2 extends PM {
          constructor() {
            super(...arguments)
            this.defineProperties({
              'arr': defaultArr
            }, true);
            this.initialize(...arguments)
          }
        }

        const result = createObjectWith(SPM2, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        result.should.have.own.deep.property('arr', defaultArr);
        result.arr.should.not.be.equal(defaultArr);
      });
      it('should create an object with an default value array property', function() {
        const defaultArr = [];
        class SPM2 extends PM {
          constructor() {
            super(...arguments)
            this.defineProperties({
              'arr': {
                type: 'Array',
                value: defaultArr
              }
            }, true);
            this.initialize(...arguments)
          }
        }

        const result = createObjectWith(SPM2, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        result.should.have.own.deep.property('arr', defaultArr);
        result.arr.should.not.be.equal(defaultArr);
      });
      if (inheritSupport) {
        it('should inherit properties', function() {
          class A extends ManagerClass {
            constructor() {this.initialize.apply(this, arguments)}
          }
          ManagerClass.defineProperties(A, {
            a: {
              value: 1
            },
            x: {
              value: 78
            }
          });
          class B {
            constructor() {this.initialize.apply(this, arguments)}
          }
          inherits(B, A)
          ManagerClass.defineProperties(B, {
            b: {
              value: 2
            }
          });

          const result = createObjectWith(B, makeArgs({
            a: 3,
            b: 4,
            c: 5
          }));
          result.should.have.ownProperty('a', 3);
          result.should.have.ownProperty('b', 4);
          result.should.have.ownProperty('x', 78);
          result.should.have.not.property('c');
        });
      }
      if (defaultValueSupport) {
        it('should create an object with an disable clone default array property', function() {
          const defaultArr = [];
          class SPM2 extends PM {
            constructor() {
              super(...arguments)
              this.defineProperties({
                'arr': {
                  type: 'Array',
                  value: defaultArr,
                  clone: false
                }
              }, true);
              this.initialize(...arguments)
            }
          }

          const result = createObjectWith(SPM2, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          result.arr.should.be.equal(defaultArr);
        });
        it('should create an object via meaningful name', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'propName': {
              name: 'meaning'
            }
          }, classAttrs));

          const result = createObjectWith(SPM, makeArgs({
            meaning: 1221
          }));
          result.should.have.property('propName', 1221);
        });
      }
    });
    describe('#toObject', function() {
      it('should convert to a plain object', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 234,
          prop6: void 0
        }));
        result.toObject().should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop4: 234
        });
      });
      it('should convert to a plain object with options', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop6: void 0
        }));
        result.exportTo({
          prop1: 333,
          prop4: 5
        }).should.be.deep.equal({
          prop1: 333,
          prop2: 453,
          prop4: 5
        });
      });
      if (defaultValueSupport) {
        it('should convert to a plain object with defaults', function() {
          var result;
          result = createObjectWith(PM, makeArgs({
            prop1: 432,
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          result.toObject().should.be.deep.equal({
            prop2: 453
          });
        });
        it('should convert to a plain object with options and defaults', function() {
          var result;
          result = createObjectWith(PM, makeArgs({
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          result.exportTo({
            prop3: 333,
            prop4: 5
          }).should.be.deep.equal({
            prop3: 333,
            prop2: 453,
            prop4: 5
          });
        });
        it('should convert to a plain object via meaningful name', function() {
          class SPM extends PM {
            constructor() {
              super(...arguments)
            }
          }
          ManagerClass.defineProperties(SPM, {
            'propName': {
              name: 'meaning'
            }
          });

          const result = createObjectWith(SPM, makeArgs({
            propName: 121,
            prop3: 5
          }));
          const obj = {
            prop1: 222
          };
          result.exportTo(obj);
          obj.should.be.deep.equal({
            meaning: 121,
            prop1: 222,
            prop3: 5
          });
        });
        it('should convert a plain object via default object value(deep equal)', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'propName': {
              value: {
                "true": [1, 2],
                "false": [3, 4]
              }
            }
          }, classAttrs));

          const result = createObjectWith(SPM, makeArgs({
            propName: {
              "true": [1, 2],
              "false": [3, 4]
            }
          }));
          const obj = {
            prop1: 222
          };
          result.exportTo(obj);
          obj.should.be.deep.equal({
            prop1: 222
          });
        });
      }
    });
    describe('#toJSON', function() {
      it('should JSON.stringify()', function() {
        let result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 1,
          prop6: void 0
        }));
        result = JSON.stringify(result);
        result = JSON.parse(result);
        result.should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop4: 1
        });
      });
      if (defaultValueSupport) {
        it('should JSON.stringify() with defaults', function() {
          let result = createObjectWith(PM, makeArgs({
            prop1: 432,
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          result = JSON.stringify(result);
          result = JSON.parse(result);
          result.should.be.deep.equal({
            prop2: 453
          });
        });
        it('should JSON.stringify() with default object value(deep equal)', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'propName': {
              value: {
                "true": [1, 2],
                "false": [3, 4]
              }
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 222,
            propName: {
              "true": [1, 2],
              "false": [3, 4]
            }
          }));
          result = JSON.stringify(result);
          result = JSON.parse(result);
          return result.should.be.deep.equal({
            prop1: 222
          });
        });
      }
    });
    describe('#assign()', function() {
      if (aliasSupport) {
        it('should add an alias to a property', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'aliasProp': {
              alias: 'a1'
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            a1: 'alias-value'
          }));
          result.should.have.property('aliasProp', 'alias-value');
          result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            aliasProp: 'aliasvalue'
          }));
          result.should.have.property('aliasProp', 'aliasvalue');
        });
        it('should add multi aliases to a property', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'aliasProp': {
              alias: ['a1', 'a2']
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            a1: 'alias-value'
          }));
          result.should.have.property('aliasProp', 'alias-value');
          result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            a2: 'aliasvalue'
          }));
          result.should.have.property('aliasProp', 'aliasvalue');
        });
      }
    });
    describe('#assignTo()', function() {
      it('should call _assign if it is exists', function() {
        const _assignFn = sinon.spy();

        class SPM extends PM {}
        SPM.prototype._assign = _assignFn;

        let result = createObjectWith(SPM);
        _assignFn.should.be.called;
        // _assignFn.should.be.calledOnce;
        const attrs = {
          prop1: 1,
          prop2: 13
        };
        const vOpts = {
          exclude: ['prop1']
        };
        result.assign(attrs, vOpts);
        // _assignFn.should.be.calledTwice;
        _assignFn.should.be.calledWith(attrs, vOpts);
        result.should.have.property('prop1', 432);
        result.should.have.property('prop2', 13);
        const obj = createObjectWith(SPM);
        _assignFn.resetHistory();
        result.assignTo(obj, vOpts);
        _assignFn.should.be.calledOnce;
        return _assignFn.should.be.calledWith(result, vOpts);
      });
      if (smartAssignSupport) {
        it('should customize the internal assigned property', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'assign1': {
              assigned: 'customProp1',
              assign: function(value, dest, src, name) {
                return extend({
                  hi: 'world'
                }, value);
              }
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            assign1: {
              sd: 91
            }
          }));
          result.should.have.ownProperty('customProp1');
          const obj = {
            prop1: 222
          };
          result.assignTo(obj);
          obj.should.be.deep.equal({
            prop1: 121,
            prop2: 453,
            prop3: void 0,
            prop4: null,
            $prop5: 'nonExport',
            prop6: 'defaultValue',
            assign1: {
              sd: 91,
              hi: 'world'
            }
          });
        });
        it('should use assign func to import and export json value', function() {
          class N1 {
            constructor(val) {
              if (val instanceof N1) {
                val = val.val;
              }
              this.val = parseInt(val);
            }
            toJSON() {
              return this.val;
            }
          }
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'date': {
              assign: function(value, dest, src, name, opts) {
                var isExported;
                if (opts) {
                  isExported = opts.isExported;
                }
                if (isExported) {
                  return value.val + '';
                } else {
                  return new N1(value);
                }
              }
            }
          }, classAttrs));


          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            date: '202104'
          }));
          result.should.have.ownProperty('date');
          result.date.should["instanceof"](N1);
          result.date.val.should.be.equal(202104);
          let obj = {
            prop1: 222
          };
          result.assignTo(obj);
          obj.date.should["instanceof"](N1);
          obj.date.val.should.be.equal(202104);
          obj = result.toObject();
          return obj.date.should.be.equal('202104');
        });
        it('should assign to a plain object via smart assignment property', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'assign1': {
              assigned: Properties.SMART_ASSIGN,
              assign: function(value, dest, src, name) {
                return extend({
                  hi: 'world'
                }, value);
              }
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            assign1: {
              sd: 91
            }
          }));
          let obj = {
            prop1: 222
          };
          result.assignTo(obj);
          obj.should.be.deep.equal({
            prop1: 121,
            prop2: 453,
            prop3: void 0,
            prop4: null,
            $prop5: 'nonExport',
            prop6: 'defaultValue',
            assign1: {
              sd: 91,
              hi: 'world'
            }
          });
        });
      }
      if (assignmentSupport) {
        it('should assign to a plain object via custom assignment property', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'assign1': {
              assign: function(value, dest, src, name) {
                return extend({
                  hi: 'world'
                }, value);
              }
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            assign1: {
              sd: 91
            }
          }));
          let obj = {
            prop1: 222
          };
          result.assignTo(obj);
          obj.should.be.deep.equal({
            prop1: 121,
            prop2: 453,
            prop3: void 0,
            prop4: null,
            $prop5: 'nonExport',
            prop6: 'defaultValue',
            assign1: {
              sd: 91,
              hi: 'world'
            }
          });
        });
      }
      it('should assign itself to another plain object', function() {
        const result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        let obj = {
          prop1: 222
        };
        result.assignTo(obj);
        obj.should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop3: void 0,
          prop4: null,
          $prop5: 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should assign itself to another plain object with exclude one', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          prop1: 222
        };
        result.assignTo(obj, {
          exclude: 'prop2'
        });
        obj.should.be.deep.equal({
          prop1: 121,
          prop3: void 0,
          prop4: null,
          $prop5: 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should assign a plain object with exclude one', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          prop1: 222,
          prop2: 91883
        };
        result.assign(obj, {
          exclude: 'prop2'
        });
        result.should.have.property('prop1', 222);
        result.should.have.property('prop2', 453);
      });
      it('should assign itself to another object', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = createObjectWith(PM, makeArgs({
          prop1: 1,
          prop2: 4,
          hidden: 9,
          notExi: 11,
          prop3: 11,
          prop4: 11,
          $prop5: 'dd'
        }));
        obj._assign = sinon.spy();
        result.assignTo(obj);
        obj.should.have.property('hidden', 123);
        obj.should.have.property('prop1', 121);
        obj.should.have.property('prop2', 453);
        obj.should.have.ownProperty('prop3');
        should.not.exist(obj.prop3);
        obj.should.have.property('prop4', null);
        obj.should.have.property('$prop5', 'nonExport');
        obj._assign.should.be.calledOnce;
        obj._assign.should.be.calledWith(result);
      });
    });
    describe('#isSame()', function() {
      it('should compare itself to another object', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = createObjectWith(PM, makeArgs({
          prop1: 1,
          prop2: 4,
          hidden: 9,
          notExi: 11,
          prop3: 11,
          prop4: 11,
          $prop5: 'dd'
        }));
        obj.isSame(result).should.be["false"];
        result.isSame(obj).should.be["false"];
        obj = {
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop3: void 0,
          prop4: null,
          $prop5: 'nonExport',
          prop6: 'defaultValue',
          prop7: 719,
          extra: 222
        };
        result.isSame(obj).should.be["true"];
      });
      it('should compare itself to another object with skip some keys', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = result.cloneTo({
          prop4: 1211
        });
        expect(obj).has.property('prop4', 1211);
        result.isSame(obj).should.be["false"];
        result.isSame(obj, {
          exclude: 'prop4'
        }).should.be["true"];
        result.isSame(obj, {
          exclude: ['prop4']
        }).should.be["true"];
      });
    });
    describe('#mergeTo()', function() {
      it('should merge to itself to another object', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          test: 123,
          prop4: 4
        };
        result.mergeTo(obj);
        obj.should.be.deep.equal({
          test: 123,
          prop1: 121,
          prop2: 453,
          prop3: void 0,
          prop4: 4,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should merge to itself as a new plain object', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = result.mergeTo();
        obj.should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop3: void 0,
          prop4: null,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should merge to itself to another object with exclude one property.', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          test: 123,
          prop4: 4
        };
        result.mergeTo(obj, {
          exclude: 'prop1'
        });
        obj.should.be.deep.equal({
          test: 123,
          prop2: 453,
          prop3: void 0,
          prop4: 4,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should merge to itself to another object with exclude multi properties.', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          test: 123,
          prop4: 4
        };
        result.mergeTo(obj, {
          exclude: ['prop1', 'prop3']
        });
        obj.should.be.deep.equal({
          test: 123,
          prop2: 453,
          prop4: 4,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should merge to itself to another object with skip null properties.', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: null,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          test: 123,
          prop4: 4
        };
        result.mergeTo(obj, {
          skipNull: true
        });
        obj.should.be.deep.equal({
          test: 123,
          prop1: 121,
          prop3: void 0,
          prop4: 4,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      it('should merge to itself to another object with skip undefined properties.', function() {
        var obj, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 1,
          hidden: 399,
          notExi: 111
        }));
        obj = {
          test: 123
        };
        result.mergeTo(obj, {
          skipUndefined: true
        });
        obj.should.be.deep.equal({
          test: 123,
          prop1: 121,
          prop2: 1,
          prop4: null,
          '$prop5': 'nonExport',
          prop6: 'defaultValue'
        });
      });
      if (defaultValueSupport) {
        it('should merge to itself and skip default value', function() {
          var obj, result;
          result = createObjectWith(PM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          obj = result.mergeTo({}, {
            skipDefault: true
          });
          obj.should.be.deep.equal({
            prop1: 121,
            prop2: 453
          });
        });
        it('should merge to an object and skip default value', function() {
          var obj, result;
          result = createObjectWith(PM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111
          }));
          obj = {
            test: 123,
            prop4: 4
          };
          result.mergeTo(obj, {
            skipDefault: true
          });
          obj.should.be.deep.equal({
            prop1: 121,
            prop2: 453,
            test: 123,
            prop4: 4
          });
        });
        it('should merge the assigned property descriptor', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'propA': {
              enumerable: false,
              assigned: true,
              value: 123
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            propA: 121
          }));
          let obj = result.mergeTo({}, {
            skipDefault: true
          });
          obj.should.be.deep.equal({
            propA: 121
          });
        });
        it('should merge the exported property descriptor', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            '$propE': {
              enumerable: false,
              exported: true,
              value: 123
            },
            '$propA': {
              enumerable: false,
              exported: true,
              assigned: true,
              value: 12
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            $propE: 121,
            $propA: 1
          }));
          let obj = result.mergeTo({}, {
            skipDefault: true,
            skipReadonly: null,
            isExported: true
          });
          obj.should.be.deep.equal({
            $propA: 1
          });
          obj = result.mergeTo({}, {
            skipDefault: false,
            skipReadonly: null,
            isExported: true
          });
          obj.should.have.property('$propE', 123);
          obj.should.have.property('$propA', 1);
        });
        it('should test not assigned and exported property descriptor', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            '$propE': {
              enumerable: false,
              exported: true,
              value: 123
            },
            '$propA': {
              exported: false,
              assigned: false,
              value: 12
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            $propE: 121,
            $propA: 1
          }));
          let attr = getPropertyDescriptor(result, '$propA');
          attr.should.have.property('enumerable', false);
          let obj = result.mergeTo({}, {
            skipDefault: true,
            isExported: true
          });
          obj.should.be.deep.equal({});
          obj = result.mergeTo({}, {
            skipDefault: false,
            isExported: true
          });
          obj.should.have.property('$propE', 123);
        });
      }
    });
    describe('#exportTo()', function() {
      it('should export the readonly property with exported is true', function() {
        class SPM extends PM {
          constructor() {
            super(...arguments)
            this.defineProperties(extend({
              'readonlyWithExported': {
                writable: false,
                exported: true,
                value: 123
              }
            }, classAttrs));
            this.initialize(...arguments)
          }
        }
        let result = createObjectWith(SPM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 234,
          prop6: void 0
        }));
        result.exportTo({}).should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop4: 234,
          readonlyWithExported: 123
        });
      });
      it('should exportTo a object and skip readonly property', function() {
        var result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 234,
          prop6: void 0
        }));
        result.exportTo({}, {
          skipReadOnly: true
        }).should.be.deep.equal({
          prop1: 121,
          prop2: 453,
          prop4: 234
        });
      });
      if (defaultValueSupport) {
        it('should exportTo a object and skip readonly and not skip default value', function() {
          var result;
          result = createObjectWith(PM, makeArgs({
            prop1: 121,
            prop2: 453,
            hidden: 399,
            notExi: 111,
            prop4: 234,
            prop6: void 0
          }));
          result = result.exportTo({}, {
            skipDefault: false,
            skipReadOnly: true
          });
          result.should.be.deep.equal({
            prop1: 121,
            prop2: 453,
            prop4: 234,
            prop6: 'defaultValue'
          });
        });
      }
    });
    describe('#nonExported1stChar', function() {
      after(function() {
        ManagerClass.prototype.nonExported1stChar = '$';
      });
      it('should get nonExported1stChar', function() {
        ManagerClass.prototype.should.have.property('nonExported1stChar', '$');
      });
      it('should set nonExported1stChar', function() {
        ManagerClass.prototype.nonExported1stChar = '_';
        class SPM1 extends PM {
          constructor() {
            super(...arguments)
            this.defineProperties({
              '_propE': {
                value: 123
              },
              '_propA': {
                value: 12
              }
            }, true);
            this.initialize(...arguments)
          }
        }


        let result = createObjectWith(SPM1, makeArgs({
          _propE: 121,
          _propA: 1
        }));
        let obj = result.mergeTo({}, {
          skipDefault: true,
          isExported: false
        });
        obj.should.have.property('_propA', 1);
        obj.should.have.property('_propE', 121);
        obj = result.mergeTo({}, {
          skipDefault: true,
          isExported: true
        });
        obj.should.not.have.property('_propA');
        obj.should.not.have.property('_propE');
        ManagerClass.prototype.nonExported1stChar = '$';
      });
    });
    describe('#clone', function() {
      it('should clone object', function() {
        var o, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 234,
          prop6: void 0
        }));
        o = result.clone();
        o.isSame(result).should.be["true"];
      });
      it('should clone object with options', function() {
        var o, result;
        result = createObjectWith(PM, makeArgs({
          prop1: 121,
          prop2: 453,
          hidden: 399,
          notExi: 111,
          prop4: 234,
          prop6: void 0
        }));
        o = result.clone({
          prop1: 120
        });
        o.isSame(result).should.not.be.true;
        o.prop1.should.be.equal(120);
        o = o.toObject();
        delete o.prop1;
        result = result.toObject();
        delete result.prop1;
        o.should.be.deep.equal(result);
      });
    });
    describe('#assignPropertyTo', function() {
      if (defaultValueSupport) {
        it('should assignPropertyTo', function() {
          class SPM extends PM {}
          ManagerClass.defineProperties(SPM, extend({
            'propName': {
              name: 'meaning'
            }
          }, classAttrs));

          let result = createObjectWith(SPM, makeArgs({
            meaning: 1221
          }));
          result.should.have.property('propName', 1221);
          let obj = {};
          result.assignPropertyTo(obj, result, 'meaning', 123, null, true);
          obj.should.have.property('propName', 123);
        });
      }
    });
    describe('#getProperties', function() {
      it('should get the properties(descriptor)', function() {
        class SPM extends PM {
          constructor() {
            super()
            this.defineProperties({
              'propName1': {
                name: 'meaning'
              }
            });
            this.initialize(...arguments)
          }
        }
        let result = createObjectWith(SPM, makeArgs({
          propName1: 121,
          prop3: 5
        }));
        result.should.have.property('propName1', 121);
        result = result.getProperties();
        result = (function() {
          var results;
          results = [];
          for (const k in result) {
            results.push(k);
          }
          return results;
        })();
        expect(result.sort()).to.be.deep.equal(['$prop5', 'hidden', 'prop1', 'prop2', 'prop3', 'prop4', 'prop6', 'prop7', 'propName1']);
      });
    });
    describe('#defaultOptions', function() {
      it('should customize default options to export', function() {
        class SPM extends PM {
          defaultOptions = {
            "export": {
              skipNull: true,
              skipDefault: false
            }
          }
        }
        let obj = createObjectWith(SPM, makeArgs({
          prop3: 5
        }));
        let result = obj.exportTo({});
        expect(result).to.be.deep.equal({
          prop1: 432,
          prop2: '233',
          prop3: 5,
          prop6: 'defaultValue'
        });
        obj.defaultOptions = {
          "export": {
            skipNull: false,
            skipDefault: false
          }
        };
        result = obj.exportTo({});
        expect(result).to.be.deep.equal({
          prop1: 432,
          prop2: '233',
          prop3: 5,
          prop4: null,
          prop6: 'defaultValue'
        });
      });
      it('should customize default options to assign', function() {
        class SPM extends PM {
          defaultOptions = {
            assign: {
              skipNull: true,
              skipDefault: false
            }
          }
        }
        let obj = createObjectWith(SPM, makeArgs({
          prop3: 5
        }));
        let result = obj.assignTo({});
        expect(result).to.be.deep.equal({
          $prop5: 'nonExport',
          prop1: 432,
          prop2: '233',
          prop3: 5,
          prop6: 'defaultValue'
        });
        obj.defaultOptions = {
          assign: {
            skipNull: false,
            skipDefault: false
          }
        };
        result = obj.assignTo({});
        expect(result).to.be.deep.equal({
          $prop5: 'nonExport',
          prop1: 432,
          prop2: '233',
          prop3: 5,
          prop4: null,
          prop6: 'defaultValue'
        });
      });
    });
  });
};
