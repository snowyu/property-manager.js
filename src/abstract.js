import {isArray, isFunction, isString} from 'util-ex';
import {createObject} from 'inherits-ex'

import deepEqual from 'deep-equal';


/**
 * The Abstract PropertyManager Class
 */
export function AbstractPropertyManager() {
  if (arguments.length) this.initialize.apply(this, arguments);
}

/**
 * Assign the property value from the src to destination object.
 *
 * @abstract
 *
 * @param {*} dest      The destination object
 * @param {*} src       The src object
 * @param {string} name The property name
 * @param {*} value     The property value
 * @param {*} [attrs]   The attributes object of the property
 * @param {IMergeOptions} [options]
 */
// eslint-disable-next-line unused-imports/no-unused-vars
AbstractPropertyManager.prototype.assignPropertyTo = function assignPropertyTo(dest, src, name, value, attrs, options) {}

/**
 * Get the defined attributes.
 *
 * @abstract
 *
 * @returns {PropDescriptors} the descriptors of properties object
 */
AbstractPropertyManager.prototype.getProperties = function getProperties() {}

/**
 * Define the attributes of this object.
 *
 * @abstract
 *
 * @param {PropDescriptors} aProperties the defined attributes of the object
 */
// eslint-disable-next-line unused-imports/no-unused-vars
AbstractPropertyManager.prototype.defineProperties = function defineProperties(aProperties) {}

/**
 * Initialize object and assign attribute values from src if src exists.
 *
 * @param {*} [src]
 * @returns {this} this object.
 */
AbstractPropertyManager.prototype.initialize = function initialize(src) {
  if (src == null) {src = {};}
  // defineProperty(this, 'defaultOptions', {})
  this.defineProperties(src.attributes);
  return this.assign(src);
}

/**
 * Create a new object with the same values of attributes.
 * @param {IMergeOptions} [options]
 * @returns the new object
 */
AbstractPropertyManager.prototype.clone = function clone(options) {
  return this.cloneTo({}, options);
}

/**
 * Create and assign the values to the destination object.
 *
 * @param {*} dest the destination object
 * @param {IMergeOptions} [options]
 * @returns the new dest object
 */
AbstractPropertyManager.prototype.cloneTo = function cloneTo(dest, options) {
  // merge attributes of `this` to dest
  dest = this.mergeTo(dest, options);
  const result = createObject(this.Class || this.constructor);
  return result.assign(dest);
}

/**
 * Assign the values from the src object.
 * @param {*} src the source object
 * @param {IMergeOptions} aOptions
 * @returns {this} this object
 */
AbstractPropertyManager.prototype.assign = function assign(src, aOptions) {
  return this.__assign(src, aOptions);
}

/**
 *
 * @internal
 *
 * @param {*} src the source object
 * @param {IMergeOptions} [aOptions]
 * @returns
 */
AbstractPropertyManager.prototype.__assign = function __assign(src, aOptions) {
  const defaultOptions = this.defaultOptions;
  if (!aOptions) {aOptions = (defaultOptions && defaultOptions.assign) || {};}
  if (aOptions.overwrite == null) {aOptions.overwrite = true}
  aOptions.isExported = false;
  let {exclude, overwrite} = aOptions;
  if (isString(exclude)) {
    exclude = [exclude];
  } else if (!isArray(exclude)) {
    exclude = [];
  }
  const vAttrs = this.getProperties();
  // sometime the assignment order is very important
  // so we must use the defined properties as the assignment order.
  for (const k in vAttrs) {
    // Get the attribute descriptor
    let v = vAttrs[k];
    if (exclude.includes(k)) {
      continue;
    }
    let vName, vAlias;
    if (src.hasOwnProperty(k)) {
      vName = k;
    } else if ((vName = v && v.name) && (!src.hasOwnProperty(vName) || exclude.includes(vName))) {
      vName = null;
    } else if (!vName && (vAlias = v && v.alias)) {
      if (isString(vAlias)) {
        if (src.hasOwnProperty(vAlias) && !exclude.includes(vAlias)) {
          vName = vAlias;
        }
      } else if (isArray(vAlias)) {
        for (let i = 0; i < vAlias.length; i++) {
          const n = vAlias[i];
          if (src.hasOwnProperty(n) && !exclude.includes(n)) {
            vName = n;
            break;
          }
        }
      }
    }
    if (!vName) {
      continue;
    }
    v = src[vName];
    if (overwrite || this[k] === undefined) {
      this.assignPropertyTo(this, src, k, v, vAttrs, aOptions);
    }
  }
  if (isFunction(this._assign)) {this._assign(src, aOptions)}
  return this;
}

