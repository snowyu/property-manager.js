
# property-manager [![npm][npm]](https://npmjs.org/package/property-manager)

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
[codeClimateTest]:https://codeclimate.com/github/snowyu/property-manager.js/badges/coverage.svg
[codeClimate]:https://codeclimate.com/github/snowyu/property-manager.js/badges/gpa.svg

使得业务对象/类的属性更容易管理.

适用于需要围绕业务对象/类来维护管理数据的场合. 我们首先需要定义该业务对象有哪些数据类型.

能够快速对该业务对象的公开属性进行赋值,合并,导出(JsonObject)以及校验.

功能:

* 定义的属性可跟随业务类继承
* 业务对象/类赋值属性从纯对象(JSON Object).
* 克隆业务对象.
* 比较业务对象是否相同(所有属性值相同).
* 导出属性到纯对象(JSON Object).
* 定义/声明属性类型及默认值
  * 支持 `arrayOf` 带类型的数组类型
  * 支持模板属性`template`(属性值由模板内容确定):
    * `template` *{string | (this) => string}*:
      * 字符串(模板), 如, `'${author}-${uuid()}'`
      * 或模板函数, 如, `function() {return this.author + '-' + uuid()}`
    * 导入的函数供模板使用 `imports`: *{Object}* the optional functions could be used in the template string.
    * **注意**: 默认模板属性为只读,不过也可以将它设置为可写. 一旦新值被写入后,模板就不再有用,除非新值是`null`或`undefined`

我们经常需要管理一个对象的属性，考虑以下几点：

* 创建业务对象时将选项设置为对象的属性
  * `var myObj = new MyObject({opt1:value1, opt2:value2})`
* 赋值(设置)来自另一个对象的属性
  * `myObj.assign({opt1:v1, opt2:v2})`
* 克隆业务对象(属性值完全相同):
  * `var newObj = myObj.clone()`
* 通过分配的属性比较两个对象是否相同。
  * `myObj.isSame(anotherObj)`
* 将属性导出为普通对象或 JSON，以便将来更轻松地重新创建对象。
  * 有一些内部属性不应该被导出。
  * 不应导出属性的空值或默认值。
  * 应该导出并分配有意义的（非英语）名称。
  * `myObj.toObject()` and `myObj.toJSON()`
  * `JSON.stringify(myObj)`

1. Problem: 如何为对象属性赋值？
   * replace the standard `assignPropertyTo()` method.
   * define the attribute's `assign(value, dest, src, name)` method on the `$attributes`.
     * the custom attribute's `assign` the value. return the changed value.
2. Problem: 如何决定应该为也许对象中的哪些属性赋值或获取属性的默认值？
   1. 在此对象上预先定义所有属性，即使值为 null。
      * 不支持默认值
   2. 定义一个简单的 `$attributes` 属性来管理属性及默认值:
      * `{attrName: {value:'defaultValue'}, ...}`
   3. 定义一个复杂的 `$attributes`（使用 `Properties` 类）来管理属性

所以我们有了相应的属性管理类：`SimplePropertyManager`、`NormalPropertyManager` 和 `AdvancePropertyManager`。

首先是属性规则:

* 导出的属性意味着它们是 `JSON.stringify(aObj)` 属性。
* 不可枚举的属性不能被`导出`(`export`)和`赋值`(`assign`)。
* 无法导出以"`$`"开头的可枚举属性,但可以被`赋值`(`assign`)。
* `undefined` 值无法导出。
* 只读（可写`writable`为假）属性不能赋值。
  * **重要**: 默认情况下，只读属性（`writable: false`）**不会被导出**。如果希望一个只读属性被导出（例如，在 `toObject()` 或 `toJSON()`的结果中出现），您必须明确地设置 `exported: true`。
* 属性的赋值顺序就是定义的属性的顺序。

## 用法

### 你可以继承它

* `SimplePropertyManager`: /lib/simple
  * 直接使用对象的属性描述符。
  * 所以不支持默认值。
  * 不支持对象赋值钩子函数。
  * 不支持有意义的（非英文）名称(别名)。
  * 在定义属性时,不能使用 `nonExported1stChar` 和 `defaultOptions` 作为属性名。
