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

console.log(Symbol.iterator)

export default ''
