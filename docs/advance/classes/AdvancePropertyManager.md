[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [advance](../README.md) / AdvancePropertyManager

# Class: AdvancePropertyManager

Defined in: [src/advance.d.ts:4](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/advance.d.ts#L4)

The Abstract PropertyManager Class

## Extends

- [`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md)

## Constructors

### Constructor

> **new AdvancePropertyManager**(...`args`): `AdvancePropertyManager`

Defined in: [src/abstract.d.ts:80](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L80)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### args

...`any`[]

#### Returns

`AdvancePropertyManager`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`constructor`](../../abstract/classes/AbstractPropertyManager.md#constructor)

## Properties

### $attributes

> **$attributes**: [`Properties`](../../properties/classes/Properties.md)

Defined in: [src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/advance.d.ts#L5)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`AbstractPropertyManager.constructor`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: [src/abstract.d.ts:74](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L74)

The default options for export and assign

#### assign?

> `optional` **assign**: [`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### export?

> `optional` **export**: [`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`defaultOptions`](../../abstract/classes/AbstractPropertyManager.md#defaultoptions)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`nonExported1stChar`](../../abstract/classes/AbstractPropertyManager.md#nonexported1stchar)

## Methods

### assign()

> **assign**(`src`, `options?`): `this`

Defined in: [src/abstract.d.ts:106](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L106)

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`this`

this object

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assign`](../../abstract/classes/AbstractPropertyManager.md#assign)

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.d.ts:117](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L117)

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

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`void`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assignProperty`](../../abstract/classes/AbstractPropertyManager.md#assignproperty)

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.d.ts:131](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L131)

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

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`void`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assignPropertyTo`](../../abstract/classes/AbstractPropertyManager.md#assignpropertyto)

***

### assignTo()

> **assignTo**(`dest?`, `options?`): `any`

Defined in: [src/abstract.d.ts:191](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L191)

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`any`

the dest object

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assignTo`](../../abstract/classes/AbstractPropertyManager.md#assignto)

***

### clone()

> **clone**(`options?`): `any`

Defined in: [src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L155)

Create a new object with the same values of attributes.

#### Parameters

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`any`

the new object

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`clone`](../../abstract/classes/AbstractPropertyManager.md#clone)

***

### cloneTo()

> **cloneTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:148](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L148)

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`any`

the new dest object

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`cloneTo`](../../abstract/classes/AbstractPropertyManager.md#cloneto)

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: [src/abstract.d.ts:89](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L89)

Define the attributes of this object.

#### Parameters

##### aProperties

[`SimplePropDescriptors`](../../abstract/type-aliases/SimplePropDescriptors.md)

the defined attributes of the object

#### Returns

`any`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`defineProperties`](../../abstract/classes/AbstractPropertyManager.md#defineproperties)

***

### exportTo()

> **exportTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:173](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L173)

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

[`IExportOptions`](../../abstract/interfaces/IExportOptions.md)

#### Returns

`any`

the dest object.

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`exportTo`](../../abstract/classes/AbstractPropertyManager.md#exportto)

***

### getProperties()

> `abstract` **getProperties**(): [`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

Defined in: [src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

[`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

the descriptors of properties object

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getProperties`](../../abstract/classes/AbstractPropertyManager.md#getproperties)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`hasOwnProperty`](../../abstract/classes/AbstractPropertyManager.md#hasownproperty)

***

### initialize()

> **initialize**(`src?`): `this`

Defined in: [src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L139)

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`initialize`](../../abstract/classes/AbstractPropertyManager.md#initialize)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`isPrototypeOf`](../../abstract/classes/AbstractPropertyManager.md#isprototypeof)

***

### isSame()

> **isSame**(`src`, `options?`): `boolean`

Defined in: [src/abstract.d.ts:200](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L200)

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`boolean`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`isSame`](../../abstract/classes/AbstractPropertyManager.md#issame)

***

### mergeTo()

> **mergeTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.d.ts:164](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L164)

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`any`

the dest object.

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`mergeTo`](../../abstract/classes/AbstractPropertyManager.md#mergeto)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`propertyIsEnumerable`](../../abstract/classes/AbstractPropertyManager.md#propertyisenumerable)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L182)

#### Returns

`any`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`toJSON`](../../abstract/classes/AbstractPropertyManager.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`toLocaleString`](../../abstract/classes/AbstractPropertyManager.md#tolocalestring)

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: [src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/abstract.d.ts#L181)

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`toObject`](../../abstract/classes/AbstractPropertyManager.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`toString`](../../abstract/classes/AbstractPropertyManager.md#tostring)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`valueOf`](../../abstract/classes/AbstractPropertyManager.md#valueof)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assign`](../../abstract/classes/AbstractPropertyManager.md#assign-2)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assign`](../../abstract/classes/AbstractPropertyManager.md#assign-2)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assign`](../../abstract/classes/AbstractPropertyManager.md#assign-2)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`assign`](../../abstract/classes/AbstractPropertyManager.md#assign-2)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`create`](../../abstract/classes/AbstractPropertyManager.md#create)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`create`](../../abstract/classes/AbstractPropertyManager.md#create)

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

Defined in: [src/advance.d.ts:11](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/advance.d.ts#L11)

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

[`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

##### recreate?

`boolean`

#### Returns

`any`

#### Overrides

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`defineProperties`](../../abstract/classes/AbstractPropertyManager.md#defineproperties-2)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`defineProperty`](../../abstract/classes/AbstractPropertyManager.md#defineproperty)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`entries`](../../abstract/classes/AbstractPropertyManager.md#entries)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`entries`](../../abstract/classes/AbstractPropertyManager.md#entries)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`freeze`](../../abstract/classes/AbstractPropertyManager.md#freeze)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`freeze`](../../abstract/classes/AbstractPropertyManager.md#freeze)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`freeze`](../../abstract/classes/AbstractPropertyManager.md#freeze)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getOwnPropertyDescriptor`](../../abstract/classes/AbstractPropertyManager.md#getownpropertydescriptor)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getOwnPropertyDescriptors`](../../abstract/classes/AbstractPropertyManager.md#getownpropertydescriptors)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getOwnPropertyNames`](../../abstract/classes/AbstractPropertyManager.md#getownpropertynames)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getOwnPropertySymbols`](../../abstract/classes/AbstractPropertyManager.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): [`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

Defined in: [src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/875a648099d0c063400c33d31fea8b465b85b679/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

[`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`getPrototypeOf`](../../abstract/classes/AbstractPropertyManager.md#getprototypeof)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`is`](../../abstract/classes/AbstractPropertyManager.md#is)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`isExtensible`](../../abstract/classes/AbstractPropertyManager.md#isextensible)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`isFrozen`](../../abstract/classes/AbstractPropertyManager.md#isfrozen)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`isSealed`](../../abstract/classes/AbstractPropertyManager.md#issealed)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`keys`](../../abstract/classes/AbstractPropertyManager.md#keys)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`keys`](../../abstract/classes/AbstractPropertyManager.md#keys)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`preventExtensions`](../../abstract/classes/AbstractPropertyManager.md#preventextensions)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`seal`](../../abstract/classes/AbstractPropertyManager.md#seal)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`setPrototypeOf`](../../abstract/classes/AbstractPropertyManager.md#setprototypeof)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`values`](../../abstract/classes/AbstractPropertyManager.md#values)

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

[`AbstractPropertyManager`](../../abstract/classes/AbstractPropertyManager.md).[`values`](../../abstract/classes/AbstractPropertyManager.md#values)
