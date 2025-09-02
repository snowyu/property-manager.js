[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [properties](../README.md) / Properties

# Class: Properties

Defined in: [src/properties/index.d.ts:7](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L7)

Collection the advanced attribute descriptors

## Constructors

### Constructor

> **new Properties**(`attrs`, `nonExported1stChar?`): `Properties`

Defined in: [src/properties/index.d.ts:19](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L19)

Collection the advanced attribute descriptors

#### Parameters

##### attrs

`any`

##### nonExported1stChar?

`string`

Indicates that the property will not be exported

#### Returns

`Properties`

## Properties

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [src/properties/index.d.ts:11](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L11)

Indicates that the property will not be exported, defaults to '$'

## Methods

### assignPropertyTo()

> **assignPropertyTo**(`dest`, `src`, `name`, `value`, `options?`): `void`

Defined in: [src/properties/index.d.ts:28](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L28)

#### Parameters

##### dest

`any`

##### src

`any`

##### name

`any`

##### value

`any`

##### options?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest`, `src`, `aOptions?`): `any`

Defined in: [src/properties/index.d.ts:29](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L29)

#### Parameters

##### dest

`any`

##### src

`any`

##### aOptions?

[`IMergeOptions`](../../abstract/interfaces/IMergeOptions.md)

#### Returns

`any`

***

### extends()

> **extends**(`attrs`, `nonExported1stChar?`): `Properties`

Defined in: [src/properties/index.d.ts:20](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L20)

#### Parameters

##### attrs

`any`

##### nonExported1stChar?

`string`

#### Returns

`Properties`

***

### getRealAttrName()

> **getRealAttrName**(`name`): `string`

Defined in: [src/properties/index.d.ts:26](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L26)

#### Parameters

##### name

`string`

#### Returns

`string`

***

### getValue()

> **getValue**(`obj`, `aName`): `any`

Defined in: [src/properties/index.d.ts:31](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L31)

#### Parameters

##### obj

`any`

##### aName

`any`

#### Returns

`any`

***

### initialize()

> **initialize**(`attrs?`): `void`

Defined in: [src/properties/index.d.ts:24](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L24)

#### Parameters

##### attrs?

`any`

#### Returns

`void`

***

### initializeTo()

> **initializeTo**(`dest`, `src?`, `options?`): `void`

Defined in: [src/properties/index.d.ts:25](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L25)

#### Parameters

##### dest

`any`

##### src?

`any`

##### options?

[`IExportOptions`](../../abstract/interfaces/IExportOptions.md)

#### Returns

`void`

***

### isDefaultObject()

> **isDefaultObject**(`obj`): `boolean`

Defined in: [src/properties/index.d.ts:30](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L30)

#### Parameters

##### obj

`any`

#### Returns

`boolean`

***

### merge()

> **merge**(`attrs?`): `any`

Defined in: [src/properties/index.d.ts:21](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L21)

#### Parameters

##### attrs?

`any`

#### Returns

`any`

***

### mergePropertyTo()

> **mergePropertyTo**(`dest`, `name`, `attr`): `void`

Defined in: [src/properties/index.d.ts:23](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L23)

#### Parameters

##### dest

`any`

##### name

`any`

##### attr

`any`

#### Returns

`void`

***

### mergeTo()

> **mergeTo**(`attrs?`, `dest?`): `any`

Defined in: [src/properties/index.d.ts:22](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L22)

#### Parameters

##### attrs?

`any`

##### dest?

`any`

#### Returns

`any`

***

### validatePropertyValue()

> **validatePropertyValue**(`name`, `value`, `attr`, `raiseError`): `boolean`

Defined in: [src/properties/index.d.ts:27](https://github.com/snowyu/property-manager.js/blob/0a26f8ac8272cf662455db6a79ab5298188a6840/src/properties/index.d.ts#L27)

#### Parameters

##### name

`any`

##### value

`any`

##### attr

`any`

##### raiseError

`any`

#### Returns

`boolean`
