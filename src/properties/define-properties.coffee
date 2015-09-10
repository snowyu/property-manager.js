isFunction      = require 'util-ex/lib/is/type/function'
isObject        = require 'util-ex/lib/is/type/object'
defineProperty  = require 'util-ex/lib/defineProperty'
getPrototypeOf  = require 'inherits-ex/lib/getPrototypeOf'
setPrototypeOf  = require 'inherits-ex/lib/setPrototypeOf'
Properties      = require './'

module.exports = (aTarget, aProperties, recreate = true)->
  if isFunction aTarget
    vPrototype = aTarget::
    nonExported1stChar = vPrototype.nonExported1stChar
  else if isObject aTarget
    vPrototype = getPrototypeOf aTarget
    nonExported1stChar = aTarget.nonExported1stChar
  else
    throw new TypeError 'the target should be a ctor or object!'
  vAttrs = vPrototype.$attributes
  nonExported1stChar?= Properties::nonExported1stChar

  # if recreate or not (vAttrs instanceof Properties)
  #   vPrototype.$attributes = vAttrs = Properties()
  # vAttrs.nonExported1stChar = nonExported1stChar
  # vAttrs.merge aProperties if aProperties
  if recreate or not (vAttrs instanceof Properties)
    vPrototype.$attributes = vAttrs = Properties()
    vAttrs.nonExported1stChar = nonExported1stChar
    vAttrs.merge aProperties if aProperties
  else if isObject aProperties
    setPrototypeOf aProperties, vAttrs
    vPrototype.$attributes = vAttrs = aProperties
    if vAttrs.nonExported1stChar != nonExported1stChar
      defineProperty vAttrs, 'nonExported1stChar', nonExported1stChar
    vAttrs.merge aProperties
  vAttrs
