setPrototypeOf  = require 'inherits-ex/lib/setPrototypeOf'
isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
defineProperty  = require 'util-ex/lib/defineProperty'
cloneObject     = require 'util-ex/lib/clone-object'
deepEqual       = require 'deep-equal'
assignValue     = require '../assign-value'
getObjectKeys   = Object.keys
getOwnPropertyNames = Object.getOwnPropertyNames
getPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports = class Properties
  privated = defineProperty.bind(null, Properties::)

  @SMART_ASSIGN: '' #deprecated
  privated 'nonExported1stChar', defaultNonExported1stChar = '$'

  # the attrs inhertis from itself
  privated 'extends', (attrs, nonExported1stChar)->
    nonExported1stChar?= this.nonExported1stChar
    result = Properties(attrs, nonExported1stChar)
    setPrototypeOf(result, this)
    result.updateNames()
    result
  privated 'merge', (attrs)->@mergeTo attrs, @
  privated 'mergeTo', (attrs, dest)->
    return dest unless attrs
    dest = {} unless dest
    if attrs instanceof Properties
      keys = (k for k of attrs.names)
    else
      keys = getObjectKeys attrs
    for name in keys
      attr = attrs[name]
      @mergePropertyTo dest, name, attr
    dest.updateNames() if dest.updateNames
    return dest
  privated 'mergePropertyTo', (dest, name, attr)->
    #attr = type:attr if isString attr
    attr = value:attr unless !isArray(attr) and isObject attr
    if !attr.enumerable? and attr.assigned is false and attr.exported is false
      attr.enumerable = false
    else
      attr.enumerable = attr.enumerable isnt false
    vEnumerable = attr.enumerable isnt false
    vWritable = attr.writable isnt false or isFunction(attr.set)
    attr.assigned?= vEnumerable and vWritable
    attr.exported?= vEnumerable and name[0] isnt @nonExported1stChar and vWritable
    vAttr = dest[name]
    if vAttr is undefined
      dest[name] = attr
    else
      vAttr[k] = v for k, v of attr
    return
  privated '_initialize', (aOptions)-> @merge(aOptions)
  privated 'initialize', (aOptions)->
    @_initialize(aOptions)
    return
  constructor: (aOptions, nonExported1stChar)->
    if not (this instanceof Properties)
      return new Properties aOptions, nonExported1stChar
    defineProperty @, 'names', {}
    defineProperty @, 'ixNames', {}
    unless isString(nonExported1stChar) and nonExported1stChar.length is 1
      nonExported1stChar = defaultNonExported1stChar
    defineProperty @ , 'nonExported1stChar', nonExported1stChar
    @initialize(aOptions)

  privated 'updateNames', ->
    @names = {}
    @ixNames = {}
    for k,v of @
      # v = @[k]
      continue if !isObject(v) or !v.enumerable?
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
  privated 'initializeTo', (dest)->
    nonExported1stChar = @nonExported1stChar
    for k,v of @names
      continue if k is 'name'
      continue if dest[k] isnt undefined
      vAttr = @[k]
      value = vAttr.value
      if isString(vAttr.assigned) and !vAttr.get and !vAttr.set and
         isFunction(vAttr.assign)
        # Smart assignment:
        vAttr = cloneObject(vAttr)
        vAttrName = vAttr.assigned || nonExported1stChar+k
        defineProperty dest, vAttrName
        ((name, assign)->
          vAttr.get = ->@[name]
          vAttr.set = (v)->@[name] = assign(v, @, @, name)
        )(vAttrName, vAttr.assign)
      if !vAttr.get and !vAttr.set and vAttr.clone isnt false and
         isObject(value)
        try
          value = cloneObject(value)
        catch err
          err.message = 'the attribute "'+k+'" can not be cloned, set descriptor "clone" to false.\n' +
            err.message
          throw err
      value = assignValue(value, vAttr.type)
      defineProperty dest, k, value, vAttr
      dest[k] = value if dest[k] != value # assign the initialization value after define property.
    return
  privated 'getRealAttrName', (name)->
    name = @ixNames[name] unless @hasOwnProperty name
    name
  privated 'validatePropertyValue', (name, value, attr, raiseError)->
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
          k = "assign attribute '#{name}' error"
          if vType.errors.length
            k += ": the value '#{value}'"
            for v in vType.errors
              k += "\n #{v.name}: #{v.message}"
            dest.errors = vType.errors if dest.errors
          throw new TypeError k
    result
  privated 'assignPropertyTo', (dest, src, name, value, options)->
    # isExported means exportedOnly
    {skipDefault, isExported, skipExists} = options if options
    name = @getRealAttrName name
    if name
      vAttr = @[name]
      return if skipExists and dest[name] != undefined
      vIsAssigned = vAttr.assigned || isString(vAttr.assigned)
      return unless (vIsAssigned and !isExported) or (vAttr.exported and isExported)
      return if skipDefault and (vAttr.exported != true or vAttr.writable != false) and deepEqual vAttr.value, value
      vCanAssign = (!isExported and vIsAssigned) or value isnt undefined
      if name is 'name' and vCanAssign and value isnt dest.name
        dest.name = value
        return
      @validatePropertyValue name, value, vAttr if !isExported
      if isFunction(vAttr.assign)
        value = vAttr.assign(value, dest, src, name)
        #vCanAssign = false if value is undefined
      name = vAttr.name || name if isExported
      value = vAttr.value if value is undefined and vAttr.value != undefined
      if vCanAssign

        vAttrName = vAttr.assigned || @nonExported1stChar+name if isString vAttr.assigned
        unless vAttrName and !vAttr.get and !vAttr.set and
           isFunction(vAttr.assign) and dest.hasOwnProperty(vAttrName)
          # avoid duplication assignment.
          # dest[vAttrName] = assignValue(value, vAttr.type)
          # else
          vAttrName = name
          # dest[name] = assignValue(value, vAttr.type)

        if isExported
          if value?
            if isFunction value.toObject
              value = value.toObject(options)
            else if isFunction value.toJSON
              value = value.toJSON()
          dest[vAttrName] = value
        else
          dest[vAttrName] = assignValue(value, vAttr.type)
    return
  privated 'assignTo', (dest, src, aOptions = {})->
    {exclude, skipReadOnly, skipNull, skipUndefined, overwrite} = aOptions
    if isString exclude
      exclude = [exclude]
    else if not isArray exclude
      exclude = []
    dest?={}

    vNames = @names
    for k, v of vNames
      continue if (v in exclude) or (k in exclude)
      continue if skipReadOnly and v.writable is false or (v.get && !v.set)
      vAttr = @[k]
      vValue = src[v] || src[k]
      continue if skipNull and vValue is null
      continue if skipUndefined and vValue is undefined
      if overwrite || dest[k] is undefined
        @assignPropertyTo dest, src, k, vValue, aOptions
    return dest
  privated 'isDefaultObject', (aObject)->
    result = true
    for k,v of @names
      attr = @[k]
      continue if k is 'name' or attr.writable is false or attr.enumerable is false
      value = @getValue(aObject, k)
      #continue unless aObject.hasOwnProperty(k) or aObject.hasOwnProperty(v)
      unless value is undefined or value is attr.value
        result = false
        break
    result
  privated 'getValue', (aOptions, aName)->
    result = aOptions[aName]
    if not result?
      attr = @[aName]
      if attr?
        result = aOptions[attr.name]
        if not result? and attr.alias
          if isString attr.alias
            result = aOptions[attr.alias]
          else if isArray attr.alias
            for aName in attr.alias
              result = aOptions[aName]
              break if result?
    result
  # getNames: ->
  #   result = {}
  #   for k in getObjectKeys @
  #     v = @[k]
  #     result[k] = v.name || k
  #   result
module.exports.default = module.exports;
