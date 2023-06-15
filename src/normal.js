import {cloneObject, defineProperty, isArray, isFunction, isObject} from 'util-ex'

import {extend, getPrototypeOf, setPrototypeOf} from 'inherits-ex';

import deepEqual from 'deep-equal';

import assignValue from './assign-value.js';
import PropertyManager from './abstract.js';

export function NormalPropertyManager() {
  if (arguments.length) {this.initialize.apply(this, arguments)}
}

// merge the methods on the PropertyManager.prototype.
extend(NormalPropertyManager, PropertyManager);

NormalPropertyManager.getProperties = function getProperties() {
  const result = {};
  if (this.prototype.$attributes) {
    const attrs = this.prototype.$attributes;
    for (const k in attrs) {
      result[k] = attrs[k];
    }
  }
  return result;
}

NormalPropertyManager.prototype.getProperties = function getProperties() {
  return this.$attributes;
}

NormalPropertyManager.prototype.defineProperties = function defineProperties(aProperties, recreate = false) {
  const vAttrs = defineObjectProperties(this, aProperties, recreate);
  for (const k in vAttrs) {
    const v = vAttrs[k];
    let value = v.value;
    if (!v.get && !v.set && v.clone !== false && isObject(value)) {
      value = cloneObject(value);
    }
    value = assignValue(value, v.type);
    defineProperty(this, k, value, v);
  }
}

NormalPropertyManager.prototype.assignPropertyTo = function assignPropertyTo(dest, src, name, value, attrs, options = {}) {
  const {skipDefault, isExported, skipExists} = options;

  if (!attrs) {attrs = this.getProperties()}

  name = getRealAttrName(attrs, name);
  if (name) {
    const vAttr = attrs[name];
    if (skipExists && dest[name] !== undefined) {
      return;
    }
    if (!((vAttr.assigned && !isExported) || (vAttr.exported && isExported))) {
      return;
    }
    const vIsReadonly = vAttr.writable === false || (vAttr.get && !vAttr.set);
    if (vIsReadonly && vAttr.exported !== true) {return}
    if (skipDefault && !vIsReadonly && deepEqual(vAttr.value, value)) {return}

    const vCanAssign = (!isExported && vAttr.assigned) || value !== undefined;
    if (isFunction(vAttr.assign)) {
      value = vAttr.assign(value, dest, src, name, options);
    }
    if (isExported) {
      // vCanAssign = false if value is undefined
      name = vAttr.name || name;
    }
    if (value === undefined && vAttr.value !== undefined) {
      value = vAttr.value;
    }
    if (vCanAssign) {
      if (isExported) {
        if (value != null) {
          if (isFunction(value.toObject)) {
            value = value.toObject(options);
          } else if (isFunction(value.toJSON)) {
            value = value.toJSON();
          }
        }
        dest[name] = value;
      } else {
        dest[name] = assignValue(value, vAttr.type);
      }
    }
  }
}

function getRealAttrName(attrs, name) {
  if (!attrs[name]) {
    for (const k in attrs) {
      const v = attrs[k];
      if (v.name === name) {
        return k;
      }
    }
    return;
  }
  return name;
};

NormalPropertyManager.prototype.$attributes = null;

defineProperty(NormalPropertyManager, '$attributes', undefined, {
  get() {
    return getPrototypeOf(this).$attributes;
  }
});

function copyProperties(aProperties, dest, nonExported1stChar) {
  if (dest == null) {dest = {}}
  if (aProperties) {
    for (const k in aProperties) {
      let v = aProperties[k];
      if (isArray(v) || !isObject(v)) {v = {value: v}}
      if ((v.enumerable == null) && v.assigned === false && v.exported === false) {
        v.enumerable = false;
      } else {
        v.enumerable = v.enumerable !== false;
      }
      const vWritable = v.writable !== false || isFunction(v.set);
      if (v.assigned == null) {
        v.assigned = v.enumerable && vWritable;
      }
      if (v.exported == null) {
        v.exported = v.enumerable && k[0] !== nonExported1stChar && vWritable;
      }
      dest[k] = v;
    }
  }
  return dest;
};

function extendsObj(obj) {
  const result = {};
  setPrototypeOf(result, obj);
  return result;
};

function defineObjectProperties(aTarget, aProperties, recreate) {
  let nonExported1stChar, vPrototype;
  if (isFunction(aTarget)) {
    vPrototype = aTarget.prototype;
    nonExported1stChar = vPrototype.nonExported1stChar;
  } else if (isObject(aTarget)) {
    vPrototype = getPrototypeOf(aTarget);
    nonExported1stChar = aTarget.nonExported1stChar;
  } else {
    throw new TypeError('the target should be a ctor or object!');
  }
  if (nonExported1stChar == null) {
    nonExported1stChar = NormalPropertyManager.prototype.nonExported1stChar;
  }
  let vAttrs = vPrototype.$attributes;
  const vHasOwnProperty = vPrototype.hasOwnProperty('$attributes');
  const vIsProperties = isObject(vAttrs);
  if (recreate !== true && !vHasOwnProperty && vIsProperties) {
    vPrototype.$attributes = vAttrs = extendsObj(vAttrs);
  } else if (recreate || !vIsProperties) {
    vAttrs = vPrototype.$attributes = {};
  }
  return copyProperties(aProperties, vAttrs, nonExported1stChar);
};

NormalPropertyManager.defineProperties = defineObjectProperties

export default NormalPropertyManager
