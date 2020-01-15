defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
assignValue     = require './assign-value'
PropertyManager = require './ability'

mapItemType = (items, type)->
  items = [items] unless Array.isArray items
  items.map (item) => assignValue item, type

module.exports  = class ArrayPropertyManager extends Array
  # PropertyManager ArrayPropertyManager, 'simple'
  @arrayOf: (type) ->
    return (value)->
      new ArrayPropertyManager value, type
  constructor: (value, type)->
    # return new ArrayPropertyManager(value, type) unless this instanceof ArrayPropertyManager
    super()
    # if typeof type == 'function'
    #   type = '$type': enumerable: false, value: type
    # else if !type
    #   type = {}
    # type.$type = enumerable: false unless type.$type
    defineProperty @, '$type', type
    # @defineProperties type
    this.push(value) if value
  push: (value) ->
    value = mapItemType value, this.$type
    super value...
  unshift: (value) ->
    value = mapItemType value, this.$type
    super value...
  toJSON: ()->@toObject()
  toObject: (options)->
    this.map (item) =>
      if item?
        if isFunction item.toObject
          item = item.toObject(options)
        else if isFunction item.toJSON
          item = item.toJSON()
      item
  valueOf: ()-> @toObject()
  # orgAssignPropertyTo = ArrayPropertyManager::assignPropertyTo
  # assignPropertyTo: (dest, src, name, value, attrs, options)->
  #   value = assignValue value, this.$type
  #   orgAssignPropertyTo.call @, dest, src, name, value, attrs, options


module.exports.default = module.exports;
