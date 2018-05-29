isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
Properties      = require './'

module.exports = (aTarget, aProperties, recreate)->
  if isFunction aTarget
    vPrototype = aTarget::
    nonExported1stChar = vPrototype.nonExported1stChar
  else if isObject aTarget
    vPrototype = getPrototypeOf aTarget
    nonExported1stChar = aTarget.nonExported1stChar
  else
    throw new TypeError 'the target should be a ctor or object!'
  vAttrs = vPrototype.$attributes
  vHasOwnProperty = vPrototype.hasOwnProperty('$attributes')
  vIsProperties = vAttrs instanceof Properties
  nonExported1stChar?= Properties::nonExported1stChar

  if recreate isnt true and !vHasOwnProperty and vIsProperties
    vPrototype.$attributes = vAttrs = vAttrs.extends(aProperties, nonExported1stChar)
  else if recreate or !vIsProperties
    vPrototype.$attributes = vAttrs = Properties(aProperties, nonExported1stChar)
  else
    if vAttrs.nonExported1stChar != nonExported1stChar
      vAttrs.nonExported1stChar = nonExported1stChar
    vAttrs.merge aProperties
  vAttrs
