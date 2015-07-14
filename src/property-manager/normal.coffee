defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
deepEqual       = require 'deep-equal'
PropertyManager = require './abstract'
getkeys         = Object.keys

module.exports  = class PropertyManager
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

  defineProperty @, 'attrsName', undefined,
    get: -> gAttrsName
    set: (value)-> gAttrsName = value

  @::[gAttrsName] = {}

  getRealAttrName: (name)->getRealAttrName @[gAttrsName], name

  assignProperty: (options, name, value, skipDefaultValue)->
    @assignPropertyTo(@, options, name, value, skipDefaultValue)
    return

  defineProperty @, gAttrsName,
    get: -> AttributeManager::[gAttrsName]

  _initialize: (options)->
    vAttrs = @[gAttrsName]
    for k,v of vAttrs
      if v.enumerable is false and not @hasOwnProperty k
        defineProperty @, k, v.value, v
      else if v.value isnt undefined
        @[k] = v.value
    return

  assignPropertyTo: (dest, src, name, value, skipDefaultValue, isExported)->
    vAttrs = @[gAttrsName]
    name = getRealAttrName vAttrs, name
    if name
      vAttr = vAttrs[name]
      return if skipDefaultValue and vAttr.value isnt undefined and
         vAttr.value == value
      value = vAttr.assign(dest, src, value, name) if isFunction(vAttr.assign)
      name = vAttr.name || name if isExported
      dest[name] = value if !isExported or value isnt undefined
    return

