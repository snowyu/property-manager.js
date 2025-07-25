[**property-manager**](../../README.md)

***

[property-manager](../../modules.md) / [array](../README-1.md) / ArrayPropertyManager

# Class: ArrayPropertyManager

Defined in: [src/array.js:13](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L13)

## Extends

- `Array`

## Indexable

\[`n`: `number`\]: `any`

## Constructors

### Constructor

> **new ArrayPropertyManager**(`value`, `type`): `ArrayPropertyManager`

Defined in: [src/array.js:21](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L21)

#### Parameters

##### value

`any`

##### type

`any`

#### Returns

`ArrayPropertyManager`

#### Overrides

`Array.constructor`

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Index Signature

\[`key`: `number`\]: `boolean`

#### \[iterator\]?

> `optional` **\[iterator\]**: `boolean`

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### concat?

> `optional` **concat**: `boolean`

#### copyWithin?

> `optional` **copyWithin**: `boolean`

#### entries?

> `optional` **entries**: `boolean`

#### every?

> `optional` **every**: `boolean`

#### fill?

> `optional` **fill**: `boolean`

#### filter?

> `optional` **filter**: `boolean`

#### find?

> `optional` **find**: `boolean`

#### findIndex?

> `optional` **findIndex**: `boolean`

#### forEach?

> `optional` **forEach**: `boolean`

#### includes?

> `optional` **includes**: `boolean`

#### indexOf?

> `optional` **indexOf**: `boolean`

#### join?

> `optional` **join**: `boolean`

#### keys?

> `optional` **keys**: `boolean`

#### lastIndexOf?

> `optional` **lastIndexOf**: `boolean`

#### length?

> `optional` **length**: `boolean`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### map?

> `optional` **map**: `boolean`

#### pop?

> `optional` **pop**: `boolean`

#### push?

> `optional` **push**: `boolean`

#### reduce?

> `optional` **reduce**: `boolean`

#### reduceRight?

> `optional` **reduceRight**: `boolean`

#### reverse?

> `optional` **reverse**: `boolean`

#### shift?

> `optional` **shift**: `boolean`

#### slice?

> `optional` **slice**: `boolean`

#### some?

> `optional` **some**: `boolean`

#### sort?

> `optional` **sort**: `boolean`

#### splice?

> `optional` **splice**: `boolean`

#### toLocaleString?

> `optional` **toLocaleString**: `boolean`

#### toString?

> `optional` **toString**: `boolean`

#### unshift?

> `optional` **unshift**: `boolean`

#### values?

> `optional` **values**: `boolean`

#### Inherited from

`Array.[unscopables]`

***

### length

> **length**: `number`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1326

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

`Array.length`

***

### \[species\]

> `readonly` `static` **\[species\]**: `ArrayConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

#### Inherited from

`Array.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`any`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

Iterator

#### Returns

`ArrayIterator`\<`any`\>

#### Inherited from

`Array.[iterator]`

***

### concat()

#### Call Signature

