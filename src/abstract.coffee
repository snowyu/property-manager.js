defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isArray         = require 'util-ex/lib/is/type/array'
createObject    = require 'inherits-ex/lib/createObject'
deepEqual       = require 'deep-equal'
getkeys         = Object.keys

module.exports  = class AbstractPropertyManager

  # the property with prefix '$' will not be exported.
  nonExported1stChar: '$'

  constrcutor: ->
    @initialize.apply @, arguments

  assignPropertyTo: (dest, src, name, value, attrs, options)->
  getProperties: ->
  defineProperties: (aProperties)->

  initialize: (options)->
    options?={}
    @defineProperties(options.attributes)
    @assign(options)

  clone: (options)->
    options = @mergeTo(options)
    result = createObject @Class || @constructor
    result.assign(options)

  assign: (src, aOptions)->
    aOptions = {} unless aOptions
    aOptions.overwrite ?= true
    aOptions.isExported ?= false

    {exclude, overwrite} = aOptions
    if isString exclude
      exclude = [exclude]
    else if not isArray exclude
      exclude = []

    vAttrs = @getProperties()
    # sometime the assignment order is very important
    # so we must use the defined properties as the assignment order.
    for k,v of vAttrs
      continue if k in exclude
      if src.hasOwnProperty(k)
        vName = k
      else if (vName = v && v.name) and
          (!src.hasOwnProperty(vName) or (vName in exclude))
        vName = null
      else if !vName and (vAlias = v && v.alias)
        if isString(vAlias)
          vName = vAlias if src.hasOwnProperty(vAlias) and !(vAlias in exclude)
        else if isArray(vAlias)
          for n in vAlias
            if src.hasOwnProperty(n) and !(n in exclude)
              vName = n
              break
      continue unless vName
      v = src[vName]
      if overwrite || @[k] == undefined
        @assignPropertyTo(@, src, k, v, vAttrs, aOptions)

    @_assign(src, aOptions) if isFunction @_assign
    @

  assignProperty: (src, name, value, attrs, options)->
    @assignPropertyTo(@, src, name, value, attrs, options)
    return

  mergeTo: (dest, aOptions)->
    { overwrite, exclude,
      skipDefault, skipReadOnly, isExported, skipNull, skipUndefined
    } = aOptions if aOptions

    if isString exclude
      exclude = [exclude]
    else if not isArray exclude
      exclude = []

    dest?= {}

    vAttrs = @getProperties()
    # sometime the assignment order is very important
    # so we must use the defined properties as the assignment order.
    for k,v of vAttrs
      continue if k in exclude
      continue if v and v.name and (v.name in exclude)
      continue if skipNull and @[k] is null
      continue if skipUndefined and @[k] is undefined
      continue if skipReadOnly and v && v.writable is false and !v.set
      if overwrite || dest[k] is undefined
        @assignPropertyTo(dest, @, k, @[k], vAttrs, aOptions)
    dest

  exportTo: (dest, aOptions)->
    aOptions = {} unless aOptions
    aOptions.skipDefault ?= true
    aOptions.skipUndefined ?= true
    aOptions.isExported = true
    @mergeTo(dest, aOptions)

  toObject: (options)->
    result = {}
    @exportTo(result, options)

  toJSON: ->@toObject()

  assignTo: (dest, aOptions)->
    aOptions = {} unless aOptions
    aOptions.isExported = false
    aOptions.overwrite = true
    this.mergeTo dest, aOptions
    dest._assign(@, aOptions) if isFunction dest._assign
    dest

  # TODO: deeply compare options
  #   need ignore redundant properties in aOptions,
  #   skip some properties, custom filter.
  isSame: (aOptions, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []
    for k,v of @mergeTo()
      continue if k in aExclude
      return false unless deepEqual aOptions[k], v
    return true

module.exports.default = module.exports;
