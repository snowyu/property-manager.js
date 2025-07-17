[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [ability](../README.md) / PropertyAbility

# Function: PropertyAbility()

> **PropertyAbility**\<`T`\>(`Class`, `options?`): `T` & [`InternalPropertyManager`](../interfaces/InternalPropertyManager.md)

Defined in: [src/ability.d.ts:67](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/ability.d.ts#L67)

Enhances a given class with property management capabilities by injecting
prototype methods and behaviors from the AbstractPropertyManager.

This function serves as a mixin factory that dynamically extends the prototype
chain of the input class to include property management functionality while
preserving the original class's constructor signature and instance identity.

## Type Parameters

### T

`T` = `any`

The type of the class constructor being enhanced

## Parameters

### Class

`T`

The class constructor to enhance with property management features

### options?

[`IAbilityOptions`](../type-aliases/IAbilityOptions.md)

Configuration options for property management behavior
  - When string: shorthand for `{ name: value }`
  - When number: shorthand for `{ optionsPosition: value }`
  - When object: full configuration with properties:
    - name: Property manager type ('simple' | 'advance' | 'normal' | 'abstract')
    - optionsPosition: Position of options argument in constructor
    - nonExported1stChar: Character prefix for non-exported properties
    - exclude/include: Property filtering rules
    - methods/classMethods: Custom method definitions
    - replacedMethods: List of methods to override

## Returns

`T` & [`InternalPropertyManager`](../interfaces/InternalPropertyManager.md)

A new constructor that combines the original class with property management
  functionality. The returned constructor maintains instanceof compatibility with T
  while having access to AbstractPropertyManager's prototype methods.

## Example

```ts
class MyBaseClass {
  constructor(config) {
    this.initialize(config);
  }
}

const EnhancedClass = PropertyAbility(MyBaseClass, {
  name: 'advance',
  nonExported1stChar: '_'
});

const instance = new EnhancedClass({ foo: 'bar' });
instance.getProperties(); // Access property management functionality
```

## Remarks

- The returned constructor is NOT a new class but the original class with enhanced prototype
- Instance identity is preserved: `instanceof MyBaseClass` will still return true
- Prototype chain augmentation follows the pattern defined in the AbstractPropertyManager
- Method resolution order: Original class methods take precedence over property manager methods
