[property-manager](../README.md) / [Exports](../modules.md) / [simple](../modules/simple-1.md) / SimplePropertyManager

# Class: SimplePropertyManager

[simple](../modules/simple-1.md).SimplePropertyManager

## Table of contents

### Constructors

- [constructor](simple-1.SimplePropertyManager.md#constructor)

### Methods

- [assignPropertyTo](simple-1.SimplePropertyManager.md#assignpropertyto)
- [defineProperties](simple-1.SimplePropertyManager.md#defineproperties)
- [getProperties](simple-1.SimplePropertyManager.md#getproperties)

## Constructors

### constructor

• **new SimplePropertyManager**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

[src/simple.js:10](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/simple.js#L10)

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

[src/simple.js:57](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/simple.js#L57)

___

### defineProperties

▸ **defineProperties**(`aProperties`): `void`

Define properties to this object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `PropDescriptors` | the descriptors of properties object |

#### Returns

`void`

#### Defined in

[src/simple.js:40](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/simple.js#L40)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the all property descriptors of this object except `defaultOptions`

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

[src/simple.js:22](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/simple.js#L22)
