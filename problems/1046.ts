// 1046. Last Stone Weight

function lastStoneWeight(stones: number[]): number {
  class PriorityQueue {
    maxHeap: number[] = []
    length = 0

    private bubbleUp () {
      let index = this.maxHeap.length - 1
      const target = this.maxHeap[index]

      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2)
        const parent = this.maxHeap[parentIndex]

        if (parent >= target) {
          return
        } else {
          this.maxHeap[index] = parent
          this.maxHeap[parentIndex] = target
          index = parentIndex
        }
      }
    }

    private bubbleDown () {
      const target = this.maxHeap.pop()!
      this.maxHeap.unshift(target)
      let index = 0

      while (index < this.maxHeap.length) {
        console.log(this.maxHeap)
        const leftIndex = index * 2 + 1
        const rightIndex = index * 2 + 2
        const left = this.maxHeap[leftIndex]
        const right = this.maxHeap[rightIndex]

        if (
          (left === undefined && right === undefined) ||
          (target >= (left === undefined ? -Infinity : left) && target >= (right === undefined ? -Infinity : right))
        ) {
          return
        }

        if ((left === undefined ? -Infinity : left) > (right === undefined ? -Infinity : right)) {
          this.maxHeap[index] = left
          this.maxHeap[leftIndex] = target
          index = leftIndex
        } else {
          this.maxHeap[index] = right
          this.maxHeap[rightIndex] = target
          index = rightIndex
        }
      }
    }

    enqueue (val: number) {
      this.maxHeap.push(val)
      this.length++

      if (this.maxHeap.length > 1) {
        this.bubbleUp()
      }

      return this.maxHeap.length
    }

    dequeue () {
      const target = this.maxHeap.shift()
      this.length--

      if (this.maxHeap.length > 1) {
        this.bubbleDown()
      }

      return target
    }
  }

  const priotiryStones = new PriorityQueue()

  for (const stone of stones) {
    priotiryStones.enqueue(stone)
  }

  console.log('start: ', priotiryStones.maxHeap)

  while (priotiryStones.length > 1) {
    const first = priotiryStones.dequeue()!
    const second = priotiryStones.dequeue()!
    const remain = first - second

    if (remain > 0) {
      priotiryStones.enqueue(remain)
    }
  }

  return priotiryStones.dequeue()! || 0
}

console.log(lastStoneWeight([3, 7, 2]))

