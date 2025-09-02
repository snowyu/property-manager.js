[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [index](../README-1.md) / defineProperties

# Function: defineProperties()

> **defineProperties**(`aTarget`, `aProperties`, `recreate?`): [`Properties`](../../properties/classes/Properties.md)

Defined in: [src/properties/define-properties.d.ts:12](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/properties/define-properties.d.ts#L12)

Define properties on the $attributes of the target object/class(prototype).

## Parameters

### aTarget

the target class or object

`object` | `Function`

### aProperties

[`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

the attribute descriptors

### recreate?

`boolean`

Whether recreating the $attributes

## Returns

[`Properties`](../../properties/classes/Properties.md)

the defined attributes
