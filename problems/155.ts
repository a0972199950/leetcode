// 155. Min Stack
// https://leetcode.com/problems/min-stack/

export {}
console.clear()

// class MinStack {
//   data: { min: number, val: number }[] = []

//   push(val: number): void {
//     this.data.push({
//       min: Math.min(this.data.at(-1)?.min ?? Infinity, val),
//       val: val
//     })
//   }

//   pop(): void {
//     this.data.pop()
//   }

//   top(): number {
//     return this.data.at(-1).val
//   }

//   getMin(): number {
//     return this.data.at(-1).min
//   }
// }

class MinStack {
  public stack: { value: number, min: number}[] = []

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.push({ value: val, min: val })
      return
    }

    const min = Math.min(this.stack.at(-1).min, val)
    this.stack.push({ value: val, min: min })
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack.at(-1)?.value ?? null
  }

  getMin(): number {
    return this.stack.at(-1)?.min
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
minStack.push(2147483646)
minStack.push(2147483646)
minStack.push(2147483647)
console.log(minStack.stack)
console.log(minStack.top())
minStack.pop()
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())
minStack.pop()
minStack.push(2147483647)
console.log(minStack.stack)
console.log(minStack.top())
console.log(minStack.getMin())
minStack.push(-2147483648)
console.log(minStack.top())
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.getMin())
