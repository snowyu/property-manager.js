/* eslint @typescript-eslint/no-invalid-this: 0 */
import createAbilityInjector from 'custom-ability';
import {defineProperty, isNumber, isString} from 'util-ex';
import {extend as extendPrototype} from 'inherits-ex';

import Abstract from './abstract.js';
import Advance from './advance.js';
import Normal from './normal.js';
import Simple from './simple.js';
import Default from './index.js';

const getOwnPropertyNames = Object.getOwnPropertyNames
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
const defineProp = Object.defineProperty

function extendCtor(target, source) {
  const names = getOwnPropertyNames(source).filter(
    n => !['length', 'name', 'arguments', 'caller', 'prototype'].includes(n)
  );
  for (const n of names) {
    defineProp(target, n, getOwnPropertyDescriptor(source, n))
  }
}

function getPropertyManagerClass(aClass, aOptions) {
  if (isString(aOptions)) {
    aOptions = {
      name: aOptions
    };
  } else if (isNumber(aOptions)) {
    aOptions = {
      optionsPosition: aOptions
    };
  } else if (!aOptions) {
    aOptions = {};
  }
  const gOptPos = aOptions.optionsPosition || 0;
  // it could be null(Simple), ctor(complex attributes), object
  const gManager = String(aOptions.name);
  const nonExported1stChar = aOptions.nonExported1stChar || '$';

  function PropertyManager() {
    this.initialize(arguments[gOptPos]);
  }

  switch (gManager.toLowerCase()) {
    case 'simple':
      extendPrototype(PropertyManager, Simple);
      break;
    case 'advance':
      extendCtor(PropertyManager, Advance);
      extendPrototype(PropertyManager, Advance);
      break;
    case 'abstract':
      extendCtor(PropertyManager, Abstract);
      extendPrototype(PropertyManager, Abstract);
      break;
    case 'normal':
      extendCtor(PropertyManager, Normal);
      extendPrototype(PropertyManager, Normal);
      break;
    default:
      extendCtor(PropertyManager, Default);
      extendPrototype(PropertyManager, Default);
  }

  if (isString(nonExported1stChar) && nonExported1stChar.length === 1) {
    PropertyManager.prototype.nonExported1stChar = nonExported1stChar;
  }

  const orgInitialize = PropertyManager.prototype.initialize;

  // the non-enumerable property can not be replaced in an ability,
  // but beginning with '$' will be injected to `initialize` method.
  // replace the original initialize method.
  defineProperty(PropertyManager.prototype, '$initialize', function() {
    let options = arguments[gOptPos];
    if (options == null) {
      options = {};
    }
    const that = this.self || this;
    const inherited = this.super;
    if (inherited) { // call the parent's initialize method.
      if (inherited.apply(that, arguments) === 'ok') {
        return;
      }
    }
    // defineProperty that, 'defaultOptions', {}
    // that.defineProperties(options.attributes) if isFunction that.defineProperties
    // that.assign(options)
    return orgInitialize.call(that, options);
  });

  defineProperty(PropertyManager.prototype, '$assign', function() {
    const that = this.self || this;
    if (this.super) {
      return this.super.apply(that, arguments);
    }
    return this.__assign.apply(that, arguments);
  });

  return PropertyManager
};

const coreMethods = ['__assign', 'assignPropertyTo', 'getProperties', 'mergeTo', 'defineProperties', 'nonExported1stChar']

export const PropertyAbility = createAbilityInjector(getPropertyManagerClass, coreMethods, true)

export default PropertyAbility
