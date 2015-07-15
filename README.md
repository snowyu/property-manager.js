
## property-manager [![npm][npm]](https://npmjs.org/package/property-manager)

[![Build Status][trvais]](http://travis-ci.org/snowyu/property-manager.js)
[![downloads][downloads]](https://npmjs.org/package/property-manager)
[![license][license]](https://npmjs.org/package/property-manager)

[npm]:https://img.shields.io/npm/v/property-manager.svg
[trvais]:https://img.shields.io/travis/snowyu/property-manager.js/master.svg
[downloads]:https://img.shields.io/npm/dm/property-manager.svg
[license]:https://img.shields.io/npm/l/property-manager.svg

make it easier to manage the properties/attributes of your class.

We often need to manage the attributes of an object, consider the following:

* Set the options to the attributes of object when the object was created
  * `var myObj = new MyObject({opt1:value1, opt2:value2})`
* Assign the options from another object:
  * `myObj.assign({opt1:v1, opt2:v2})`
* Clone an object:
  * `var newObj = myObj.clone()`
* Compare two objects whether is the same by their options(exported attributes).
  * `myObj.isSame(anotherObj)`
* Export the attributes as a plain object or JSON to make recreate the object easier in the future.
  * There are some internal attributes should not be exported.
  * The empty or default value of an attribute should not be exported.
  * the non-english name should be exported and assigned.
  * `myObj.toObject()` and `myObj.toJSON()`
  * `JSON.stringify(myObj)`

1. Problem: how to assign an object value of an attribute?
   * replace the standard `assignPropertyTo()` method.
   * define the attribute's `assign(dest, src, value, name)` method on the `$attributes`.
     * the custom attribute's` assign` the value. return the changed value.
2. Problem: howto decide which attriubte should be assign or get default value of an attribute?
  1. define all attriubtes on this object even though the value is null.
     * no default value feature.
  2. define a simple `$attributes` property to manage this:
     * {attrName: {value:'defaultValue'}, ...}
  3. define a complex `$attributes`(use `Properties` class) to manage attibutes.

So we have these classes: SimplePropertyManager,NormalPropertyManager and AdvancePropertyManager.

first the rules of the attributes:

* exported attributes means they are the JSON.stringify(aObj) attributes only.
* The non-enumrable attributes can not be exported and assigned.
* The attributes beginning with '$' can not be exported. but can be assigned.

You can inherit from it.

* SimplePropertyManager: /lib/simple
  * use the object's property descriptor directly.
  * so do not support default value.
  * do not support object value assignment hook function.
  * do not support non-english name.
* NormalPropertyManager: /lib/normal
  * use the `$attributes` plain object to hold the declaration properties
  * support default value.
  * support object value assignment hook function.
  * support non-english name.
* AdvancePropertyManager: /lib/advance
  * use the `$attributes` to hold the declaration properties
  * the `$attributes` is an instance of `Properties` class.
  * so you can custom your `Properties` class inherited from.
  * support default value.
  * support object value assignment hook function.
  * support non-english name.
  * support type check if possible.


The `$attributes` holds all attributes of an object, like the property descriptor.
The `key` name is the property name. the value is the property descriptor:

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
* assign *(Function(dest, src, value, name))*:the custom attribute assignment function.
  just `return` the changed value. defaults to undefined.

```js

'$attributes': {
  'attrName': {
    name: 'exportedName',
    value: 123,
    enumerable: false,
    type: 'String',
    configurable: true,
    writable: true,
    assign: function(dest, src, value, name) // 
    get: ...,
    set: ....
  }
}
```


or inject it as an ability:

these methods will be added(replaced):

* `initialize(options)` : overwite this for assign options from constructor?
  * call `_initialize` if it is exists.
  * then call `assign` method.
+ `assign(options)` : assign the options' attributes to this object.
  * how to decide which attriubte should be assign?
  * I need an attributes manage class? or just a simple attributes list?
  * or define all attributes even the value is null when initialize
  * this must be an optional feature.
+ `assignProperty(options, attributeName, value)`: assign an atrribute. called by `assign`
  * you can override it to determine howto assign an object value.
* `assignTo(dest)` : assign the attributes to this `dest`  object.
  * = `@assign.call dest, @`
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
    1. assign
    2. assignPropertyTo
    3. getProperties
    4. defineProperties
    5. clone (optional)
    6. 

#### Class Inherits


there are three PropertyManager class, the default is NormalPropertyManager.

```coffee
inherits = require 'inherits-ex/lib/inherits'
PropertyManager = require 'property-manager'
PropertyManager = require 'property-manager/lib/normal'
SimplePropertyManager = require 'property-manager/lib/simple'
AdvancePropertyManager = require 'property-manager/lib/advance'

class MyClass
  inherits MyClass, PropertyManager
  # if you use normal or advance property manager
  # you can define your properties here to:
  ProperManager.defineProperties MyClass, {
    'attr1': {value:123, enumerable: true}
  }
  constructor: (options)->
    # if you use the SimplePropertyManager
    # you should define your properties here:
    #@defineProperties {
    #  'attr1': {value:123, enumerable: true}
    #}
    super

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

  # if you use normal or advance property manager
  # you can define your properties here to:
  MyClass.defineProperties MyClass, {
    'attr1': {value:123, enumerable: true}
  }
  constructor: (name, options)->
    # if you use the SimplePropertyManager
    # you should define your properties here:
    #@defineProperties {
    #  'attr1': {value:123, enumerable: true}
    #}
    @initialize.apply @, arguments
  initialize: (name, options)->
    console.log 'name=',name


```

## API


## License

MIT
