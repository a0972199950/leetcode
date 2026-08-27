// Array Subclass Symbol.species
// 自訂題目（非 LeetCode 原題）：練習繼承 Array 並用 Symbol.species 控制衍生方法（如 map）回傳的類別

console.clear()

class MyArray extends Array {
  constructor(args: any) {
    super()
    console.log('args: ', args)
    this.push(...['foo', 'bar'])
  }

  static get [Symbol.species]() {
    return Array  // map 不再使用 MyArray
  }

  getFirstChar () {
    return this.map((item: string) => item.charAt(0))
  }
}

console.log(Symbol.iterator) // Expected: Symbol(Symbol.iterator)

export default ''
