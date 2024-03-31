console.clear()

class MinHeap<Node = number> {
  data: Node[] = []
  getVal: (node: any) => number

  constructor (getVal: (node: any) => number = (node) => node) {
    this.getVal = getVal
  }

  public insert (node?: Node) {
    if (!node) {
      return
    }

    this.data.push(node)

    if (this.data.length <= 1) {
      return this.data
    }

    let targetIndex = this.data.length - 1

    while (targetIndex > 0) {
      const parentIndex = Math.floor((targetIndex - 1) / 2)
      const parentNode = this.data[parentIndex]

      if (this.getVal(node) >= this.getVal(parentNode)) break

      this.data[parentIndex] = node
      this.data[targetIndex] = parentNode
      targetIndex = parentIndex
    }

    if (!this.isValid()) throw 'Heap 錯誤'

    return this.data
  }

  public extract () {
    const node = this.data.shift()

    if (this.data.length <= 0) {
      return node
    }

    const targetNode = this.data.pop()
    let targetIndex = 0

    this.data.unshift(targetNode)

    while (true) {
      const leftIndex = targetIndex * 2 + 1
      const rightIndex = targetIndex * 2 + 2
      const leftNode = this.data[leftIndex]
      const rightNode = this.data[rightIndex]

      if (
        this.getVal(targetNode) < (leftNode === undefined ? Infinity : this.getVal(leftNode)) &&
        this.getVal(targetNode) < (rightNode === undefined ? Infinity : this.getVal(rightNode))
      ) {
        break
      }

      let swapIndex = null

      if (
        leftNode !== undefined &&
        this.getVal(leftNode) <= (rightNode === undefined ? Infinity : this.getVal(rightNode))
      ) {
        swapIndex = leftIndex
      } else {
        swapIndex = rightIndex
      }

      this.data[targetIndex] = this.data[swapIndex]
      this.data[swapIndex] = targetNode
      targetIndex = swapIndex
    }

    if (!this.isValid()) throw 'Heap 錯誤'

    return node
  }

  private isValid () {
    for (let i = 0; i < Math.ceil((this.data.length - 1) / 2); i++) {
      const parentNode = this.data[i]
      const leftNode = this.data[i * 2 + 1] || Infinity
      const rightNode = this.data[i * 2 + 2] || Infinity

      // console.log('Compare: ', parent, '[', left, ',', right, ']')

      if (this.getVal(parentNode) > this.getVal(leftNode) || this.getVal(parentNode) > this.getVal(rightNode)) {
        return false
      }
    }

    return true
  }
}

const minHeap = new MinHeap<{ key: string, value: number }>((node) => node.value)

minHeap.insert({ key: 'a', value: 41 })
minHeap.insert({ key: 'a', value: 39 })
minHeap.insert({ key: 'a', value: 39 })
minHeap.insert({ key: 'a', value: 39 })
minHeap.insert({ key: 'a', value: 39 })
minHeap.insert({ key: 'a', value: 33 })
minHeap.insert({ key: 'a', value: 18 })
minHeap.insert({ key: 'a', value: 27 })
minHeap.insert({ key: 'a', value: 12 })
minHeap.insert({ key: 'a', value: 50 })
minHeap.insert({ key: 'a', value: 67 })
minHeap.insert({ key: 'a', value: 13 })
minHeap.insert({ key: 'a', value: 44 })
minHeap.insert({ key: 'a', value: 57 })
minHeap.insert({ key: 'a', value: 99 })

console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())
console.log('next: ', minHeap.extract())

export default MinHeap
