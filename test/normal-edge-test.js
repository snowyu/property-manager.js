import { NormalPropertyManager, defineProperties } from '../src/index.js';
import { inherits } from 'inherits-ex';
import { createObjectWith } from 'inherits-ex';

describe('NormalPropertyManager edge cases', () => {
  it('should handle assignPropertyTo with custom assign function', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      value: {
        type: String,
        value: 'default',
        assign: function(v) {
          return 'transformed:' + v;
        },
      },
    });

    const instance = new TestPM({ value: 'hello' });
    expect(instance.value).to.equal('transformed:hello');
  });

  it('should handle assignPropertyTo with isExported option', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM({ name: 'hello' });
    const dest = {};
    // Test exporting - should use vAttr.name if it exists
    instance.assignPropertyTo(dest, instance, 'name', 'hello', null, { isExported: true });
    expect(dest.name).to.equal('hello');
  });

  it('should handle assignPropertyTo with exported value that has toObject', () => {
    class NestedObj {
      constructor(val) {
        this.val = val;
      }
      toObject() {
        return { wrapped: this.val };
      }
    }

    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      nested: {
        type: Object,
        value: new NestedObj(42),
      },
    });

    const instance = new TestPM({ nested: new NestedObj(99) });
    const dest = {};
    instance.assignPropertyTo(dest, instance, 'nested', instance.nested, null, { isExported: true });
    expect(dest.nested).to.deep.equal({ wrapped: 99 });
  });

  it('should handle assignPropertyTo with skipExists', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM({ name: 'hello' });
    const dest = { name: 'existing' };

    // With skipExists=true, should not override
    instance.assignPropertyTo(dest, instance, 'name', 'hello', null, { skipExists: true, isExported: false });
    expect(dest.name).to.equal('existing');
  });

  it('should handle assignPropertyTo with meaningful name and isExported', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      propName: {
        name: 'meaning',
        type: String,
        value: 'default',
      },
    });

    const instance = new TestPM({ meaning: 'hello' });
    const dest = {};
    // When isExported, should use vAttr.name ('meaning')
    instance.assignPropertyTo(dest, instance, 'meaning', 'hello', null, { isExported: true });
    expect(dest.meaning).to.equal('hello');
  });

  it('should throw TypeError when defineObjectProperties gets invalid target', () => {
    // This tests the throw new TypeError in defineObjectProperties
    expect(() => {
      NormalPropertyManager.defineProperties(123, { test: { value: 1 } });
    }).to.throw(TypeError, 'the target should be a ctor or object!');
  });

  it('should handle defineProperties with recreate=true', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }

    // defineProperties with recreate=true forces recreate even if $attributes exists
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'test' },
    }, true);

    // The $attributes should be recreated and contain 'name'
    expect(TestPM.prototype.$attributes).to.have.property('name');
    expect(TestPM.prototype.$attributes.name.value).to.equal('test');
  });

  it('should handle assignPropertyTo with skipDefault when value equals default', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM({ name: 'default' });
    const dest = {};
    // With skipDefault=true and value=default, should skip assignment
    instance.assignPropertyTo(dest, instance, 'name', 'default', null, { skipDefault: true, isExported: false });
    expect(dest).to.not.have.property('name');
  });

  it('should handle assignPropertyTo with not-assigned and non-exported property', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      // A writable:false property defaults to assigned:false, exported:false
      readonlyProp: { value: 123, writable: false, exported: false },
    });

    const instance = new TestPM();
    const dest = {};
    // Should return early because neither (assigned && !isExported) nor (exported && isExported) is true
    instance.assignPropertyTo(dest, instance, 'readonlyProp', 456, null, { isExported: false });
    expect(dest).to.not.have.property('readonlyProp');
  });

  it('should handle assignPropertyTo with not-assigned but exported (readonly exported)', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      exportedReadonly: { value: 719, writable: false, exported: true },
    });

    const instance = new TestPM();
    const dest = {};
    // isExported=true, vAttr.exported=true → should pass
    // But vIsReadonly=true, vAttr.exported=true → so the skip won't happen
    instance.assignPropertyTo(dest, instance, 'exportedReadonly', 719, null, { isExported: true });
    expect(dest.exportedReadonly).to.equal(719);
  });

  it('should handle assignPropertyTo with value undefined falling back to default', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM();
    const dest = {};
    // Passing undefined value should fall back to vAttr.value
    instance.assignPropertyTo(dest, instance, 'name', undefined, null, { isExported: false });
    expect(dest.name).to.equal('default');
  });

  it('should handle assignPropertyTo with not readable exported property (skipDefault case)', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      roExport: { type: String, value: 'roVal', writable: false, exported: true },
    });

    const instance = new TestPM();
    instance.roExport = 'roVal';
    const dest = {};
    // skipDefault=true with writable:false and exported:true
    // The condition: skipDefault && vAttr.skipDefault !== false && (vAttr.exported !== true || vAttr.writable !== false) && deepEqual(vAttr.value, value)
    // vAttr.exported === true, vAttr.writable === false → (true !== true || false !== false) = false || false = false
    // So the whole condition is false → don't skip
    instance.assignPropertyTo(dest, instance, 'roExport', 'roVal', null, { skipDefault: true, isExported: true });
    expect(dest.roExport).to.equal('roVal');
  });

  it('should handle _assign callback during __assign', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM();
    const _assignFn = vi.fn();
    instance._assign = _assignFn;

    const src = { name: 'hello' };
    instance.assign(src, { exclude: [] });
    expect(_assignFn).toHaveBeenCalledWith(src, { exclude: [], overwrite: true, isExported: false });
    expect(instance.name).to.equal('hello');
  });

  it('should handle assignPropertyTo with value having toJSON when exported', () => {
    class WithJSON {
      constructor(val) { this.val = val; }
      toJSON() { return this.val; }
    }

    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      data: { type: Object },
    });

    const instance = new TestPM();
    const jsonVal = new WithJSON(42);
    const dest = {};
    instance.assignPropertyTo(dest, instance, 'data', jsonVal, null, { isExported: true });
    expect(dest.data).to.equal(42);
  });

  it('should handle assignPropertyTo with isExported using vAttr.name', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      internalName: {
        name: 'externalName',
        type: String,
        value: 'default',
      },
    });

    const instance = new TestPM({ internalName: 'hello' });
    const dest = {};
    instance.assignPropertyTo(dest, instance, 'internalName', 'hello', null, { isExported: true });
    // When exporting, dest key should be vAttr.name = 'externalName'
    expect(dest.externalName).to.equal('hello');
  });

  it('should handle assignPropertyTo via meaningful name lookup', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      propName: {
        name: 'meaning',
        type: String,
        value: 'default',
      },
    });

    const instance = new TestPM();
    // When using 'meaning' as the name, getRealAttrName should map it to 'propName'
    const attrs = instance.getProperties();
    // Test getRealAttrName by passing the alias name
    instance.assignPropertyTo(instance, { meaning: 'test' }, 'meaning', 'test', attrs, { isExported: false });
    expect(instance.propName).to.equal('test');
  });
});
