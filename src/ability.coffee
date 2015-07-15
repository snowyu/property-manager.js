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
getkeys         = Object.keys

getPropertyManagerClass = (aClass, aOptions)->
  if isString aOptions
    aOptions = manager: aOptions
  else if isNumber aOptions
    aOptions = optionsPosition: aOptions
  else if !aOptions
    aOptions = {}
  gOptPos = aOptions.optionsPosition || 0
  # it could be null(Simple), ctor(complex attributes), object
  gManager  = String(aOptions.manager)

  class PropertyManager
    constructor: ->@initialize.call @, arguments[gOptPos]

    switch gManager.toLowerCase()
      when 'simple'
        extend @::, Simple::
      when 'advance'
        extend @, Advance
        extend @::, Advance::
      when 'normal'
        extend @, Normal
        extend @::, Normal::
      else
        extend @, Default
        extend @::, Default::

    # the non-enumerable property can not be replaced in an ability,
    # but beginning with '$' will be injected to `initialize` method.
    defineProperty @::, '$initialize', ->
      options = arguments[gOptPos]
      options?={}
      that = @
      if @super and @self
        inherited = @super
        that = @self
        inherited.apply(that, arguments)
      that.defineProperties(options.attributes) if isFunction that.defineProperties
      that.assign(options)

coreMethods = [
  'assign', 'assignPropertyTo', 'getProperties'
  'defineProperties'
]
module.exports = customAbility getPropertyManagerClass, coreMethods,  true

