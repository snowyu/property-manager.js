isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
defineProperty  = require 'util-ex/lib/defineProperty'
cloneObject     = require 'util-ex/lib/clone-object'
getObjectKeys   = Object.keys
getOwnPropertyNames = Object.getOwnPropertyNames

module.exports = class Properties
  nonExported1stChar: '$'
  merge: (attrs)->@mergeTo attrs, @
  mergeTo: (attrs, dest)->
    for name, attr of attrs
      @mergePropertyTo dest, name, attr
    dest.updateNames() if dest.updateNames
    return dest
  mergePropertyTo: (dest, name, attr)->
    #attr = type:attr if isString attr
    attr = value:attr unless isObject attr
    if !attr.enumerable? and attr.assigned is false and attr.exported is false
      attr.enumerable = false
    else
      attr.enumerable = attr.enumerable isnt false
    vEnumerable = attr.enumerable isnt false
    attr.assigned?= vEnumerable and (attr.writable isnt false or attr.set)
    attr.exported?= vEnumerable and name[0] isnt @nonExported1stChar
    vAttr = dest[name]
    if vAttr is undefined
      dest[name] = attr
    else
      vAttr[k] = v for k, v of attr
    return
  _initialize: (aOptions)-> @merge(aOptions)
  initialize: (aOptions)->
    @_initialize(aOptions)
    return
  constructor: (aOptions, nonExported1stChar)->
    if not (this instanceof Properties)
      return new Properties aOptions, nonExported1stChar
    defineProperty @, 'names', {}
    if isString(nonExported1stChar) and nonExported1stChar.length is 1
      @nonExported1stChar = nonExported1stChar
    @initialize(aOptions)

  updateNames: ->
    @names = @getNames()
    return
  initializeTo: (dest)->
    for k,v of @names
      continue if k is 'name'
      vAttr = @[k]
      value = vAttr.value
      if !vAttr.get and !vAttr.set and vAttr.clone isnt false and
         isObject(value)
        value = cloneObject(value)
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
      return unless (vAttr.assigned and !isExported) or (vAttr.exported and isExported)
      return if skipDefaultValue and vAttr.value == value
      vCanAssign = (!isExported and vAttr.assigned) or value isnt undefined
      if name is 'name' and vCanAssign and value isnt dest.name
        dest.name = value
        return
      @validatePropertyValue name, value, vAttr if !isExported
      value = vAttr.assign(value, dest, src, name) if isFunction(vAttr.assign)
      name = vAttr.name || name if isExported
      value = vAttr.value if value is undefined and vAttr.value != undefined
      dest[name] = value if vCanAssign
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
