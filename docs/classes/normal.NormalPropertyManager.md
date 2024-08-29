[property-manager](../README.md) / [Exports](../modules.md) / [normal](../modules/normal.md) / NormalPropertyManager

# Class: NormalPropertyManager

[normal](../modules/normal.md).NormalPropertyManager

The Abstract PropertyManager Class

## Hierarchy

- [`AbstractPropertyManager`](abstract.AbstractPropertyManager.md)

  ↳ **`NormalPropertyManager`**

## Table of contents

### Constructors

- [constructor](normal.NormalPropertyManager.md#constructor)

### Properties

- [$attributes](normal.NormalPropertyManager.md#$attributes)
- [constructor](normal.NormalPropertyManager.md#constructor-1)
- [defaultOptions](normal.NormalPropertyManager.md#defaultoptions)
- [nonExported1stChar](normal.NormalPropertyManager.md#nonexported1stchar)

### Methods

- [assign](normal.NormalPropertyManager.md#assign)
- [assignProperty](normal.NormalPropertyManager.md#assignproperty)
- [assignPropertyTo](normal.NormalPropertyManager.md#assignpropertyto)
- [assignTo](normal.NormalPropertyManager.md#assignto)
- [clone](normal.NormalPropertyManager.md#clone)
- [cloneTo](normal.NormalPropertyManager.md#cloneto)
- [defineProperties](normal.NormalPropertyManager.md#defineproperties)
- [exportTo](normal.NormalPropertyManager.md#exportto)
- [getProperties](normal.NormalPropertyManager.md#getproperties)
- [hasOwnProperty](normal.NormalPropertyManager.md#hasownproperty)
- [initialize](normal.NormalPropertyManager.md#initialize)
- [isPrototypeOf](normal.NormalPropertyManager.md#isprototypeof)
- [isSame](normal.NormalPropertyManager.md#issame)
- [mergeTo](normal.NormalPropertyManager.md#mergeto)
- [propertyIsEnumerable](normal.NormalPropertyManager.md#propertyisenumerable)
- [toJSON](normal.NormalPropertyManager.md#tojson)
- [toLocaleString](normal.NormalPropertyManager.md#tolocalestring)
- [toObject](normal.NormalPropertyManager.md#toobject)
- [toString](normal.NormalPropertyManager.md#tostring)
- [valueOf](normal.NormalPropertyManager.md#valueof)
- [assign](normal.NormalPropertyManager.md#assign-1)
- [create](normal.NormalPropertyManager.md#create)
- [defineProperties](normal.NormalPropertyManager.md#defineproperties-1)
- [defineProperty](normal.NormalPropertyManager.md#defineproperty)
- [entries](normal.NormalPropertyManager.md#entries)
- [freeze](normal.NormalPropertyManager.md#freeze)
- [getOwnPropertyDescriptor](normal.NormalPropertyManager.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](normal.NormalPropertyManager.md#getownpropertydescriptors)
- [getOwnPropertyNames](normal.NormalPropertyManager.md#getownpropertynames)
- [getOwnPropertySymbols](normal.NormalPropertyManager.md#getownpropertysymbols)
- [getProperties](normal.NormalPropertyManager.md#getproperties-1)
- [getPrototypeOf](normal.NormalPropertyManager.md#getprototypeof)
- [is](normal.NormalPropertyManager.md#is)
- [isExtensible](normal.NormalPropertyManager.md#isextensible)
- [isFrozen](normal.NormalPropertyManager.md#isfrozen)
- [isSealed](normal.NormalPropertyManager.md#issealed)
- [keys](normal.NormalPropertyManager.md#keys)
- [preventExtensions](normal.NormalPropertyManager.md#preventextensions)
- [seal](normal.NormalPropertyManager.md#seal)
- [setPrototypeOf](normal.NormalPropertyManager.md#setprototypeof)
- [values](normal.NormalPropertyManager.md#values)

## Constructors

### constructor

• **new NormalPropertyManager**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[constructor](abstract.AbstractPropertyManager.md#constructor)

#### Defined in

[src/abstract.d.ts:80](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L80)

## Properties

### $attributes

• **$attributes**: [`PropDescriptors`](../modules/abstract.md#propdescriptors)

#### Defined in

[src/normal.d.ts:4](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/normal.d.ts#L4)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

AbstractPropertyManager.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:125

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |
| `export?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[defaultOptions](abstract.AbstractPropertyManager.md#defaultoptions)

#### Defined in

[src/abstract.d.ts:74](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L74)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[nonExported1stChar](abstract.AbstractPropertyManager.md#nonexported1stchar)

#### Defined in

[src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L78)

## Methods

### assign

▸ **assign**(`src`, `options?`): [`NormalPropertyManager`](normal.NormalPropertyManager.md)

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) | - |

#### Returns

[`NormalPropertyManager`](normal.NormalPropertyManager.md)

this object

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assign](abstract.AbstractPropertyManager.md#assign)

#### Defined in

[src/abstract.d.ts:106](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L106)

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |  |

#### Returns

`void`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assignProperty](abstract.AbstractPropertyManager.md#assignproperty)

#### Defined in

[src/abstract.d.ts:117](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L117)

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
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |  |

#### Returns

`void`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assignPropertyTo](abstract.AbstractPropertyManager.md#assignpropertyto)

#### Defined in

[src/abstract.d.ts:131](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L131)

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) | - |

#### Returns

`any`

the dest object

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assignTo](abstract.AbstractPropertyManager.md#assignto)

#### Defined in

[src/abstract.d.ts:191](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L191)

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |

#### Returns

`any`

the new object

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[clone](abstract.AbstractPropertyManager.md#clone)

#### Defined in

[src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L155)

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) |  |

#### Returns

`any`

the new dest object

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[cloneTo](abstract.AbstractPropertyManager.md#cloneto)

#### Defined in

[src/abstract.d.ts:148](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L148)

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

**`Abstract`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | [`SimplePropDescriptors`](../modules/abstract.md#simplepropdescriptors) | the defined attributes of the object |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[defineProperties](abstract.AbstractPropertyManager.md#defineproperties)

#### Defined in

[src/abstract.d.ts:89](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L89)

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | [`IExportOptions`](../interfaces/abstract.IExportOptions.md) | - |

#### Returns

`any`

the dest object.

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[exportTo](abstract.AbstractPropertyManager.md#exportto)

#### Defined in

[src/abstract.d.ts:173](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L173)

___

### getProperties

▸ **getProperties**(): [`PropDescriptors`](../modules/abstract.md#propdescriptors)

Get the defined attributes.

**`Abstract`**

#### Returns

[`PropDescriptors`](../modules/abstract.md#propdescriptors)

the descriptors of properties object

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getProperties](abstract.AbstractPropertyManager.md#getproperties)

#### Defined in

[src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L98)

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[hasOwnProperty](abstract.AbstractPropertyManager.md#hasownproperty)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:140

___

### initialize

▸ **initialize**(`src?`): [`NormalPropertyManager`](normal.NormalPropertyManager.md)

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

[`NormalPropertyManager`](normal.NormalPropertyManager.md)

this object.

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[initialize](abstract.AbstractPropertyManager.md#initialize)

#### Defined in

[src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L139)

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[isPrototypeOf](abstract.AbstractPropertyManager.md#isprototypeof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) | - |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[isSame](abstract.AbstractPropertyManager.md#issame)

#### Defined in

[src/abstract.d.ts:200](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L200)

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) | - |

#### Returns

`any`

the dest object.

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[mergeTo](abstract.AbstractPropertyManager.md#mergeto)

#### Defined in

[src/abstract.d.ts:164](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L164)

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[propertyIsEnumerable](abstract.AbstractPropertyManager.md#propertyisenumerable)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:152

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[toJSON](abstract.AbstractPropertyManager.md#tojson)

#### Defined in

[src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L182)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[toLocaleString](abstract.AbstractPropertyManager.md#tolocalestring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[toObject](abstract.AbstractPropertyManager.md#toobject)

#### Defined in

[src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/abstract.d.ts#L181)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[toString](abstract.AbstractPropertyManager.md#tostring)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:128

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[valueOf](abstract.AbstractPropertyManager.md#valueof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ `Static` **assign**<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assign](abstract.AbstractPropertyManager.md#assign-1)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ `Static` **assign**<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assign](abstract.AbstractPropertyManager.md#assign-1)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ `Static` **assign**<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assign](abstract.AbstractPropertyManager.md#assign-1)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ `Static` **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[assign](abstract.AbstractPropertyManager.md#assign-1)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ `Static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[create](abstract.AbstractPropertyManager.md#create)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:188

▸ `Static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[create](abstract.AbstractPropertyManager.md#create)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ `Static` **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aTarget` | `any` | Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object. |
| `aProperties` | [`PropDescriptors`](../modules/abstract.md#propdescriptors) | JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property. |
| `recreate?` | `boolean` | - |

#### Returns

`any`

#### Overrides

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[defineProperties](abstract.AbstractPropertyManager.md#defineproperties-1)

#### Defined in

[src/normal.d.ts:11](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/normal.d.ts#L11)

___

### defineProperty

▸ `Static` **defineProperty**<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[defineProperty](abstract.AbstractPropertyManager.md#defineproperty)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ `Static` **entries**<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | { `[s: string]`: `T`;  } \| `ArrayLike`<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[entries](abstract.AbstractPropertyManager.md#entries)

#### Defined in

node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ `Static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[entries](abstract.AbstractPropertyManager.md#entries)

#### Defined in

node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ `Static` **freeze**<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[freeze](abstract.AbstractPropertyManager.md#freeze)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:222

▸ `Static` **freeze**<`T`, `U`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`<`T`\>

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[freeze](abstract.AbstractPropertyManager.md#freeze)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:228

▸ `Static` **freeze**<`T`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`<`T`\>

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[freeze](abstract.AbstractPropertyManager.md#freeze)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:234

___

### getOwnPropertyDescriptor

▸ `Static` **getOwnPropertyDescriptor**(`o`, `p`): `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`PropertyDescriptor`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getOwnPropertyDescriptor](abstract.AbstractPropertyManager.md#getownpropertydescriptor)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ `Static` **getOwnPropertyDescriptors**<`T`\>(`o`): { [P in string \| number \| symbol]: TypedPropertyDescriptor<T[P]\> } & { `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

{ [P in string \| number \| symbol]: TypedPropertyDescriptor<T[P]\> } & { `[x: string]`: `PropertyDescriptor`;  }

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getOwnPropertyDescriptors](abstract.AbstractPropertyManager.md#getownpropertydescriptors)

#### Defined in

node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ `Static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getOwnPropertyNames](abstract.AbstractPropertyManager.md#getownpropertynames)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ `Static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getOwnPropertySymbols](abstract.AbstractPropertyManager.md#getownpropertysymbols)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ `Static` **getProperties**(): [`PropDescriptors`](../modules/abstract.md#propdescriptors)

get all properties descriptor include inherited.

#### Returns

[`PropDescriptors`](../modules/abstract.md#propdescriptors)

#### Defined in

[src/normal.d.ts:9](https://github.com/snowyu/property-manager.js/blob/4242c0a/src/normal.d.ts#L9)

___

### getPrototypeOf

▸ `Static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[getPrototypeOf](abstract.AbstractPropertyManager.md#getprototypeof)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:167

___

### is

▸ `Static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[is](abstract.AbstractPropertyManager.md#is)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ `Static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[isExtensible](abstract.AbstractPropertyManager.md#isextensible)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ `Static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[isFrozen](abstract.AbstractPropertyManager.md#isfrozen)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ `Static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[isSealed](abstract.AbstractPropertyManager.md#issealed)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ `Static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[keys](abstract.AbstractPropertyManager.md#keys)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:264

▸ `Static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[keys](abstract.AbstractPropertyManager.md#keys)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### preventExtensions

▸ `Static` **preventExtensions**<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[preventExtensions](abstract.AbstractPropertyManager.md#preventextensions)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:240

___

### seal

▸ `Static` **seal**<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[seal](abstract.AbstractPropertyManager.md#seal)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:216

___

### setPrototypeOf

▸ `Static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[setPrototypeOf](abstract.AbstractPropertyManager.md#setprototypeof)

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### values

▸ `Static` **values**<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | { `[s: string]`: `T`;  } \| `ArrayLike`<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[values](abstract.AbstractPropertyManager.md#values)

#### Defined in

node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ `Static` **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Inherited from

[AbstractPropertyManager](abstract.AbstractPropertyManager.md).[values](abstract.AbstractPropertyManager.md#values)

#### Defined in

node_modules/typescript/lib/lib.es2017.object.d.ts:30
