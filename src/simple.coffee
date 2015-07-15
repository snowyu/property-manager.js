defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
deepEqual       = require 'deep-equal'
PropertyManager = require './abstract'
getkeys         = Object.keys
getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports  = class SimplePropertyManager

  constructor: ->
    @initialize.apply @, arguments

  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  getProperties: ->@
  defineProperties: (aProperties) ->
    for k,v of aProperties
      v = value:v unless isObject v
      v.enumerable = v.enumerable isnt false
      defineProperty @, k, v.value, v
    return
  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
    vPropertyDesc = getOwnPropertyDescriptor @, name
    if vPropertyDesc and vPropertyDesc.enumerable and (!isExported or value isnt undefined)
      dest[name] = value
    return
