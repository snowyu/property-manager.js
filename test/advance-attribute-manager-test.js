import {inherits} from 'inherits-ex';
import Manager from '../src/advance.js';

import test from './property-manager.js';

test('AdvancePropertyManager', Manager);

describe('AdvancePropertyManager Inherits', function() {
  it('should inherit properties', function() {
    var A, B, result;
    A = (function() {
      inherits(A, Manager);

      function A() {
        this.initialize.apply(this, arguments);
      }

      Manager.defineProperties(A, {
        a: {
          value: 1
        },
        x: {
          value: 78
        }
      });

      return A;

    })();
    B = (function() {
      inherits(B, A);

      function B() {
        this.initialize.apply(this, arguments);
      }

      Manager.defineProperties(B, {
        b: {
          value: 2
        }
      });

      return B;

    })();
    result = new B({
      a: 3,
      b: 4,
      c: 5
    });
    expect(result.a).toBe(3);
    expect(Object.hasOwn(result, 'a')).toBe(true);
    expect(result.b).toBe(4);
    expect(Object.hasOwn(result, 'b')).toBe(true);
    expect(result.x).toBe(78);
    expect(Object.hasOwn(result, 'x')).toBe(true);
    expect(result).to.not.have.property('c');
  });
});
