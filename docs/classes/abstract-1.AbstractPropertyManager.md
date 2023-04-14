[property-manager](../README.md) / [Exports](../modules.md) / [abstract](../modules/abstract-1.md) / AbstractPropertyManager

# Class: AbstractPropertyManager

[abstract](../modules/abstract-1.md).AbstractPropertyManager

## Table of contents

### Constructors

- [constructor](abstract-1.AbstractPropertyManager.md#constructor)

### Properties

- [nonExported1stChar](abstract-1.AbstractPropertyManager.md#nonexported1stchar)

### Methods

- [\_\_assign](abstract-1.AbstractPropertyManager.md#__assign)
- [assign](abstract-1.AbstractPropertyManager.md#assign)
- [assignProperty](abstract-1.AbstractPropertyManager.md#assignproperty)
- [assignPropertyTo](abstract-1.AbstractPropertyManager.md#assignpropertyto)
- [assignTo](abstract-1.AbstractPropertyManager.md#assignto)
- [clone](abstract-1.AbstractPropertyManager.md#clone)
- [cloneTo](abstract-1.AbstractPropertyManager.md#cloneto)
- [defineProperties](abstract-1.AbstractPropertyManager.md#defineproperties)
- [exportTo](abstract-1.AbstractPropertyManager.md#exportto)
- [getProperties](abstract-1.AbstractPropertyManager.md#getproperties)
- [initialize](abstract-1.AbstractPropertyManager.md#initialize)
- [isSame](abstract-1.AbstractPropertyManager.md#issame)
- [mergeTo](abstract-1.AbstractPropertyManager.md#mergeto)
- [toJSON](abstract-1.AbstractPropertyManager.md#tojson)
- [toObject](abstract-1.AbstractPropertyManager.md#toobject)

## Constructors

### constructor

• **new AbstractPropertyManager**(`...args`)

The Abstract PropertyManager Class

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

[src/abstract.js:11](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L11)

## Properties

### nonExported1stChar

• **nonExported1stChar**: `string`

#### Defined in

[src/abstract.js:300](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L300)

## Methods

### \_\_assign

▸ **__assign**(`src`, `aOptions?`): [`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `aOptions?` | `IMergeOptions` |  |

#### Returns

[`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

#### Defined in

[src/abstract.js:103](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L103)

___

### assign

▸ **assign**(`src`, `aOptions`): [`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `aOptions` | `IMergeOptions` |  |

#### Returns

[`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

this object

#### Defined in

[src/abstract.js:91](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L91)

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `any` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | The attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Defined in

[src/abstract.js:164](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L164)

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

**`Abstract`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Defined in

[src/abstract.js:28](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L28)

___

### assignTo

▸ **assignTo**(`dest`, `aOptions?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `aOptions?` | `IMergeOptions` |  |

#### Returns

`any`

the dest object

#### Defined in

[src/abstract.js:262](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L262)

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Defined in

[src/abstract.js:67](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L67)

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Defined in

[src/abstract.js:78](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L78)

___

### defineProperties

▸ **defineProperties**(`aProperties`): `void`

Define the attributes of this object.

**`Abstract`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `PropDescriptors` | the defined attributes of the object |

#### Returns

`void`

#### Defined in

[src/abstract.js:47](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L47)

___

### exportTo

▸ **exportTo**(`dest`, `aOptions?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `aOptions?` | `IMergeOptions` |  |

#### Returns

`any`

the dest object.

#### Defined in

[src/abstract.js:225](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L225)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

**`Abstract`**

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

[src/abstract.js:37](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L37)

___

### initialize

▸ **initialize**(`src?`): [`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

[`AbstractPropertyManager`](abstract-1.AbstractPropertyManager.md)

this object.

#### Defined in

[src/abstract.js:55](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L55)

___

### isSame

▸ **isSame**(`src`, `aOptions?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `aOptions?` | `IMergeOptions` |  |

#### Returns

`boolean`

#### Defined in

[src/abstract.js:286](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L286)

___

### mergeTo

▸ **mergeTo**(`dest`, `aOptions?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `aOptions?` | `IMergeOptions` |  |

#### Returns

`any`

the dest object.

#### Defined in

[src/abstract.js:179](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L179)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/abstract.js:251](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L251)

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the json object.

#### Defined in

[src/abstract.js:246](https://github.com/snowyu/property-manager.js/blob/248d0b4/src/abstract.js#L246)
