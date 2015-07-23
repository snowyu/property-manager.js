chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

inherits        = require 'inherits-ex/lib/inherits'
createObjectWith= require 'inherits-ex/lib/createObjectWith'
extend          = require 'util-ex/lib/_extend'
defineProperty  = require 'util-ex/lib/defineProperty'
Properties      = require '../src/properties'
setImmediate    = setImmediate || process.nextTick


fnType = null
class FakeType
  constructor: fnType = sinon.spy (type)->
    return createObjectWith FakeType, arguments unless @ instanceof FakeType
  isValid: sinon.spy -> @valid
  errors:[]

Properties::Type = FakeType

describe 'Properties', ->
  after ->fnType.reset()
  classAttrs =
    prop1: 432
    prop2: "233"
    prop3: undefined
    prop4: null
    _prop5: 'nonExport'
    prop6: 'defaultValue'
    name:
      name: '名'
    hidden:
      enumerable: false
      value: 123
    prop7:
      writable: false
      value: 719
  classAttrsDetail =
    prop1: { value: 432, enumerable: true, assigned: true, exported: true }
    prop2: { value: '233', enumerable: true, assigned: true, exported: true }
    prop3:
      value: undefined
      enumerable: true
      assigned: true
      exported: true
    prop4: { value: null, enumerable: true, assigned: true, exported: true }
    '_prop5':
      value: 'nonExport'
      enumerable: true
      assigned: true
      exported: false
    prop6:
      value: 'defaultValue'
      enumerable: true
      assigned: true
      exported: true
    name: { name: '名', enumerable: true, assigned: true, exported: true }
    hidden:
      enumerable: false
      value: 123
      assigned: false
      exported: false
    prop7:
      writable: false
      value: 719
      enumerable: true
      assigned: undefined
      exported: true
  it 'should create a properties', ->
    result = Properties classAttrs, '_'
    obj = {}
    result.mergeTo(result, obj).should.be.deep.equal classAttrsDetail
  it 'should assign properties to another', ->
    result = Properties classAttrs, '_'
    c = extend {}, classAttrsDetail
    delete c.prop7
    delete c.hidden
    result.assignTo({}, result).should.be.deep.equal c
    delete c.prop1
    result.assignTo({}, result, 'prop1').should.be.deep.equal c
  it 'should validate value of property via type', ->
    result = Properties
      test:
        type: 'String'
    FakeType::errors.push name:'sff', message: 'hahha'
    should.throw result.assignTo.bind(result, {}, test:123)
    FakeType::valid = true
    result.assignTo({}, test:123).should.be.deep.equal test:123
  it 'should check isDefaultObject', ->
    result = Properties classAttrs, '_'
    result.isDefaultObject({}).should.be.true
    result.isDefaultObject(prop1:431).should.be.false
    obj =
      prop1: 432
      prop2: "233"
      prop4: null
      _prop5: 'nonExport'
      prop6: 'defaultValue'
    result.isDefaultObject(obj).should.be.true
    obj.prop6 = 'dd'
    result.isDefaultObject(obj).should.be.false
