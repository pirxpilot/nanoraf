const test = require('tape')

global.window = require('global/window')

const nanoraf = require('./')

function noop () { }

test('should assert input types', function (t) {
  t.plan(2)
  t.throws(() => nanoraf(), /function/)
  t.throws(() => nanoraf(noop, 123), /function/)
})

test('should request a frame', function (t) {
  t.plan(2)
  const currentState = { status: 'currentState' }
  const previousState = { status: 'previousState' }
  window.requestAnimationFrame = () => { t.fail() }
  const frame = nanoraf(render, fn => { setTimeout(fn) })
  frame(currentState, previousState)
  function render (curr, prev) {
    t.same(curr, currentState)
    t.same(prev, previousState)
  }
})
