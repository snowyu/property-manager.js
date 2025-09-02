[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [abstract](../README.md) / AbstractPropertyManager

# Class: AbstractPropertyManager

Defined in: [src/abstract.d.ts:70](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L70)

The Abstract PropertyManager Class

## Extends

- `Object`

## Extended by

- [`AdvancePropertyManager`](../../advance/classes/AdvancePropertyManager.md)
- [`NormalPropertyManager`](../../normal/classes/NormalPropertyManager.md)
- [`SimplePropertyManager`](../../simple/classes/SimplePropertyManager.md)

## Constructors

### Constructor

> **new AbstractPropertyManager**(...`args`): `AbstractPropertyManager`

Defined in: [src/abstract.d.ts:80](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L80)

#### Parameters

##### args

...`any`[]

#### Returns

`AbstractPropertyManager`

#### Overrides

`Object.constructor`

## Properties

### constructor

> **constructor**: `Function`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`Object.constructor`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: [src/abstract.d.ts:74](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L74)

The default options for export and assign

#### assign?

> `optional` **assign**: [`IMergeOptions`](../interfaces/IMergeOptions.md)

#### export?

> `optional` **export**: [`IMergeOptions`](../interfaces/IMergeOptions.md)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

## Methods

### assign()

> **assign**(`src`, `options?`): `this`

Defined in: [src/abstract.d.ts:106](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L106)

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`this`

this object

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.d.ts:117](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L117)

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`void`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.d.ts:131](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L131)

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest?`, `options?`): `any`

Defined in: [src/abstract.d.ts:191](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L191)

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`any`

the dest object

***

### clone()

> **clone**(`options?`): `any`

Defined in: [src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L155)

Create a new object with the same values of attributes.

#### Parameters

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:148](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L148)

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`any`

the new dest object

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: [src/abstract.d.ts:89](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L89)

Define the attributes of this object.

#### Parameters

##### aProperties

[`SimplePropDescriptors`](../type-aliases/SimplePropDescriptors.md)

the defined attributes of the object

#### Returns

`any`

***

### exportTo()

> **exportTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:173](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L173)

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

[`IExportOptions`](../interfaces/IExportOptions.md)

#### Returns

`any`

the dest object.

***

### getProperties()

> `abstract` **getProperties**(): [`PropDescriptors`](../type-aliases/PropDescriptors.md)

Defined in: [src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

[`PropDescriptors`](../type-aliases/PropDescriptors.md)

the descriptors of properties object

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`Object.hasOwnProperty`

***

### initialize()

> **initialize**(`src?`): `this`

Defined in: [src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L139)

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

`Object.isPrototypeOf`

***

### isSame()

> **isSame**(`src`, `options?`): `boolean`

Defined in: [src/abstract.d.ts:200](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L200)

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`boolean`

***

### mergeTo()

> **mergeTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:164](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L164)

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

[`IMergeOptions`](../interfaces/IMergeOptions.md)

#### Returns

`any`

the dest object.

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`Object.propertyIsEnumerable`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L182)

#### Returns

`any`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

`Object.toLocaleString`

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: [src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/abstract.d.ts#L181)

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`Object.toString`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

`Object.valueOf`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Inherited from

`Object.assign`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Inherited from

`Object.assign`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

###### W

`W`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Inherited from

`Object.assign`

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Inherited from

`Object.assign`

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

`object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Inherited from

`Object.create`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

`object`

Object to use as a prototype. May be null

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

`Object.create`

***

### defineProperties()

> `static` **defineProperties**\<`T`\>(`o`, `properties`): `T`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:210

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.

##### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.

#### Returns

`T`

#### Inherited from

`Object.defineProperties`

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Inherited from

`Object.defineProperty`

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{[`s`: `string`]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

##### Inherited from

`Object.entries`

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

`Object.entries`

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

##### Inherited from

`Object.freeze`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U` *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`Object.freeze`

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`Object.freeze`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `PropertyDescriptor`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`PropertyDescriptor`

#### Inherited from

`Object.getOwnPropertyDescriptor`

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Inherited from

`Object.getOwnPropertyDescriptors`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

`Object.getOwnPropertyNames`

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

`Object.getOwnPropertySymbols`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

`Object.getPrototypeOf`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

#### Inherited from

`Object.is`

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`Object.isExtensible`

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`Object.isFrozen`

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`Object.isSealed`

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`Object.keys`

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`Object.keys`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

#### Inherited from

`Object.preventExtensions`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

#### Inherited from

`Object.seal`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

`object`

The value of the new prototype or null.

#### Returns

`any`

#### Inherited from

`Object.setPrototypeOf`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{[`s`: `string`]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

`Object.values`

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

`Object.values`
