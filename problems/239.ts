// 239. Sliding Window Maximum

console.clear()

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const record = Array
//     .from({ length: k })
//     .reduce((sum, _item, index) => {
//       sum[nums[index]] = ++sum[nums[index]] || 1
//       return sum
//     }, {}) as Record<number, number>

//   const maxes = [Math.max(...Object.keys(record).map(item => +item))]

//   for (let i = 0; i < nums.length - k; i++) {
//     const numToRemove = nums[i]
//     const numToAdd = nums[i + k]
//     const lastMax = maxes[maxes.length - 1]

//     record[numToRemove]--
//     record[numToAdd] = ++record[numToAdd] || 1

//     if (!record[numToRemove]) {
//       delete record[numToRemove]
//     }

//     let max: number
//     if (record[lastMax]) {
//       max = Math.max(lastMax, numToAdd)
//     } else {
//       max = Math.max(...Object.keys(record).map(item => +item))
//     }

//     maxes.push(max)
//   }

//   return maxes
// }

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const maxQueue = []
//   const maxes = []

//   const addNumToQueue = (num: number) => {
//     let inserted = false

//     while (!inserted) {
//       const lastNum = maxQueue[maxQueue.length - 1]

//       if (
//         typeof lastNum !== 'number'
//         || lastNum >= num
//       ) {
//         maxQueue.push(num)
//         inserted = true
//       }
//       else if (lastNum < num) {
//         maxQueue.pop()
//       }
//       else {
//         throw new Error('不該發生')
//       }
//     }

//   }

//   for (let i = 0; i < nums.length; i++) {
//     const numToAdd = nums[i]
    
//     if (i < k - 1) {
//       addNumToQueue(numToAdd)
//     }
//     else {
//       const numToRemove = nums[i - k]

//       if (numToRemove === maxQueue[0]) {
//         maxQueue.shift()
//       }

//       addNumToQueue(numToAdd)
//       maxes.push(maxQueue[0])
//     }
//   }

//   return maxes
// }

class MaxHeap {
  data: number[] = []

  insert (val: number) {
    this.data.push(val)

    let current = this.data.length - 1
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)
      if (this.data[parent] > this.data[current]) {
        break
      }

      [this.data[parent], this.data[current]] = [this.data[current], this.data[parent]]
      current = parent
    }
  }

  extract () {
    if (!this.data.length) {
      return null
    }

    const val = this.data.shift()

    if (!this.data.length) {
      return val
    }

    this.data.unshift(this.data.pop())

    let current = 0
    while (current < this.data.length) {
      const left = current * 2 + 1
      const right = current * 2 + 2
      let swap = current

      if (this.data[left] !== undefined && this.data[left] > this.data[swap]) {
        swap = left
      }
      
      if (this.data[right] !== undefined && this.data[right] > this.data[swap]) {
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


// for (const num of data) {
//   heap.insert(num)
// }

// let lastNum = Infinity

// for (let i = 0; i < data.length; i++) {
//   const num = heap.extract()
//   console.log(num)
//   if (num > lastNum) {
//     console.log(lastNum, num)
//     throw ''
//   }
//   lastNum = num
// }

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let max = -Infinity
//   const maxHeap = new MaxHeap()
//   const hash: Record<number, number> = {}

//   for (let i = 0; i < k; i++) {
//     const num = nums[i]
//     hash[num] = ++hash[num] || 1
//     max = Math.max(max, num)
//     maxHeap.insert(num)
//   }

//   const result = [max]

//   for (let i = k; i < nums.length; i++) {
//     const num = nums[i]

//     hash[num] = ++hash[num] || 1
//     hash[nums[i - k]]--
//     maxHeap.insert(num)

//     if (hash[max] && max > num) {
//       result.push(max)
//       continue
//     }

//     do {
//       max = maxHeap.extract()
//     } while (!hash[max])

//     result.push(max)
//   }

//   return result
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue = [] // store indexes
  const result = []

  for (let i = 0; i < nums.length; i++) {
    while (nums[queue.at(-1)] < nums[i]) {
      queue.pop()
    }

    queue.push(i)

    if (queue[0] === i - k) {
      queue.shift()
    }

    if (i >= k - 1) {
      result.push(nums[queue[0]])
    }
  }

  return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(maxSlidingWindow([1], 1))
console.log(maxSlidingWindow([1, -1], 1))
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3))
console.log(maxSlidingWindow([5, 4, 3, 2, 1, 0, -1], 3))
console.log(maxSlidingWindow([-5769, -7887, -5709, 4600, -7919, 9807, 1303, -2644, 1144, -6410, -7159, -2041, 9059, -663, 4612, -257, 2870, -6646, 8161, 3380, 6823, 1871, -4030, -1758, 4834, -5317, 6218, -4105, 6869, 8595, 8718, -4141, -3893, -4259, -3440, -5426, 9766, -5396, -7824, -3941, 4600, -1485, -1486, -4530, -1636, -2088, -5295, -5383, 5786, -9489, 3180, -4575, -7043, -2153, 1123, 1750, -1347, -4299, -4401, -7772, 5872, 6144, -4953, -9934, 8507, 951, -8828, -5942, -3499, -174, 7629, 5877, 3338, 8899, 4223, -8068, 3775, 7954, 8740, 4567, 6280, -7687, -4811, -8094, 2209, -4476, -8328, 2385, -2156, 7028, -3864, 7272, -1199, -1397, 1581, -9635, 9087, -6262, -3061, -6083, -2825, -8574, 5534, 4006, -2691, 6699, 7558, -453, 3492, 3416, 2218, 7537, 8854, -3321, -5489, -945, 1302, -7176, -9201, -9588, -140, 1369, 3322, -7320, -8426, -8446, -2475, 8243, -3324, 8993, 8315, 2863, -7580, -7949, 4400], 6))


