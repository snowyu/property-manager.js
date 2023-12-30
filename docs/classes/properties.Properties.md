[property-manager](../README.md) / [Exports](../modules.md) / [properties](../modules/properties.md) / Properties

# Class: Properties

[properties](../modules/properties.md).Properties

Collection the advanced attribute descriptors

## Table of contents

### Constructors

- [constructor](properties.Properties.md#constructor)

### Properties

- [nonExported1stChar](properties.Properties.md#nonexported1stchar)

### Methods

- [assignPropertyTo](properties.Properties.md#assignpropertyto)
- [assignTo](properties.Properties.md#assignto)
- [extends](properties.Properties.md#extends)
- [getRealAttrName](properties.Properties.md#getrealattrname)
- [getValue](properties.Properties.md#getvalue)
- [initialize](properties.Properties.md#initialize)
- [initializeTo](properties.Properties.md#initializeto)
- [isDefaultObject](properties.Properties.md#isdefaultobject)
- [merge](properties.Properties.md#merge)
- [mergePropertyTo](properties.Properties.md#mergepropertyto)
- [mergeTo](properties.Properties.md#mergeto)
- [validatePropertyValue](properties.Properties.md#validatepropertyvalue)

## Constructors

### constructor

• **new Properties**(`attrs`, `nonExported1stChar?`)

Collection the advanced attribute descriptors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attrs` | `any` | - |
| `nonExported1stChar?` | `string` | Indicates that the property will not be exported |

#### Defined in

[src/properties/index.d.ts:19](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L19)

## Properties

### nonExported1stChar

• **nonExported1stChar**: `string`

Indicates that the property will not be exported, defaults to '$'

#### Defined in

[src/properties/index.d.ts:11](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L11)

## Methods

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `name` | `any` |
| `value` | `any` |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |

#### Returns

`void`

#### Defined in

[src/properties/index.d.ts:28](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L28)

___

### assignTo

▸ **assignTo**(`dest`, `src`, `aOptions?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src` | `any` |
| `aOptions?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |

#### Returns

`any`

#### Defined in

[src/properties/index.d.ts:29](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L29)

___

### extends

▸ **extends**(`attrs`, `nonExported1stChar?`): [`Properties`](properties.Properties.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrs` | `any` |
| `nonExported1stChar?` | `string` |

#### Returns

[`Properties`](properties.Properties.md)

#### Defined in

[src/properties/index.d.ts:20](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L20)

___

### getRealAttrName

▸ **getRealAttrName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/properties/index.d.ts:26](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L26)

___

### getValue

▸ **getValue**(`obj`, `aName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `aName` | `any` |

#### Returns

`any`

#### Defined in

[src/properties/index.d.ts:31](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L31)

___

### initialize

▸ **initialize**(`attrs?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrs?` | `any` |

#### Returns

`void`

#### Defined in

[src/properties/index.d.ts:24](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L24)

___

### initializeTo

▸ **initializeTo**(`dest`, `src?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `src?` | `any` |
| `options?` | [`IExportOptions`](../interfaces/abstract.IExportOptions.md) |

#### Returns

`void`

#### Defined in

[src/properties/index.d.ts:25](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L25)

___

### isDefaultObject

▸ **isDefaultObject**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`boolean`

#### Defined in

[src/properties/index.d.ts:30](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L30)

___

### merge

▸ **merge**(`attrs?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrs?` | `any` |

#### Returns

`any`

#### Defined in

[src/properties/index.d.ts:21](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L21)

___

### mergePropertyTo

▸ **mergePropertyTo**(`dest`, `name`, `attr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `any` |
| `name` | `any` |
| `attr` | `any` |

#### Returns

`void`

#### Defined in

[src/properties/index.d.ts:23](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L23)

___

### mergeTo

▸ **mergeTo**(`attrs?`, `dest?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrs?` | `any` |
| `dest?` | `any` |

#### Returns

`any`

#### Defined in

[src/properties/index.d.ts:22](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L22)

___

### validatePropertyValue

▸ **validatePropertyValue**(`name`, `value`, `attr`, `raiseError`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `value` | `any` |
| `attr` | `any` |
| `raiseError` | `any` |

#### Returns

`boolean`

#### Defined in

[src/properties/index.d.ts:27](https://github.com/snowyu/property-manager.js/blob/121fb68/src/properties/index.d.ts#L27)
