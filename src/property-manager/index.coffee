defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
deepEqual       = require 'deep-equal'
#PropertyManager = require './abstract'
Simple          = require './simple'
Normal          = require './normal'
Advance         = require './advance'
getkeys         = Object.keys

module.export   = getPropertyManagerClass = (aOptions)->

  gOptPos = aOptions.optionsPosition || 0
  # it could be null(Simple), ctor(complex attributes), object
  gAttrs  = aOptions.attributes
  gAttrsName = '$attributes'

  class PropertyManager
    constructor: ->@initialize.call @, arguments[gOptPos]

    if isFunction(gAttrs)
      gAttrs = new gAttr
      extend @::, Advance::
    else if isObject gAttrs
      extend @::, Normal::
    else
      extend @::, Simple::
      

    # the non-enumerable property can not be injected directly:
    defineProperty @::, '$initialize', ->
      options = arugments[gOptPos]
      that = @
      if @super and @self
        inherited = @super
        that = @self
        inherited.call(that, options)
      that._initialize options if isFunction that._initialize
      that.assign(options)
    

