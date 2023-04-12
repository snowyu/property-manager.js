[property-manager](../README.md) / [Exports](../modules.md) / [abstract](../modules/abstract.md) / AbstractPropertyManager

# Class: AbstractPropertyManager

[abstract](../modules/abstract.md).AbstractPropertyManager

The Abstract PropertyManager Class

## Hierarchy

- `Object`

  ↳ **`AbstractPropertyManager`**

  ↳↳ [`AdvancePropertyManager`](advance.AdvancePropertyManager.md)

  ↳↳ [`NormalPropertyManager`](normal.NormalPropertyManager.md)

  ↳↳ [`SimplePropertyManager`](simple.SimplePropertyManager.md)

## Table of contents

### Constructors

- [constructor](abstract.AbstractPropertyManager.md#constructor)

### Properties

- [constructor](abstract.AbstractPropertyManager.md#constructor-1)
- [defaultOptions](abstract.AbstractPropertyManager.md#defaultoptions)
- [nonExported1stChar](abstract.AbstractPropertyManager.md#nonexported1stchar)

### Methods

- [assign](abstract.AbstractPropertyManager.md#assign)
- [assignProperty](abstract.AbstractPropertyManager.md#assignproperty)
- [assignPropertyTo](abstract.AbstractPropertyManager.md#assignpropertyto)
- [assignTo](abstract.AbstractPropertyManager.md#assignto)
- [clone](abstract.AbstractPropertyManager.md#clone)
- [cloneTo](abstract.AbstractPropertyManager.md#cloneto)
- [defineProperties](abstract.AbstractPropertyManager.md#defineproperties)
- [exportTo](abstract.AbstractPropertyManager.md#exportto)
- [getProperties](abstract.AbstractPropertyManager.md#getproperties)
- [hasOwnProperty](abstract.AbstractPropertyManager.md#hasownproperty)
- [initialize](abstract.AbstractPropertyManager.md#initialize)
- [isPrototypeOf](abstract.AbstractPropertyManager.md#isprototypeof)
- [isSame](abstract.AbstractPropertyManager.md#issame)
- [mergeTo](abstract.AbstractPropertyManager.md#mergeto)
- [propertyIsEnumerable](abstract.AbstractPropertyManager.md#propertyisenumerable)
- [toJSON](abstract.AbstractPropertyManager.md#tojson)
- [toLocaleString](abstract.AbstractPropertyManager.md#tolocalestring)
- [toObject](abstract.AbstractPropertyManager.md#toobject)
- [toString](abstract.AbstractPropertyManager.md#tostring)
- [valueOf](abstract.AbstractPropertyManager.md#valueof)
- [assign](abstract.AbstractPropertyManager.md#assign-1)
- [create](abstract.AbstractPropertyManager.md#create)
- [defineProperties](abstract.AbstractPropertyManager.md#defineproperties-1)
- [defineProperty](abstract.AbstractPropertyManager.md#defineproperty)
- [freeze](abstract.AbstractPropertyManager.md#freeze)
- [getOwnPropertyDescriptor](abstract.AbstractPropertyManager.md#getownpropertydescriptor)
- [getOwnPropertyNames](abstract.AbstractPropertyManager.md#getownpropertynames)
- [getOwnPropertySymbols](abstract.AbstractPropertyManager.md#getownpropertysymbols)
- [getPrototypeOf](abstract.AbstractPropertyManager.md#getprototypeof)
- [is](abstract.AbstractPropertyManager.md#is)
- [isExtensible](abstract.AbstractPropertyManager.md#isextensible)
- [isFrozen](abstract.AbstractPropertyManager.md#isfrozen)
- [isSealed](abstract.AbstractPropertyManager.md#issealed)
- [keys](abstract.AbstractPropertyManager.md#keys)
- [preventExtensions](abstract.AbstractPropertyManager.md#preventextensions)
- [seal](abstract.AbstractPropertyManager.md#seal)
- [setPrototypeOf](abstract.AbstractPropertyManager.md#setprototypeof)

## Constructors

### constructor

• **new AbstractPropertyManager**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Overrides

Object.constructor

#### Defined in

[src/abstract.d.ts:79](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L79)

## Properties

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

Object.constructor

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

#### Defined in

[src/abstract.d.ts:73](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L73)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

[src/abstract.d.ts:77](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L77)

## Methods

### assign

▸ **assign**(`src`, `options?`): [`AbstractPropertyManager`](abstract.AbstractPropertyManager.md)

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | [`IMergeOptions`](../interfaces/abstract.IMergeOptions.md) | - |

#### Returns

[`AbstractPropertyManager`](abstract.AbstractPropertyManager.md)

this object

#### Defined in

[src/abstract.d.ts:105](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L105)

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

#### Defined in

[src/abstract.d.ts:116](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L116)

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

#### Defined in

[src/abstract.d.ts:130](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L130)

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

#### Defined in

[src/abstract.d.ts:190](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L190)

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

#### Defined in

[src/abstract.d.ts:154](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L154)

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

#### Defined in

[src/abstract.d.ts:147](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L147)

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

#### Defined in

[src/abstract.d.ts:88](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L88)

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

#### Defined in

[src/abstract.d.ts:172](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L172)

___

### getProperties

▸ **getProperties**(): [`PropDescriptors`](../modules/abstract.md#propdescriptors)

Get the defined attributes.

**`Abstract`**

#### Returns

[`PropDescriptors`](../modules/abstract.md#propdescriptors)

the descriptors of properties object

#### Defined in

[src/abstract.d.ts:97](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L97)

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

Object.hasOwnProperty

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:140

___

### initialize

▸ **initialize**(`src?`): [`AbstractPropertyManager`](abstract.AbstractPropertyManager.md)

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

[`AbstractPropertyManager`](abstract.AbstractPropertyManager.md)

this object.

#### Defined in

[src/abstract.d.ts:138](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L138)

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

Object.isPrototypeOf

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

#### Defined in

[src/abstract.d.ts:199](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L199)

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

#### Defined in

[src/abstract.d.ts:163](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L163)

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

Object.propertyIsEnumerable

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:152

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L181)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

Object.toLocaleString

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

#### Defined in

[src/abstract.d.ts:180](https://github.com/snowyu/property-manager.js/blob/7796872/src/abstract.d.ts#L180)

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

Object.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:128

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

Object.valueOf

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

Object.assign

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

Object.assign

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

Object.assign

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

Object.assign

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

Object.create

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

Object.create

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ `Static` **defineProperties**<`T`\>(`o`, `properties`): `T`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object. |
| `properties` | `PropertyDescriptorMap` & `ThisType`<`any`\> | JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property. |

#### Returns

`T`

#### Inherited from

Object.defineProperties

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:210

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

Object.defineProperty

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:203

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

Object.freeze

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

Object.freeze

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

Object.freeze

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

Object.getOwnPropertyDescriptor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:175

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

Object.getOwnPropertyNames

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

Object.getOwnPropertySymbols

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:317

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

Object.getPrototypeOf

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

Object.is

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

Object.isExtensible

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

Object.isFrozen

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

Object.isSealed

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

Object.keys

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

Object.keys

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

Object.preventExtensions

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

Object.seal

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

Object.setPrototypeOf

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:337
