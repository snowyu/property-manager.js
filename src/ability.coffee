customAbility   = require 'custom-ability'
defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isNumber        = require 'util-ex/lib/is/type/number'
extend          = require 'util-ex/lib/_extend'
Default         = require './'
Simple          = require './simple'
Normal          = require './normal'
Advance         = require './advance'
Abstract        = require './abstract'
getkeys         = Object.keys

getPropertyManagerClass = (aClass, aOptions)->
  if isString aOptions
    aOptions = name: aOptions
  else if isNumber aOptions
    aOptions = optionsPosition: aOptions
  else if !aOptions
    aOptions = {}
  gOptPos = aOptions.optionsPosition || 0
  # it could be null(Simple), ctor(complex attributes), object
  gManager  = String(aOptions.name)
  nonExported1stChar = aOptions.nonExported1stChar

  class PropertyManager
    constructor: ->@initialize.call @, arguments[gOptPos]

    switch gManager.toLowerCase()
      when 'simple'
        extend @::, Simple::
      when 'advance'
        extend @, Advance
        extend @::, Advance::
      when 'abstract'
        extend @, Abstract
        extend @::, Abstract::
      when 'normal'
        extend @, Normal
        extend @::, Normal::
      else
        extend @, Default
        extend @::, Default::

    if isString(nonExported1stChar) and nonExported1stChar.length is 1
      @::nonExported1stChar = nonExported1stChar

    orgInitialize = @::initialize
    # the non-enumerable property can not be replaced in an ability,
    # but beginning with '$' will be injected to `initialize` method.
    # replace the original initialize method.
    defineProperty @::, '$initialize', ->
      options = arguments[gOptPos]
      options?={}
      that = @self || @
      inherited = @super
      if inherited # call the parent's initialize method.
        return if inherited.apply(that, arguments) is 'ok'
      # defineProperty that, 'defaultOptions', {}
      # that.defineProperties(options.attributes) if isFunction that.defineProperties
      # that.assign(options)
      orgInitialize.call(that, options)
    defineProperty @::, '$assign', ->
      that = @self || @
      return @super.apply(that, arguments) if @super
      return @__assign.apply(that, arguments)


coreMethods = [
  '__assign', 'assignPropertyTo', 'getProperties'
  'mergeTo'
  'defineProperties'
  'nonExported1stChar'
]
module.exports = customAbility getPropertyManagerClass, coreMethods,  true

module.exports.default = module.exports;
