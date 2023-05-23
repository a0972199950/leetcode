console.clear()

class MinBinaryHeap {
  heap: number[] = []

  protected insert (val: number) {
    this.heap.push(val)

    if (this.heap.length <= 1) {
      return this.heap
    }

    let targetIndex = this.heap.length - 1

    while (targetIndex > 0) {
      const parentIndex = Math.floor((targetIndex - 1) / 2)
      const parentVal = this.heap[parentIndex]

      if (val >= parentVal) break

      this.heap[parentIndex] = val
      this.heap[targetIndex] = parentVal
      targetIndex = parentIndex
    }

    if (!this.isValid()) throw 'Heap 錯誤'

    return this.heap
  }

  protected extract () {
    const top = this.heap.shift()

    if (this.heap.length <= 0) {
      return top
    }

    const targetVal = this.heap.pop() as number
    let targetIndex = 0

    this.heap.unshift(targetVal)

    while (true) {
      const leftIndex = targetIndex * 2 + 1
      const rightIndex = targetIndex * 2 + 2
      const leftVal = this.heap[leftIndex]
      const rightVal = this.heap[rightIndex]

      if (
        targetVal < (leftVal === undefined ? Infinity : leftVal) &&
        targetVal < (rightVal === undefined ? Infinity : rightVal)
      ) {
        break
      }

      let swapIndex = null

      if (
        leftVal !== undefined &&
        leftVal <= (rightVal === undefined ? Infinity : rightVal)
      ) {
        swapIndex = leftIndex
      } else {
        swapIndex = rightIndex
      }

      this.heap[targetIndex] = this.heap[swapIndex]
      this.heap[swapIndex] = targetVal
      targetIndex = swapIndex
    }

    if (!this.isValid()) throw 'Heap 錯誤'

    return top
  }

  private isValid () {
    for (let i = 0; i < Math.ceil((this.heap.length - 1) / 2); i++) {
      const parent = this.heap[i]
      const left = this.heap[i * 2 + 1] || Infinity
      const right = this.heap[i * 2 + 2] || Infinity

      // console.log('Compare: ', parent, '[', left, ',', right, ']')

      if (parent > left || parent > right) {
        return false
      }
    }

    return true
  }
}

class PriorityQueue extends MinBinaryHeap {
  public enqueue (val: number) {
    return this.insert(val)
  }

  public dequeue () {
    return this.extract()
  }
}

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue(41)
priorityQueue.enqueue(39)
priorityQueue.enqueue(39)
priorityQueue.enqueue(39)
priorityQueue.enqueue(39)
priorityQueue.enqueue(33)
priorityQueue.enqueue(18)
priorityQueue.enqueue(27)
priorityQueue.enqueue(12)
priorityQueue.enqueue(50)
priorityQueue.enqueue(67)
priorityQueue.enqueue(13)
priorityQueue.enqueue(44)
priorityQueue.enqueue(57)
priorityQueue.enqueue(99)
priorityQueue.enqueue(1)

console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())
console.log('next: ', priorityQueue.dequeue())

