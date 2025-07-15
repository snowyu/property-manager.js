/* eslint @typescript-eslint/no-invalid-this: 0 */
import {cloneObject, defineProperty, isArray, isBool as isBoolean, isFunction, isObject, isString} from 'util-ex'
import {setPrototypeOf} from 'inherits-ex'
import deepEqual from 'deep-equal'

import assignValue from '../assign-value.js'

const getObjectKeys = Object.keys
const defaultNonExported1stChar = '$'

/**
 * Collection the advanced attribute descriptors
 *
 * @param {*} aOptions
 * @param {string} nonExported1stChar Indicates that the property will not be exported
 * @returns
 */
export function Properties(aOptions, nonExported1stChar) {
  if (!(this instanceof Properties)) {
    return new Properties(aOptions, nonExported1stChar);
  }
  // Define non-enumerable properties:
  defineProperty(this, 'names', {});
  defineProperty(this, 'ixNames', {});
  if (!(isString(nonExported1stChar) && nonExported1stChar.length === 1)) {
    nonExported1stChar = defaultNonExported1stChar;
  }
  defineProperty(this, 'nonExported1stChar', nonExported1stChar);
  this.initialize(aOptions);
}

const Private = defineProperty.bind(null, Properties.prototype);

/**
 * @deprecated
 */
Properties.SMART_ASSIGN = ''; // deprecated

Private('nonExported1stChar', defaultNonExported1stChar);

// the attrs inherits from itself
Private('extends', function(attrs, nonExported1stChar) {
  if (nonExported1stChar == null) {
    nonExported1stChar = this.nonExported1stChar;
  }
  const result = Properties(attrs, nonExported1stChar);
  setPrototypeOf(result, this);
  result.updateNames();
  return result;
});

Private('merge', function(attrs) {
  return this.mergeTo(attrs, this);
});

Private('mergeTo', function(attrs, dest) {
  if (!attrs) {
    return dest;
  }
  if (!dest) {
    dest = {};
  }
  const keys = attrs instanceof Properties ? getObjectKeys(attrs.names) : getObjectKeys(attrs)
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const attr = attrs[name];
    this.mergePropertyTo(dest, name, attr);
  }
  if (dest.updateNames) {
    dest.updateNames();
  }
  return dest;
});

Private('mergePropertyTo', function(dest, name, attr) {
  if (!(!isArray(attr) && isObject(attr))) {
    // attr = type:attr if isString attr
    attr = {value: attr};
  }
  if ((attr.enumerable == null) && attr.assigned === false && attr.exported === false) {
    attr.enumerable = false;
  } else {
    attr.enumerable = attr.enumerable !== false;
  }
  const vEnumerable = attr.enumerable !== false;
  const vWritable = attr.writable !== false || isFunction(attr.set);
  if (attr.assigned == null) {
    attr.assigned = vEnumerable && vWritable;
  }
  if (attr.exported == null) {
    attr.exported = vEnumerable && name[0] !== this.nonExported1stChar && vWritable;
  }
  const vAttr = dest[name];
  if (vAttr === undefined) {
    dest[name] = attr;
  } else {
    for (const k in attr) {
      const v = attr[k];
      vAttr[k] = v;
    }
  }
});

Private('_initialize', function(aOptions) {
  return this.merge(aOptions);
});

Private('initialize', function(aOptions) {
  this._initialize(aOptions);
});

Private('updateNames', function() {
  this.names = {};
  this.ixNames = {};
  for (const k in this) {
    const v = this[k];
    if (!isObject(v) || (v.enumerable == null)) {continue}
    this.names[k] = v.name || k;
    this.ixNames[v.name || k] = k;
    const vAlias = v.alias;
    if (vAlias) {
      if (isArray(vAlias)) {
        for (let i = 0; i < vAlias.length; i++) {
          const n = vAlias[i];
          this.ixNames[n] = k;
        }
      } else if (isString(vAlias)) {
        this.ixNames[vAlias] = k;
      }
    }
  }
});

Private('initializeTo', function(dest, src = {}, aOptions = {}) {
  const {skipNull, skipUndefined, overwrite} = aOptions;
  const nonExported1stChar = this.nonExported1stChar;
  for (const k in this.names) {
    if (k === 'name') {continue}
    if (!overwrite && dest[k] !== undefined) {continue}
    let vAttr = this[k]
    let value = src[k]
    if (value === undefined) {value = vAttr.value}
    if (skipNull && value === null) {continue}
    if (skipUndefined && value === undefined) {continue}
    if (isString(vAttr.assigned) && !vAttr.get && !vAttr.set) {
      // Smart assignment:
      vAttr = cloneObject(vAttr);
      const vAttrName = vAttr.assigned || nonExported1stChar + k;
      defineProperty(dest, vAttrName, value);
      (function(name, assign) {
        vAttr.get = function() {
          return this[name];
        };
        if (vAttr.writable || isFunction(assign)) {
          if (isFunction(assign)) {
            return vAttr.set = function(v) {
              this[name] = assign(v, this, this, name);
            };
          } else {
            return vAttr.set = function(v) {
              return this[name] = v;
            };
          }
        }
      })(vAttrName, vAttr.assign);
    }
    if (!vAttr.get && !vAttr.set && vAttr.clone !== false && isObject(value)) {
      try {
        value = cloneObject(value);
      } catch (err) {
        err.message = 'the attribute "' + k + '" can not be cloned, set descriptor "clone" to false.\n' + err.message;
        throw err;
      }
    }
    value = assignValue(value, vAttr.type);
    defineProperty(dest, k, value, vAttr);
    if (vAttr.set) {
      // call set function to assign the initialization value after define property.
      dest[k] = value;
    }
  }
});

