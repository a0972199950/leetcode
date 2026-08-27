// Symbol.for Global State
// 自訂題目（非 LeetCode 原題）：練習用 Symbol.for 建立跨模組共用的全域 registry key

console.clear()

const myKey = Symbol.for('my_plugin_state')

globalThis[myKey] = {
  loaded: true,
  version: '1.0.0'
}

export default ''
