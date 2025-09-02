[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [simple](../README-1.md) / SimplePropertyManager

# Class: SimplePropertyManager

Defined in: [src/simple.js:10](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/simple.js#L10)

## Constructors

### Constructor

> **new SimplePropertyManager**(...`args`): `SimplePropertyManager`

Defined in: [src/simple.js:10](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/simple.js#L10)

#### Parameters

##### args

...`any`

#### Returns

`SimplePropertyManager`

## Methods

### assignPropertyTo()

> **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`, `options`): `void`

Defined in: [src/simple.js:57](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/simple.js#L57)

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

> **defineProperties**(`aProperties`): `void`

Defined in: [src/simple.js:40](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/simple.js#L40)

Define properties to this object

#### Parameters

##### aProperties

`PropDescriptors`

the descriptors of properties object

#### Returns

`void`

***

### getProperties()

> **getProperties**(): `PropDescriptors`

Defined in: [src/simple.js:22](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/simple.js#L22)

Get the all property descriptors of this object except `defaultOptions`

#### Returns

`PropDescriptors`

the descriptors of properties object
