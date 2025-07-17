[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [advance](../README-1.md) / AdvancePropertyManager

# Class: AdvancePropertyManager

Defined in: [src/advance.js:8](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L8)

## Constructors

### Constructor

> **new AdvancePropertyManager**(...`args`): `AdvancePropertyManager`

Defined in: [src/advance.js:8](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L8)

#### Parameters

##### args

...`any`

#### Returns

`AdvancePropertyManager`

## Properties

### $attributes

> **$attributes**: `any`

Defined in: [src/advance.js:44](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L44)

***

### SMART\_ASSIGN

> **SMART\_ASSIGN**: `any`

Defined in: [src/advance.js:46](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L46)

***

### defineProperties()

> `static` **defineProperties**: (`aTarget`, `aProperties`, `recreate?`) => [`Properties`](../../properties/classes/Properties.md)

Defined in: [src/advance.js:54](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L54)

Define properties on the $attributes of the target object/class(prototype).

#### Parameters

##### aTarget

the target class or object

`object` | `Function`

##### aProperties

[`PropDescriptors`](../../abstract/type-aliases/PropDescriptors.md)

the attribute descriptors

##### recreate?

`boolean`

Whether recreating the $attributes

#### Returns

[`Properties`](../../properties/classes/Properties.md)

the defined attributes

## Methods

### assignPropertyTo()

> **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`, `options`): `void`

Defined in: [src/advance.js:37](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L37)

#### Parameters

##### dest

`any`

##### src

`any`

##### name

`any`

##### value

`any`

##### attrs

`any`

##### options

`any`

#### Returns

`void`

***

### defineProperties()

> **defineProperties**(`aProperties`, `recreate`): `AdvancePropertyManager`

Defined in: [src/advance.js:31](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L31)

#### Parameters

##### aProperties

`any`

##### recreate

`boolean` = `false`

#### Returns

`AdvancePropertyManager`

***

### getProperties()

> **getProperties**(): `any`

Defined in: [src/advance.js:27](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L27)

#### Returns

`any`

***

### getProperties()

> `static` **getProperties**(): `object`

Defined in: [src/advance.js:15](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/advance.js#L15)

#### Returns

`object`
