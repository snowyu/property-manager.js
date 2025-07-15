# Property Manager Schema 规范

本文档定义了 `property-manager.js` 库所使用的 Schema 规范，旨在使其能够与 UI 渲染库（特别是 [React JSON Schema Form (RJSF)](https://react-json-schema-form.readthedocs.io/en/latest/)）无缝集成。

## 核心理念

本规范的核心思想是采用**“超集” (Superset)** Schema 的设计。这意味着您的 `property-manager.js` Schema 将包含所有标准的 JSON Schema 关键字，并额外增加一个专门用于 UI 配置的字段（`ui`）。

通过这种方式，一个 Schema 定义文件可以同时承载数据的结构定义和 UI 的展现配置，实现关注点分离的同时，保持了高度的内聚性。

## Schema 结构

`property-manager.js` 的 Schema 是一个标准的 JSON Schema 对象，但它被扩展以包含一个可选的 `ui` 字段，用于定义 UI 相关的配置。

```javascript
const mySchema = {
  // --- 标准 JSON Schema 部分 ---
  // 遵循 JSON Schema Draft 07 规范
  title: "表单标题",
  description: "表单描述",
  type: "object", // 或 "string", "number", "array", "boolean" 等
  required: ["field1", "field2"], // 必需字段列表
  properties: {
    field1: {
      type: "string",
      title: "字段1标题",
      description: "字段1描述",
      default: "默认值",
      minLength: 3,
      maxLength: 10,
      pattern: "^[a-zA-Z0-9]*$",
      enum: ["option1", "option2"],
      // ... 更多标准 JSON Schema 关键字
    },
    field2: {
      type: "number",
      minimum: 0,
      maximum: 100,
      // ...
    },
    nestedObject: {
      type: "object",
      properties: {
        nestedField: {
          type: "string",
          format: "email"
        }
      }
    },
    arrayOfStrings: {
      type: "array",
      items: {
        type: "string"
      },
      minItems: 1,
      maxItems: 5
    },
    arrayOfObjects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" }
        }
      }
    }
  },
  // ... 更多标准 JSON Schema 关键字 (e.g., definitions, patternProperties)

  // --- UI 扩展部分 (可选) ---
  // 此字段的内容完全遵循 RJSF 的 uiSchema 规范。
  // 它定义了表单字段的 UI 展现方式、顺序、自定义组件等。
  ui: {
    "ui:order": ["field1", "field2", "nestedObject", "*"], // 字段排序
    field1: {
      "ui:widget": "textarea", // 使用文本域组件
      "ui:help": "请输入3到10个字符", // 帮助文本
      "ui:placeholder": "在此输入...", // 占位符
      "ui:autofocus": true,
      "ui:readonly": false,
      "ui:disabled": false,
      "ui:hidden": false,
      "ui:classNames": "custom-field-class",
      "ui:options": { // RJSF 选项，例如用于选择框
        "rows": 5
      }
    },
    field2: {
      "ui:widget": "updown", // 使用数字上下选择器
      "ui:readonly": true, // 只读
    },
    nestedObject: {
      "ui:title": "嵌套对象标题",
      "ui:description": "这是嵌套对象的描述",
      nestedField: {
        "ui:widget": "password",
        "ui:placeholder": "请输入密码"
      }
    },
    arrayOfStrings: {
      "ui:options": {
        "addable": true,
        "removable": true,
        "orderable": true
      }
    },
    arrayOfObjects: {
      "ui:options": {
        "orderable": false
      },
      items: { // 数组项的 UI 配置，同样支持递归
        "ui:title": "列表项",
        name: {
          "ui:widget": "alt-datetime"
        }
      }
    }
    // ... 更多 RJSF uiSchema 关键字
  },
};
```

### 字段说明与映射细节

### Property Manager 属性描述符 (`IPropDescriptor`) 与 JSON Schema 的关系

`property-manager.js` 库通过其内部的属性描述符 (`IPropDescriptor`) 来定义和管理业务对象的属性。这些描述符包含了比标准 JSON Schema 更丰富的配置，例如属性的赋值逻辑、导出规则等。在将 `property-manager.js` 定义的属性转换为 JSON Schema 时，只有与数据结构和验证相关的部分会被映射，而其他用于控制 `property-manager.js` 内部行为的字段则不会出现在最终的 JSON Schema 中。

以下是 `IPropDescriptor` 中常见字段的说明及其与 JSON Schema 的对应关系：

* **`name`** *(String)*:
  * **作用**: 定义属性在导出时可能使用的非英文名称（别名）。
  * **JSON Schema 映射**: **无直接映射**。JSON Schema 的属性名由其在 `properties` 对象中的键名决定。此字段主要影响 `property-manager.js` 的数据导出行为。

* **`value`**:
  * **作用**: 定义属性的默认值。
  * **JSON Schema 映射**: 直接映射到 JSON Schema 的 `default` 关键字。

* **`type`** *(String | Function)*:
  * **作用**: 定义属性的数据类型。可以是 JavaScript 的基本类型构造函数（如 `String`, `Number`, `Boolean`, `Array`, `Object`），也可以是其他 `property-manager.js` 管理的类。
  * **JSON Schema 映射**:
    * 当 `type` 是 `String`, `Number`, `Boolean` 时，映射到 JSON Schema 的 `"string"`, `"number"`, `"boolean"` 类型。
    * 当 `type` 是 `Array` 或 `arrayOf(SomeType)` 的实例时，映射到 JSON Schema 的 `"array"` 类型，并根据 `SomeType` 递归定义 `items` 字段。
    * 当 `type` 是 `Object` 或另一个 `AdvancePropertyManager` 的子类时，映射到 JSON Schema 的 `"object"` 类型，并递归定义其 `properties` 字段。

* **`enumerable`** *(Boolean)*:
  * **作用**: 控制属性是否可被枚举（例如在 `for...in` 循环或 `Object.keys()` 中可见）。
  * **JSON Schema 映射**: **无直接映射**。这是 JavaScript 属性的特性，不属于 JSON Schema 的范畴。

* **`configurable`** *(Boolean)*:
  * **作用**: 控制属性描述符是否可被修改，以及属性是否可从对象中删除。
  * **JSON Schema 映射**: **无直接映射**。

* **`writable`** *(Boolean)*:
  * **作用**: 控制属性的值是否可以通过赋值运算符 (`=`) 进行修改。
  * **JSON Schema 映射**: **无直接映射到 JSON Schema 的数据结构部分**。然而，当生成 RJSF 的 `uiSchema` 时，如果 `writable` 为 `false`，则应将其映射为 `"ui:readonly": true`，以使 UI 字段变为只读。

* **`assign`** *(Function)*:
  * **作用**: 自定义属性的赋值逻辑。当从其他对象赋值时，此函数会被调用。
  * **JSON Schema 映射**: **无直接映射**。这是一个 `property-manager.js` 内部的业务逻辑钩子。

* **`assigned`** *(Boolean | String)*:
  * **作用**: 控制属性是否可以被赋值。在 `AdvancePropertyManager` 中，如果为字符串，还支持智能赋值。
  * **JSON Schema 映射**: **无直接映射**。

* **`exported`** *(Boolean)*:
  * **作用**: 控制属性是否可以被导出到纯 JavaScript 对象（例如通过 `toObject()` 或 `toJSON()`）。
  * **JSON Schema 映射**: **无直接映射**。此字段影响 `property-manager.js` 的数据序列化行为，而非 Schema 定义。

* **`alias`** *(String | `Array<String>`)*:
  * **作用**: 为属性定义一个或多个别名，以便从其他纯对象中进行赋值匹配。
  * **JSON Schema 映射**: **无直接映射**。

* **`clone`** *(Boolean)*:
  * **作用**: 当属性的默认值是对象时，控制在初始化时是否克隆该默认值，以避免多个实例共享同一个默认对象。
  * **JSON Schema 映射**: **无直接映射**。

* **`skipDefault`** *(Boolean)*:
  * **作用**: 在导出数据时，如果属性的值等于其默认值，则跳过导出该属性。
  * **JSON Schema 映射**: **无直接映射**。

* **`get`** *(Function)* / **`set`** *(Function)*:
  * **作用**: 标准 JavaScript 属性的 getter 和 setter 函数，用于定义属性的访问和修改行为。
  * **JSON Schema 映射**: **无直接映射**。

**总结**:

`IPropDescriptor` 提供了强大的运行时属性管理能力。在转换为 JSON Schema 时，我们主要关注其描述数据结构和默认值的部分（如 `value` 和 `type`）。而那些与 `property-manager.js` 内部行为、赋值逻辑、导出控制等相关的字段，则不会体现在生成的 JSON Schema 中，因为它们超出了 JSON Schema 作为数据结构描述语言的范畴。

* **标准 JSON Schema 部分**:
  * `title`, `description`, `type`, `properties`, `required`, `default`, `minLength`, `maxLength`, `pattern`, `enum`, `minimum`, `maximum`, `format` 等所有标准的 JSON Schema 关键字都应被支持。
  * 对于嵌套对象和数组，其 `properties` 或 `items` 字段内部同样遵循 JSON Schema 规范，并支持递归定义。
  * **`required` 属性**: 在 `property-manager.js` 的属性描述符 (`IPropDescriptor`) 中，如果 `required: true`，则在生成的 JSON Schema 中，该字段的名称会被添加到父级 Schema 的 `required` 数组中。
  * **`type` 映射**: `IPropDescriptor` 中的 `type` 字段（例如 `String`, `Number`, `Boolean`, `Array`, `Object`）会被精确映射到 JSON Schema 的 `type` 字符串（`"string"`, `"number"`, `"boolean"`, `"array"`, `"object"`）。
    * 当 `type` 是另一个 `AdvancePropertyManager` 的子类时，它将被递归地转换为一个 `"object"` 类型的 JSON Schema。
    * 当 `type` 是 `arrayOf(SomeType)` 的实例时，它将被转换为一个 `"array"` 类型的 JSON Schema，其 `items` 字段将递归地定义 `SomeType` 的 Schema。
  * **`value` 映射**: `IPropDescriptor` 中的 `value` 字段会被映射到 JSON Schema 的 `default` 关键字。
  * **`property-manager.js` 内部属性**: `IPropDescriptor` 中诸如 `assign`, `assigned`, `exported`, `alias`, `clone`, `writable`, `get`, `set` 等字段是 `property-manager.js` 内部机制所使用的，它们**不会**出现在最终生成的 JSON Schema 中，因为它们不属于 JSON Schema 规范。

* **`ui` 扩展部分**:
  * 这是一个可选的顶级字段，必须与 `title`, `description`, `properties` 等在同一层级定义。
  * 其内部结构**完全遵循 RJSF 的 `uiSchema` 规范**。这意味着您可以直接将 RJSF 文档中描述的任何 `uiSchema` 关键字放置在此处。
  * **常用 `uiSchema` 关键字示例**:
    * `"ui:widget"`: 指定渲染组件（如 `"textarea"`, `"password"`, `"radio"`, `"select"`, `"updown"` 等）。
    * `"ui:options"`: 为 widget 提供额外选项（如 `rows`, `addable`, `removable`, `orderable` 等）。
    * `"ui:order"`: 控制字段在表单中的显示顺序。
    * `"ui:help"`: 提供字段的帮助文本。
    * `"ui:placeholder"`: 输入框的占位符文本。
    * `"ui:autofocus"`: 字段是否自动获取焦点。
    * `"ui:readonly"`: 字段是否只读。
    * `"ui:disabled"`: 字段是否禁用。
    * `"ui:hidden"`: 字段是否隐藏。
    * `"ui:classNames"`: 为字段添加自定义 CSS 类。
    * `"ui:title"`, `"ui:description"`: 覆盖 Schema 中定义的标题和描述。
  * **递归性**: 对于嵌套对象和数组项 (`items`)，`ui` 字段内部的结构也应与数据 Schema 的层级相匹配，以实现 UI 配置的递归。

* **`property-manager.js` 自有扩展部分 (例如 `pm` 字段)**:
  * 这是一个可选的字段，用于存放 `property-manager.js` 库特有的元数据或配置，这些信息不属于标准 JSON Schema 也不属于 UI Schema。
  * 此字段的内容不会被 `toRjsf()` 方法处理，因此不会影响 RJSF 的输出。

## 转换函数：`toJsonSchema(obj: PropertyManager)`

## 转换函数：`toUISchema(obj: PropertyManager)`

## 转换函数：`toRjsf(obj: PropertyManager)`

为了方便将上述超集 Schema 转换为 RJSF 可直接使用的格式，提供了 `toRjsf(obj: PropertyManager)` 函数。

```javascript
/**
 * 将一个 PropertyManager 实例的 Schema 转换为 RJSF 兼容的格式。
 *
 * @returns {{schema: object, uiSchema: object}} - 返回一个包含 RJSF schema 和 uiSchema 的对象。
 */
toRjsf(instance);
```

此方法会执行以下操作：

1. 从 `property-manager.js` 实例中提取纯净的 JSON Schema 部分，并递归处理嵌套对象和数组的 Schema。
2. 从 `property-manager.js` 实例中提取 `ui` 扩展部分，作为 `uiSchema`，并递归收集所有嵌套的 UI 配置。
3. 返回一个包含这两个对象的结构，可以直接传递给 RJSF 的 `<Form />` 组件。

## 最佳实践与注意事项

* **统一 Schema 定义**: 尽可能将数据结构定义和 UI 配置放在同一个 Schema 文件中，以提高可维护性。
* **遵循 RJSF `uiSchema` 规范**: `ui` 字段的内容应严格遵循 RJSF 的 `uiSchema` 规范，以确保兼容性。
* **动态 Schema**: 这种设计模式也为实现动态 Schema 提供了基础，您可以在运行时根据业务逻辑动态修改 Schema 或 `ui` 字段。

这份规范确保了 `property-manager.js` 在提供强大属性管理能力的同时，也能优雅地与现代前端表单解决方案结合。
