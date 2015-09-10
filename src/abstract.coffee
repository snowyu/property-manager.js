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

  nonExported1stChar: '$'

  constrcutor: ->
    console.log 'dddd'
    @initialize.apply @, arguments

  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
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

  assign: (options, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    vAttrs = @getProperties()
    console.log @Class.name
    # sometime the assignment order is very important
    # so we must use the defined properties as the assignment order.
    for k,v of vAttrs
      continue if k in aExclude
      if options.hasOwnProperty(k)
        vName = k
      else if (vName = v.name) and
          (!options.hasOwnProperty(vName) or (vName in aExclude))
        vName = null
      else if !vName and (vAlias = v.alias)
        if isString(vAlias)
          vName = vAlias if options.hasOwnProperty(vAlias) and !(vAlias in aExclude)
        else if isArray(vAlias)
          for n in vAlias
            if options.hasOwnProperty(n) and !(n in aExclude)
              vName = n
              break
      continue unless vName
      v = options[vName]
      console.log k,v
      @assignPropertyTo(@, options, k, v, vAttrs)

    @_assign(options, aExclude) if isFunction @_assign
    @

  assignProperty: (options, name, value, attrs, skipDefaultValue)->
    @assignPropertyTo(@, options, name, value, attrs, skipDefaultValue)
    return

  mergeTo: (dest, aExclude, skipDefault, skipReadOnly, isExported)->
    if isArray dest
      aExclude = dest
      dest = {}
    else if isBoolean dest
      isExported = skipDefault
      skipReadOnly = aExclude
      skipDefault = dest
      aExclude = []
      dest = {}

    if isString aExclude
      aExclude = [aExclude]
    else if isBoolean aExclude
      isExported = skipReadOnly
      skipReadOnly = skipDefault
      skipDefault = aExclude
      aExclude = []
    else if not isArray aExclude
      aExclude = []

    dest?= {}

    vAttrs = @getProperties()
    for k,v of vAttrs
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      continue if skipReadOnly and v.writable is false and !v.set
      if !dest.hasOwnProperty(k)
        @assignPropertyTo(dest, @, k, @[k], vAttrs, skipDefault, isExported)
    dest

  exportTo: (dest, aExclude, skipDefault, skipReadOnly)->
    skipDefault?=true
    @mergeTo(dest, aExclude, skipDefault, skipReadOnly, true)

  toObject: (options)->
    @exportTo(options)

  toJSON: ->@toObject()

  assignTo: (dest, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    vAttrs = @getProperties()
    for k,v of vAttrs
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      @assignPropertyTo(dest, @, k, @[k], vAttrs)
    dest._assign(@, aExclude) if isFunction dest._assign
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
