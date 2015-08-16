isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
defineProperty  = require 'util-ex/lib/defineProperty'
cloneObject     = require 'util-ex/lib/clone-object'
getObjectKeys   = Object.keys
getOwnPropertyNames = Object.getOwnPropertyNames
getPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports = class Properties
  @SMART_ASSIGN: '' #deprecated
  nonExported1stChar: '$'
  merge: (attrs)->@mergeTo attrs, @
  mergeTo: (attrs, dest)->
    return dest unless attrs
    for name in getObjectKeys attrs
      attr = attrs[name]
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
    defineProperty @, 'ixNames', {}
    if isString(nonExported1stChar) and nonExported1stChar.length is 1
      defineProperty @ , 'nonExported1stChar', nonExported1stChar
    @initialize(aOptions)

  updateNames: ->
    @names = {}
    @ixNames = {}
    for k in getObjectKeys @
      v = @[k]
      @names[k] = v.name || k
      @ixNames[v.name|| k] = k

      vAlias = v.alias
      if vAlias
        if isArray vAlias
          for n in vAlias
            @ixNames[n] = k
        else if isString vAlias
          @ixNames[vAlias] = k
    return
  initializeTo: (dest)->
    nonExported1stChar = @nonExported1stChar
    for k,v of @names
      continue if k is 'name'
      vAttr = @[k]
      value = vAttr.value
      if !vAttr.get and !vAttr.set and vAttr.clone isnt false and
         isObject(value)
        value = cloneObject(value)
      if isString(vAttr.assigned) and !vAttr.get and !vAttr.set and
         isFunction(vAttr.assign)
        vAttr = cloneObject(vAttr)
        vAttrName = vAttr.assigned || nonExported1stChar+k
        defineProperty dest, vAttrName, value
        ((name, assign, dest)->
          vAttr.get = ->@[name]
          vAttr.set = (v)->@[name] = assign(v, @, @, name)
        )(vAttrName, vAttr.assign)
      defineProperty dest, k, value, vAttr
  getRealAttrName: (name)->
    name = @ixNames[name] unless @hasOwnProperty name
    name
  validatePropertyValue: (name, value, attr, raiseError)->
    if isBoolean attr
      raiseError = attr
      attr = null
    attr = @[name] unless attr
    result = attr?
    raiseError ?= true
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
      vIsAssigned = vAttr.assigned || isString(vAttr.assigned)
      return unless (vIsAssigned and !isExported) or (vAttr.exported and isExported)
      return if skipDefaultValue and vAttr.value == value
      vCanAssign = (!isExported and vIsAssigned) or value isnt undefined
      if name is 'name' and vCanAssign and value isnt dest.name
        dest.name = value
        return
      @validatePropertyValue name, value, vAttr if !isExported
      value = vAttr.assign(value, dest, src, name) if isFunction(vAttr.assign)
      name = vAttr.name || name if isExported
      value = vAttr.value if value is undefined and vAttr.value != undefined
      if vCanAssign
        vAttrName = vAttr.assigned || @nonExported1stChar+name if isString vAttr.assigned
        if vAttrName and !vAttr.get and !vAttr.set and
           isFunction(vAttr.assign) and dest.hasOwnProperty(vAttrName)
          # avoid duplication assignment.
          dest[vAttrName] = value
        else
          dest[name] = value
    return
  assignTo: (dest, src, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []
    vNames = @names
    for k, v of vNames
      continue if (v in aExclude) or (k in aExclude)
      vAttr = @[k]
      vValue = src[v] || src[k]
      @assignPropertyTo dest, src, k, vValue
    return dest
  isDefaultObject: (aObject)->
    result = true
    for k,v of @names
      attr = @[k]
      continue if k is 'name' or attr.writable is false or attr.enumerable is false
      value = aObject[k] || aObject[v]
      #continue unless aObject.hasOwnProperty(k) or aObject.hasOwnProperty(v)
      unless value is undefined or value is attr.value
        result = false
        break
    result
  # getNames: ->
  #   result = {}
  #   for k in getObjectKeys @
  #     v = @[k]
  #     result[k] = v.name || k
  #   result
