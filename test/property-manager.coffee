chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

fs              = require 'fs'
path            = require 'path.js'
inherits        = require 'inherits-ex/lib/inherits'
extend          = require 'util-ex/lib/_extend'
defineProperty  = require 'util-ex/lib/defineProperty'
PropertyManager = require '../src/property-manager/simple'
setImmediate    = setImmediate || process.nextTick

module.exports = (name, ManagerClass)->
  classAttrs =
    prop1: 432
    prop2: "233"
    prop3: undefined
    prop4: null
    $prop5: 'nonExport'
    prop6: 'defaultValue'
    hidden:
      enumerable: false
      value: 123
    
  defaultValueSupport = false

  describe name, ->
    class PM
      inherits PM, ManagerClass

      if ManagerClass.defineProperties
        ManagerClass.defineProperties PM, classAttrs
        defaultValueSupport = true
      else
        @::_initialize = (options)->
          @defineProperties classAttrs

      constructor: ->super

      
    describe '.contructor', ->
      it 'should create an object', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111
        result.should.have.property 'hidden', 123
        result.should.have.property 'prop1', 121
        result.should.have.property 'prop2', 453
        result.should.have.ownProperty 'prop3'
        result.should.have.property 'prop4', null
        result.should.have.property '$prop5', 'nonExport'
        result.should.have.property 'prop6', 'defaultValue'
        result.should.not.have.property 'notExi'

    describe '#toObject', ->
      it 'should convert to a plain object', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
        result.toObject().should.be.deep.equal prop1: 121, prop2: 453, prop4: 234
      it 'should convert to a plain object with options', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111, prop6:undefined
        result.toObject(prop1: 333, prop4:5).should.be.deep.equal prop1: 333, prop2: 453, prop4: 5
      if defaultValueSupport
        it 'should convert to a plain object with defaults', ->
          result = new PM prop1: 432, prop2: 453, hidden:399, notExi:111
          result.toObject().should.be.deep.equal prop2: 453
        it 'should convert to a plain object with options and defaults', ->
          result = new PM prop2: 453, hidden:399, notExi:111
          result.toObject(prop3: 333, prop4:5).should.be.deep.equal prop3: 333, prop2: 453, prop4: 5
    describe '#toJSON', ->
      it 'should JSON.stringify()', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111, prop4: 1, prop6:undefined
        result = JSON.stringify(result)
        result = JSON.parse(result)
        result.should.be.deep.equal prop1: 121, prop2: 453, prop4: 1
      if defaultValueSupport
        it 'should JSON.stringify() with defaults', ->
          result = new PM prop1: 432, prop2: 453, hidden:399, notExi:111
          result = JSON.stringify(result)
          result = JSON.parse(result)
          result.should.be.deep.equal prop2: 453
    describe '#assignTo()', ->
      it 'should assign itself to another plain object', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {prop1:222}
        result.assignTo(obj)
        obj.should.be.deep.equal
          prop1: 121, prop2: 453, prop3:undefined, prop4: null, $prop5: 'nonExport'
          prop6: 'defaultValue'

      it 'should assign itself to another object', ->
        result = new PM prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = new PM prop1: 1, prop2: 4, hidden:9, notExi:11, prop3: 11, prop4:11, $prop5: 'dd'
        obj._assign = sinon.spy()
        result.assignTo(obj)
        obj.should.have.property 'hidden', 123
        obj.should.have.property 'prop1', 121
        obj.should.have.property 'prop2', 453
        obj.should.have.ownProperty 'prop3'
        should.not.exist obj.prop3
        obj.should.have.property 'prop4', null
        obj.should.have.property '$prop5', 'nonExport'

        obj._assign.should.be.callOnce
        obj._assign.should.be.calledWith result