* `NormalPropertyManager`: /lib/normal
  * 使用 `$attributes` 普通对象来保存声明属性
  * 支持默认值
  * 支持对象赋值钩子函数
  * 支持有意义的（非英文）名称(别名)
  * **建议**: 为了便于将来升级到 `AdvancePropertyManager`, 建议您在定义属性时, 避免使用 `AdvancePropertyManager` 的保留关键字: `_names`, `_ixNames`, `nonExported1stChar`, `extends`, `merge`, `mergeTo`, `mergePropertyTo`, `_initialize`, `initialize`, `updateNames`, `initializeTo`, `getRealAttrName`, `validatePropertyValue`, `assignPropertyTo`, `assignTo`, `isDefaultObject`, `getValue`。
* `AdvancePropertyManager`: /lib/advance
  * 使用 `$attributes` 来保存声明属性
  * `$attributes` 是 `Properties` 类的实例。
  * 因此您可以自定义继承自的“Properties”类。
  * 支持默认值
  * 支持对象赋值钩子函数
  * 支持有意义的（非英文）名称(别名)
  * 如果可能，支持类型检查
  * **注意**: 由于 `$attributes` 是 `Properties` 类的实例, 因此在定义属性时, 属性名称不能与 `Properties` 类的保留方法名冲突。这些保留名称包括: `_names`, `_ixNames`, `nonExported1stChar`, `extends`, `merge`, `mergeTo`, `mergePropertyTo`, `_initialize`, `initialize`, `updateNames`, `initializeTo`, `getRealAttrName`, `validatePropertyValue`, `assignPropertyTo`, `assignTo`, `isDefaultObject`, `getValue`。

`$attributes` 包含对象的所有属性（如属性描述符）,其中`key` 是属性名称。 而`value`值是属性描述符对象.

**属性描述符对象**:

* `name` *(String)*: 要导出的非英文名称，默认为 `key` 名称。
* `value`: 属性的默认值（如果存在）。 默认为 `undefined`。
* `type` *(String)*: 属性的类型名称。 默认为 `undefined`。
* `enumerable` *(Boolean)*: defaults to true
  * 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
* `configurable` *(Boolean)*: defaults to true
  * 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
* writable *(Boolean)*: defaults to true
  * 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。
* assign *(Function(value, dest, src, name))*: defaults to `undefined`.
  * 自定义属性赋值函数。只需“返回”更改后的值。如果返回 `undefined` 就不要赋值
  * **注意**: 它只用于从另一个对象赋值时。
  * 如果单独对属性赋值，则无效。 请使用属性描述符 `set` 来做到这一点。
  * 将其封装为智能赋值功能（仅支持 Advance Property Manager ）：
    * 自动添加带前缀的隐藏内部属性
    * 自动添加描述符 `get` 函数以读取属性
    * 自动添加描述符 `set` 函数来写入属性（调用 `assign` 描述符）
* 仅适用于 Normal 和 Advance Property Manager:
  * `assigned` *(Boolean)*: 是否属性可被赋值. defaults: `undefined`
    * 如果 `undefined` 那么是否可被赋值由此决定: `enumerable isn't false and (writable isn't false or isFunction(set))`
  * **智能赋值支持(Smart Assign Support)** 仅适用于 `AdvancePropertyManager`
    * `assigned` *(Boolean|String)*: 当“assigned”值为字符串时启用`智能赋值`支持
    * 如果字符串值为空("")，那么它使用 `nonExported1stChar+[name]` 作为内部属性名称
    * 当字符串值非空,那么该`assigned`值作为内部属性名
    * 根据属性的可写性,自动创建对应的`get`/`set`描述符.
  * `exported` *(Boolean)*: 是否该属性可被导出. defaults: `undefined`
    * 如果 `undefined` 那么是否可被导出由此决定: `enumerable isn't false and the first char isn't "$"`
  * `alias` *(String|ArrayOf String)*: 该属性的别名. 用于从其它纯对象选项中赋值时
  * `clone` *(Boolean)*: 初始化时如果值为对象，是否克隆默认属性值。defaults to true.
  * `skipDefault` *(Boolean)*: 是否在导出的时候跳过默认值。defaults to true.

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

