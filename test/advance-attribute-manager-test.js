import sinonChai from "sinon-chai";
import sinon from "sinon";
import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chai.use(sinonChai);

import inherits from 'inherits-ex/lib/inherits';
import Manager from '../src/advance';

import test from './property-manager';

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
    result.should.have.ownProperty('a', 3);
    result.should.have.ownProperty('b', 4);
    result.should.have.ownProperty('x', 78);
    result.should.have.not.property('c');
  });
});
