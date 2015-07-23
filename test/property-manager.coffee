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
Properties      = require '../src/properties'
getPropertyDescriptor = Object.getOwnPropertyDescriptor
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
    prop7:
      writable: false
      value: 719

  defaultValueSupport = false
  assignmentSupport = false
  smartAssignSupport = false

  if ManagerClass.defineProperties
    defaultValueSupport = true
    assignmentSupport = true
  if ManagerClass::$attributes instanceof Properties
    smartAssignSupport = true

  describe name, ->
    class PM
      inherits PM, ManagerClass

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
      it 'should create an object and not assign readonly', ->
        result = createObjectWith PM, makeArgs prop7: 121
        result.should.have.property 'prop7', 719
      it 'should create an object with an default value array property', ->
        defaultArr = []
        class SPM2
          inherits SPM2, PM
          constructor: ->
            @defineProperties
              'arr':
                type: 'Array'
                value: defaultArr
            , true
            super
        result = createObjectWith SPM2, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        result.arr.should.not.be.equal defaultArr
      if defaultValueSupport
        it 'should create an object with an disable clone default array property', ->
          defaultArr = []
          class SPM2
            inherits SPM2, PM
            constructor: ->
              @defineProperties
                'arr':
                  type: 'Array'
                  value: defaultArr
                  clone:false
              , true
              super
          result = createObjectWith SPM2, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
          result.arr.should.be.equal defaultArr
        it 'should create an object via meaningful name', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                'propName':
                  name: 'meaning'
              , classAttrs
          result = createObjectWith SPM, makeArgs meaning: 1221
          result.should.have.property 'propName', 1221

    describe '#toObject', ->
      it 'should convert to a plain object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
        if not defaultValueSupport
          result.toObject().should.be.deep.equal prop1: 121, prop2: 453, prop4: 234, prop7:719
        else
          result.toObject().should.be.deep.equal prop1: 121, prop2: 453, prop4: 234
      it 'should convert to a plain object with options', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop6:undefined
        if not defaultValueSupport
          result.toObject(prop1: 333, prop4:5).should.be.deep.equal prop1: 333, prop2: 453, prop4: 5, prop7:719
        else
          result.toObject(prop1: 333, prop4:5).should.be.deep.equal prop1: 333, prop2: 453, prop4: 5
      if defaultValueSupport
        it 'should convert to a plain object with defaults', ->
          result = createObjectWith PM, makeArgs prop1: 432, prop2: 453, hidden:399, notExi:111
          result.toObject().should.be.deep.equal prop2: 453
        it 'should convert to a plain object with options and defaults', ->
          result = createObjectWith PM, makeArgs prop2: 453, hidden:399, notExi:111
          result.toObject(prop3: 333, prop4:5).should.be.deep.equal prop3: 333, prop2: 453, prop4: 5
        it 'should convert to a plain object via meaningful name', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                'propName':
                  name: 'meaning'
              , classAttrs
          result = createObjectWith SPM, makeArgs propName: 121
          obj = {prop1:222}
          result.toObject(obj)
          obj.should.be.deep.equal meaning: 121, prop1: 222
    describe '#toJSON', ->
      it 'should JSON.stringify()', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4: 1, prop6:undefined
        result = JSON.stringify(result)
        result = JSON.parse(result)
        if not defaultValueSupport
          result.should.be.deep.equal prop1: 121, prop2: 453, prop4: 1, prop7:719
        else
          result.should.be.deep.equal prop1: 121, prop2: 453, prop4: 1
      if defaultValueSupport
        it 'should JSON.stringify() with defaults', ->
          result = createObjectWith PM, makeArgs prop1: 432, prop2: 453, hidden:399, notExi:111
          result = JSON.stringify(result)
          result = JSON.parse(result)
          result.should.be.deep.equal prop2: 453
    describe '#assignTo()', ->
      if smartAssignSupport
        it 'should assign to a plain object via smart assignment property', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                'assign1':
                  assigned: Properties.SMART_ASSIGN
                  assign: (value, dest, src, name)->extend {hi:'world'}, value
              , classAttrs
          result = createObjectWith SPM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, assign1: sd:91
          obj = {prop1:222}
          result.assignTo(obj)
          obj.should.be.deep.equal
            prop1: 121, prop2: 453, prop3:undefined, prop4: null, $prop5: 'nonExport'
            prop6: 'defaultValue'
            assign1: sd:91, hi: 'world'
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
      it 'should assign itself to another plain object with exclude one', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {prop1:222}
        result.assignTo(obj, 'prop2')
        obj.should.be.deep.equal
          prop1: 121, prop3:undefined, prop4: null, $prop5: 'nonExport'
          prop6: 'defaultValue'
      it 'should assign a plain object with exclude one', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {prop1:222, prop2:91883}
        result.assign(obj, 'prop2')
        result.should.have.property 'prop1',222
        result.should.have.property 'prop2',453

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
          prop7:719 # will be ignore
          extra:222 # will be ignore
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
          prop1: 121
          prop2: 453
          prop3: undefined
          prop4: null
          '$prop5': 'nonExport'
          prop6: 'defaultValue'
      it 'should merge to itself to another object with exclude one property.', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {test: 123, prop4:4}
        result.mergeTo obj, 'prop1'
        obj.should.be.deep.equal
          test: 123
          prop2: 453
          prop3: undefined
          prop4: 4
          '$prop5': 'nonExport'
          prop6: 'defaultValue'

      it 'should merge to itself to another object with exclude multi properties.', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
        obj = {test: 123, prop4:4}
        result.mergeTo obj, ['prop1', 'prop3']
        obj.should.be.deep.equal
          test: 123
          prop2: 453
          prop4: 4
          '$prop5': 'nonExport'
          prop6: 'defaultValue'

      if defaultValueSupport
        it 'should merge to itself and skip default value', ->
          result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
          obj = result.mergeTo(true)
          obj.should.be.deep.equal
            prop1: 121
            prop2: 453
        it 'should merge to an object and skip default value', ->
          result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111
          obj = test:123,prop4:4
          result.mergeTo(obj, true)
          obj.should.be.deep.equal
            prop1: 121
            prop2: 453
            test: 123
            prop4:4
        it 'should merge the assigned property descriptor', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                'propA':
                  enumerable: false
                  assigned: true
                  value: 123
              , classAttrs
          result = createObjectWith SPM, makeArgs propA: 121
          obj = result.mergeTo(true)
          obj.should.be.deep.equal
            propA: 121
        it 'should merge the exported property descriptor', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                '$propE':
                  enumerable: false
                  exported: true
                  value: 123
                '$propA':
                  enumerable: false
                  exported: true
                  assigned: true
                  value: 12
              , classAttrs
          result = createObjectWith SPM, makeArgs $propE: 121, $propA:1
          obj = result.mergeTo(true, null, true)
          obj.should.be.deep.equal $propA:1
          obj = result.mergeTo(false, null, true)
          obj.should.have.property '$propE', 123
          obj.should.have.property '$propA', 1
        it 'should test not assigned and exported property descriptor', ->
          class SPM
            inherits SPM, PM
            ManagerClass.defineProperties SPM,
              extend
                '$propE':
                  enumerable: false
                  exported: true
                  value: 123
                '$propA':
                  exported: false
                  assigned: false
                  value: 12
              , classAttrs
          result = createObjectWith SPM, makeArgs $propE: 121, $propA:1
          attr = getPropertyDescriptor result, '$propA'
          attr.should.have.property 'enumerable', false
          obj = result.mergeTo(true, null, true)
          obj.should.be.deep.equal {}
          obj = result.mergeTo(false, null, true)
          obj.should.have.property '$propE', 123


    describe '#exportTo()', ->
      it 'should exportTo a object and skip readonly property', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
        result.exportTo(null, null, null, true).should.be.deep.equal prop1: 121, prop2: 453, prop4: 234

      if defaultValueSupport
        it 'should exportTo a object and skip readonly property and not skip default value', ->
          result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
          result = result.exportTo(null, null, false, true)
          result.should.be.deep.equal
            prop1: 121
            prop2: 453
            prop4: 234
            prop6: 'defaultValue'
    describe '#nonExported1stChar', ->
      after ->
        ManagerClass::nonExported1stChar = '$'
      it 'should get nonExported1stChar', ->
        ManagerClass::should.have.property 'nonExported1stChar', '$'
      it 'should set nonExported1stChar', ->
        ManagerClass::nonExported1stChar = '_'
        class SPM1
          inherits SPM1, PM
          constructor: ->
            @defineProperties
              '_propE': value: 123
              '_propA': value: 12
            , true
            super
        result = createObjectWith SPM1, makeArgs _propE: 121, _propA:1
        # skipDefault, skipReadOnly, isExported
        obj = result.mergeTo(true, null, false)
        obj.should.have.property '_propA', 1
        obj.should.have.property '_propE', 121
        obj = result.mergeTo(true, null, true)
        obj.should.not.have.property '_propA'
        obj.should.not.have.property '_propE'
        ManagerClass::nonExported1stChar = '$'
    describe '#clone', ->
      it 'should clone object', ->
        result = createObjectWith PM, makeArgs prop1: 121, prop2: 453, hidden:399, notExi:111, prop4:234, prop6:undefined
        o = result.clone()
        o.isSame(result).should.be.true
