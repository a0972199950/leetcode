class MaxBinaryHeap {
  public data: number[] = []

  constructor (val?: number) {
    if (typeof val === 'number') {
      this.data.push(val)
    }
  }

  insert (val: number) {
    this.data.push(val)

    let index = this.data.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.data[parentIndex]

      if (val <= parent) break

      this.data[index] = parent
      this.data[parentIndex] = val
      index = parentIndex
    }

    return this.data
  }

  isValid () {
    for (let i = 0; i < Math.ceil((this.data.length - 1) / 2); i++) {
      const parent = this.data[i]
      const left = this.data[i * 2 + 1] || -Infinity
      const right = this.data[i * 2 + 2] || -Infinity

      console.log('Compare: ', parent, '[', left, ',', right, ']')

      if (parent < left || parent < right) {
        return false
      }
    }

    return true
  }

  extractMax () {
    const extract = this.data.shift()
    const last = this.data.pop()

    if (last === undefined) {
      return extract
    }

    this.data.unshift(last)
    let index = 0

    while (true) {
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2
      const left = this.data[leftIndex]
      const right = this.data[rightIndex]

      if ((left === undefined && right === undefined) || (last > left && last > right)) break

      if ((left || -Infinity) > (right || -Infinity)) {
        this.data[leftIndex] = last
        this.data[index] = left
        index = leftIndex
      } else {
        this.data[rightIndex] = last
        this.data[index] = right
        index = rightIndex
      }
    }

    return extract
  }
}

const maxBH = new MaxBinaryHeap()
maxBH.insert(41)
maxBH.insert(39)
maxBH.insert(33)
// maxBH.insert(18)
// maxBH.insert(27)
// maxBH.insert(12)
// maxBH.insert(50)
// maxBH.insert(67)
// maxBH.insert(13)
// maxBH.insert(44)
// maxBH.insert(57)
// maxBH.insert(99)
// maxBH.insert(1)

console.log(maxBH.data)
console.log('isValid: ', maxBH.isValid())
console.log('extract: ', maxBH.extractMax())
console.log(maxBH.data)
console.log('isValid: ', maxBH.isValid())
console.log('extract: ', maxBH.extractMax())
console.log(maxBH.data)
console.log('isValid: ', maxBH.isValid())
console.log('extract: ', maxBH.extractMax())
console.log(maxBH.data)
console.log('isValid: ', maxBH.isValid())
console.log('extract: ', maxBH.extractMax())
console.log(maxBH.data)
console.log('isValid: ', maxBH.isValid())
