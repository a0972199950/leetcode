// 239. Sliding Window Maximum
// 最後練習時間：2026-09-13
// https://leetcode.com/problems/sliding-window-maximum/

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

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const queue = [] // store indexes
//   const result = []

//   for (let i = 0; i < nums.length; i++) {
//     while (nums[queue.at(-1)] < nums[i]) {
//       queue.pop()
//     }

//     queue.push(i)

//     if (queue[0] === i - k) {
//       queue.shift()
//     }

//     if (i >= k - 1) {
//       result.push(nums[queue[0]])
//     }
//   }

//   return result
// }

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   const queue = [] // store indexes
//   const result = []

//   for (let i = 0; i < k; i++) {
//     const num = nums[i]

//     while (nums[queue.at(-1)] <= num) {
//       queue.pop()
//     }

//     queue.push(i)
//   }

//   result.push(nums[queue[0]])

//   for (let i = k; i < nums.length; i++) {
//     const newNum = nums[i]

//     if (i - k + 1 > queue[0]) {
//       queue.shift()
//     }

//     while (nums[queue.at(-1)] <= newNum) {
//       queue.pop()
//     }

//     queue.push(i)

//     result.push(nums[queue[0]])
//   }

//   return result
// }

// Time: amortized O(n)
// Space: O(n)
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const stack: ({ val: number, index: number })[] = [] // mono desc stack

  let head = 0
  let left = -1

  for (let right = 0; right < nums.length; right++) {
    while (stack.length && stack.at(-1).val < nums[right]) {
      stack.pop()
    }

    if (stack.length < head) {
      head = stack.length
    }

    stack.push({ val: nums[right], index: right })

    if (right + 1 < k) {
      continue
    }

    // console.log('left 之前的 stack', stack, head)

    if (left === stack[head].index) {
      head++
    }

    left++

    // console.log([left, right])

    result.push(stack[head].val)

    // console.log('結尾', stack, head, [left, right], result)
  }

  return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)) // [ 3, 3, 5, 5, 6, 7 ]
console.log(maxSlidingWindow([1], 1)) // [ 1 ]
console.log(maxSlidingWindow([1, -1], 1)) // [ 1, -1 ]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)) // [ 3, 3, 2, 5 ]
console.log(maxSlidingWindow([5, 4, 3, 2, 1, 0, -1], 3)) // [ 5, 4, 3, 2, 1 ]

