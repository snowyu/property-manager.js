[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [abstract](../README-1.md) / AbstractPropertyManager

# Class: AbstractPropertyManager

Defined in: [src/abstract.js:10](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L10)

The Abstract PropertyManager Class

## Constructors

### Constructor

> **new AbstractPropertyManager**(...`args`): `AbstractPropertyManager`

Defined in: [src/abstract.js:10](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L10)

The Abstract PropertyManager Class

#### Parameters

##### args

...`any`

#### Returns

`AbstractPropertyManager`

## Properties

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [src/abstract.js:299](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L299)

## Methods

### \_\_assign()

> **\_\_assign**(`src`, `aOptions?`): `AbstractPropertyManager`

Defined in: [src/abstract.js:102](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L102)

**`Internal`**

#### Parameters

##### src

`any`

the source object

##### aOptions?

`IMergeOptions`

#### Returns

`AbstractPropertyManager`

***

### assign()

> **assign**(`src`, `aOptions`): `AbstractPropertyManager`

Defined in: [src/abstract.js:90](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L90)

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### aOptions

`IMergeOptions`

#### Returns

`AbstractPropertyManager`

this object

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.js:163](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L163)

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`any`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

The attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [src/abstract.js:27](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L27)

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

`IMergeOptions`

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest`, `aOptions?`): `any`

Defined in: [src/abstract.js:261](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L261)

Assign this attributes to the dest object

#### Parameters

##### dest

`any`

the destination object

##### aOptions?

`IMergeOptions`

#### Returns

`any`

the dest object

***

### clone()

> **clone**(`options?`): `any`

Defined in: [src/abstract.js:66](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L66)

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options?`): `any`

Defined in: [src/abstract.js:77](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L77)

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `void`

Defined in: [src/abstract.js:46](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L46)

Define the attributes of this object.

#### Parameters

##### aProperties

`PropDescriptors`

the defined attributes of the object

#### Returns

`void`

***

### exportTo()

> **exportTo**(`dest`, `aOptions?`): `any`

Defined in: [src/abstract.js:224](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L224)

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### aOptions?

`IMergeOptions`

They should overwrite the dest's attributes if the attributes exists in the aOptions.

#### Returns

`any`

the dest object.

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [src/abstract.js:36](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L36)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### initialize()

> **initialize**(`src?`): `AbstractPropertyManager`

Defined in: [src/abstract.js:54](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L54)

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`AbstractPropertyManager`

this object.

***

### isSame()

> **isSame**(`src`, `aOptions?`): `boolean`

Defined in: [src/abstract.js:285](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L285)

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### aOptions?

`IMergeOptions`

#### Returns

`boolean`

***

### mergeTo()

> **mergeTo**(`dest`, `aOptions?`): `any`

Defined in: [src/abstract.js:178](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L178)

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### aOptions?

`IMergeOptions` = `{}`

They should overwrite the dest's attributes if the attributes exists in the aOptions.

#### Returns

`any`

the dest object.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [src/abstract.js:250](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L250)

#### Returns

`any`

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: [src/abstract.js:245](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.js#L245)

Convert the attributes to the json object

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the json object.
