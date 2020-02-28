inherits        = require 'inherits-ex/lib/inherits'
chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

ArrayPropertyManager = require '../src/array'
Normal          = require '../src/normal'

{ arrayOf } = ArrayPropertyManager

describe 'ArrayOf', ->

  classAttrs =
    prop1: 432
    prop2:
      type: String
      value: '233'
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

  class PM
    inherits PM, Normal

    constructor: (args)->
      # return new PM(args...) unless @ instanceof PM
      @defineProperties classAttrs
      super

  typedAttrs =
    propTyped:
      type: arrayOf PM
      value: {prop1: 500}

  class TypedPM
    inherits TypedPM, Normal

    constructor: ->
      return new TypedPM(args...) unless @ instanceof TypedPM
      @defineProperties typedAttrs
      super

  typedAttrs1 =
    propTyped1:
      type: arrayOf String

  class TypedPM1
    inherits TypedPM1, Normal

    constructor: ->
      return new TypedPM1(args...) unless @ instanceof TypedPM1
      @defineProperties typedAttrs1
      super


  it 'should assign default typed array', ->
    result = new TypedPM propTyped: [prop2: 1233]
    result.should.have.property 'propTyped'
    expect(result.propTyped).to.be.instanceof ArrayPropertyManager
    expect(result.propTyped[0]).to.be.instanceof PM
    obj = {}
    result.exportTo(obj)
    obj.should.be.deep.equal
      propTyped: [prop2: '1233']
  it 'should export default typed array', ->
    result = new TypedPM
    result.should.have.property 'propTyped'
    expect(result.propTyped).to.be.ok
    expect(result.propTyped).to.be.instanceof ArrayPropertyManager
    expect(result.propTyped).to.have.length 1
    expect(result.propTyped[0]).to.be.instanceof PM
    obj = {}
    result.exportTo(obj)
    obj.should.be.deep.equal
      propTyped: [prop1: 500]

  it 'should export empty typed array', ->
    result = new TypedPM1
    result = result.toObject {}
    expect(result).to.have.property 'propTyped1'
    expect(result.propTyped1).to.have.length 0

  it 'should splice typed array', ->
    result = new TypedPM1
    # result = result.toObject {}
    expect(result).to.have.property 'propTyped1'
    expect(result.propTyped1).to.have.length 0
    result.propTyped1.push ['12', '44', '11']
    expect(result.propTyped1.toJSON()).to.have.deep.equal ['12', '44', '11']
    result.propTyped1.splice 1, 1
    expect(result.propTyped1.toJSON()).to.have.deep.equal ['12', '11']

  it 'should push typed array', ->
    result = new TypedPM1

    expect(result).to.have.property 'propTyped1'
    expect(result.propTyped1).to.have.length 0
    result.propTyped1.push ['12', '44', '11'], 66, 7, 8
    expect(result.propTyped1.toJSON()).to.have.deep.equal ['12', '44', '11', '66', '7', '8']

  it 'should unshift typed array', ->
    result = new TypedPM1

    expect(result).to.have.property 'propTyped1'
    expect(result.propTyped1).to.have.length 0
    result.propTyped1.push 1
    result.propTyped1.unshift ['12', '44', '11'], 66, 7, 8
    expect(result.propTyped1.toJSON()).to.have.deep.equal ['12', '44', '11', '66', '7', '8', '1']

