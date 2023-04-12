import {defineProperty, isFunction} from 'util-ex'
import {assignValue} from './assign-value.js'

function mapItemType(items, type) {
  if (!Array.isArray(items)) {
    items = [items];
  }
  return items.map((item) => {
    return assignValue(item, type);
  });
};

export class ArrayPropertyManager extends Array {
  // PropertyManager ArrayPropertyManager, 'simple'
  static arrayOf(type) {
    return function(value) {
      return new ArrayPropertyManager(value, type);
    };
  }

  constructor(value, type) {
    // return new ArrayPropertyManager(value, type) unless this instanceof ArrayPropertyManager
    super();
    // if typeof type == 'function'
    //   type = '$type': enumerable: false, value: type
    // else if !type
    //   type = {}
    // type.$type = enumerable: false unless type.$type
    defineProperty(this, '$type', type);
    if (value) {
      // @defineProperties type
      this.push(value);
    }
  }

  push(value, ...arr) {
    value = mapItemType(value, this.$type);
    if (Array.isArray(arr)) {
      value.push.apply(value, mapItemType(arr, this.$type));
    }
    return super.push(...value);
  }

  unshift(value, ...arr) {
    value = mapItemType(value, this.$type);
    if (Array.isArray(arr)) {
      value.push.apply(value, mapItemType(arr, this.$type));
    }
    return super.unshift(...value);
  }

  toJSON() {
    return this.toObject();
  }

  toObject(options) {
    return this.map((item) => {
      if (item != null) {
        if (isFunction(item.toObject)) {
          item = item.toObject(options);
        } else if (isFunction(item.toJSON)) {
          item = item.toJSON();
        }
      }
      return item;
    });
  }

  valueOf() {
    return this.toObject();
  }

};

export const arrayOf = ArrayPropertyManager.arrayOf

// orgAssignPropertyTo = ArrayPropertyManager::assignPropertyTo
// assignPropertyTo: (dest, src, name, value, attrs, options)->
//   value = assignValue value, this.$type
//   orgAssignPropertyTo.call @, dest, src, name, value, attrs, options
export default ArrayPropertyManager
