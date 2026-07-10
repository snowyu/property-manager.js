import { SimplePropertyManager } from '../src/index.js';

class SimplePerson extends SimplePropertyManager {
  constructor(options) {
    super();
    this.name = 'N/A';
    this.age = 0;
    this.defineProperties(options);
  }
}

describe('SimplePropertyManager edge cases', () => {
  it('should handle assignPropertyTo with missing attrs', () => {
    // assignPropertyTo checks `if (!attrs) { attrs = this.getProperties(); }`
    const person = new SimplePerson();
    const obj = {};
    // Passing options with isExported=false, and name with non-exported prefix should not be assignable
    person.assignPropertyTo(obj, person, 'name', 'John', null, { isExported: false });
    // name is enumerable and writable so it should be assigned
    expect(obj.name).to.equal('John');
  });

  it('should handle assignPropertyTo with exported value that has toObject', () => {
    class WithToObject {
      constructor(val) {
        this.val = val;
      }
      toObject() {
        return { wrapped: this.val };
      }
    }

    class TestPM extends SimplePropertyManager {
      constructor() {
        super();
        this.nested = new WithToObject(42);
      }
    }

    const instance = new TestPM();
    // Test exported assignment with a value that has toObject
    instance.nonExported1stChar = '$';
    const dest = {};
    // Manually assign the property to verify the exported path
    instance.assignPropertyTo(dest, instance, 'nested', instance.nested, null, { isExported: true });
    // Since nested is enumerable and non-exported char is '$', it should be exported
    expect(dest.nested).to.deep.equal({ wrapped: 42 });
  });

  it('should handle assignPropertyTo with non-enumerable attrs', () => {
    class TestPM extends SimplePropertyManager {
      constructor() {
        super();
        this.$hidden = 'secret';
      }
    }

    const instance = new TestPM();
    const dest = {};
    // With isExported=false and the attr is enumerable, value should be assigned
    // Actually $ is the nonExported1stChar, but isExported=false means we're ASSIGNING, not exporting
    // So it should still assign because assigned values don't check nonExported1stChar
    instance.assignPropertyTo(dest, instance, '$hidden', 'secret', null, { isExported: false });
    expect(dest['$hidden']).to.equal('secret');
  });

  it('should handle assignPropertyTo with isExported and non-null value having toJSON', () => {
    class WithToJSON {
      constructor(val) {
        this.val = val;
      }
      toJSON() {
        return this.val;
      }
    }

    class TestPM extends SimplePropertyManager {
      constructor() {
        super();
        this.data = new WithToJSON(100);
      }
    }

    const instance = new TestPM();
    const dest = {};
    instance.assignPropertyTo(dest, instance, 'data', instance.data, null, { isExported: true });
    expect(dest.data).to.equal(100);
  });
});
