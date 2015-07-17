defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
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
      v = value:v unless isObject v
      v.enumerable = v.enumerable isnt false
      defineProperty @, k, v.value, v
    return
  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
    attrs = @getProperties() unless attrs
    vAttr = attrs[name]
    if vAttr and vAttr.enumerable
      vCanAssign = (!isExported and (vAttr.writable or vAttr.set)) or
        (isExported and value isnt undefined and name[0] isnt @nonExported1stChar)
      dest[name] = value if vCanAssign
    return
