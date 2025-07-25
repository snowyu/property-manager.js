[**property-manager**](../../../README.md)

***

[property-manager](../../../modules.md) / [properties/define-properties](../README.md) / default

# Function: default()

> **default**(`aTarget`, `aProperties`, `recreate?`): [`Properties`](../../classes/Properties.md)

Defined in: [src/properties/define-properties.d.ts:12](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/properties/define-properties.d.ts#L12)

Define properties on the $attributes of the target object/class(prototype).

## Parameters

### aTarget

the target class or object

`object` | `Function`

### aProperties

[`PropDescriptors`](../../../abstract/type-aliases/PropDescriptors.md)

the attribute descriptors

### recreate?

`boolean`

Whether recreating the $attributes

## Returns

[`Properties`](../../classes/Properties.md)

the defined attributes
