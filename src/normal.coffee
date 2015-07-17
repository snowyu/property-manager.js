defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
PropertyManager = require './abstract'
getkeys         = Object.keys
getAllOwnKeys   = Object.getOwnPropertyNames
defineProperties= Object.defineProperties
getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports  = class NormalPropertyManager
  gAttrsName = '$attributes'

  getRealAttrName = (attrs, name)->
    if not attrs.hasOwnProperty name
      for k,v of attrs
        return k if v.name is name
      return
    name

  constructor: -> @initialize.apply @, arguments
  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  @::[gAttrsName] = {}

  defineProperty @, gAttrsName,
    get: -> NormalPropertyManager::[gAttrsName]

  defineProperty @, 'attrsName', undefined,
    get: -> gAttrsName
    set: (value)-> gAttrsName = value

  getProperties: -> @[gAttrsName]

  @defineProperties: defineObjectProperties = (aTarget, aProperties, recreate = true)->
    if isFunction aTarget
      vPrototype = aTarget::
    else if isObject aTarget
      vPrototype = getPrototypeOf aTarget
    else
      throw new TypeError 'the target should be a ctor or object!'
    vAttrs = vPrototype[gAttrsName]
    vAttrs = vPrototype[gAttrsName] = {} if recreate or !isObject vAttrs
    if aProperties
      for k,v of aProperties
        v = value:v unless isObject v
        v.enumerable = v.enumerable isnt false
        vAttrs[k]= v
    vAttrs

  defineProperties: (aProperties) ->
    vAttrs = defineObjectProperties @, aProperties, false
    for k, v of vAttrs
      defineProperty @, k, v.value, v
    return

  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
    attrs = @getProperties() unless attrs
    name = getRealAttrName attrs, name
    if name
      vAttr = attrs[name]
      return unless vAttr.enumerable
      return if skipDefaultValue and vAttr.value == value
      value = vAttr.assign(value, dest, src, name) if isFunction(vAttr.assign)
      name = vAttr.name || name if isExported
      value = vAttr.value if value is undefined and vAttr.value != undefined
      dest[name] = value if (
          !isExported and (vAttr.writable isnt false or vAttr.set)
        ) or value isnt undefined
    return