Private('getRealAttrName', function(name) {
  if (!this.hasOwnProperty(name)) {
    name = this.ixNames[name];
  }
  return name;
});

Private('validatePropertyValue', function(name, value, attr, raiseError) {
  if (isBoolean(attr)) {
    raiseError = attr;
    attr = null;
  }
  if (!attr) {
    attr = this[name];
  }
  let result = attr != null;
  if (raiseError == null) {
    raiseError = true;
  }
  if (!result) {
    throw new TypeError('no such property name:' + name);
  }
  if (this.Type && (value != null) && (attr.type != null) && value !== attr.value) {
    const vType = this.Type(attr.type);
    if (vType) {
      result = vType.isValid(value);
      if (!result && raiseError) {
        let k = `assign attribute '${name}' error`;
        const errors = vType.errors
        if (errors.length) {
          k += `: the value '${value}'`;
          for (let i = 0; i < errors.length; i++) {
            const v = errors[i];
            k += `\n ${v.name}: ${v.message}`;
          }
          // if (dest.errors) {dest.errors = vType.errors}
        }
        throw new TypeError(k);
      }
    }
  }
  return result;
});

Private('assignPropertyTo', function(dest, src, name, value, options = {}) {
  // isExported means exportedOnly
  const {skipDefault, isExported, skipExists} = options
  name = this.getRealAttrName(name);
  if (name) {
    const vAttr = this[name];
    if (skipExists && dest[name] !== undefined) {
      return;
    }
    const vIsAssigned = vAttr.assigned || isString(vAttr.assigned);
    if (!((vIsAssigned && !isExported) || (vAttr.exported && isExported))) {
      return;
    }
    if (skipDefault && vAttr.skipDefault !== false && (vAttr.exported !== true || vAttr.writable !== false) && deepEqual(vAttr.value, value)) {
      return;
    }
    const vCanAssign = (!isExported && vIsAssigned) || value !== undefined;
    if (name === 'name' && vCanAssign && value !== dest.name) {
      dest.name = value;
      return;
    }
    if (!isExported) {
      this.validatePropertyValue(name, value, vAttr);
    }
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
      let vAttrName
      if (isString(vAttr.assigned)) {
        vAttrName = vAttr.assigned || this.nonExported1stChar + name;
      }
      if (!(vAttrName && !vAttr.get && !vAttr.set && isFunction(vAttr.assign) && dest.hasOwnProperty(vAttrName))) {
        // avoid duplication assignment.
        // dest[vAttrName] = assignValue(value, vAttr.type)
        // else
        vAttrName = name;
      }
      // dest[name] = assignValue(value, vAttr.type)
      if (isExported) {
        if (value != null) {
          if (isFunction(value.toObject)) {
            value = value.toObject(options);
          } else if (isFunction(value.toJSON)) {
            value = value.toJSON();
          }
        }
        dest[vAttrName] = value;
      } else {
        dest[vAttrName] = assignValue(value, vAttr.type);
      }
    }
  }
});

Private('assignTo', function(dest, src, aOptions = {}) {
  let {exclude, skipReadOnly, skipNull, skipUndefined, overwrite} = aOptions;
  if (isString(exclude)) {
    exclude = [exclude];
  } else if (!isArray(exclude)) {
    exclude = [];
  }
  if (dest == null) {
    dest = {};
  }
  const vNames = this.names;
  for (const k in vNames) {
    const v = vNames[k];
    if (exclude.includes(v) || exclude.includes(k)) {continue}
    if (skipReadOnly && v.writable === false || (v.get && !v.set)) {continue}
    // const vAttr = this[k];
    const vValue = src[v] || src[k];
    if (skipNull && vValue === null) {continue}
    if (skipUndefined && vValue === undefined) {continue}
    if (overwrite || dest[k] === undefined) {
      this.assignPropertyTo(dest, src, k, vValue, aOptions);
    }
  }
  return dest;
});

Private('isDefaultObject', function(aObject) {
  let result = true;
  for (const k in this.names) {
    const attr = this[k];
    if (k === 'name' || attr.writable === false || attr.enumerable === false) {
      continue;
    }
    const value = this.getValue(aObject, k);
    // continue unless aObject.hasOwnProperty(k) or aObject.hasOwnProperty(v)
    if (!(value === undefined || value === attr.value)) {
      result = false;
      break;
    }
  }
  return result;
});

Private('getValue', function(aOptions, aName) {
  let result = aOptions[aName];
  if (result == null) {
    const attr = this[aName];
    if (attr != null) {
      result = aOptions[attr.name];
      if ((result == null) && attr.alias) {
        if (isString(attr.alias)) {
          result = aOptions[attr.alias];
        } else if (isArray(attr.alias)) {
          const aliases = attr.alias;
          for (let i = 0; i < aliases.length; i++) {
            aName = aliases[i];
            result = aOptions[aName];
            if (result != null) {break}
          }
        }
      }
    }
  }
  return result;
});

// getNames: ->
//   result = {}
//   for k in getObjectKeys @
//     v = @[k]
//     result[k] = v.name || k
//   result
export default Properties
