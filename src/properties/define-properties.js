import {isFunction, isObject} from 'util-ex';
import {getPrototypeOf} from 'inherits-ex';

import Properties from './index.js';

/**
 * Define properties on the $attributes of the target object/class(prototype).
 *
 * @param {Function|object} aTarget the target class or object
 * @param {PropDescriptors} aProperties the attribute descriptors
 * @param {boolean} [recreate] Whether recreating the $attributes
 * @returns the defined attributes
 */
export function defineProperties(aTarget, aProperties, recreate) {
  let nonExported1stChar, vPrototype
  if (isFunction(aTarget)) {
    vPrototype = aTarget.prototype
    nonExported1stChar = vPrototype.nonExported1stChar
  } else if (isObject(aTarget)) {
    vPrototype = getPrototypeOf(aTarget)
    nonExported1stChar = aTarget.nonExported1stChar
  } else {
    throw new TypeError('the target should be a ctor or object!')
  }
  let vAttrs = vPrototype.$attributes;
  const vHasOwnProperty = vPrototype.hasOwnProperty('$attributes')
  const vIsProperties = vAttrs instanceof Properties
  if (nonExported1stChar == null) {nonExported1stChar = Properties.prototype.nonExported1stChar}
  if (recreate !== true && !vHasOwnProperty && vIsProperties) {
    vPrototype.$attributes = vAttrs = vAttrs.extends(aProperties, nonExported1stChar)
  } else if (recreate || !vIsProperties) {
    vPrototype.$attributes = vAttrs = Properties(aProperties, nonExported1stChar)
  } else {
    if (vAttrs.nonExported1stChar !== nonExported1stChar) {
      vAttrs.nonExported1stChar = nonExported1stChar
    }
    vAttrs.merge(aProperties)
  }
  return vAttrs
}

export default defineProperties
