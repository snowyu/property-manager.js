[property-manager](../README.md) / [Exports](../modules.md) / [advance](../modules/advance-1.md) / AdvancePropertyManager

# Class: AdvancePropertyManager

[advance](../modules/advance-1.md).AdvancePropertyManager

## Table of contents

### Constructors

- [constructor](advance-1.AdvancePropertyManager.md#constructor)

### Properties

- [$attributes](advance-1.AdvancePropertyManager.md#$attributes)
- [SMART\_ASSIGN](advance-1.AdvancePropertyManager.md#smart_assign)
- [defineProperties](advance-1.AdvancePropertyManager.md#defineproperties)

### Methods

- [assignPropertyTo](advance-1.AdvancePropertyManager.md#assignpropertyto)
- [defineProperties](advance-1.AdvancePropertyManager.md#defineproperties-1)
- [getProperties](advance-1.AdvancePropertyManager.md#getproperties)
- [getProperties](advance-1.AdvancePropertyManager.md#getproperties-1)

## Constructors

### constructor

• **new AdvancePropertyManager**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

[src/advance.js:8](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L8)

## Properties

### $attributes

• **$attributes**: `any`

#### Defined in

[src/advance.js:44](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L44)

___

### SMART\_ASSIGN

• **SMART\_ASSIGN**: `any`

#### Defined in

[src/advance.js:46](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L46)

___

### defineProperties

▪ `Static` **defineProperties**: (`aTarget`: `object` \| `Function`, `aProperties`: [`PropDescriptors`](../modules/abstract.md#propdescriptors), `recreate?`: `boolean`) => [`Properties`](properties.Properties.md)

#### Type declaration

▸ (`aTarget`, `aProperties`, `recreate?`): [`Properties`](properties.Properties.md)

Define properties on the $attributes of the target object/class(prototype).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aTarget` | `object` \| `Function` | the target class or object |
| `aProperties` | [`PropDescriptors`](../modules/abstract.md#propdescriptors) | the attribute descriptors |
| `recreate?` | `boolean` | Whether recreating the $attributes |

##### Returns

[`Properties`](properties.Properties.md)

the defined attributes

#### Defined in

[src/advance.js:54](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L54)

## Methods

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `name` | `any` |
| `value` | `any` |
| `attrs` | `any` |
| `options` | `any` |

#### Returns

`void`

#### Defined in

[src/advance.js:37](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L37)

___

### defineProperties

▸ **defineProperties**(`aProperties`, `recreate?`): [`AdvancePropertyManager`](advance-1.AdvancePropertyManager.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aProperties` | `any` | `undefined` |
| `recreate` | `boolean` | `false` |

#### Returns

[`AdvancePropertyManager`](advance-1.AdvancePropertyManager.md)

#### Defined in

[src/advance.js:31](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L31)

___

### getProperties

▸ **getProperties**(): `any`

#### Returns

`any`

#### Defined in

[src/advance.js:27](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L27)

___

### getProperties

▸ `Static` **getProperties**(): `Object`

#### Returns

`Object`

#### Defined in

[src/advance.js:15](https://github.com/snowyu/property-manager.js/blob/95356d9/src/advance.js#L15)
