import test from 'node:test';
import jsdom from 'jsdom-global';
import nanoraf from './index.js';

test.before(() => jsdom());

function noop() {}

test('should assert input types', t => {
  t.plan(2);
  t.assert.throws(() => nanoraf(), /function/);
  t.assert.throws(() => nanoraf(noop, 123), /function/);
});

test('should request a frame', (t, done) => {
  t.plan(2);
  const currentState = { status: 'currentState' };
  const previousState = { status: 'previousState' };
  window.requestAnimationFrame = () => {
    t.assert.fail();
  };
  const frame = nanoraf(render, fn => setTimeout(fn));
  frame(currentState, previousState);
  function render(curr, prev) {
    t.assert.equal(curr, currentState);
    t.assert.equal(prev, previousState);
    done();
  }
});
