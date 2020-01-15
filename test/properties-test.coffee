chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

inherits        = require 'inherits-ex/lib/inherits'
createObjectWith= require 'inherits-ex/lib/createObjectWith'
setPrototypeOf  = require 'inherits-ex/lib/setPrototypeOf'
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

describe 'Properties', ->
  before -> Properties::Type = FakeType
  after ->
    fnType.resetHistory()
    Properties::Type = undefined
  classAttrs =
    prop1:
      value: 432
      alias: ['pr1', 'p1']
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
    prop1:
      value: 432
      enumerable: true
      assigned: true
      exported: true
      alias: ['pr1', 'p1']
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

  describe '#assignTo', ->
    it 'should assign properties to another', ->
      result = Properties classAttrs, '_'
      c = extend {}, classAttrsDetail
      delete c.prop7
      delete c.hidden
      result.assignTo({}, result).should.be.deep.equal c
      delete c.prop1
      result.assignTo({}, result, exclude:'prop1').should.be.deep.equal c

    it 'should assign exported properties to another', ->
      result = Properties classAttrs, '_'
      c = extend {}, classAttrsDetail
      delete c._prop5
      delete c.hidden
      delete c.prop1
      result.assignTo({}, result, isExported: true, exclude: 'prop1').should.be.deep.equal c

    it 'should assign properties to another and skip exists', ->
      result = Properties classAttrs, '_'
      c = extend {}, classAttrsDetail
      delete c.prop7
      delete c.hidden
      c.prop2 = 1
      result.assignTo({prop2: 1}, result, skipExists: true).should.be.deep.equal c

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
      p1: 432
      prop2: "233"
      prop4: null
      _prop5: 'nonExport'
      prop6: 'defaultValue'
    result.isDefaultObject(obj).should.be.true
    obj.p1 = 431
    result.isDefaultObject(obj).should.be.false

  it 'should throw a hint error when clone object failed', ->
    props = Properties obj: value:console
    result = {}
    expect(props.initializeTo.bind(props, result)).to.be.throw 'the attribute "obj" can not be cloned, set descriptor "clone" to false'

  describe 'smart assign', ->
    it 'should add the getter/setter to the smart assign attribute automatically', ->
      props = Properties obj:
        value: console
        clone: false
        assigned: '__oConsole'
        assign: (value, dest, src, name)->
          expect(dest).be.equal result
          expect(src).be.equal result
          expect(name).be.equal '__oConsole'
          value
      result = {}
      props.initializeTo(result)
      result.__oConsole = 12
      expect(result.obj).to.be.equal 12
      result.obj = 66
      expect(result.__oConsole).to.be.equal 66
    it 'should call the setter when initilizing the property value', ->
      vAssignFn = sinon.spy (value, dest, src, name)->value
      props = Properties num:
        value: 1
        assigned: '__num'
        assign: vAssignFn
      result = {}
      props.initializeTo result
      expect(result.num).to.be.equal 1
      expect(vAssignFn).to.be.calledOnce
    it 'should not clone object', ->
      vAssignFn = sinon.spy (value, dest, src, name)->value
      props = Properties o:
        value: console
        assigned: ''
        assign: vAssignFn
      result = {}
      props.initializeTo result
      expect(result.o).to.be.equal console
      expect(vAssignFn).to.be.calledOnce

  describe '#getValue()', ->
    it 'should get value from attribute', ->
      props = Properties str:
        type: 'String'
      result = props.getValue(str: '1234', 'str')
      expect(result).to.be.equal '1234'
    it 'should get value from attribute name', ->
      props = Properties str:
        name: 'Str1'
        type: 'String'
      result = props.getValue(Str1: '1234', 'str')
      expect(result).to.be.equal '1234'
    it 'should get value from attribute alias string', ->
      props = Properties str:
        alias: 'Str1'
        type: 'String'
      result = props.getValue(Str1: '1234', 'str')
      expect(result).to.be.equal '1234'
    it 'should get value from attribute alias array', ->
      props = Properties str:
        alias: ['Str1']
        type: 'String'
      result = props.getValue(Str1: '1234', 'str')
      expect(result).to.be.equal '1234'

  describe '#extends', ->
    it 'should inherit properties', ->
      result = Properties a: value:1
      result = result.extends b: value:2
      obj = {}
      result.mergeTo(result, obj).should.be.deep.equal
        b: { value: 2, enumerable: true, assigned: true, exported: true }
        a: { value: 1, enumerable: true, assigned: true, exported: true }
