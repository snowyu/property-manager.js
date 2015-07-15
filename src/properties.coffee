isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
defineProperty  = require 'util-ex/lib/defineProperty'
getObjectKeys   = Object.keys
getOwnPropertyNames = Object.getOwnPropertyNames

module.exports = class Properties
  merge: (attrs)->@mergeTo attrs, @
  mergeTo: (attrs, dest)->
    mergePropertyTo = Properties.mergePropertyTo
    for name, attr of attrs
      mergePropertyTo dest, name, attr
    dest.updateNames() if dest.updateNames
    return dest
  @mergePropertyTo: (dest, name, attr)->
    #attr = type:attr if isString attr
    attr = value:attr unless isObject attr
    vAttr = dest[name]
    if vAttr is undefined
      dest[name] = attr
    else
      vAttr[k] = v for k, v of attr
  _initialize: (aOptions)-> @merge(aOptions)
  initialize: (aOptions)->
    @_initialize(aOptions)
    return
  constructor: (aOptions)->
    if not (this instanceof Properties)
      return new Properties aOptions
    defineProperty @, 'names', {}
    @initialize(aOptions)

  updateNames: ->
    @names = @getNames()
    return
  initializeTo: (dest)->
    for k,v of @names
      continue if k is 'name'
      vAttr = @[k]
      value = vAttr.value
      defineProperty dest, k, value, vAttr
  getRealAttrName: (name)->
    name = @names[name] unless @hasOwnProperty name
    name
  validatePropertyValue: (name, value, attr, raiseError)->
    if isBoolean attr
      raiseError = attr
      attr = null
    attr = @[name] unless attr
    result = attr?
    throw new TypeError('no such property name:'+name) unless result
    if @Type and value? and attr.type? and value isnt attr.value
        vType = @Type attr.type
        if vType
          result = vType.isValid value
          if !result and raiseError
            k = "assign attribute '#{v}' error"
            if vType.errors.length
              k += ": the value #{vValue}"
              for v in vType.errors
                k += "\n #{v.name}: #{v.message}"
              dest.errors = vType.errors if dest.errors
            throw new TypeError k
    result
  assignPropertyTo: (dest, src, name, value, skipDefaultValue, isExported)->
    name = @getRealAttrName name
    if name
      vAttr = @[name]
      return unless vAttr.enumerable isnt false
      return if skipDefaultValue and vAttr.value == value
      if name is 'name'
        dest.name = value if value and value isnt dest.name
        return
      @validatePropertyValue name, value, vAttr if !isExported
      value = vAttr.assign(dest, src, value, name) if isFunction(vAttr.assign)
      name = vAttr.name || name if isExported
      dest[name] = value if !isExported or value isnt undefined
    return
  assignTo: (dest, src, aExclude)->
    vNames = @names
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []
    for k, v of vNames
      continue if v in aExclude
      vAttr = @[k]
      vValue = src[v] || src[k]
      @assignPropertyTo dest, src, k, vValue
    return dest
  toObject: ->
    result = {}
    for k,v of @names
      result[v.name || k] = v
    result
  isDefaultObject: (aObject)->
    result = true
    for k,v of @names
      continue if k is 'name'
      value = aObject[k] or aObject[v]
      #continue unless aObject.hasOwnProperty(k) or aObject.hasOwnProperty(v)
      unless value is undefined or value is @[k].value
        result = false
        break
    result
  getNames: ->
    result = {}
    for k in getObjectKeys @
      v = @[k]
      result[k] = v.name || k
    result
