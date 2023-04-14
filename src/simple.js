import {defineProperty, extend} from 'inherits-ex';
import {cloneObject, isArray, isFunction, isObject} from 'util-ex';

import PropertyManager from './abstract.js';

const getAllOwnKeys = Object.getOwnPropertyNames;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

export function SimplePropertyManager() {
  if (arguments.length) this.initialize.apply(this, arguments);
}

// merge the methods on the PropertyManager.prototype.
extend(SimplePropertyManager, PropertyManager)

/**
 * Get the all property descriptors of this object except `defaultOptions`
 *
 * @returns {PropDescriptors} the descriptors of properties object
 */
SimplePropertyManager.prototype.getProperties = function getProperties() {
  const result = {};
  const ref = getAllOwnKeys(this);
  for (let i = 0; i < ref.length; i++) {
    const k = ref[i];
    if (k === 'defaultOptions') {
      continue;
    }
    result[k] = getOwnPropertyDescriptor(this, k);
  }
  return result;
}

/**
 * Define properties to this object
 *
 * @param {PropDescriptors} aProperties the descriptors of properties object
 */
SimplePropertyManager.prototype.defineProperties = function defineProperties(aProperties) {
  for (const k in aProperties) {
    let v = aProperties[k];
    if ((isArray(v) || !isObject(v))) {v = {value: v}}
    v.enumerable = v.enumerable !== false;
    const vIsReadonly = v.writable === false || (v.get && !v.set);
    if (vIsReadonly && v.exported !== true) {
      v.enumerable = false;
    }
    let value = v.value;
    if (!v.get && !v.set && isObject(value)) {
      value = cloneObject(value);
    }
    defineProperty(this, k, value, v);
  }
}

SimplePropertyManager.prototype.assignPropertyTo = function assignPropertyTo(dest, src, name, value, attrs, options) {
  const isExported = options && options.isExported

  if (!attrs) {
    attrs = this.getProperties();
  }
  const vAttr = attrs[name];
  if (vAttr && vAttr.enumerable) {
    const vCanAssign = (!isExported && (vAttr.writable || vAttr.set)) ||
      (isExported && value !== undefined && name[0] !== this.nonExported1stChar);
    if (vCanAssign) {
      if (isExported && (value != null)) {
        if (isFunction(value.toObject)) {
          value = value.toObject(options);
        } else if (isFunction(value.toJSON)) {
          value = value.toJSON();
        }
      }
      dest[name] = value;
    }
  }
}

export default SimplePropertyManager
