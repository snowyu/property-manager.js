isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
isFunction      = require 'util-ex/lib/is/type/function'
defineProperty  = require 'util-ex/lib/defineProperty'
getObjectKeys   = Object.keys
getOwnPropertyNames = Object.getOwnPropertyNames

module.exports = class Properties
  merge: (attrs)->@mergeTo attrs, @
  mergeTo: (attrs, dest)->
    mergePropertyTo = Properties.mergePropertyTo
    for name, attr of attrs
      mergePropertyTo dest, name, attr
    return dest
  @mergePropertyTo: (dest, name, attr)->
    attr = type:attr if isString attr
    vAttr = dest[name]
    if vAttr is undefined
      dest[name] = attr
    else
      vAttr[k] = v for k, v of attr
  _initialize: (aOptions)-> @merge(aOptions)
  initialize: (aOptions)->
    @_initialize(aOptions)
    @updateNames()
    return
  constructor: (aOptions)->
    if not (this instanceof Properties)
      return new Properties aOptions
    defineProperty @, 'names', {}, writable: false
    @initialize(aOptions)

  updateNames: ->
    @names = @getNames()
    return
  initializeTo: (dest)->
    for k,v of @names
      continue if k is 'name'
      vAttr = @[k]
      value = vAttr.value
      if vAttr.enumerable is false and not dest.hasOwnProperty(v)
        defineProperty dest, v, value, vAttr
      dest[v] = value unless value is undefined
  assignTo: (src, dest, aExclude)->
    vNames = @names
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []
    for k, v of vNames
      continue if v in aExclude
      vAttr = @[k]
      vValue = src[v] || src[k]
      if k is 'name'
        dest.name = vValue if vValue and vValue isnt dest.name
      else if vValue isnt undefined
        if @Type and vAttr.type? and vValue? and vValue isnt vAttr.value
          vType = @Type vAttr.type
          if vType and not vType.isValid vValue
            k = "assign attribute '#{v}' error"
            if vType.errors.length
              k += ": the value #{vValue}"
              for v in vType.errors
                k += "\n #{v.name}: #{v.message}"
              dest.errors = vType.errors if dest.errors
            throw new TypeError k
        if !isFunction(vAttr.assign) or !vAttr.assign(dest, src, vValue, k)
          dest[k] = vValue
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
