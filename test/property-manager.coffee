chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

inherits        = require 'inherits-ex/lib/inherits'
createObject    = require 'inherits-ex/lib/createObject'
createObjectWith= require 'inherits-ex/lib/createObjectWith'
extend          = require 'util-ex/lib/_extend'
defineProperty  = require 'util-ex/lib/defineProperty'
setImmediate    = setImmediate || process.nextTick

module.exports = (name, ManagerClass, optsPos = 0)->
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
  assignmentSupport = false

  describe name, ->
    class PM
      inherits PM, ManagerClass

      if ManagerClass.defineProperties
        defaultValueSupport = true
        assignmentSupport = true

      constructor: ->
        @defineProperties classAttrs
        super

    makeArgs = (options)->
      args = []
      if optsPos
        for i in [1..optsPos]
          args.push i
      args.push options
      args

    describe '.contructor', ->
      it 'should create an object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        result.should.have.property 'hidden', 123
        result.should.have.property 'prop1', 121
        result.should.have.property 'prop2', 453
        result.should.have.ownProperty 'prop3'
        result.should.have.property 'prop4', null
        result.should.have.property '$prop5', 'nonExport'
        result.should.have.property 'prop6', 'defaultValue'
        result.should.not.have.property 'notExi'
      it 'should create an object and assign options', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, $prop5:111
        result.should.have.property '$prop5', 111

    describe '#toObject', ->
      it 'should convert to a plain object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
        result.toObject().should.be.deep.equal prop1: 121, prop2: 453, prop4: 234
      it 'should convert to a plain object with options', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop6:undefined
        result.toObject(prop1: 333, prop4:5).should.be.deep.equal prop1: 333, prop2: 453, prop4: 5
      if defaultValueSupport
        it 'should convert to a plain object with defaults', ->
          result = createObjectWith PM, makeArgs prop1: 432, prop2: 453, hidden:399, notExi:111
          result.toObject().should.be.deep.equal prop2: 453
        it 'should convert to a plain object with options and defaults', ->
          result = createObjectWith PM, makeArgs prop2: 453, hidden:399, notExi:111
          result.toObject(prop3: 333, prop4:5).should.be.deep.equal prop3: 333, prop2: 453, prop4: 5
    describe '#toJSON', ->
      it 'should JSON.stringify()', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4: 1, prop6:undefined
        result = JSON.stringify(result)
        result = JSON.parse(result)
        result.should.be.deep.equal prop1: 121, prop2: 453, prop4: 1
      if defaultValueSupport
        it 'should JSON.stringify() with defaults', ->
          result = createObjectWith PM, makeArgs prop1: 432, prop2: 453, hidden:399, notExi:111
          result = JSON.stringify(result)
          result = JSON.parse(result)
          result.should.be.deep.equal prop2: 453
    describe '#assignTo()', ->
      if assignmentSupport
        it 'should assign to a plain object via custom assignment property', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                'assign1':
                  assign: (value, dest, src, name)->extend {hi:'world'}, value
              , classAttrs
          result = createObjectWith SPM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, assign1: sd:91
          obj = {prop1:222}
          result.assignTo(obj)
          obj.should.be.deep.equal
            prop1: 121, prop2: 453, prop3:undefined, prop4: null, $prop5: 'nonExport'
            prop6: 'defaultValue'
            assign1: sd:91, hi: 'world'
      it 'should assign itself to another plain object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {prop1:222}
        result.assignTo(obj)
        obj.should.be.deep.equal
          prop1: 121, prop2: 453, prop3:undefined, prop4: null, $prop5: 'nonExport'
          prop6: 'defaultValue'

      it 'should assign itself to another object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = createObjectWith PM, makeArgs prop1: 1, prop2: 4, hidden:9, notExi:11, prop3: 11, prop4:11, $prop5: 'dd'
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

    describe '#isSame()', ->
      it 'should compare itself to another object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = createObjectWith PM, makeArgs prop1: 1, prop2: 4, hidden:9, notExi:11, prop3: 11, prop4:11, $prop5: 'dd'
        obj.isSame(result).should.be.false
        result.isSame(obj).should.be.false
        obj =
          prop1: 121, prop2: 453, hidden:399, notExi:111
          prop3: undefined
          prop4: null
          $prop5: 'nonExport'
          prop6: 'defaultValue'
        result.isSame(obj).should.be.true

    describe '#mergeTo()', ->
      it 'should merge to itself to another object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {test: 123, prop4:4}
        result.mergeTo obj
        obj.should.be.deep.equal 
          test: 123
          prop1: 121
          prop2: 453
          prop3: undefined
          prop4: 4
          '$prop5': 'nonExport'
          prop6: 'defaultValue'
      it 'should merge to itself as a new plain object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = result.mergeTo()
        obj.should.be.deep.equal 
        obj.should.be.deep.equal 
          prop1: 121
          prop2: 453
          prop3: undefined
          prop4: null
          '$prop5': 'nonExport'
          prop6: 'defaultValue'

      if defaultValueSupport
        it 'should merge to itself and skip default value', ->
          result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
          obj = result.mergeTo(true)
          obj.should.be.deep.equal 
          obj.should.be.deep.equal 
            prop1: 121
            prop2: 453
