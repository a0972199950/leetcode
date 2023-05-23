// 215. Kth Largest Element in an Array

console.clear()

class MyMaxPriorityQueue {
  data: number[] = []

  _swap (index1: number, index2: number) {
    if (index1 >= this.data.length || index2 >= this.data.length) {
      console.log(index1, index2, this.data)
      throw 'Swap fail'
    }

    const temp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = temp
  }

  insert (val: number) {
    this.data.push(val)

    let currentIndex = this.data.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)

    while (parentIndex >= 0 && this.data[parentIndex] < val) {
      this._swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = Math.floor((currentIndex - 1) / 2)
    }

    return this.data
  }

  extract () {
    if (!this.data.length) {
      return null
    }

    const val = this.data.shift()

    if (this.data.length) {
      this.data.unshift(this.data.pop())

      let currentIndex = 0
      let leftChildIndex = currentIndex * 2 + 1
      let rightChildIndex = currentIndex * 2 + 2

      while (
        leftChildIndex < this.data.length
        || rightChildIndex < this.data.length
      ) {
        const currentVal = this.data[currentIndex]
        const leftChildVal = this.data[leftChildIndex] ?? -Infinity
        const rightChildVal = this.data[rightChildIndex] ?? -Infinity

        if (Math.max(currentVal, leftChildVal, rightChildVal) === leftChildVal) {
          this._swap(currentIndex, leftChildIndex)
          currentIndex = leftChildIndex
        }
        else if (Math.max(currentVal, leftChildVal, rightChildVal) === rightChildVal) {
          this._swap(currentIndex, rightChildIndex)
          currentIndex = rightChildIndex
        }
        else {
          break
        }

        leftChildIndex = currentIndex * 2 + 1
        rightChildIndex = currentIndex * 2 + 2
      }
    }

    return val
  }
}

function findKthLargest(nums: number[], k: number): number {
  const myMaxPriorityQueue = new MyMaxPriorityQueue()
  nums.forEach(num => myMaxPriorityQueue.insert(num))

  let val = null
  for (let i = 1; i <= k; i++) {
    val = myMaxPriorityQueue.extract()
  }

  // console.log('val: ', val)
  return val
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
findKthLargest([3, 3, 3, 2, 1, 2, 1, 5, 4, 4, 4, 5, 5, 6], 14)
findKthLargest([7, 6, 5, 4, 3, 2, 1], 5)
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 20)

export {}
