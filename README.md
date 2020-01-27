
## property-manager [![npm][npm]](https://npmjs.org/package/property-manager)

[![Join the chat at https://gitter.im/snowyu/property-manager.js](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/snowyu/property-manager.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status][trvais]](http://travis-ci.org/snowyu/property-manager.js)
[![Test Coverage][codeClimateTest]](https://codeclimate.com/github/snowyu/property-manager.js/coverage)
[![Code Climate][codeClimate]](https://codeclimate.com/github/snowyu/property-manager.js)
[![downloads][downloads]](https://npmjs.org/package/property-manager)
[![license][license]](https://npmjs.org/package/property-manager)

[npm]:https://img.shields.io/npm/v/property-manager.svg
[trvais]:https://img.shields.io/travis/snowyu/property-manager.js/master.svg
[downloads]:https://img.shields.io/npm/dm/property-manager.svg
[license]:https://img.shields.io/npm/l/property-manager.svg
[coveralls]:https://coveralls.io/repos/snowyu/property-manager.js/badge.svg?branch=master&service=github
[codeClimateTest]:https://codeclimate.com/github/snowyu/property-manager.js/badges/coverage.svg
[codeClimate]:https://codeclimate.com/github/snowyu/property-manager.js/badges/gpa.svg

make it easier to manage the properties/attributes of your class.

Features:

* Inherited properties with class.
* Assign properties from a plain object.
* Clone object.
* Compare object whether is the same.
* Export properties to a plain object.
* Declare properties with type and default value.
  * Suports `arrayOf` property with type
  * Suports property with `template`(the property value is determined by the template content):
    * `template` *{string | (this) => string}*:
      * the template string, eg, `'${author}-${uuid()}'`
      * or customize template function, `function() {return this.author + '-' + uuid()}`
    * `imports`: *{Object}* the optional functions could be used in the template string.
    * **NOTE**: the template property is readonly by default. You can make it writealbe.
      Once a new value has been written, the template will be no useful unless the new value is null or undefined.

We often need to manage the properties of an object, consider the following:

* Set the options to the properties of object when the object was created
  * `var myObj = new MyObject({opt1:value1, opt2:value2})`
* Assign the options from another object:
  * `myObj.assign({opt1:v1, opt2:v2})`
* Clone an object:
  * `var newObj = myObj.clone()`
* Compare two objects whether is the same by their options(assigned properties).
  * `myObj.isSame(anotherObj)`
* Export the properties as a plain object or JSON to make recreate the object easier in the future.
  * There are some internal attributes should not be exported.
  * The empty or default value of an attribute should not be exported.
  * the meaningful(non-english) name should be exported and assigned.
  * `myObj.toObject()` and `myObj.toJSON()`
  * `JSON.stringify(myObj)`

1. Problem: how to assign an object value of a property?
   * replace the standard `assignPropertyTo()` method.
   * define the attribute's `assign(value, dest, src, name)` method on the `$attributes`.
     * the custom attribute's` assign` the value. return the changed value.
2. Problem: how to decide which property should be assign or get default value of an attribute?
   1. define all attriubtes on this object even though the value is null.
      * no default value feature.
   2. define a simple `$attributes` property to manage this:
      * {attrName: {value:'defaultValue'}, ...}
   3. define a complex `$attributes`(use `Properties` class) to manage attibutes.

So we have these classes: SimplePropertyManager,NormalPropertyManager and AdvancePropertyManager.

first the rules of the properties:

* exported attributes means they are the JSON.stringify(aObj) attributes only.
* The non-enumerable attributes can not be exported and assigned.
* The enumerable attributes beginning with '$' can not be exported. but can be assigned.
* `undefined` value can not be exported.
* the readonly(writable is false) attributes can not be assigned.
* the assignment order of properties is the order of defined properties.

### You can inherit from it.

* SimplePropertyManager: /lib/simple
  * use the object's property descriptor directly.
  * so do not support default value.
  * do not support object value assignment hook function.
  * do not support meaningful(non-english) name.
* NormalPropertyManager: /lib/normal
  * use the `$attributes` plain object to hold the declaration properties
  * support default value.
  * support object value assignment hook function.
  * support meaningful(non-english) name.
* AdvancePropertyManager: /lib/advance
  * use the `$attributes` to hold the declaration properties
  * the `$attributes` is an instance of `Properties` class.
  * so you can custom your `Properties` class inherited from.
  * support default value.
  * support object value assignment hook function.
  * support meaningful(non-english) name.
  * support type check if possible.


The `$attributes` holds all attributes(like the property descriptor) of an object.
The `key` is the property name. the value is the property descriptor:

* name *(String)*: the non-english name to export, Defaults to the `key` name.
* value: the property's default value if exists. Defaults to `undefined`.
* type *(String)*: the property's type name. defaults to undefined.
* enumerable *(Boolean)*: defaults to true
  * true if and only if this property shows up during enumeration of
    the properties on the corresponding object.
* configurable *(Boolean)*: defaults to true
  * true if and only if the type of this property descriptor may be changed
    and if the property may be deleted from the corresponding object.
* writable *(Boolean)*: defaults to true
  * true if and only if the value associated with the property may be changed
    with an assignment operator.
* assign *(Function(value, dest, src, name))*:the custom attribute assignment function.
  just `return` the changed value. defaults to undefined.
  It means do not assign this value if return `undefined`
  * **Note**: It only used on assign the options from another object.
  * It's no effect if the assign the property individually. use the property descriptor `set` to do so.
  * Wrap it as smart-assign feature(only on Advance Property Manager):
    * add a hidden internal property with prefix automatically
    * add descriptor `get` function to read the property automatically
    * add descriptor `set` function to assign the property(call the `assign` descriptor) automatically.
* only available on Normal and Advance Property Manager:
  * `assigned` *(Boolean)*: whether the property can be assigned. defaults: undefined
    * if undefined then `=enumerable isnt false and (writable isnt false or isFunction(set))`
  * **Smart Assign Support** only available on AdvancePropertyManager
    * `assigned` *(Boolean|String)*: enable smart-assign support when the assigned is string
    * it uses the `nonExported1stChar+name` as the internal property name if the string is empty
    * the `assigned` string is the internal property name if it's non-empty.
  * `exported` *(Boolean)*: whether the property can be exported. defaults: undefined
    * if undefined then `=enumerable isnt false and the first char isnt "$"`
  * `alias` *(String|ArrayOf String)*: add the alias(es) to the property. It used via assignment from options.
  * `clone` *(Boolean)*: Whether clone default property value if the value is an object when initializing.
    defaults to true.

```js

'$attributes': {
  'attrName': {
    name: 'exportedName',
    value: 123,
    enumerable: false,
    type: 'String',
    configurable: true,
    writable: true,
    assign: function(value, dest, src, name)
    get: ...,
    set: ....
  }
}
```

### or inject it as an ability:

these methods will be added(replaced):

* `initialize(options)` : overwite this for assign options from constructor?
  * apply the initialized value of the properties to the object if possible.
  * then call `assign` method.
+ `assign(options)` : assign the options' attributes to this object.
  * how to decide which attriubte should be assign?
  * I need an attributes manage class? or just a simple attributes list?
  * or define all attributes even the value is null when initialize
  * this must be an optional feature.
+ `assignPropertyTo(dest, options, attributeName, value)`: assign an atrribute to dest.
  * you can override it to determine howto assign an object value.
+ `assignProperty(options, attributeName, value)`: assign an atrribute. called by `assign`
* `assignTo(dest)` : assign the attributes to this `dest`  object.
* `mergeTo(dest)`: merge the attributes itself to `dest` object.
  * do not overwrite the already exist attributes of the `dest`.
* `isSame(obj)`: compare the `obj`'s attributes whether is the same value with itself.
* `clone(options)`: create a new object with the same attributes' value.
* `toObject(options)`: convert it as plain object.
  * do not export the non-enumrable attributes or beginning with '$'
  * do not export the attribute's value is null
  * do not export the attribute's value is default value.
    * where to get the default value?
* `toJSON()`: this will call the `toObject()` to return.

Note: you should specify the position of the argument if the first argument is not the options

## Usage


### Make your class manage the properties

there are two ways to make your class manage the attributes.

* Class inherits from
  * inherits from PropertyManager directly.
* Ability to hook on any class
  * You need confirm these method names are not be used.
    The `$attributes` is used via normal and advance PropertyManager.
    the `nonExported1stChar` is used to change the first char of non-exported
    property, defaults to '$'. It must be exist.
    The first four methods must be exist. others are optional.
    But be care of their dependencies.
    1. $attributes (unless use simple PropertyManager)
    2. nonExported1stChar
    3. assign
    4. assignPropertyTo
    5. getProperties
    6. defineProperties
    7. clone (optional)
       * mergeTo
    8. initialize (optional)
       * getProperties
       * assign
    9. assignProperty (optional)
       * assignPropertyTo
    10. mergeTo (optional)
        * getProperties
        * assignPropertyTo
    11. exportTo (optional)
        * mergeTo
    12. assignTo (optional)
        * getProperties
        * assignPropertyTo
    13. toObject (optional)
        * exportTo
    14. toJSON (optional)
        * toObject
    15. isSame (optional)
        * mergeTo

#### Class Inherits

there are three PropertyManager class to use, the default is NormalPropertyManager.

```coffee
inherits = require 'inherits-ex/lib/inherits'
PropertyManager = require 'property-manager' # the default is normal
PropertyManager = require 'property-manager/lib/normal'
SimplePropertyManager = require 'property-manager/lib/simple'
AdvancePropertyManager = require 'property-manager/lib/advance'

# Only for Normal or Advance PropertyManager
defineProperties = ProperManager.defineProperties

class MyClass
  inherits MyClass, PropertyManager
  # if you use normal or advance property manager
  # you can define your properties here to:
  defineProperties MyClass, {
    'attr1': {value:123}
    'hidden': {value:1, enumerable: false}
    '$dontExport': {value:3, enumerable: true}
    'custom':
      value:{}
      assign:(value, dest, src, name)->
        value?={}
        value.exta = 123
        return value
  }
  constructor: (@name, options)->
    # if you use the SimplePropertyManager
    # you should define your properties here:
    #@defineProperties {
    #  'attr1': {value:123}
    #  'hidden': {value:1, enumerable: false}
    #  '$dontExport': {value:3, enumerable: true}
    #}
    super options

class MyClassEx
  inherits MyClassEx, MyClass
  defineProperties MyClassEx, {'extra': {value: 'extra'}}
  constructor: ->super

```
the following is javascript:

```js
var inherits = require('inherits-ex/lib/inherits');
var PropertyManager = require('property-manager');
var PropertyManager = require('property-manager/lib/normal');
var SimplePropertyManager = require('property-manager/lib/simple');
var AdvancePropertyManager = require('property-manager/lib/advance');

//# Only for Normal or Advance PropertyManager
var defineProperties = ProperManager.defineProperties

function MyClass(name, options) {
  this.name = name;
  // if you use the SimplePropertyManager
  // you should define your properties here:
  //this.defineProperties({
  //  'attr1': {value:123}
  //  'hidden': {value:1, enumerable: false},
  //  '$dontExport': {value:3, enumerable: true}
  //})
  PropertyManager.call(this, options);
}

inherits(MyClass, PropertyManager);

//only for normal, advance property manager
defineProperties(MyClass, {
    'attr1': {value:123},
    'hidden': {value:1, enumerable: false},
    '$dontExport': {value:3, enumerable: true},
    'custom': {
      value: {},
      assign: function(value, dest, src, name) {
        if (value == null) {
          value = {};
        }
        value.exta = 123;
        return value;
      }
    }
});

function MyClassEx() {
  MyClassEx.__super__.constructor.apply(this, arguments)
}
inherits(MyClassEx, MyClass);
defineProperties(MyClassEx, {'extra': {value: 'extra'}});


```

#### Ability to hook on any class

```coffee
propertyManager = require 'property-manager/ability'

class MyClass
  # add the property manager ability to MyClass
  # the default is normal property manager
  #   propertyManager MyClass
  # you can specified the property manager 'simple', 'advance', 'normal':
  #   propertyManager MyClass, 'simple'
  #   propertyManager MyClass, name: 'simple'
  # and you can specified the options position in the arguments
  propertyManager MyClass, optionsPosition: 1
  # you can exclude some non-core methods
  # propertyManager MyClass, optionsPosition: 1, exclude: ['assignTo', ...]
  # if you use normal or advance property manager
  # you can define your properties here to:
  defineProperties = MyClass.defineProperties
  defineProperties MyClass, {
    'attr1': {value:123}
    'hidden': {value:1, enumerable: false}
    '$dontExport': {value:3, enumerable: true}
    'custom':
      value:{}
      assign:(value, dest, src, name)->
        value?={}
        value.exta = 123
        return value
  }
  constructor: (@name, options)->
    # if you use the SimplePropertyManager
    # you should define your properties here:
    #@defineProperties {
    #  'attr1': {value:123, enumerable: true}
    # 'hidden': {value:1, enumerable: false}
    # '$dontExport': {value:3, enumerable: false}
    #}
    @initialize.apply @, arguments

class MyClassEx
  inherits MyClassEx, MyClass
  defineProperties MyClassEx, {'extra': {value: 'extra'}}
  constructor: ->super

```

the following is javascript:

```js
var propertyManager = require('property-manager/ability');

function MyClass(name, options) {
  // if you use the SimplePropertyManager
  // you should define your properties here:
  //this.defineProperties({
  //  'attr1': {value:123}
  //  'hidden': {value:1, enumerable: false},
  //  '$dontExport': {value:3, enumerable: false}
  //})
  this.name = name;
  this.initialize.apply(this, arguments);
}

// you can exclude some non-core methods:
//propertyManager(MyClass, {optionsPosition:1, exclude: ['assignTo', ...]})
propertyManager(MyClass, {optionsPosition: 1});
var defineProperties = MyClass.defineProperties;

//only for normal, advance property manager
defineProperties(MyClass, {
  'attr1': {value: 123},
  'hidden': {value: 1, enumerable: false},
  '$dontExport': {value: 3, enumerable: true},
  'custom': {
    value: {},
    assign: function(value, dest, src, name) {
      if (value == null) {
        value = {};
      }
      value.exta = 123;
      return value;
    }
  }
});

function MyClassEx() {
  MyClassEx.__super__.constructor.apply(this, arguments)
}
inherits(MyClassEx, MyClass);
defineProperties(MyClassEx, {'extra': {value: 'extra'}});

```

### Use the Property Manager

Now the `MyClass` class should have four attributes

* attr1: can be exported and assigned
* hidden: can not be exported and assigned
* $dontExport: can be assigned, can not be exported.
* custom: can be exported and assigned, the value be changed by
  `assign` function in the property descriptor.

the `MyClassEx` inherits from `MyClass` (NOTE: only for normal or advance property manager)

* extra: can be exported and assigned.
* others inherit from `MyClass`

```coffee
assert = require 'assert'
my = new MyClass 'aName', attr1: 3, hidden:11222, $dontExport: 1, custom:{b:12}
assert.deepEqual my.mergeTo(), attr1:3, $dontExport:1, custom:{b:12, exta: 123}
assert.equal my.hidden, 1 # the `hidden` can not be assigned and exported
assert.deepEqual my.toObject(), attr1:3 # the `$dontExport` can not be exported
assert.equal JSON.stringify(my), '{"attr1":3,"custom":{"b":12,"exta":123}}'

obj = my.clone()
assert.ok obj.isSame(my) # compare each assigned properties.
assert.deepEqual obj.mergeTo(), attr1:3, $dontExport:1, custom:{b:12, exta: 123}

myEx = new MyClassEx 'theClassEx', attr1: 3, hidden:11222, $dontExport: 1, custom:{b:12}
assert.deepEqual myEx.mergeTo(), extra:'extra', attr1:3, $dontExport:1, custom:{b:12, exta: 123}
```

the following is javascript:

```js
var assert = require('assert');

var my = new MyClass('aName', {
  attr1: 3,
  hidden: 11222,
  $dontExport: 1,
  custom: {
    b: 12
  }
});

assert.deepEqual(my.mergeTo(), {
  attr1: 3,
  $dontExport: 1,
  custom: {
    b: 12,
    exta: 123
  }
});

assert.equal(my.hidden, 1);

assert.deepEqual(my.toObject(), {
  attr1: 3
});

assert.equal(JSON.stringify(my), '{"attr1":3,"custom":{"b":12,"exta":123}}');

var obj = my.clone();

assert.ok(obj.isSame(my));

assert.deepEqual(obj.mergeTo(), {
  attr1: 3,
  $dontExport: 1,
  custom: {
    b: 12,
    exta: 123
  }
});
```

## API



## Changes

More recent changes see: [CHANGELOG.md](./CHANGELOG.md)

### v1.4.0

* feat: add the readonly to smart assigned property

```ts
@Properties
class Phone extends AdvancePropertyManager {
  @Prop({
    writable: false,
    exported: true,
    assigned: '',
  }) id!: string;
}
```

* **BROKEN CHANGE**: DO NOT EXPORT the readonly property by default unless exported is true.

```ts
@Properties
class Phone extends AdvancePropertyManager {
  @Prop({
    writable: false,
    exported: true,
  }) id!: string;
}
```


### v1.0.0

+ add the array with type supports.

```ts
import { arrayOf } from 'property-manager/lib/array';
import AdvancePropertyManager from 'property-manager/lib/advance';
import { PropertyManager as Properties, Property as Prop } from 'property-manager-decorator';

@Properties
class Phone extends AdvancePropertyManager {
  @Prop() value!: string;
  @Prop() codeNum!: string;
  @Prop() kind!: string;
  constructor(initValue?) {
    super(initValue);
  }
}

@Properties
class Contact extends AdvancePropertyManager {
  @Prop({type: String}) name!: string;
  @Prop({type: arrayOf(Phone)}) phones!: Phone[];
  constructor(initValue?) {
    super(initValue);
  }
}
```
* **BROKEN** change `toObject` method params to `(options?: IMergeOptions)`
* **BROKEN** change `assign` method params to `(src, options?: IMergeOptions)`
* **BROKEN** change `assignTo` method params to `(dest, options?: IMergeOptions)`
* **BROKEN** change `assignPropertyTo` and `assignProperty` method params to `(dest, src, name: string, value, attrs?, options?: IMergeOptions)`
* **BROKEN** change `exportTo` method params to `(dest, options?: IExportOptions)`
* **BROKEN** change `mergeTo` method params to `(dest, options?: IMergeOptions)`
  + add `skipNull` and `skipUndefined` option to `IExportOptions` and `IMergeOptions`
+ add the `extends(attrs: Object, nonExported1stChar)` method to the `Properties`
  * return a new `Properties` instance to extends properties from current instance.
+ add the inherited properties supports for `AdvancePropertyManager.defineProperties`
* change the `recreate` argument default value of `defineProperties` to `false` for `AdvancePropertyManager` and `NormalPropertyManager`
* set all methods and non-properties of `Properties` to be non-enumerable.

### v0.13.0

+ add typed property for `AdvancePropertyManager` and `NormalPropertyManager`

```js
function CustomType(value) {
  if (!(this instanceof CustomType)) return new CustomType(value)
  try {
    value = JSON.parse(value)
  } catch(err) {
    this.value = value
  }
}

const attrs = {
  prop1: {type: CustomType, value: 111}
}

class TypedPM extends AdvancePropertyManager {
  constructor(opts) {
    super(opts)
  }
}
TypedPM.defineProperties(attrs)

const obj = new TypedPM()
console.log(obj.prop1 instanceof CustomType)
```

### v0.11.0

+ add the `skipExists` option to the `Properties.assignTo` and `Properties.assignPropertyTo`
* the options to the `Properties.assignTo(dest, src, options)`
  * `exclude`*(String|Array)*
  * `skipDefault`*(Boolean)*
  * `skipExists`*(Boolean)*
  * `skipReadOnly`*(Boolean)*
  * `exported`*(Boolean)*

### v0.10.0

+ add the alias property descriptor(Normal&Advance):
  * You can define one or more aliases to assign from other object(options)
  * `alias` *(String|ArrayOf String)*
* Smart assignment property supports(AdvancePropertyManager):
  * **broken**: SMART_ASSIGN constant deprecated.
  * `assigned` descriptor *(Boolean|String)*:
    * `String` means SMART_ASSIGN.
    * it's the internal property name of the smart assignment if it's string
    * the internal property name is the property name with prefix(`nonExported1stChar`)
      if it's an empty string
- **broken**: remove `attrsName` property(fixed to '$attributes')
+ add the helper function: properties/define-properties.

### v0.9.0

* clone default property value if the value is an object when initializing
  * the object instances will share the same one of property value if the default value of property is an object.
    * howto create a new object instance when initializing default value.
    * Solution 1: the `value` descriptor could be a function to create new object instance:
      * Problem1: it will be only available for normal and advance property manager
        * `value: function (){return Object.create()}`
      * Problem2: the value can not be a function now.
    * Solution 2: check the value whether is object. if so, clone it when initializing.
      * use this solution. but if someone wish all instance share the same value.
      * add a descriptor to control whethe enable this. but simple can not support the custom descriptor.
        + `clone` *(Boolean)*: defaults to true.
+ Smart assignment property supports:
  * assign property descriptor *(Function(value, dest, src, name))*:
    * It only used to assign the options from another object.
    * It's no effect if the assign the property individually. should use the property descriptor `set` to do so.
    * maybe I should wrap it:
      * add a hidden internal property with prefix(`nonExported1stChar`)
      * add descriptor `get` function to read the property
      * add descriptor `set` function to assign the property(call the `assign` descriptor).
    * need a descriptor to control whethe enable this.
      + `assigned`: AdvancePropertyManager::SMART_ASSIGN = 2
      * enabled: `!get and !set and assigned is AdvancePropertyManager::SMART_ASSIGN`
    * only available for advance property manager.
    * **note**: only `value` argument is passed into `assign` descriptor when assignment the property individually.

### v0.8.0

+ add the property writable check: do not assign the readonly property.
* Normal, Advance
  + add the `assigned`, `exported` *(Boolean)* to property descriptor directly.
    * `assigned`: enumerable isnt false and (writable isnt false or isFunction(set)).
    * `exported`: enumerable isnt false and the first char isnt "$"
+ `PropertyManager::nonExported1stChar` *(Char)*, defaults to '$'
  * note: the `exported` descriptor is higher prior than `nonExported1stChar`.
+ `nonExported1stChar` option to the property manager ability.

### v0.7.0

* **broken** the arguments order of assign function in property descriptor are changed:
  * attr.assign(value, dest, src, name) instead of assign(dest, src, value, name)

###

## License

MIT
