import {defineProperty} from 'util-ex'
import {extend, getPrototypeOf} from 'inherits-ex'

import Properties from './properties/index.js'
import PropertyManager from './abstract.js'
import _defineProperties from './properties/define-properties'

export function AdvancePropertyManager() {
  if (arguments.length) this.initialize.apply(this, arguments);
}

// merge the methods on the PropertyManager.prototype.
extend(AdvancePropertyManager, PropertyManager);

AdvancePropertyManager.getProperties = function getProperties() {
  const result = {};
  const attrs = this.prototype.$attributes
  if (attrs) {
    for (const k in attrs) {
      const v = attrs[k];
      result[k] = v;
    }
  }
  return result;
}

AdvancePropertyManager.prototype.getProperties = function getProperties() {
  return this.$attributes;
}

AdvancePropertyManager.prototype.defineProperties = function defineProperties(aProperties, recreate = false) {
  const vAttrs = _defineProperties(this, aProperties, recreate);
  vAttrs.initializeTo(this);
  return this;
}

AdvancePropertyManager.prototype.assignPropertyTo = function assignPropertyTo(dest, src, name, value, attrs, options) {
  if (!attrs) {
    attrs = this.getProperties();
  }
  attrs.assignPropertyTo(dest, src, name, value, options);
}

AdvancePropertyManager.prototype.$attributes = null;

AdvancePropertyManager.prototype.SMART_ASSIGN = Properties.SMART_ASSIGN;

defineProperty(AdvancePropertyManager, '$attributes', undefined, {
  get() {
    return getPrototypeOf(this).$attributes;
  }
});

AdvancePropertyManager.defineProperties = _defineProperties;

export default AdvancePropertyManager
