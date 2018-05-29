chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

inherits        = require 'inherits-ex/lib/inherits'
extend          = require 'util-ex/lib/_extend'
defineProperty  = require 'util-ex/lib/defineProperty'
Manager         = require '../src/advance'
test            = require './property-manager'
setImmediate    = setImmediate || process.nextTick


test('AdvancePropertyManager', Manager)


describe 'AdvancePropertyManager Inherits', ->
  it 'should inherit properties', ->
    class A
      inherits A, Manager
      constructor: -> @initialize.apply @, arguments

      Manager.defineProperties A,
        a: value:1
        x: value: 78
    class B
      inherits B, A
      constructor: -> @initialize.apply @, arguments
      Manager.defineProperties B,
        b: value:2
    result = new B(a:3, b:4, c:5)
    result.should.have.ownProperty 'a', 3
    result.should.have.ownProperty 'b', 4
    result.should.have.ownProperty 'x', 78
    result.should.have.not.property 'c'
