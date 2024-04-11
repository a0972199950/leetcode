console.clear()

class MinHeap {
  data = []
  getVal: (node: any) => number

  constructor (getVal: (node: any) => number = (val: number) => val) {
    this.getVal = getVal
  }

  get size () {
    return this.data.length
  }

  enqueue (node?: any) {
    if (node === undefined) {
      return
    }

    this.data.push(node)

    let index = this.data.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)

      if (this.getVal(node) <= this.getVal(this.data[parentIndex])) {
        [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]]
        index = parentIndex
      } else {
        break
      }
    }
  }

  dequeue () {
    const node = this.data.shift()

    if (this.data.length) {
      this.data.unshift(this.data.pop())
      let currentIndex = 0

      while (currentIndex < this.data.length) {
        const leftIndex = currentIndex * 2 + 1
        const rightIndex = currentIndex * 2 + 2
        let minIndex = currentIndex

        if (leftIndex < this.data.length && this.getVal(this.data[leftIndex]) < this.getVal(this.data[minIndex])) {
          minIndex = leftIndex
        }

        if (rightIndex < this.data.length && this.getVal(this.data[rightIndex]) < this.getVal(this.data[minIndex])) {
          minIndex = rightIndex
        }

        if (minIndex === currentIndex) {
          break
        }

        [this.data[minIndex], this.data[currentIndex]] = [this.data[currentIndex], this.data[minIndex]]
        currentIndex = minIndex
      }
    }

    return node
  }
}

const heap = new MinHeap((node) => node.value)

heap.enqueue({ key: 'a', value: 41 })
heap.enqueue({ key: 'a', value: 39 })
heap.enqueue({ key: 'a', value: 39 })
heap.enqueue({ key: 'a', value: 39 })
heap.enqueue({ key: 'a', value: 39 })
heap.enqueue({ key: 'a', value: 33 })
heap.enqueue({ key: 'a', value: 18 })
heap.enqueue({ key: 'a', value: 27 })
heap.enqueue({ key: 'a', value: 12 })
heap.enqueue({ key: 'a', value: 50 })
heap.enqueue({ key: 'a', value: 67 })
heap.enqueue({ key: 'a', value: 13 })
heap.enqueue({ key: 'a', value: 44 })
heap.enqueue({ key: 'a', value: 57 })
heap.enqueue({ key: 'a', value: 99 })

console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())
console.log('next: ', heap.dequeue())

export default MinHeap
