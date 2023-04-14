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

[src/abstract.js:10](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L10)

## Properties

### nonExported1stChar

• **nonExported1stChar**: `string`

#### Defined in

[src/abstract.js:299](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L299)

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

[src/abstract.js:102](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L102)

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

[src/abstract.js:90](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L90)

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

[src/abstract.js:163](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L163)

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

[src/abstract.js:27](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L27)

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

[src/abstract.js:261](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L261)

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

[src/abstract.js:66](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L66)

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

[src/abstract.js:77](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L77)

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

[src/abstract.js:46](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L46)

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

[src/abstract.js:224](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L224)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

**`Abstract`**

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

[src/abstract.js:36](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L36)

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

[src/abstract.js:54](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L54)

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

[src/abstract.js:285](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L285)

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

[src/abstract.js:178](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L178)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/abstract.js:250](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L250)

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

[src/abstract.js:245](https://github.com/snowyu/property-manager.js/blob/95356d9/src/abstract.js#L245)
