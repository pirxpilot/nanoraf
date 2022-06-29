const assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf = window.requestAnimationFrame) {
  assert(typeof render === 'function', 'nanoraf: render should be a function')
  assert(typeof raf === 'function', 'nanoraf: raf should be a function')

  let redrawScheduled = false
  let args = null

  return function frame (...frameArgs) {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true
      raf(redraw)
    }
    args = frameArgs

    function redraw () {
      redrawScheduled = false
      render.apply(render, args)
      args = null
    }
  }
}
