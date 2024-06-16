// 846. Hand of Straights

export {}
console.clear()

// function isNStraightHand(hand: number[], groupSize: number): boolean {
//   hand = hand.sort((a, b) => a - b)
//   const picked = new Set()

//   // console.log(hand)

//   const canDivide = (start: number) => {
//     if (picked.size === hand.length) {
//       return true
//     }

//     const group = []
//     let i = start
//     let nextStart = null

//     while (group.length < groupSize && i < hand.length) {
//       if (picked.has(i)) {
//         i++
//         continue
//       }

//       if (hand[i] === (group.at(-1) === undefined ? hand[i] - 1 : group.at(-1)) + 1) {
//         group.push(hand[i])
//         picked.add(i)
//         nextStart === null && (nextStart = i + 1)
//       }

//       i++
//     }

//     // console.log(group, nextStart)

//     if (group.length === groupSize) {
//       return canDivide(nextStart)
//     } else {
//       return false
//     }
//   }

//   return canDivide(0)
// }

class MinHeap {
  data: number[] = []

  get size () {
    return this.data.length
  }

  insert (val: number) {
    this.data.push(val)

    let current = this.size - 1

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)

      if (this.data[parent] < this.data[current]) {
        return
      }

      [this.data[parent], this.data[current]] = [this.data[current], this.data[parent]]
      current = parent
    }
  }

  extract () {
    const val = this.data.shift()

    if (this.data.length) {
      this.data.unshift(this.data.pop())
      
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

        [this.data[swap], this.data[current]] = [this.data[current], this.data[swap]]
        current = swap
      } 
    }

    return val
  }
}

function isNStraightHand(hand: number[], groupSize: number): boolean {
  const hash = {}
  const minHeap = new MinHeap()

  for (const num of hand) {
    hash[num] = ++hash[num] || 1
    if (hash[num] === 1) {
      minHeap.insert(num)
    }
  }

  while (minHeap.size) {
    while (minHeap.data[0] !== undefined && !hash[minHeap.data[0]]) {
      minHeap.extract()
    }

    if (!minHeap.data.length) {
      return true
    }

    const num = minHeap.data[0]

    // console.log('num: ', num)

    for (let i = 0; i < groupSize; i++) {
      if (!hash[num + i]) {
        return false
      }

      hash[num + i]--
    }
  }

  return true
}

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
console.log(isNStraightHand([1, 2, 3, 4, 5], 4))
console.log(isNStraightHand([1, 2, 3, 4, 5, 6], 2))
console.log(isNStraightHand([1, 1, 2, 2, 3, 3], 3))



// n / 3 * n => n^2/3