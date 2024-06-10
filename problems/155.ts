// 155. Min Stack

console.clear()

class MinStack {
  data: { min: number, val: number }[] = []

  push(val: number): void {
    this.data.push({
      min: Math.min(this.data.at(-1)?.min ?? Infinity, val),
      val: val
    })
  }

  pop(): void {
    this.data.pop()
  }

  top(): number {
    return this.data.at(-1).val
  }

  getMin(): number {
    return this.data.at(-1).min
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.data)
console.log(minStack.getMin()) // return -3
minStack.pop()
console.log(minStack.top())    // return 0
console.log(minStack.getMin()) // return -2


