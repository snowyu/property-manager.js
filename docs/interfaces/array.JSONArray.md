[property-manager](../README.md) / [Exports](../modules.md) / [array](../modules/array.md) / JSONArray

# Interface: JSONArray

[array](../modules/array.md).JSONArray

## Hierarchy

- `Array`<[`JSONValue`](../modules/array.md#jsonvalue)\>

  ↳ **`JSONArray`**

## Table of contents

### Properties

- [[unscopables]](array.JSONArray.md#[unscopables])
- [length](array.JSONArray.md#length)

### Methods

- [[iterator]](array.JSONArray.md#[iterator])
- [concat](array.JSONArray.md#concat)
- [copyWithin](array.JSONArray.md#copywithin)
- [entries](array.JSONArray.md#entries)
- [every](array.JSONArray.md#every)
- [fill](array.JSONArray.md#fill)
- [filter](array.JSONArray.md#filter)
- [find](array.JSONArray.md#find)
- [findIndex](array.JSONArray.md#findindex)
- [forEach](array.JSONArray.md#foreach)
- [indexOf](array.JSONArray.md#indexof)
- [join](array.JSONArray.md#join)
- [keys](array.JSONArray.md#keys)
- [lastIndexOf](array.JSONArray.md#lastindexof)
- [map](array.JSONArray.md#map)
- [pop](array.JSONArray.md#pop)
- [push](array.JSONArray.md#push)
- [reduce](array.JSONArray.md#reduce)
- [reduceRight](array.JSONArray.md#reduceright)
- [reverse](array.JSONArray.md#reverse)
- [shift](array.JSONArray.md#shift)
- [slice](array.JSONArray.md#slice)
- [some](array.JSONArray.md#some)
- [sort](array.JSONArray.md#sort)
- [splice](array.JSONArray.md#splice)
- [toLocaleString](array.JSONArray.md#tolocalestring)
- [toString](array.JSONArray.md#tostring)
- [unshift](array.JSONArray.md#unshift)
- [values](array.JSONArray.md#values)

## Properties

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[unscopables]?` | `boolean` | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?` | `boolean` | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |
| `[iterator]?` | {} | - |
| `concat?` | {} | - |
| `copyWithin?` | {} | - |
| `entries?` | {} | - |
| `every?` | {} | - |
| `fill?` | {} | - |
| `filter?` | {} | - |
| `find?` | {} | - |
| `findIndex?` | {} | - |
| `forEach?` | {} | - |
| `indexOf?` | {} | - |
| `join?` | {} | - |
| `keys?` | {} | - |
| `lastIndexOf?` | {} | - |
| `map?` | {} | - |
| `pop?` | {} | - |
| `push?` | {} | - |
| `reduce?` | {} | - |
| `reduceRight?` | {} | - |
| `reverse?` | {} | - |
| `shift?` | {} | - |
| `slice?` | {} | - |
| `some?` | {} | - |
| `sort?` | {} | - |
| `splice?` | {} | - |
| `toLocaleString?` | {} | - |
| `toString?` | {} | - |
| `unshift?` | {} | - |
| `values?` | {} | - |

#### Inherited from

Array.\_\_@unscopables@84

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1305

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`JSONValue`](../modules/array.md#jsonvalue)\>

Iterator

#### Returns

`IterableIterator`<[`JSONValue`](../modules/array.md#jsonvalue)\>

#### Inherited from

Array.\_\_@iterator@82

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:58

___

### concat

▸ **concat**(`...items`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<[`JSONValue`](../modules/array.md#jsonvalue)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1329

▸ **concat**(`...items`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`JSONValue`](../modules/array.md#jsonvalue) \| `ConcatArray`<[`JSONValue`](../modules/array.md#jsonvalue)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1335

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`JSONArray`](array.JSONArray.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`JSONArray`](array.JSONArray.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:62

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, [`JSONValue`](../modules/array.md#jsonvalue)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, [`JSONValue`](../modules/array.md#jsonvalue)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:63

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONValue`](../modules/array.md#jsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1412

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1421

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`JSONArray`](array.JSONArray.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`JSONValue`](../modules/array.md#jsonvalue) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`JSONArray`](array.JSONArray.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:51

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONValue`](../modules/array.md#jsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

▸ **filter**(`predicate`, `thisArg?`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1454

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`JSONValue`](../modules/array.md#jsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `obj`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:29

▸ **find**(`predicate`, `thisArg?`): [`JSONValue`](../modules/array.md#jsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `obj`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:30

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `obj`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:41

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1436

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JSONValue`](../modules/array.md#jsonvalue) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1397

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1340

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:68

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`JSONValue`](../modules/array.md#jsonvalue) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1403

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1442

___

### pop

▸ **pop**(): [`JSONValue`](../modules/array.md#jsonvalue)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JSONValue`](../modules/array.md#jsonvalue)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1323

___

### reduce

▸ **reduce**(`callbackfn`): [`JSONValue`](../modules/array.md#jsonvalue)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => [`JSONValue`](../modules/array.md#jsonvalue) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1460

▸ **reduce**(`callbackfn`, `initialValue`): [`JSONValue`](../modules/array.md#jsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => [`JSONValue`](../modules/array.md#jsonvalue) |
| `initialValue` | [`JSONValue`](../modules/array.md#jsonvalue) |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1461

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1467

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`JSONValue`](../modules/array.md#jsonvalue)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => [`JSONValue`](../modules/array.md#jsonvalue) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduceRight**(`callbackfn`, `initialValue`): [`JSONValue`](../modules/array.md#jsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => [`JSONValue`](../modules/array.md#jsonvalue) |
| `initialValue` | [`JSONValue`](../modules/array.md#jsonvalue) |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1474

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`JSONValue`](../modules/array.md#jsonvalue), `currentIndex`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1480

___

### reverse

▸ **reverse**(): [`JSONValue`](../modules/array.md#jsonvalue)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1345

___

### shift

▸ **shift**(): [`JSONValue`](../modules/array.md#jsonvalue)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1350

___

### slice

▸ **slice**(`start?`, `end?`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1360

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`JSONValue`](../modules/array.md#jsonvalue), `index`: `number`, `array`: [`JSONValue`](../modules/array.md#jsonvalue)[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1430

___

### sort

▸ **sort**(`compareFn?`): [`JSONArray`](array.JSONArray.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`JSONValue`](../modules/array.md#jsonvalue), `b`: [`JSONValue`](../modules/array.md#jsonvalue)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`JSONArray`](array.JSONArray.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1378

▸ **splice**(`start`, `deleteCount`, `...items`): [`JSONValue`](../modules/array.md#jsonvalue)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`JSONValue`](../modules/array.md#jsonvalue)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`JSONValue`](../modules/array.md#jsonvalue)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1386

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1313

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1309

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`JSONValue`](../modules/array.md#jsonvalue)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1391

___

### values

▸ **values**(): `IterableIterator`<[`JSONValue`](../modules/array.md#jsonvalue)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<[`JSONValue`](../modules/array.md#jsonvalue)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:73
