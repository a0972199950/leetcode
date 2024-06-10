// 622. Design Circular Queue

console.clear()

class Node {
  val: number | null
  next: Node

  constructor (val: number | null = null) {
    this.val = val
  }
}

class MyCircularQueue {
  root: Node
  front: Node
  rear: Node
  last: Node

  constructor(k: number) {
    let root: Node
    let current: Node
    
    let count = 1
    while (count <= k) {
      if (!root) {
        root = new Node()
        current = root
      } else {
        const nextNode = new Node()
        current.next = nextNode
        current = current.next
      }
      
      count++
    }

    current.next = root
    this.root = this.front = this.rear = root
    this.last = null
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }

    this.rear.val = value

    if (!this.last) {
      this.last = this.rear
    } else {
      this.last = this.last.next
    }

    this.rear = this.rear.next
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }

    this.front.val = null
    this.front = this.front.next

    if (this.front.val === null) {
      this.last = null
    }

    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }

    return this.front.val
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }

    return this.last.val
  }

  isEmpty(): boolean {
    return this.front === this.rear && this.front.val === null
  }

  isFull(): boolean {
    return this.front === this.rear && this.rear.val !== null
  }
}

const myCircularQueue = new MyCircularQueue(3)
console.log(myCircularQueue.enQueue(1)) // return True
console.log(myCircularQueue.enQueue(2)) // return True
console.log(myCircularQueue.enQueue(3)) // return True
console.log(myCircularQueue.enQueue(4)) // return False
console.log(myCircularQueue.front)
console.log(myCircularQueue.Rear())     // return 3
console.log(myCircularQueue.isFull())   // return True
console.log(myCircularQueue.deQueue())  // return True
console.log(myCircularQueue.enQueue(4)) // return True
console.log(myCircularQueue.Rear())     // return 4


