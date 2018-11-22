defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
Properties      = require './properties'
PropertyManager = require './abstract'
defineProperties= require './properties/define-properties'
getkeys         = Object.keys

module.exports  = class AdvancePropertyManager
  @::$attributes = null
  @::SMART_ASSIGN = Properties.SMART_ASSIGN

  defineProperty @, '$attributes', undefined,
    get: -> AdvancePropertyManager::$attributes

  constructor: -> @initialize.apply @, arguments
  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  getProperties: -> @$attributes

  @defineProperties = defineProperties

  defineProperties: (aProperties, recreate = false) ->
    vAttrs = defineProperties @, aProperties, recreate
    vAttrs.initializeTo @
    @

  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
    attrs = @getProperties() unless attrs
    attrs.assignPropertyTo dest, src, name, value, skipDefaultValue, isExported
    return

module.exports.default = module.exports;
