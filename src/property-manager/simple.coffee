defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
extend          = require 'util-ex/lib/_extend'
deepEqual       = require 'deep-equal'
PropertyManager = require './abstract'
getkeys         = Object.keys

module.exports  = class SimplePropertyManager

  constructor: ->
    @initialize.apply @, arguments

  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  getAttributes: ->@
  assignPropertyTo: (dest, src, name, value, skipDefaultValue, isExported)->
    if @hasOwnProperty(name) and (!isExported or value isnt undefined)
      dest[name] = value
    return
