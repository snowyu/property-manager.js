defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
Properties      = require './properties'
PropertyManager = require './abstract'
getkeys         = Object.keys

module.exports  = class AdvancePropertyManager
  gAttrsName = '$attributes'

  getRealAttrName = (attrs, name)->
    if not attrs.hasOwnProperty name
      for k,v of attrs
        return k if v.name is name
      return
    name

  @::[gAttrsName] = Properties()

  defineProperty @, gAttrsName,
    get: -> AdvancePropertyManager::[gAttrsName]

  defineProperty @, 'attrsName', undefined,
    get: -> gAttrsName
    set: (value)-> gAttrsName = value

  constructor: -> @initialize.apply @, arguments
  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  getProperties: -> @[gAttrsName]

  @defineProperties: defineObjectProperties = (aTarget, aProperties, recreate = true)->
    if isFunction aTarget
      vPrototype = aTarget::
    else if isObject aTarget
      vPrototype = getPrototypeOf aTarget
    else
      throw new TypeError 'the target should be a ctor or object!'
    vAttrs = vPrototype[gAttrsName]

    if recreate or not (vAttrs instanceof Properties)
      vPrototype[gAttrsName] = vAttrs = Properties()
    vAttrs.merge aProperties if aProperties
    vAttrs
  defineProperties: (aProperties) ->
    vAttrs = defineObjectProperties @, aProperties, false
    vAttrs.initializeTo @
    @

  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
    attrs = @getProperties() unless attrs
    attrs.assignPropertyTo dest, src, name, value, skipDefaultValue, isExported
    return

