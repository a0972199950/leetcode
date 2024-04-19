// 414. Third Maximum Number

console.clear()

function thirdMax(nums: number[]): number {
  nums = nums.sort((a, b) => b - a)
  
  const maxes = [null, null, null]

  for (const num of nums) {
    // console.log(num, maxes)

    if (maxes[0] === null) {
      maxes[0] = num
      continue
    }

    if (maxes[1] === null) {
      if (num !== maxes[0]) {
        maxes[1] = num
      }

      continue
    }

    if (maxes[2] === null && num !== maxes[1]) {
      return num
    }
  }

  return maxes[0]
}

// class Maxheap {
//   data: number[] = []

//   insert (val: number) {
//     this.data.push(val)
//     let index = this.data.length - 1

//     while (index > 0) {
//       const parent = Math.floor((index - 1) / 2)

//       if (this.data[parent] < val) {
//         [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]]
//       }

//       index = parent
//     }
//   }

//   extract () {
//     const val = this.data.shift()

//     if (!this.data.length) {
//       return val
//     }

//     const last = this.data.pop()
//     this.data.unshift(last)
//     let index = 0

//     while (true) {
//       const left = index * 2 + 1
//       const right = index * 2 + 2
//       let max = index

//       if ((this.data[left] ?? -Infinity) > this.data[max]) {
//         max = left
//       }

//       if ((this.data[right] ?? -Infinity) > this.data[max]) {
//         max = right
//       }

//       if (max === index) {
//         break
//       }

//       [this.data[max], this.data[index]] = [this.data[index], this.data[max]]
//       index = max
//     }

//     return val
//   }
// }

// function thirdMax(nums: number[]): number {
//   const set = new Set()
//   const maxHeap = new Maxheap()

//   for (const num of nums) {
//     if (set.has(num)) {
//       continue
//     }

//     set.add(num)
//     maxHeap.insert(num)
//   }

//   const [max, _, third] = [maxHeap.extract(), maxHeap.extract(), maxHeap.extract()]

//   return third ?? max
// }

// console.log(thirdMax([3, 2, 1]))
// console.log(thirdMax([1, 2]))
// console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([1, 2, 2, 5, 3, 5]))
console.log(thirdMax([3, 2, 1]))

export {}
