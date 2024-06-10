// 1111. FizzBuzz

console.clear()

// class PriorityQueue {
//   data: number[] = []

//   _swap (index1: number, index2: number) {
//     const temp = this.data[index1]
//     this.data[index1] = this.data[index2]
//     this.data[index2] = temp
//   }

//   enqueue (val: number) {
//     this.data.push(val)

//     if (this.data.length <= 1) {
//       return
//     }

//     let targetIndex = this.data.length - 1

//     while (targetIndex > 0) {
//       const parentIndex = Math.floor((targetIndex - 1) / 2)
//       const parentVal = this.data[parentIndex]

//       if (val >= parentVal) break

//       this._swap(parentIndex, targetIndex)
//       targetIndex = parentIndex
//     }
//   }

//   dequeue () {
//     const top = this.data.shift()

//     if (this.data.length === 0) {
//       return top
//     }

//     const targetVal = this.data.pop()
//     let targetIndex = 0

//     this.data.unshift(targetVal)

//     while (true) {
//       const leftIndex = targetIndex * 2 + 1
//       const rightIndex = targetIndex * 2 + 2
//       const leftVal = this.data[leftIndex]
//       const rightVal = this.data[rightIndex]

//       if (
//         targetVal < (leftVal === undefined ? Infinity : leftVal) &&
//         targetVal < (rightVal === undefined ? Infinity : rightVal)
//       ) {
//         break
//       }

//       let swapIndex = null

//       if (
//         leftVal !== undefined &&
//         leftVal <= (rightVal === undefined ? Infinity : rightVal)
//       ) {
//         swapIndex = leftIndex
//       } else {
//         swapIndex = rightIndex
//       }

//       this._swap(swapIndex, targetIndex)
//       targetIndex = swapIndex
//     }

//     return top
//   }
// }


// function minimizeCost(arr: number[]): number {
//   if (arr.length <= 1) {
//     return 0
//   }

//   const priorityQueue = new PriorityQueue()

//   for (const num of arr) {
//     priorityQueue.enqueue(num)
//   }

//   let cost = 0
//   while (priorityQueue.data.length >= 2) {
//     const a = priorityQueue.dequeue()
//     const b = priorityQueue.dequeue()

//     const sum = a + b
//     cost += sum
//     priorityQueue.enqueue(sum)
//   }

//   return cost
// }

function minimizeCost(arr: number[]): number {
  if (arr.length <= 1) {
    return 0
  }

  arr = arr.sort((a, b) => a - b)

  let cost = 0

  const insert = (val: number) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (val >= arr[i]) {
        arr.splice(i + 1, 0, val)
        return
      }
    }
  }

  while (arr.length > 1) {
    const currentCost = arr.shift() + arr.shift()
    insert(currentCost)
    cost += currentCost
  }

  return cost
}

console.log(minimizeCost([25, 10, 20]))
console.log(minimizeCost([1, 7, 8]))


