defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isArray         = require 'util-ex/lib/is/type/array'
deepEqual       = require 'deep-equal'
getkeys         = Object.keys

module.exports  = class AbstractPropertyManager

  constrcutor: ->
    @initialize.apply @, arguments

  assignPropertyTo: (dest, src, name, value, skipDefaultValue, isExported)->
  getAttributes: ->

  initialize: (options)->
    @_initialize options if isFunction @_initialize
    @assign(options)

  clone: (options)->
    @mergeTo(options)
    new @constructor(options)

  assign: (options, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    for k,v of options
      continue if k in aExclude
      @assignProperty options, k, v
    @_assign(options) if isFunction @_assign
    @

  assignProperty: (options, name, value, skipDefaultValue)->
    @assignPropertyTo(@, options, name, value, skipDefaultValue)
    return

  mergeTo: (dest, aExclude)->
    dest?= {}
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    for k,v of @getAttributes()
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      if !dest.hasOwnProperty(k)
        @assignPropertyTo(dest, @, k, @[k], true)
    dest

  exportTo: (dest, aExclude)->
    dest?= {}
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    for k,v of @getAttributes()
      continue if k[0] is '$'
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      if !dest.hasOwnProperty(k)
        @assignPropertyTo(dest, @, k, @[k], true, true)
    dest

  toObject: (options)->
    @exportTo(options, null, true)

  toJSON: ->@toObject()

  assignTo: (dest, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    for k,v of @getAttributes()
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      @assignPropertyTo(dest, @, k, @[k])
    dest._assign(@) if isFunction dest._assign
    dest

  # TODO: deeply compare options
  #   need ignore redundant properties in aOptions,
  #   skip some properties, custom filter.
  isSame: (aOptions)->
    for k,v of @mergeTo()
      return false unless deepEqual aOptions[k], v
    return true
