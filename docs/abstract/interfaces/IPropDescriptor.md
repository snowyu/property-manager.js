[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [abstract](../README.md) / IPropDescriptor

# Interface: IPropDescriptor

Defined in: [src/abstract.d.ts:14](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L14)

## Extends

- [`ISimplePropDescriptor`](ISimplePropDescriptor.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [src/abstract.d.ts:20](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L20)

***

### assign()?

> `optional` **assign**: (`value?`, `dest?`, `src?`, `name?`, `options?`) => `any`

Defined in: [src/abstract.d.ts:17](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L17)

#### Parameters

##### value?

`any`

##### dest?

`any`

##### src?

`any`

##### name?

`any`

##### options?

[`IMergeOptions`](IMergeOptions.md)

#### Returns

`any`

***

### assigned?

> `optional` **assigned**: `string` \| `boolean`

Defined in: [src/abstract.d.ts:18](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L18)

***

### clone?

> `optional` **clone**: `boolean`

Defined in: [src/abstract.d.ts:21](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L21)

***

### configurable?

> `optional` **configurable**: `boolean`

Defined in: [src/abstract.d.ts:5](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L5)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`configurable`](ISimplePropDescriptor.md#configurable)

***

### enumerable?

> `optional` **enumerable**: `boolean`

Defined in: [src/abstract.d.ts:6](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L6)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`enumerable`](ISimplePropDescriptor.md#enumerable)

***

### exported?

> `optional` **exported**: `boolean`

Defined in: [src/abstract.d.ts:19](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L19)

***

### get?

> `optional` **get**: `Function`

Defined in: [src/abstract.d.ts:9](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L9)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`get`](ISimplePropDescriptor.md#get)

***

### name?

> `optional` **name**: `string`

Defined in: [src/abstract.d.ts:15](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L15)

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/abstract.d.ts:22](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L22)

***

### set?

> `optional` **set**: `Function`

Defined in: [src/abstract.d.ts:10](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L10)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`set`](ISimplePropDescriptor.md#set)

***

### skipDefault?

> `optional` **skipDefault**: `boolean`

Defined in: [src/abstract.d.ts:23](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L23)

***

### type?

> `optional` **type**: [`PropTypeDesc`](../type-aliases/PropTypeDesc.md)

Defined in: [src/abstract.d.ts:16](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L16)

***

### value?

> `optional` **value**: `any`

Defined in: [src/abstract.d.ts:7](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L7)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`value`](ISimplePropDescriptor.md#value)

***

### writable?

> `optional` **writable**: `boolean`

Defined in: [src/abstract.d.ts:8](https://github.com/snowyu/property-manager.js/blob/7cecb27374754b743733e81c6027a17dd0c349c2/src/abstract.d.ts#L8)

#### Inherited from

[`ISimplePropDescriptor`](ISimplePropDescriptor.md).[`writable`](ISimplePropDescriptor.md#writable)
