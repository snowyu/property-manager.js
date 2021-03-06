defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
extend          = require 'util-ex/lib/_extend'
cloneObject     = require 'util-ex/lib/clone-object'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
setPrototypeOf  = require 'inherits-ex/lib/setPrototypeOf'
deepEqual       = require 'deep-equal'
assignValue     = require './assign-value'
PropertyManager = require './abstract'
getkeys         = Object.keys
getAllOwnKeys   = Object.getOwnPropertyNames
defineProperties= Object.defineProperties
getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

module.exports  = class NormalPropertyManager

  @getProperties: ->
    result = {}
    if @::$attributes
      for k,v of @::$attributes
        result[k] = v
    result

  getRealAttrName = (attrs, name)->
    if not attrs[name]
      for k,v of attrs
        return k if v.name is name
      return
    name

  constructor: -> @initialize.apply @, arguments
  # merge the methods on the PropertyManager.prototype.
  extend @::, PropertyManager::

  @::$attributes = null

  defineProperty @, '$attributes', undefined,
    get: -> getPrototypeOf(@).$attributes

  getProperties: -> @$attributes

  copyProperties = (aProperties, dest, nonExported1stChar) ->
    dest?= {}
    if aProperties
      for k,v of aProperties
        v = value:v unless !isArray(v) and isObject v
        if !v.enumerable? and v.assigned is false and v.exported is false
          v.enumerable = false
        else
          v.enumerable = v.enumerable isnt false
        vWritable = v.writable isnt false or isFunction(v.set)
        v.assigned?= v.enumerable and vWritable
        v.exported?= v.enumerable and k[0] isnt nonExported1stChar and vWritable
        dest[k]= v
    dest

  extendsObj = (obj) ->
    result = {}
    setPrototypeOf(result, obj)
    result

  @defineProperties: defineObjectProperties = (aTarget, aProperties, recreate)->
    if isFunction aTarget
      vPrototype = aTarget::
      nonExported1stChar = vPrototype.nonExported1stChar
    else if isObject aTarget
      vPrototype = getPrototypeOf aTarget
      nonExported1stChar = aTarget.nonExported1stChar
    else
      throw new TypeError 'the target should be a ctor or object!'
    nonExported1stChar?= NormalPropertyManager::nonExported1stChar
    vAttrs = vPrototype.$attributes
    vHasOwnProperty = vPrototype.hasOwnProperty('$attributes')
    vIsProperties = isObject vAttrs
    if recreate isnt true and !vHasOwnProperty and vIsProperties
      vPrototype.$attributes = vAttrs = extendsObj(vAttrs)
    else if recreate or !vIsProperties
      vAttrs = vPrototype.$attributes = {}
    copyProperties aProperties, vAttrs, nonExported1stChar

  defineProperties: (aProperties, recreate = false) ->
    vAttrs = defineObjectProperties @, aProperties, recreate
    for k, v of vAttrs
      value = v.value
      if !v.get and !v.set and v.clone isnt false and isObject(value)
        value = cloneObject value
      value = assignValue(value, v.type)
      defineProperty @, k, value, v
    return

  assignPropertyTo: (dest, src, name, value, attrs, options)->
    {skipDefault, isExported, skipExists} = options if options
    attrs = @getProperties() unless attrs
    name = getRealAttrName attrs, name
    if name
      vAttr = attrs[name]
      return if skipExists and dest[name] != undefined
      return unless (vAttr.assigned and !isExported) or (vAttr.exported and isExported)
      vIsReadonly = vAttr.writable == false || (vAttr.get && !vAttr.set)
      return if vIsReadonly && vAttr.exported != true
      return if skipDefault and !vIsReadonly and deepEqual vAttr.value, value
      vCanAssign = (!isExported and vAttr.assigned) or value isnt undefined
      if isFunction(vAttr.assign)
        value = vAttr.assign(value, dest, src, name, options)
        #vCanAssign = false if value is undefined
      name = vAttr.name || name if isExported
      value = vAttr.value if value is undefined and vAttr.value != undefined
      if vCanAssign
        if isExported
          if value?
            if isFunction value.toObject
              value = value.toObject(options)
            else if isFunction value.toJSON
              value = value.toJSON()

          dest[name] = value
        else
          dest[name] = assignValue(value, vAttr.type)
    return

module.exports.default = module.exports;
