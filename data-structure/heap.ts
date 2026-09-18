
export class Heap<T = number> {
  data: T[] = []
  compare: (a: T, b: T) => number

  constructor (compare: (a: T, b: T) => number = (a: any, b: any) => a - b) {
    this.compare = compare
  }

  get size () {
    return this.data.length
  }

  push (node?: T) {
    if (node === undefined) {
      return
    }

    this.data.push(node)

    let index = this.data.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)

      if (this.compare(node, this.data[parentIndex]) <= 0) {
        [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]]
        index = parentIndex
      } else {
        break
      }
    }
  }

  shift () {
    const node = this.data.shift()

    if (this.data.length) {
      const last = this.data.pop()
      if (last !== undefined) {
        this.data.unshift(last)
      }
      let currentIndex = 0

      while (currentIndex < this.data.length) {
        const leftIndex = currentIndex * 2 + 1
        const rightIndex = currentIndex * 2 + 2
        let targetIndex = currentIndex

        if (leftIndex < this.data.length && this.compare(this.data[leftIndex], this.data[targetIndex]) < 0) {
          targetIndex = leftIndex
        }

        if (rightIndex < this.data.length && this.compare(this.data[rightIndex], this.data[targetIndex]) < 0) {
          targetIndex = rightIndex
        }

        if (targetIndex === currentIndex) {
          break
        }

        [this.data[targetIndex], this.data[currentIndex]] = [this.data[currentIndex], this.data[targetIndex]]
        currentIndex = targetIndex
      }
    }

    return node
  }

  isValid () {
    for (let i = 0; i < Math.ceil((this.data.length - 1) / 2); i++) {
      const leftIndex = i * 2 + 1
      const rightIndex = i * 2 + 2

      if (leftIndex < this.data.length && this.compare(this.data[i], this.data[leftIndex]) > 0) {
        return false
      }

      if (rightIndex < this.data.length && this.compare(this.data[i], this.data[rightIndex]) > 0) {
        return false
      }
    }

    return true
  }
}
