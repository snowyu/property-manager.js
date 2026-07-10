import ArrayPropertyManager from '../src/array.js';

describe('ArrayPropertyManager edge cases', () => {
  it('should push a single non-array value', () => {
    // Line 62: push with single value (not an array)
    const arr = new ArrayPropertyManager();
    arr.push('hello');
    expect(arr).to.have.length(1);
    expect(arr[0]).to.equal('hello');
  });

  it('should push with a non-array first arg and extra args', () => {
    const arr = new ArrayPropertyManager();
    arr.push('a', 'b', 'c');
    expect(arr).to.have.length(3);
    expect(arr[0]).to.equal('a');
    expect(arr[1]).to.equal('b');
    expect(arr[2]).to.equal('c');
  });

  it('should unshift a single non-array value', () => {
    // Line 70: unshift with single value (not an array)
    const arr = new ArrayPropertyManager();
    arr.push('world');
    arr.unshift('hello');
    expect(arr).to.have.length(2);
    expect(arr[0]).to.equal('hello');
    expect(arr[1]).to.equal('world');
  });

  it('should unshift with a non-array first arg and extra args', () => {
    const arr = new ArrayPropertyManager();
    arr.push('z');
    arr.unshift('a', 'b', 'c');
    expect(arr).to.have.length(4);
    expect(arr[0]).to.equal('a');
    expect(arr[1]).to.equal('b');
    expect(arr[2]).to.equal('c');
    expect(arr[3]).to.equal('z');
  });

  it('should handle typed array push with single values', () => {
    const arr = new ArrayPropertyManager(undefined, String);
    arr.push('hello');
    expect(arr[0]).to.equal('hello');
  });

  it('should handle valueOf method', () => {
    const arr = new ArrayPropertyManager([1, 2, 3]);
    const result = arr.valueOf();
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should handle push with array value (mapItemType receives array)', () => {
    // When push receives an array value, mapItemType gets an array
    // which triggers the !Array.isArray(items) = false branch
    const arr = new ArrayPropertyManager(undefined, String);
    arr.push(['hello', 'world']);
    expect(arr).to.have.length(2);
    expect(arr[0]).to.equal('hello');
    expect(arr[1]).to.equal('world');
  });

  it('should handle unshift with array value (mapItemType receives array)', () => {
    const arr = new ArrayPropertyManager(undefined, String);
    arr.push('z');
    arr.unshift(['a', 'b']);
    expect(arr).to.have.length(3);
    expect(arr[0]).to.equal('a');
    expect(arr[1]).to.equal('b');
    expect(arr[2]).to.equal('z');
  });

  it('should handle items with toObject in toObject', () => {
    class ObjWithToObject {
      constructor(val) { this.val = val; }
      toObject() { return { wrapped: this.val }; }
    }
    const arr = new ArrayPropertyManager([new ObjWithToObject(42)], undefined);
    const result = arr.toObject();
    expect(result).to.have.length(1);
    expect(result[0]).to.deep.equal({ wrapped: 42 });
  });

  it('should handle items with toJSON in toObject', () => {
    class ObjWithToJSON {
      constructor(val) { this.val = val; }
      toJSON() { return this.val; }
    }
    const arr = new ArrayPropertyManager([new ObjWithToJSON(99)], undefined);
    const result = arr.toObject();
    expect(result).to.have.length(1);
    expect(result[0]).to.equal(99);
  });

  it('should pass through null items in toObject', () => {
    const arr = new ArrayPropertyManager([1, null, 3], undefined);
    const result = arr.toObject();
    expect(result).to.deep.equal([1, null, 3]);
  });
});
