defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
isBoolean       = require 'util-ex/lib/is/type/boolean'
isArray         = require 'util-ex/lib/is/type/array'
deepEqual       = require 'deep-equal'
getkeys         = Object.keys

module.exports  = class AbstractPropertyManager

  constrcutor: ->
    @initialize.apply @, arguments

  assignPropertyTo: (dest, src, name, value, attrs, skipDefaultValue, isExported)->
  getProperties: ->
  defineProperties: (aProperties)->

  initialize: (options)->
    options?={}
    @defineProperties(options.attributes)
    @assign(options)

  clone: (options)->
    @mergeTo(options)
    new @constructor(options)

  assign: (options, aExclude)->
    if isString aExclude
      aExclude = [aExclude]
    else if not isArray aExclude
      aExclude = []

    vAttrs = @getProperties()
    for k,v of options
      continue if k in aExclude
      @assignPropertyTo @, options, k, v, vAttrs
    @_assign(options) if isFunction @_assign
    @

  assignProperty: (options, name, value, attrs, skipDefaultValue)->
    @assignPropertyTo(@, options, name, value, attrs, skipDefaultValue)
    return

  mergeTo: (dest, aExclude, skipDefaultValue)->
    if isArray dest
      aExclude = dest
      dest = {}
    else if isBoolean dest
      skipDefaultValue = dest
      aExclude = []
      dest = {}

    if isString aExclude
      aExclude = [aExclude]
    else if isBoolean aExclude
      skipDefaultValue = aExclude
      aExclude = []
    else if not isArray aExclude
      aExclude = []

    dest?= {}

    vAttrs = @getProperties()
    for k,v of vAttrs
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      if !dest.hasOwnProperty(k)
        @assignPropertyTo(dest, @, k, @[k], vAttrs, skipDefaultValue)
    dest

  exportTo: (dest, aExclude, skipDefaultValue)->
    if isString aExclude
      aExclude = [aExclude]
    else if isBoolean aExclude
      skipDefaultValue = aExclude
      aExclude = []
    else if not isArray aExclude
      aExclude = []
    dest?= {}
    skipDefaultValue?= true 

    vAttrs = @getProperties()
    for k,v of vAttrs
      continue if k[0] is '$'
      continue if k in aExclude
      continue if v and v.name and (v.name in aExclude)
      if !dest.hasOwnProperty(k)
        @assignPropertyTo(dest, @, k, @[k], vAttrs, skipDefaultValue, true)
    dest

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
      continue if !vAttrs.hasOwnProperty(k) or (k in aExclude)
      continue if v and v.name and (v.name in aExclude)
      @assignPropertyTo(dest, @, k, @[k], vAttrs)
    dest._assign(@) if isFunction dest._assign
    dest

  # TODO: deeply compare options
  #   need ignore redundant properties in aOptions,
  #   skip some properties, custom filter.
  isSame: (aOptions)->
    for k,v of @mergeTo()
      return false unless deepEqual aOptions[k], v
    return true
