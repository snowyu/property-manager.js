import { AbstractPropertyManager, NormalPropertyManager } from '../src/index.js';

describe('AbstractPropertyManager edge cases', () => {
  it('should handle constructor called without arguments', () => {
    // Line 11: if (arguments.length) {this.initialize.apply(this, arguments)}
    // AbstractPropertyManager constructor checks arguments.length.
    // When called with no args, initialize should not be called.
    const instance = new AbstractPropertyManager();
    expect(instance).to.be.an('object');
    // initialize wasn't called, so no properties should be set
    expect(Object.keys(instance)).to.have.length(0);
  });

  it('should support exportTo with custom defaultOptions', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
      count: { type: Number, value: 42 },
    });

    const instance = new TestPM({ title: 'custom' });
    const result = instance.exportTo({}, { skipDefault: false, skipNull: true });
    expect(result).to.deep.equal({
      title: 'custom',
      count: 42,
    });
  });

  it('should handle assign with custom defaultOptions assign', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM();
    instance.defaultOptions = {
      assign: {
        overwrite: false,
      },
    };

    // When overwrite is false and property already has a value, it should not be overwritten
    instance.title = 'existing';
    instance.assign({ title: 'newvalue' });
    expect(instance.title).to.equal('existing');
  });

  it('should handle cloneTo with a dest object', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'test' },
    });

    const instance = new TestPM({ name: 'hello' });
    // cloneTo creates a new object of the same class and merges attributes to dest
    const dest = {};
    const cloned = instance.cloneTo(dest);
    // The cloned object should be a TestPM instance with the same values
    expect(cloned).to.be.an('object');
    expect(cloned.name).to.equal('hello');
  });

  it('should perform isSame comparison correctly', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'test' },
      value: { type: Number, value: 0 },
    });

    const a = new TestPM({ name: 'hello', value: 1 });
    const b = new TestPM({ name: 'hello', value: 1 });

    expect(a.isSame(b)).to.be.true;
    expect(a.isSame({ name: 'different' })).to.be.false;
  });

  it('should handle exportTo with no options (using defaultOptions.export)', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
      count: { type: Number, value: 42 },
    });

    const instance = new TestPM({ name: 'hello', count: 100 });
    // Directly call toObject which calls exportTo with no aOptions
    const result = instance.toObject();
    expect(result.name).to.equal('hello');
    expect(result.count).to.equal(100);
  });

  it('should handle assignTo with defaultOptions.assign', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
    });

    const instance = new TestPM({ name: 'hello' });
    instance.defaultOptions = {
      assign: {
        overwrite: true,
      },
    };

    const result = instance.assignTo({});
    expect(result.name).to.equal('hello');
  });

  it('should support additional mergeTo options (skipReadOnly with non-exported)', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    // A writable:false property that is NOT exported should be skipped when skipReadOnly is true
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default', writable: false, exported: false },
    });

    const instance = new TestPM();
    const result = instance.mergeTo({}, { skipReadOnly: true });
    expect(result).to.not.have.property('name');
  });

  it('should handle exportTo with custom options', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      name: { type: String, value: 'default' },
      count: { type: Number, value: 0 },
    });

    const instance = new TestPM({ name: 'hello', count: 42 });
    // Call exportTo with explicit aOptions
    const result = instance.exportTo({}, { overwrite: true });
    expect(result.name).to.equal('hello');
    expect(result.count).to.equal(42);
  });

  it('should handle exportTo with defaultOptions.export when called without aOptions', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM({ title: 'hello' });
    // Set defaultOptions.export so that exportTo uses it when !aOptions
    instance.defaultOptions = {
      export: {
        skipDefault: false,
      },
    };

    // Call exportTo with no aOptions to trigger !aOptions path
    // This should use defaultOptions.export = { skipDefault: false } as aOptions
    // exportTo then sets isExported=true and calls mergeTo
    const result = instance.exportTo({});
    expect(result.title).to.equal('hello');
  });

  it('should handle exportTo with defaultOptions.export with skipDefault null', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM();
    // Set defaultOptions.export WITHOUT skipDefault
    // So exportTo will set skipDefault=true itself
    instance.defaultOptions = {
      export: {},
    };

    // exportTo is called via toObject
    const result = instance.toObject();
    // With skipDefault=true, 'default' value should be skipped
    expect(result).to.not.have.property('title');
  });

  it('should handle assignTo with no aOptions (using defaultOptions.assign)', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM({ title: 'hello' });
    instance.defaultOptions = {
      assign: {},
    };

    const result = instance.assignTo({});
    expect(result.title).to.equal('hello');
  });

  it('should handle clone with options', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM({ title: 'hello' });
    // clone calls cloneTo({}, options)
    const cloned = instance.clone({ title: 'world' });
    expect(cloned).to.be.an('object');
    expect(cloned.title).to.equal('world');
  });

  it('should handle assignProperty with defaultOptions.assign', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM();
    instance.defaultOptions = {
      assign: {
        overwrite: true,
      },
    };

    instance.assignProperty({ title: 'test' }, 'title', 'test');
    expect(instance.title).to.equal('test');
  });

  it('should handle toJSON', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM({ title: 'hello' });
    const json = instance.toJSON();
    expect(json.title).to.equal('hello');
  });

  it('should handle _assign callback via assignTo', () => {
    class TestPM extends NormalPropertyManager {
      constructor(...args) {
        super(...args);
      }
    }
    NormalPropertyManager.defineProperties(TestPM, {
      title: { type: String, value: 'default' },
    });

    const instance = new TestPM({ title: 'hello' });
    const dest = {};
    dest._assign = vi.fn();
    const result = instance.assignTo(dest);
    expect(dest._assign).toHaveBeenCalledWith(instance, { isExported: false, overwrite: true });
  });
});