/**
 * Assign a property of src to this object.
 *
 * @param {*} src the src object
 * @param {*} name the property name to assign
 * @param {*} value the property value to assign
 * @param {*} [attrs] The attributes object
 * @param {IMergeOptions} [options]
 */
AbstractPropertyManager.prototype.assignProperty = function assignProperty(src, name, value, attrs, options) {
  const defaultOptions = this.defaultOptions;
  options = options || (defaultOptions && defaultOptions.assign) || {};
  if (options.overwrite == null) {options.overwrite = true}
  options.isExported = false;
  this.assignPropertyTo(this, src, name, value, attrs, options);
}

/**
 * Merge this attributes to dest object.
 *
 * @param {*} dest The destination object
 * @param {IMergeOptions} [aOptions] They should overwrite the dest's attributes if the attributes exists in the aOptions.
 * @returns the dest object.
 */
AbstractPropertyManager.prototype.mergeTo = function mergeTo(dest, aOptions = {}) {
  let {overwrite, exclude, skipReadOnly, skipNull, skipUndefined} = aOptions;

  if (isString(exclude)) {
    exclude = [exclude];
  } else if (!isArray(exclude)) {
    exclude = [];
  }
  if (dest == null) {
    dest = {};
  }
  const vAttrs = this.getProperties();
  // sometime the assignment order is very important
  // so we must use the defined properties as the assignment order.
  for (const k in vAttrs) {
    const v = vAttrs[k];
    if (exclude.includes(k)) {
      continue;
    }
    if (v && v.name && exclude.includes(v.name)) {continue}
    if (skipNull && this[k] === null) {continue}
    if (skipUndefined && this[k] === undefined) {continue}
    const vIsReadonly = v.writable === false || (v.get && !v.set);
    if (skipReadOnly && v.exported !== true && vIsReadonly) {
      // the default is skip readonly unless exported is true.
      // but the SimplePM can not set the exported attribute.
      continue;
    }
    if (overwrite || dest[k] === undefined) {
      let val = aOptions[k];
      if (val == null) {
        val = this[k];
      }
      this.assignPropertyTo(dest, this, k, val, vAttrs, aOptions);
    }
  }
  return dest;
}

/**
 * Export attributes to the dest json object.
 *
 * @param {*} dest the destination object
 * @param {IMergeOptions} [aOptions] They should overwrite the dest's attributes if the attributes exists in the aOptions.
 * @returns the dest object.
 */
AbstractPropertyManager.prototype.exportTo = function exportTo(dest, aOptions) {
  const defaultOptions = this.defaultOptions;
  if (!aOptions) {
    aOptions = (defaultOptions && defaultOptions.export) || {};
  }
  if (aOptions.skipDefault == null) {
    aOptions.skipDefault = true;
  }
  if (aOptions.skipUndefined == null) {
    aOptions.skipUndefined = true;
  }
  aOptions.isExported = true;
  return this.mergeTo(dest, aOptions);
}

/**
 * Convert the attributes to the json object
 *
 * @param {IMergeOptions} [options]
 * @returns the json object.
 */
AbstractPropertyManager.prototype.toObject = function toObject(options) {
  const result = {};
  return this.exportTo(result, options);
}

AbstractPropertyManager.prototype.toJSON = function toJSON() {
  return this.toObject();
}

/**
 * Assign this attributes to the dest object
 *
 * @param {*} dest the destination object
 * @param {IMergeOptions} [aOptions]
 * @returns the dest object
 */
AbstractPropertyManager.prototype.assignTo = function assignTo(dest, aOptions) {
  const defaultOptions = this.defaultOptions;
  if (!aOptions) {
    aOptions = (defaultOptions && defaultOptions.assign) || {};
  }
  aOptions.isExported = false;
  aOptions.overwrite = true;
  dest = this.mergeTo(dest, aOptions);
  if (isFunction(dest._assign)) {
    dest._assign(this, aOptions);
  }
  return dest;
}

/**
 * Check the src object whether “equals” this object.
 *
 * @param {*} src The source object
 * @param {IMergeOptions} [aOptions]
 * @returns {boolean}
 */
// TODO: deeply compare options
//   need ignore redundant properties in aOptions,
//   skip some properties, custom filter.
AbstractPropertyManager.prototype.isSame = function isSame(src, aOptions) {
  // use the same aOptions to compare
  const thisObj = this.assignTo({}, aOptions);
  for (const k in thisObj) {
    const v = thisObj[k];
    if (!deepEqual(src[k], v)) {
      // continue if k in aExclude
      return false;
    }
  }
  return true;
}

// the property with prefix '$' will not be exported.
AbstractPropertyManager.prototype.nonExported1stChar = '$'


export default AbstractPropertyManager
