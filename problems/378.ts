// 378. Kth Smallest Element in a Sorted Matrix

export {}
console.clear()

class MinHeap {
  data: number[] = []

  insert (val: number) {
    this.data.push(val)

    let current = this.data.length - 1

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)

      if (this.data[parent] > this.data[current]) {
        [this.data[parent], this.data[current]] = [this.data[current], this.data[parent]]
      } else {
        break
      }

      current = parent
    }
  }

  extract () {
    const val = this.data.shift()

    if (!this.data.length) {
      return val
    }

    const last = this.data.pop()
    this.data.unshift(last)

    let current = 0

    while (current < this.data.length) {
      const left = current * 2 + 1
      const right = current * 2 + 2
      let swap = current

      if (this.data[left] < this.data[swap]) {
        swap = left
      }

      if (this.data[right] < this.data[swap]) {
        swap = right
      }

      if (swap === current) {
        break
      }

      [this.data[current], this.data[swap]] = [this.data[swap], this.data[current]]
      current = swap
    }

    return val
  }
}

function kthSmallest(matrix: number[][], k: number): number {
  const minHeap = new MinHeap()

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      minHeap.insert(matrix[row][col])
      // console.log(minHeap.data)
    }
  }

  // console.log(minHeap.data)

  let result = null
  for (let i = 1; i <= k; i++) {
    const val = minHeap.extract()
    if (val !== undefined) {
      result = val
    }
  }

  return result
}

// console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8))
// console.log(kthSmallest([[-5]], 1))
console.log(kthSmallest([[1, 2], [1, 3]], 1))