### 或者作为能力注入

当作为能力注入时,以下方法将被添加(或替换):

* `initialize(options)` : overwrite this for assign options from constructor?
  * 如果可能，将属性的初始化值应用于对象。
  * 然后调用`赋值`(`assign`) 方法.

+ `assign(options)` : assign the options' attributes to this object.
  * how to decide which attribute should be assign?
  * I need an attributes manage class? or just a simple attributes list?
  * or define all attributes even the value is null when initialize
  * this must be an optional feature.
+ `assignPropertyTo(dest, options, attributeName, value)`: assign an attribute to dest.
  * you can override it to determine howto assign an object value.
+ `assignProperty(options, attributeName, value)`: assign an atrribute. called by `assign`

* `assignTo(dest)` : assign the attributes to this `dest` object.
* `mergeTo(dest, options)`: 将this对象的属性值写入到 `dest` object, 如果options对象存在,并且options中的属性值存在,那么options中的属性值将覆盖原值.
  * do not overwrite the already exist attributes of the `dest`.
* `isSame(obj)`: compare the `obj`'s attributes whether is the same value with itself.
* `clone(options)`: 克隆对象, 如果options对象存在,并且options中的属性值存在,那么options中的属性值将覆盖原值.
* `toObject(options)`: convert it as plain object.
  * do not export the non-enumerable attributes or beginning with '$'
  * do not export the attribute's value is null
  * do not export the attribute's value is default value.
    * where to get the default value?
* `toJSON()`: this will call the `toObject()` to return.

注意: 如果构造函数的第一个参数不是**属性选项**,那么你需要指定`属性选项`参数位置.

### 让你的类能够管理(导入/导出)属性

有下列三种方式使你的类可以管理属性:

* 继承方式:让你的类继承自属性管理器
  * inherits from PropertyManager directly.
* 通过将属性能力注入到你的类
  * 你需要确保下列的成员名称没有被类使用.
    1. The `$attributes` 成员用于 `normal` and `advance` PropertyManager.
    2. `nonExported1stChar` 成员用于改变非导出(`non-exported`)属性首字符约定,默认为 '`$`'.
    * 前四种方法必须存在。其他是可选的。但要注意它们的依赖性。
      1. assign
      2. assignPropertyTo
      3. getProperties
      4. defineProperties
      5. clone (optional)
         * mergeTo
      6. initialize (optional)
         * getProperties
         * assign
      7. assignProperty (optional)
         * assignPropertyTo
      8. mergeTo (optional)
          * getProperties
          * assignPropertyTo
      9. exportTo (optional)
          * mergeTo
      10. assignTo (optional)
          * getProperties
          * assignPropertyTo
      11. toObject (optional)
          * exportTo
      12. toJSON (optional)
          * toObject
      13. isSame (optional)
          * mergeTo
