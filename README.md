[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# @pirxpilot/nanoraf

Fork of [nanoraf]. Only call RAF when needed.

## Usage
```js
var nanoraf = require('@pirxpilot/nanoraf')
var prev = null

var frame = nanoraf(function render (state) {
  console.log(state.now)
})

updateState({ now: date.now() })
updateState({ now: date.now() })
updateState({ now: date.now() })
updateState({ now: date.now() })

function updateState (state) {
  prev = prev || {}
  frame(state, prev)
  prev = state
}
```

## API
### frame = nanoraf(render, raf?)
Wrap a `render` function that is called on every `raf` tick. If no new state is
available, it will not tick. Passes the last version of the state on every tick.

Optionally, provide an implementation of `requestAnimationFrame` via the
`raf` parameter (for example, the one provided by the [raf
package](https://www.npmjs.com/package/raf)).  If omitted, `raf` defaults to
`window.requestAnimationFrame`.

### frame([arguments])
Pass arguments into the render function, to be called on a new tick.

## Installation
```sh
$ npm install nanoraf
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[nanoraf]: https://npmjs.org/package/nanoraf

[npm-image]: https://img.shields.io/npm/v/@pirxpilot/nanoraf
[npm-url]: https://npmjs.org/package/@pirxpilot/nanoraf

[build-url]: https://github.com/pirxpilot/nanoraf/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/pirxpilot/nanoraf/check

[deps-image]: https://img.shields.io/librariesio/release/npm/@pirxpilot/nanoraf
[deps-url]: https://libraries.io/npm/@pirxpilot%2Fnanoraf
