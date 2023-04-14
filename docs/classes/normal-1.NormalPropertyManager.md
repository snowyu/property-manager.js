[property-manager](../README.md) / [Exports](../modules.md) / [normal](../modules/normal-1.md) / NormalPropertyManager

# Class: NormalPropertyManager

[normal](../modules/normal-1.md).NormalPropertyManager

## Table of contents

### Constructors

- [constructor](normal-1.NormalPropertyManager.md#constructor)

### Properties

- [$attributes](normal-1.NormalPropertyManager.md#$attributes)
- [defineProperties](normal-1.NormalPropertyManager.md#defineproperties)

### Methods

- [assignPropertyTo](normal-1.NormalPropertyManager.md#assignpropertyto)
- [defineProperties](normal-1.NormalPropertyManager.md#defineproperties-1)
- [getProperties](normal-1.NormalPropertyManager.md#getproperties)
- [getProperties](normal-1.NormalPropertyManager.md#getproperties-1)

## Constructors

### constructor

• **new NormalPropertyManager**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

[src/normal.js:10](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L10)

## Properties

### $attributes

• **$attributes**: `any`

#### Defined in

[src/normal.js:104](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L104)

___

### defineProperties

▪ `Static` **defineProperties**: (`aTarget`: `any`, `aProperties`: `any`, `recreate`: `any`) => `any`

#### Type declaration

▸ (`aTarget`, `aProperties`, `recreate`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `any` |
| `recreate` | `any` |

##### Returns

`any`

#### Defined in

[src/normal.js:167](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L167)

## Methods

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `name` | `any` |
| `value` | `any` |
| `attrs` | `any` |
| `options` | `Object` |

#### Returns

`void`

#### Defined in

[src/normal.js:45](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L45)

___

### defineProperties

▸ **defineProperties**(`aProperties`, `recreate?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `aProperties` | `any` | `undefined` |
| `recreate` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/normal.js:32](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L32)

___

### getProperties

▸ **getProperties**(): `any`

#### Returns

`any`

#### Defined in

[src/normal.js:28](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L28)

___

### getProperties

▸ `Static` **getProperties**(): `Object`

#### Returns

`Object`

#### Defined in

[src/normal.js:17](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/normal.js#L17)