* 修饰器: [property-manager-decorator](https://github.com/snowyu/property-manager-decorator.ts/tree/v2)

#### Class Inherits

有三类属性管理器可供选择, 默认是`NormalPropertyManager`,详细介绍参见前述.

* `SimplePropertyManager`: 最简单的属性管理器,直接使用JS的对象属性描述符,因此无法在类上定义属性
* `NormalPropertyManager`: 常规属性管理器,通过在类上的`prototype`的`$attributes`纯对象管理定义的属性
* `AdvancePropertyManager`:高级属性管理器,通过在类上的`prototype`的`$attributes` `Properties`对象管理定义的属性

```js
// var inherits = require('inherits-ex/lib/inherits');
// var PropertyManager = require('property-manager');
// var PropertyManager = require('property-manager/lib/normal');
// var SimplePropertyManager = require('property-manager/lib/simple');
// var AdvancePropertyManager = require('property-manager/lib/advance');
import {inherits} from 'inherits-ex'
import {SimplePropertyManager, NormaPropertyManager, AdvancePropertyManager} from 'property-manager'

const ProperManager = NormaPropertyManager

//# Only for Normal or Advance PropertyManager
var defineProperties = ProperManager.defineProperties

class MyClass extends ProperManager {
  constructor(name, options) {
    super()
    this.name = name

    // if you use the SimplePropertyManager
    // you should define your properties here:
    //this.defineProperties({
    //  'attr1': {value:123}
    //  'hidden': {value:1, enumerable: false},
    //  '$dontExport': {value:3, enumerable: true}
    //})

    // initialize ProperManager
    this.initialize(options)
  }
}

/*
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
*/

// Only for normal and advance property manager
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

/*
function MyClassEx() {
  MyClassEx.__super__.constructor.apply(this, arguments)
}
inherits(MyClassEx, MyClass);
*/

class MyClassEx extends MyClass {}

// Inherited properties from MyClass
defineProperties(MyClassEx, {'extra': {value: 'extra'}});
```

#### 灵活的属性能力注入到任意类中

通过`PropertyAbility`函数将属性能力注入到任意类中.

`PropertyAbility(target:Function|Object, options?)` 如果没有参数那么就是默认的`normal`属性管理器.

options:

* `name`: `{'simple' | 'advance' | 'normal' | 'abstract'}` 选定属性管理器, 默认为 `normal`
* `optionsPosition`: `{number}`, 可选的属性选项参数位置,在构造函数中需要导入Json对象属性时使用.
* `exclude`: `{string[]}` 不需要注入的属性能力方法名称列表，默认为空。

```js
// var PropertyAbility = require('property-manager/ability');
import {PropertyAbility} from 'property-manager'

class MyClass {
  constructor(name, options) {
    // if you use the SimplePropertyManager
    // you should define your properties here:
    //this.defineProperties({
    //  'attr1': {value:123}
    //  'hidden': {value:1, enumerable: false},
    //  '$dontExport': {value:3, enumerable: false}
    //})
    this.name = name;
    // initialize PropertyManager
    this.initialize.apply(this, arguments);
  }
}

/*
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
*/

// add the property manager ability to MyClass
// the default is normal property manager
//   PropertyAbility(MyClass)
// you can specified the property manager 'simple', 'advance', 'normal':
//   PropertyAbility(MyClass, 'simple')
//   PropertyAbility(MyClass, {name: 'simple'})
// and you can specified the options position in the arguments
//  the first argument(arguments[0]) is `name`, and the second(arguments[1]) is the options
PropertyAbility(MyClass, {optionsPosition: 1});
// you can exclude some non-core methods:
//PropertyAbility(MyClass, {optionsPosition:1, exclude: ['assignTo', ...]})

// You can define your properties here to:
var defineProperties = MyClass.defineProperties;

//only for normal, advance property manager
defineProperties(MyClass, {
  'attr1': {value: 123},
  'hidden': {value: 1, enumerable: false},
  '$dontExport': {value: 3, enumerable: true},
  'date': {
    assign(value, dest, src, name, {isExported}) {
      let result;
      if (isExported) {
        result = value.toISOString()
      } else if (!(value instanceof Date)) {
        result = new Date(value)
      }
      return result;
    }
  }
  'custom': {
    value: {},
    assign: function(value, dest, src, name, opts) {
      if (value == null) {
        value = {};
      }
      value.exta = 123;
      return value;
    }
  }
});

class MyClassEx extends MyClass {}

/*
function MyClassEx() {
  MyClassEx.__super__.constructor.apply(this, arguments)
}
inherits(MyClassEx, MyClass);
*/

// Inherited properties from MyClass
defineProperties(MyClassEx, {'extra': {value: 'extra'}});
```

### 使用方式

使用方式非常简单,和平常的对象属性使用没啥区别. 定义属性也和`Object.defineProperties`类似.

现在 `MyClass` 类上有了下面几个属性:

* `attr1`: 可导出及赋值
* `hidden`: 不能导出及赋值
* `date`: the date 可导出及赋值
* `$dontExport`: 可赋值, 但不可导出
* `custom`: 可导出及赋值, 赋值将被属性描述符中的 `assign` 函数改变.

`MyClassEx` 派生至 `MyClass` (注: 仅支持normal 或 advance property manager)

* `extra`: 可导出及赋值
* 其它属性继承至 `MyClass`

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

// the `hidden` can not be assigned and exported
assert.equal(my.hidden, 1);

// the `$dontExport` can not be exported
assert.deepEqual(my.toObject(), {
  attr1: 3
});

assert.equal(JSON.stringify(my), '{"attr1":3,"custom":{"b":12,"exta":123}}');

var obj = my.clone();

// compare each assigned properties.
assert.ok(obj.isSame(my));

assert.deepEqual(obj.mergeTo(), {
  attr1: 3,
  $dontExport: 1,
  custom: {
    b: 12,
    exta: 123
  }
});

var myEx = new MyClassEx('theClassEx', {attr1: 3, hidden:11222, $dontExport: 1, custom:{b:12}})
assert.deepEqual(myEx.mergeTo(), {extra:'extra', attr1:3, $dontExport:1, custom:{b:12, exta: 123}})
```

### 高级用法：类型化数组和嵌套对象

除了基本的属性管理外，`property-manager` 还支持更复杂的场景，例如处理包含特定类型元素的数组，或将纯对象自动转换为类的实例。这在构建结构化、类型安全的数据模型时非常有用。

#### 1. 类型化数组 `arrayOf`

当你需要一个数组属性，并希望确保该数组中的所有元素都是某个特定类的实例时，你可以使用 `arrayOf` 辅助函数。

`arrayOf(Type)` 会创建一个特殊的数组，当你向该数组中添加新元素时，它会自动将这些元素（如果是纯对象）转换为 `Type` 的实例。

**示例：**

```js
import { AdvancePropertyManager, defineProperties } from 'property-manager';
import { arrayOf } from 'property-manager/lib/array';

// 定义一个 Phone 类
class Phone extends AdvancePropertyManager { ... }
defineProperties(Phone, { number: { type: String } });

// 定义一个 Contact 类，它有一个 phones 数组
class Contact extends AdvancePropertyManager { ... }
defineProperties(Contact, {
  name: { type: String },
  phones: { type: arrayOf(Phone) } // phones 数组中的每个元素都将是 Phone 的实例
});

const contact = new Contact({
  name: 'John',
  phones: [
    { number: '123-456-7890' }, // 这是一个纯对象
    { number: '098-765-4321' }  // 这也是一个纯对象
  ]
});

// 验证自动转换
// contact.phones[0] 现在是一个 Phone 类的实例, 而不是纯对象
console.log(contact.phones[0] instanceof Phone); // 输出: true
```

#### 2. 嵌套的属性管理器对象

如果一个对象的属性本身就是另一个复杂的对象（也由 `property-manager` 管理），你只需在 `type` 中指定其对应的类即可。`property-manager` 会在赋值时自动完成从纯对象到类实例的转换。

这使得构建嵌套的数据模型变得非常简单和直观。

**示例：**

```js
import { AdvancePropertyManager, defineProperties } from 'property-manager';

// 1. 定义内层的 Address 类
class Address extends AdvancePropertyManager { ... }
defineProperties(Address, {
  street: { type: String },
  city: { type: String }
});

// 2. 定义外层的 Person 类
class Person extends AdvancePropertyManager { ... }

// 3. 在 Person 的属性中，直接使用 Address 类作为类型
defineProperties(Person, {
  name: { type: String },
  address: { type: Address } // <-- 关键点
});

// 4. 使用嵌套的纯对象进行实例化
const person = new Person({
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
});

// 5. 验证自动转换
// person.address 现在是一个 Address 类的实例
console.log(person.address instanceof Address); // 输出: true
console.log(person.address.city); // 输出: Anytown
```

## 辅助函数

### toJsonSchema

`toJsonSchema` 辅助函数将 `PropertyManager` 实例定义的属性转换为 JSON Schema。这对于根据您的 `PropertyManager` 模型生成用于数据验证、API 文档或表单生成的 Schema 定义特别有用。

**用法**

```javascript
import { AdvancePropertyManager, defineProperties } from 'property-manager';
import { toJsonSchema } from 'property-manager/lib/to-json-schema';

class MyDataModel extends AdvancePropertyManager { }

defineProperties(MyDataModel, {
  id: { type: Number, value: 0 },
  name: { type: String, value: '' },
  isActive: { type: Boolean, value: true },
  tags: { type: Array, value: [], itemType: String },
  address: {
    type: Object,
    properties: {
      street: { type: String },
      city: { type: String }
    }
  }
});

const schema = toJsonSchema(MyDataModel);
console.log(JSON.stringify(schema, null, 2));
/*
Output:
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number",
      "default": 0
    },
    "name": {
      "type": "string",
      "default": ""
    },
    "isActive": {
      "type": "boolean",
      "default": true
    },
    "tags": {
      "type": "array",
      "default": [],
      "items": {
        "type": "string"
      }
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        }
      }
    }
  }
}
*/
```

**参数**

`toJsonSchema(target: Function | Object)`

* `target`: 要生成 JSON Schema 的 `PropertyManager` 类或 `PropertyManager` 实例。

**返回值**

* `object` - 一个 JSON Schema 对象，表示 `PropertyManager` 实例中定义的属性。

### toUISchema

`toUISchema` 辅助函数将 `PropertyManager` 实例或类定义的属性转换为 [React JSON Schema Form (RJSF)](https://react-jsonschema-form.readthedocs.io/) 的 `uiSchema` 对象。这对于控制表单字段的 UI 表现（例如，将字段设为只读或使用特定的小部件）非常有用。

**用法**

```javascript
import { AdvancePropertyManager, defineProperties } from 'property-manager';
import { toUISchema } from 'property-manager/lib/to-ui-schema';

class MyFormModel extends AdvancePropertyManager { }

defineProperties(MyFormModel, {
  id: { type: Number, writable: false }, // 只读字段
  name: { type: String, value: '', 'ui:placeholder': '请输入名称' }, // 自定义 UI 属性
  bio: { type: String, value: '', 'ui:widget': 'textarea' },
  nested: {
    type: Object,
    properties: {
      field1: { type: String, 'ui:title': '字段一' }
    }
  }
});

const uiSchema = toUISchema(MyFormModel);
console.log(JSON.stringify(uiSchema, null, 2));
/*
Output:
{
  "id": {
    "ui:readonly": true
  },
  "name": {
    "ui:placeholder": "请输入名称"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "nested": {
    "field1": {
      "ui:title": "字段一"
    }
  }
}
*/
```

**参数**

* `toUISchema(target: Function | Object)`
  * `target`: 要生成 `uiSchema` 的 `PropertyManager` 类或 `PropertyManager` 实例。

**返回值**

* `object` - 一个 RJSF `uiSchema` 对象。

### toRjsf

`toRjsf` 是一个便捷的辅助函数，它将 `PropertyManager` 实例同时转换为 JSON Schema 和 UI Schema，这正是 [React JSON Schema Form (RJSF)](https://react-jsonschema-form.readthedocs.io/) 所需的格式。

**用法**

```javascript
import { AdvancePropertyManager, defineProperties } from 'property-manager';
import { toRjsf } from 'property-manager/lib/to-rjsf';

class MyDataModel extends AdvancePropertyManager { }

defineProperties(MyDataModel, {
  name: { type: String, value: '' },
  isActive: { type: Boolean, value: true, writable: false }
});

const { schema, uiSchema } = toRjsf(MyDataModel);

console.log('--- Schema ---');
console.log(JSON.stringify(schema, null, 2));

console.log('\n--- UI Schema ---');
console.log(JSON.stringify(uiSchema, null, 2));

/*
Output:
--- Schema ---
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "default": ""
    },
    "isActive": {
      "type": "boolean",
      "default": true
    }
  }
}

--- UI Schema ---
{
  "isActive": {
    "ui:readonly": true
  }
}
*/
```

**参数**

* `toRjsf(target: Function | Object)`
  * `target`: 要转换的 `PropertyManager` 类或 `PropertyManager` 实例。

**返回值**

* `{schema: object, uiSchema: object}` - 一个包含 `schema` 和 `uiSchema` 的对象。

## Changes

More recent changes see: [CHANGELOG.md](./CHANGELOG.md)

### v2

* ES6 Class
* ESM support
* NodeJS >= 8

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
  * attr.assign(value, dest, src, name, opts) instead of assign(dest, src, value, name)

###

## License

MIT