> **concat**(...`items`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1350

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...`ConcatArray`\<`any`\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`any`[]

##### Inherited from

`Array.concat`

#### Call Signature

> **concat**(...`items`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1356

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...`any`[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`any`[]

##### Inherited from

`Array.concat`

***

### copyWithin()

> **copyWithin**(`target`, `start`, `end?`): `this`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:62

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

##### target

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

##### start

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

##### end?

`number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Array.copyWithin`

***

### entries()

> **entries**(): `ArrayIterator`\<\[`number`, `any`\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, `any`\]\>

#### Inherited from

`Array.entries`

***

### every()

#### Call Signature

> **every**\<`S`\>(`predicate`, `thisArg?`): `this is S[]`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1433

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

###### S

`S` *extends* `any`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is S[]`

##### Inherited from

`Array.every`

#### Call Signature

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1442

Determines whether all the members of an array satisfy the specified test.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`Array.every`

***

### fill()

> **fill**(`value`, `start?`, `end?`): `this`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:51

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

##### value

`any`

value to fill array section with

##### start?

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

##### end?

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

`Array.fill`

***

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1469

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

###### S

`S` *extends* `any`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`Array.filter`

#### Call Signature

> **filter**(`predicate`, `thisArg?`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1475

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`any`[]

##### Inherited from

`Array.filter`

***

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `thisArg?`): `S`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:29

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

###### S

`S` *extends* `any`

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`S`

##### Inherited from

`Array.find`

#### Call Signature

> **find**(`predicate`, `thisArg?`): `any`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:30

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

##### Returns

`any`

##### Inherited from

`Array.find`

***

### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:41

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Array.findIndex`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1457

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`Array.forEach`

***

### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`any`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Array.includes`

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1418

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

##### searchElement

`any`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`Array.indexOf`

***

### join()

> **join**(`separator?`): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1361

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Array.join`

***

### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

Returns an iterable of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Array.keys`

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1424

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

##### searchElement

`any`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`Array.lastIndexOf`

***

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1463

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

##### U

`U`

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`Array.map`

***

### pop()

> **pop**(): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1339

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`any`

#### Inherited from

`Array.pop`

***

### push()

> **push**(`value`, ...`arr`): `number`

Defined in: [src/array.js:36](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L36)

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

##### value

`any`

##### arr

...`any`[]

#### Returns

`number`

#### Overrides

`Array.push`

***

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1481

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `any`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

`any`

##### Inherited from

`Array.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1482

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `any`

###### initialValue

`any`

##### Returns

`any`

##### Inherited from

`Array.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1488

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduce`

***

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1494

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `any`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

`any`

##### Inherited from

`Array.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1495

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `any`

###### initialValue

`any`

##### Returns

`any`

##### Inherited from

`Array.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1501

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduceRight`

***

### reverse()

> **reverse**(): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1366

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`any`[]

#### Inherited from

`Array.reverse`

***

### shift()

> **shift**(): `any`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1371

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`any`

#### Inherited from

`Array.shift`

***

### slice()

> **slice**(`start?`, `end?`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1381

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

##### start?

`number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

##### end?

`number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

#### Returns

`any`[]

#### Inherited from

`Array.slice`

***

### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1451

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Array.some`

***

### sort()

> **sort**(`compareFn?`): `this`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1392

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

`Array.sort`

***

### splice()

#### Call Signature

> **splice**(`start`, `deleteCount?`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1399

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove.

##### Returns

`any`[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

#### Call Signature

> **splice**(`start`, `deleteCount`, ...`items`): `any`[]

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1407

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove.

###### items

...`any`[]

Elements to insert into the array in place of the deleted elements.

##### Returns

`any`[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

***

### toJSON()

> **toJSON**(): `any`[]

Defined in: [src/array.js:52](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L52)

#### Returns

`any`[]

***

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1334

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:64

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

***

### toObject()

> **toObject**(`options`): `any`[]

Defined in: [src/array.js:56](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L56)

#### Parameters

##### options

`any`

#### Returns

`any`[]

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1330

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Array.toString`

***

### unshift()

> **unshift**(`value`, ...`arr`): `number`

Defined in: [src/array.js:44](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L44)

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

##### value

`any`

##### arr

...`any`[]

#### Returns

`number`

#### Overrides

`Array.unshift`

***

### valueOf()

> **valueOf**(): `any`[]

Defined in: [src/array.js:69](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L69)

Returns the primitive value of the specified object.

#### Returns

`any`[]

***

### values()

> **values**(): `ArrayIterator`\<`any`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93

Returns an iterable of values in the array

#### Returns

`ArrayIterator`\<`any`\>

#### Inherited from

`Array.values`

***

### arrayOf()

> `static` **arrayOf**(`type`): (`value`) => `ArrayPropertyManager`

Defined in: [src/array.js:15](https://github.com/snowyu/property-manager.js/blob/2b37d0c5958df603b1f7a346809647025321a3c0/src/array.js#L15)

#### Parameters

##### type

`any`

#### Returns

> (`value`): `ArrayPropertyManager`

##### Parameters

###### value

`any`

##### Returns

`ArrayPropertyManager`

***

### from()

#### Call Signature

> `static` **from**\<`T`\>(`arrayLike`): `T`[]

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:72

Creates an array from an array-like object.

##### Type Parameters

###### T

`T`

##### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

##### Returns

`T`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:80

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`\>(`iterable`): `T`[]

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

##### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:109

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

`Array.from`

***

### isArray()

> `static` **isArray**(`arg`): `arg is any[]`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1513

#### Parameters

##### arg

`any`

#### Returns

`arg is any[]`

#### Inherited from

`Array.isArray`

***

### of()

> `static` **of**\<`T`\>(...`items`): `T`[]

Defined in: node\_modules/typescript/lib/lib.es2015.core.d.ts:86

Returns a new array from a set of elements.

#### Type Parameters

##### T

`T`

#### Parameters

##### items

...`T`[]

A set of elements to include in the new array object.

#### Returns

`T`[]

#### Inherited from

`Array.of`
