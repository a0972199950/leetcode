const myKey = Symbol.for('my_plugin_state')

globalThis[myKey] = {
  loaded: true,
  version: '1.0.0'
}

export default ''
