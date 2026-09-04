// 232. Implement Queue using Stacks
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/implement-queue-using-stacks/

// Space: O(n)
class MyQueue {
  private mainStack: number[] = []
  private reverseStack: number[] = []

  constructor() {

  }

  // Time: O(1)
  push(x: number): void {
    this.mainStack.push(x)
  }

  // Time: O(1 || n)
  pop(): number {
    if (this.reverseStack.length) {
      return this.reverseStack.pop()
    }

    while (this.mainStack.length) {
      this.reverseStack.push(this.mainStack.pop())
    }

    return this.reverseStack.pop()
  }

  // Time: O(1 || n)
  peek(): number {
    if (this.reverseStack.length) {
      return this.reverseStack.at(-1)
    }

    while (this.mainStack.length) {
      this.reverseStack.push(this.mainStack.pop())
    }

    return this.reverseStack.at(-1)
  }

  // Time: O(1)
  empty(): boolean {
    return !this.mainStack.length && !this.reverseStack.length
  }
}

// 基本 push / pop / peek / empty
const q1 = new MyQueue()
q1.push(1); q1.push(2); q1.push(3)
console.log(q1.peek())  // 1
console.log(q1.pop())   // 1
console.log(q1.pop())   // 2
console.log(q1.empty()) // false
console.log(q1.pop())   // 3
console.log(q1.empty()) // true

// 交錯 push / pop
const q2 = new MyQueue()
q2.push(1); q2.push(2)
console.log(q2.pop())   // 1
q2.push(3)
console.log(q2.pop())   // 2
console.log(q2.pop())   // 3

// 單一元素
const q3 = new MyQueue()
q3.push(42)
console.log(q3.peek())  // 42
console.log(q3.pop())   // 42
console.log(q3.empty()) // true

