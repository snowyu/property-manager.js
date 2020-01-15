defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
extend          = require 'util-ex/lib/_extend'
cloneObject     = require 'util-ex/lib/clone-object'
deepEqual       = require 'deep-equal'
PropertyManager = require './abstract'
getkeys         = Object.keys
getAllOwnKeys   = Object.getOwnPropertyNames
getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports  = class SimplePropertyManager

  constructor: ->
    @initialize.apply @, arguments

  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  getProperties: ->
    result = {}
    for k in getAllOwnKeys(@)
      result[k] = getOwnPropertyDescriptor(@, k)
    result
  defineProperties: (aProperties) ->
    for k,v of aProperties
      v = value:v unless !isArray(v) && isObject v
      v.enumerable = v.enumerable isnt false
      value = v.value
      value = cloneObject value if !v.get and !v.set and isObject(value)
      defineProperty @, k, value, v
    return
  assignPropertyTo: (dest, src, name, value, attrs, options)->
    { isExported } = options if options
    attrs = @getProperties() unless attrs
    vAttr = attrs[name]
    if vAttr and vAttr.enumerable
      vCanAssign = (!isExported and (vAttr.writable or vAttr.set)) or
        (isExported and value isnt undefined and name[0] isnt @nonExported1stChar)
      if vCanAssign
        if isExported && value?
          if isFunction value.toObject
            value = value.toObject(options)
          else if isFunction value.toJSON
            value = value.toJSON()
        dest[name] = value
    return

module.exports.default = module.exports;
