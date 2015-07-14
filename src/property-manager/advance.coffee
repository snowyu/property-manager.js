defineProperty  = require 'util-ex/lib/defineProperty'
isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
isString        = require 'util-ex/lib/is/type/string'
getkeys         = Object.keys

module.exports  = class AdvancePropertyManager
  gAttrsName = '$attributes'

  defineProperty @, 'attrsName', undefined,
    get: -> gAttrsName
    set: (value)-> gAttrsName = value

  initialize: ->
    options = arugments[gOptPos]
    @_initialize options if isFunction @_initialize
    @assign(options)

  constrcutor: -> @initialize.apply @, arguments

  assign: (options)->
    for k,v of options
      @assignProperty options, k, v
    @_assign(options) if isFunction @_assign
    @

  assignProperty: (options, name, value, skipDefaultValue)->
    if @hasOwnProperty name
      @assignPropertyTo(@, options, name, value, skipDefaultValue)
    return

  @::[gAttrsName] = {}
  defineProperty @, gAttrsName,
    get: -> AttributeManager::[gAttrsName]

  _initialize: (options)->
    vAttrs = @[gAttrsName]
  @assignPropertyTo: (dest, src, name, value, skipDefaultValue)->
    vAttrs = @[gAttrsName]
    if vAttrs.hasOwnProperty(name)
      vAttr = vAttrs[name]
      if skipDefaultValue and vAttr.value isnt undefined and vAttr.value == value
        return
      if !isFunction(vAttr.assign) or !vAttr.assign(dest, src, value, name)
        @[name] = value
    return

  mergeTo: (dest)->
    dest?= {}
    vAttrs = @[gAttrsName]
    for k,v of vAttrs
      if vAttrs.hasOwnProperty(name)
        @assignPropertyTo(dest, @, k, v, true)
    dest
  assignTo: (dest)->
    vAttrs = @[gAttrsName]
    for k,v of vAttrs
      if vAttrs.hasOwnProperty(name)
        @assignPropertyTo(dest, @, k, v)

