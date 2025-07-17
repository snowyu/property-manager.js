# Property Manager Schema 体系

`property-manager.js` 的 Schema 体系由三个逻辑上分离的核心部分组成。这种设计确保了核心库的职责单一，同时通过一套约定和辅助函数，提供了强大的 UI 集成能力。

1. **内部 Property Manager Schema**: 定义数据结构和运行时行为的核心。
2. **JSON Schema**: 从内部 Schema 生成的、用于数据校验的标准格式。
3. **UI Schema**: 通过一套独立的命名约定和辅助函数生成的、用于控制 UI 渲染的配置。

---

## 1. 内部 Property Manager Schema (数据与行为核心)

这是所有 Schema 的**源头 (Source of Truth)**，它定义了一个属性的**数据结构和运行时行为**。它完全是 UI 无关的，只关心数据本身。

这个 Schema 是通过在 `PropertyManager` 子类中定义 `static $attributes` 来实现的。

**核心组成:**

`static $attributes` 对象中的属性描述符 (`IPropDescriptor`) 包含两类字段：

**A. 核心字段 (由 `IPropDescriptor` 接口或文档约定正式定义)**

这些字段被 `property-manager.js` 的核心功能（如赋值、克隆、导出）所直接使用。

* **数据与行为**:
  * `type`: 属性的类型，如 `String`, `Number`, 或另一个 `PropertyManager` 子类。
  * `value`: 属性的默认值。
  * `name`: 导出的属性名（别名），默认为属性键名。
  * `required`: 是否为必需字段。
  * `writable`: 属性是否可写。
  * `exported`: 属性是否可被导出。
  * `enumerable`: 属性是否可被枚举。
  * `assign`: 一个函数，用于自定义赋值逻辑。
  * `assigned`: 是否可被赋值。在 `AdvancePropertyManager` 中，如果设为字符串，则启用“智能赋值”功能，该字符串将作为内部属性的名称。
  * `alias`: 属性的别名，用于从纯对象赋值。
  * `clone`: 当默认值是对象时，在初始化时是否克隆该值。
  * `skipDefault`: 在导出时是否跳过值为默认值的属性。
  * `get` / `set`:标准的 getter/setter。
* **模板属性 (Template Properties)**:
  * `template`: 一个字符串模板或返回字符串的函数，用于动态生成属性值。例如：`'${author}-${uuid()}'`。
  * `imports`: 一个对象，为 `template` 提供可用的函数。

**B. JSON Schema 透传字段 (约定而非正式定义)**

这些字段并未在 `IPropDescriptor` 接口中正式定义，但 `toJsonSchema` 辅助函数会识别它们，并将它们**直接传递**到生成的 JSON Schema 中。`property-manager.js` 的核心逻辑会忽略这些字段。

* **常见的透传字段**: `title`, `description`, `minLength`, `maxLength`, `pattern`, `format`, `enum`, `minimum`, `maximum` 等。

**示例:**

```javascript
class UserProfile extends AdvancePropertyManager {
  static $attributes = {
    username: {
      // --- 核心字段 ---
      type: String,
      required: true,
      name: '用户名',
      // --- JSON Schema 透传字段 ---
      title: '用户名称',
      description: '公开显示的名称',
      minLength: 3
    },
    userId: {
        // --- 模板属性 ---
        template: 'USER-${uuid()}',
        imports: { uuid: require('uuid').v4 },
        writable: false
    },
    role: {
      // --- 核心字段 ---
      type: String,
      assigned: '_internal_role' // 启用智能赋值
    }
  };
}
```

---

## 2. JSON Schema (数据结构与验证)

JSON Schema 是一个**纯粹的数据结构和验证定义**，由 `toJsonSchema(pm)` 辅助函数根据**内部 PM Schema**生成。它严格遵循 JSON Schema 规范。

**生成规则:**

* **映射**: `toJsonSchema` 函数读取内部 Schema 中的数据与验证字段 (`type`, `title`, `required` 等)，并转换为标准的 JSON Schema 关键字。
* **忽略**: 所有与 `property-manager.js` 内部运行时行为相关的字段（如 `writable`, `exported`, `assign`）都会被**忽略**。

**示例:**

对于上面的 `UserProfile` 类，`toJsonSchema(UserProfile)` 会生成：

```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "title": "用户名"
    },
    "secretCode": {
      "type": "string"
    }
  },
  "required": ["username"]
}
```

---

## 3. UI Schema (表现层配置)

UI Schema 用于控制 UI 的渲染，它**不是** `property-manager.js` 的核心部分。它是由 `toUISchema(pm)` 这个独立的辅助函数生成的。该函数通过识别 `PropertyManager` 类定义中的一套**命名约定**来工作。

### UI Schema 的信息来源约定

`toUISchema` 会在 `PropertyManager` 类中寻找以下两个命名约定作为信息来源：

1. **约定 1: 内联 UI 提示 (`ui:` 前缀)**
    * 在 `$attributes` 的属性描述符中，任何以 `ui:` 为前缀的键都将被识别为内联 UI 配置。这用于定义与字段紧密相关的 UI 细节。

2. **约定 2: 静态 UI 配置 (`$uiSchema`)**
    * 在 `PropertyManager` 类上定义的 `static $uiSchema` 对象，用于存放全局性的 UI 配置，如字段顺序。

**示例:**

```javascript
// 为 UserProfile 添加用于生成 UI Schema 的命名约定
class UserProfileWithUI extends AdvancePropertyManager {
  static $attributes = {
    username: {
      type: String, title: '用户名', required: true,
      // 约定1: 内联 UI 提示
      'ui:help': '长度至少为3个字符。'
    },
    secretCode: {
      type: String, writable: false
    }
  };

  // 约定2: 静态 UI 配置
  static $uiSchema = {
    'ui:order': ['username', 'secretCode']
  };
}
```

### 生成规则

* **合并与覆盖**: `toUISchema` 会合并来自这两个约定的配置。如果冲突，**内联 `ui:` 配置的优先级更高**。
* **行为映射**: 它还会解释一些内部 PM Schema 的行为字段，例如 `writable: false` 会被映射为 `"ui:readonly": true`。
* **过滤**: `exported: false` 或 `enumerable: false` 的属性将不会出现在 UI Schema 中。

* **重要注意事项**: 在 `property-manager` 中，当一个属性被设置为 `writable: false` 时，它的 `exported` 属性也会被**默认**设置为 `false`。这意味着，如果一个只读字段需要在 UI 中显示（即出现在 UI Schema 中），您必须**明确地**在其属性描述符中设置 `exported: true`。

    ```javascript
    {
      readOnlyField: {
        type: String,
        writable: false, // 这会隐式地将 exported 设置为 false
        exported: true   // 必须手动设置此项，才能让字段出现在 UI Schema 中
      }
    }
    ```

对于 `UserProfileWithUI`，`toUISchema()` 会生成：

```json
{
  "ui:order": ["username", "secretCode"],
  "username": {
    "ui:help": "长度至少为3个字符。"
  },
  "secretCode": {
    "ui:readonly": true
  }
}
```
