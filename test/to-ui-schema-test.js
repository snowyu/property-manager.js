import { AdvancePropertyManager, defineProperties, toUISchema } from '../src/index.js';

// Helper to sort object keys for consistent deepEqual comparison
const sortObjectKeys = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  }
  const sortedKeys = Object.keys(obj).sort();
  const newObj = {};
  for (const key of sortedKeys) {
    newObj[key] = sortObjectKeys(obj[key]);
  }
  return newObj;
};

describe('toUISchema', () => {
  it('should convert a PropertyManager to a uiSchema with basic properties', () => {
    class MyForm extends AdvancePropertyManager {}
    defineProperties(MyForm, {
      name: { type: String, value: 'Test Name' },
      age: { type: Number, writable: false, exported: true, },
      isActive: { type: Boolean },
    });

    MyForm.$uiSchema = {
      "ui:order": ["name", "isActive", "age", "*"],
      name: {
        "ui:widget": "text",
        "ui:help": "Enter your name",
      },
    };

    const uiSchema = toUISchema(MyForm);

    const expectedUiSchema = {
      "ui:order": ["name", "isActive", "age", "*"],
      age: {
        "ui:readonly": true,
      },
      name: {
        "ui:widget": "text",
        "ui:help": "Enter your name",
      },
    };

    expect(sortObjectKeys(uiSchema)).to.deep.equal(sortObjectKeys(expectedUiSchema));
  });

  it('should handle nested PropertyManagers and their uiSchema', () => {
    class Address extends AdvancePropertyManager {}
    defineProperties(Address, {
      street: { type: String },
      city: { type: String, writable: false, exported: true },
    });

    Address.$uiSchema = {
      street: { "ui:placeholder": "Street Name" },
    };

    class Person extends AdvancePropertyManager {}
    defineProperties(Person, {
      name: { type: String },
      address: { type: Address },
    });

    Person.$uiSchema = {
      name: { "ui:autofocus": true },
      address: {
        "ui:title": "Contact Address",
      },
    };

    const uiSchema = toUISchema(Person);

    const expectedUiSchema = {
      name: { "ui:autofocus": true },
      address: {
        "ui:title": "Contact Address",
        street: { "ui:placeholder": "Street Name" },
        city: { "ui:readonly": true },
      },
    };

    expect(sortObjectKeys(uiSchema)).to.deep.equal(sortObjectKeys(expectedUiSchema));
  });

  it('should handle arrays of PropertyManagers and their uiSchema', () => {
    class Item extends AdvancePropertyManager {}
    defineProperties(Item, {
      id: { type: Number, writable: false, exported: true },
      description: { type: String },
    });

    Item.$uiSchema = {
      description: { "ui:widget": "textarea" },
    };

    class Order extends AdvancePropertyManager {}
    defineProperties(Order, {
      orderId: { type: String },
      items: { type: [Item] },
    });

    Order.$uiSchema = {
      items: {
        "ui:options": {
          addable: true,
          removable: true,
        },
      },
    };

    const uiSchema = toUISchema(Order);

    const expectedUiSchema = {
      items: {
        "ui:options": {
          addable: true,
          removable: true,
        },
        items: { // This 'items' refers to the uiSchema for each item in the array
          id: { "ui:readonly": true },
          description: { "ui:widget": "textarea" },
        },
      },
    };

    expect(sortObjectKeys(uiSchema)).to.deep.equal(sortObjectKeys(expectedUiSchema));
  });

  it('should prioritize explicit uiSchema over derived properties', () => {
    class OverrideTest extends AdvancePropertyManager {}
    defineProperties(OverrideTest, {
      myProp: { type: String, "ui:widget": "password" },
    });

    OverrideTest.$uiSchema = {
      myProp: { "ui:readonly": true }, // Explicitly set to false
    };

    const uiSchema = toUISchema(OverrideTest);

    const expectedUiSchema = {
      myProp: { "ui:readonly": true, "ui:widget": "password" },
    };

    expect(sortObjectKeys(uiSchema)).to.deep.equal(sortObjectKeys(expectedUiSchema));
  });

  it('should not include properties with exported: false or enumerable: false', () => {
    class HiddenProps extends AdvancePropertyManager {}
    defineProperties(HiddenProps, {
      visibleProp: { type: String, "ui:widget": "password" },
      hiddenExported: { type: String, exported: false },
      hiddenEnumerable: { type: String, enumerable: false },
    });

    const uiSchema = toUISchema(HiddenProps);

    const expectedUiSchema = {
      visibleProp: {"ui:widget": "password"},
    };

    expect(sortObjectKeys(uiSchema)).to.deep.equal(sortObjectKeys(expectedUiSchema));
  });

  it('should handle ui: prefix properties in attribute descriptors', () => {
    class FormWithUi extends AdvancePropertyManager {}
    defineProperties(FormWithUi, {
      username: {
        type: String,
        'ui:widget': 'text',
        'ui:help': 'Enter username',
      },
      password: {
        type: String,
        'ui:widget': 'password',
        'ui:help': 'Enter password',
      },
    });

    const uiSchema = toUISchema(FormWithUi);

    expect(uiSchema.username).to.deep.equal({
      'ui:widget': 'text',
      'ui:help': 'Enter username',
    });
    expect(uiSchema.password).to.deep.equal({
      'ui:widget': 'password',
      'ui:help': 'Enter password',
    });
  });

  it('should merge nested ui: prefix objects', () => {
    class FormWithMerge extends AdvancePropertyManager {}
    defineProperties(FormWithMerge, {
      address: {
        type: Object,
        'ui:options': { orderable: false },
      },
    });

    FormWithMerge.$uiSchema = {
      address: {
        'ui:options': { addable: true },
      },
    };

    const uiSchema = toUISchema(FormWithMerge);

    // Should merge the ui:options from both definitions
    expect(uiSchema.address['ui:options']).to.deep.equal({
      orderable: false,
      addable: true,
    });
  });

  it('should handle uiSchema with non-overlapping static and attr definitions', () => {
    class FormPartial extends AdvancePropertyManager {}
    defineProperties(FormPartial, {
      name: { type: String },
      email: { type: String },
    });

    FormPartial.$uiSchema = {
      name: { 'ui:widget': 'text' },
      'ui:order': ['name', 'email'],
    };

    const uiSchema = toUISchema(FormPartial);

    expect(uiSchema.name).to.deep.equal({ 'ui:widget': 'text' });
    expect(uiSchema['ui:order']).to.deep.equal(['name', 'email']);
  });

  it('should handle nested PropertyManager type that is not an array', () => {
    class NestedForm extends AdvancePropertyManager {}
    defineProperties(NestedForm, {
      details: {
        type: Object,
        'ui:widget': 'textarea',
      },
    });

    const uiSchema = toUISchema(NestedForm);

    expect(uiSchema.details).to.deep.equal({ 'ui:widget': 'textarea' });
  });

  it('should handle property with empty uiSchema that was initially set', () => {
    class WithEmptyUiSchema extends AdvancePropertyManager {}
    defineProperties(WithEmptyUiSchema, {
      myProp: { type: String },
    });

    // Add a uiSchema entry that references this property
    WithEmptyUiSchema.$uiSchema = {
      myProp: {},
    };

    const uiSchema = toUISchema(WithEmptyUiSchema);
    // Since myProp has no derived uiSchema properties, the empty entry should be removed
    expect(uiSchema).to.not.have.property('myProp');
  });

  it('should handle exported:false with uiSchema entry present', () => {
    class WithHiddenProp extends AdvancePropertyManager {}
    defineProperties(WithHiddenProp, {
      visible: { type: String, 'ui:widget': 'text' },
      hidden: { type: String, exported: false },
    });

    WithHiddenProp.$uiSchema = {
      hidden: { 'ui:widget': 'hidden' },
    };

    const uiSchema = toUISchema(WithHiddenProp);
    // 'hidden' has exported:false, so its uiSchema entry should be removed
    expect(uiSchema).to.not.have.property('hidden');
    // 'visible' has a ui:widget attribute, so it should appear
    expect(uiSchema).to.have.property('visible');
    expect(uiSchema.visible).to.deep.equal({ 'ui:widget': 'text' });
  });

  it('should handle uiSchema with non-object primitive values', () => {
    class PrimitiveUiSchema extends AdvancePropertyManager {}
    defineProperties(PrimitiveUiSchema, {
      name: { type: String, 'ui:widget': 'text' },
    });

    const uiSchema = toUISchema(PrimitiveUiSchema);
    expect(uiSchema).to.have.property('name');
    expect(uiSchema.name).to.deep.equal({ 'ui:widget': 'text' });
  });

  it('should handle toUISchema with an instance (not a class)', () => {
    class MyForm extends AdvancePropertyManager {}
    defineProperties(MyForm, {
      name: { type: String, 'ui:widget': 'text' },
    });

    // Set $uiSchema on the class so instance.constructor.$uiSchema picks it up
    MyForm.$uiSchema = {
      'ui:order': ['name'],
    };

    const instance = new MyForm();
    const uiSchema = toUISchema(instance);

    expect(uiSchema['ui:order']).to.deep.equal(['name']);
    expect(uiSchema.name).to.deep.equal({ 'ui:widget': 'text' });
  });

  it('should handle nested PropertyManager with no ui properties (empty nestedUiSchema)', () => {
    class PlainSub extends AdvancePropertyManager {}
    defineProperties(PlainSub, {
      // No ui: or writable:false properties - nested UiSchema will be empty
      data: { type: String },
    });

    class Container extends AdvancePropertyManager {}
    defineProperties(Container, {
      sub: { type: PlainSub },
    });

    // Container has no $uiSchema, so we start fresh
    const uiSchema = toUISchema(Container);

    // PlainSub has no ui-related properties, so nested UiSchema is empty
    // The sub property should NOT be in uiSchema since it has no ui content
    expect(uiSchema).to.not.have.property('sub');
  });

  it('should handle array of PropertyManager with no ui properties (empty nestedUiSchema)', () => {
    class PlainItem extends AdvancePropertyManager {}
    defineProperties(PlainItem, {
      id: { type: Number },
    });

    class Order extends AdvancePropertyManager {}
    defineProperties(Order, {
      items: { type: [PlainItem] },
    });

    const uiSchema = toUISchema(Order);

    // PlainItem has no ui-related properties, so nested UiSchema is empty
    // The items property should NOT be in uiSchema
    expect(uiSchema).to.not.have.property('items');
  });

  it('should handle writable:false property without exported:true', () => {
    class ReadonlyForm extends AdvancePropertyManager {}
    defineProperties(ReadonlyForm, {
      name: { type: String, writable: false, value: 'default' },
    });

    const uiSchema = toUISchema(ReadonlyForm);

    // writable:false without exported:true means the property is non-enumerable
    // So it should NOT be included in the uiSchema
    expect(uiSchema).to.not.have.property('name');
  });

  it('should handle property with no ui attributes and not readonly', () => {
    class PlainForm extends AdvancePropertyManager {}
    defineProperties(PlainForm, {
      name: { type: String },
    });

    const uiSchema = toUISchema(PlainForm);

    // Plain property with no ui attributes and writable:true should not appear
    expect(uiSchema).to.not.have.property('name');
  });

  it('should handle static $uiSchema with ui:options that overrides from attribute', () => {
    class FormWithOptions extends AdvancePropertyManager {}
    defineProperties(FormWithOptions, {
      items: {
        type: Array,
        'ui:options': { orderable: false },
      },
    });

    FormWithOptions.$uiSchema = {
      items: {
        'ui:options': { addable: true },
      },
    };

    const uiSchema = toUISchema(FormWithOptions);

    // The ui:options from attribute and static should be merged
    expect(uiSchema.items['ui:options']).to.deep.equal({
      orderable: false,
      addable: true,
    });
  });

  it('should handle nested PropertyManager without static $uiSchema but with attribute ui properties', () => {
    class SubWithUi extends AdvancePropertyManager {}
    defineProperties(SubWithUi, {
      value: { type: String, 'ui:widget': 'textarea' },
    });

    class Container extends AdvancePropertyManager {}
    defineProperties(Container, {
      sub: { type: SubWithUi },
    });

    // Container has no $uiSchema
    const uiSchema = toUISchema(Container);

    expect(uiSchema.sub.value).to.deep.equal({ 'ui:widget': 'textarea' });
  });

  it('should handle array with items that have no $attributes on prototype', () => {
    // Regular Array type (not PropertyManager) has no $attributes
    class MixedTypes extends AdvancePropertyManager {}
    defineProperties(MixedTypes, {
      tags: { type: [String], 'ui:widget': 'tags' },
    });

    const uiSchema = toUISchema(MixedTypes);

    // String doesn't have $attributes, so the nested handling is skipped
    // But 'ui:widget' from the attribute should still be processed
    expect(uiSchema.tags['ui:widget']).to.equal('tags');
  });

  it('should handle array of PM with items already set in $uiSchema', () => {
    class Item extends AdvancePropertyManager {}
    defineProperties(Item, {
      id: { type: Number, writable: false, exported: true },
      name: { type: String },
    });
    Item.$uiSchema = {
      name: { 'ui:widget': 'text' },
    };

    class Order extends AdvancePropertyManager {}
    defineProperties(Order, {
      items: { type: [Item] },
    });

    // Pre-set items with existing sub-uiSchema so propUiSchema.items already exists
    Order.$uiSchema = {
      items: {
        'ui:options': { orderable: false },
        items: { someExisting: {} },
      },
    };

    const uiSchema = toUISchema(Order);

    // The 'id' (writable:false) should get ui:readonly and be in items
    // The 'name' should get ui:widget from Item.$uiSchema
    expect(uiSchema.items['ui:options']).to.deep.equal({ orderable: false });
    expect(uiSchema.items.items.id['ui:readonly']).to.equal(true);
    expect(uiSchema.items.items.name['ui:widget']).to.equal('text');
  });
});