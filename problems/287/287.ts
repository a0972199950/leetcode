// 287. Find the Duplicate Number
// 最後練習時間：2026-09-25
// https://leetcode.com/problems/find-the-duplicate-number/

console.clear()

// Time O(n log n + n)
// Space O(1)
// function findDuplicate(nums: number[]): number {
//   let last: number | null = null

//   nums
//     .sort((a, b) => a - b)
//     .every((num) => {
//       if (last === null) {
//         last = num
//         return true
//       }

//       if (num === last) {
//         return false
//       }

//       last = num
//       return true
//     })

//   return last as unknown as number
// }

// Time: O(n)
// Space: O(n)
// function findDuplicate(nums: number[]): number {
//   const history = new Set()

//   for (const num of nums) {
//     if (history.has(num)) {
//       return num
//     }

//     history.add(num)
//   }

//   return -1
// }

// function findDuplicate(nums: number[]): number {
//   let slow = nums[0]
//   let fast = nums[0]

//   const increase = (steps: number, current: number) => {
//     let result = current

//     for (let i = 1; i <= steps; i++) {
//       result = nums[result]
//     }

//     return result
//   }

//   do {
//     slow = increase(1, slow)
//     fast = increase(2, fast)
//   } while (slow !== fast)

//   console.log(slow, fast)

//   let slow2 = nums[0]
//   while (slow !== slow2) {
//     slow = increase(1, slow)
//     slow2 = increase(1, slow2)
//   }

//   console.log(slow, slow2)
//   return slow
// }

// Time: O(n)
// Space: O(n)
// function findDuplicate(nums: number[]): number {
//   const record = {}

//   for (const num of nums) {
//     record[num] = ++record[num] || 1
//     if (record[num] > 1) {
//       return num
//     }
//   }
// }

// Time: O(n log n)
// Space: O(1)
// function findDuplicate(nums: number[]): number {
//   let left = 1
//   let right = nums.length - 1

//   const findAtMost = (target: number) => {
//     let count = 0

//     for (const num of nums) {
//       if (num <= target) {
//         count++
//       }
//     }

//     return count
//   }

//   while (right > left) {
//     const middle = Math.floor(left + (right - left) / 2)

//     const atMost = findAtMost(middle)

//     if (atMost > middle) {
//       // 往左縮
//       right = middle
//     } else {
//       left = middle + 1
//     }
//   }

//   return left
// }

// Time O(n log n + n)
// Space O(1)
// function findDuplicate(nums: number[]): number {
//   let last: number | null = null

//   nums
//     .sort((a, b) => a - b)
//     .every((num) => {
//       if (last === null) {
//         last = num
//         return true
//       }

//       if (num === last) {
//         return false
//       }

//       last = num
//       return true
//     })

//   return last as unknown as number
// }

// function findDuplicate(nums: number[]): number {
//   let slow = nums[0]
//   let fast = nums[0]

//   const increase = (steps: number, current: number) => {
//     let result = current

//     for (let i = 1; i <= steps; i++) {
//       result = nums[result]
//     }

//     return result
//   }

//   do {
//     slow = increase(1, slow)
//     fast = increase(2, fast)
//   } while (slow !== fast)

//   console.log(slow, fast)

//   let slow2 = nums[0]
//   while (slow !== slow2) {
//     slow = increase(1, slow)
//     slow2 = increase(1, slow2)
//   }

//   console.log(slow, slow2)
//   return slow
// }

// // hash map 法，不符合 Space: O(1) 要求
// // Time: O(n)
// // Space: O(n)
// function findDuplicate(nums: number[]): number {
//   const set = new Set()

//   for (const num of nums) {
//     if (set.has(num)) {
//       return num
//     }

//     set.add(num)
//   }
// }

// // 二分法
// // Time: O(n log n)
// // Space: O(1)
// function findDuplicate(nums: number[]): number {
//   let left = 1
//   let right = nums.length - 1

//   const atMost = (max: number): number => {
//     let count = 0

//     for (const num of nums) {
//       if (num <= max) {
//         count++
//       }
//     }

//     return count
//   }

//   while (right > left) {
//     const middle = Math.floor(left + (right - left) / 2)

//     if (atMost(middle) <= middle) {
//       left = middle + 1
//     } else {
//       right = middle
//     }
//   }

//   return left
// }

// 快慢指標相遇法
// Time: O(n)
// Space: O(1)
function findDuplicate(nums: number[]): number {
  let slow = 0 // index
  let fast = 0 // index

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    if (slow === fast) {
      break
    }
  }

  // 用 index 沒關係，因為題目規定陣列最小長度為2，並且一定有重複，因此此時必定為 [1,1]
  // while 一定能走一次，所以 slow2 本身會是答案
  // 如果陣列可以只有1 ([1])，那指標就不能用 index，要存具體數字
  let slow2 = 0 // index

  while (slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }
  
  return slow2
}

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // 3
console.log(findDuplicate([3, 3, 3, 3, 3])) // 3
console.log(findDuplicate([1, 3, 5, 2, 2, 4, 6])) // 2
console.log(findDuplicate([1, 1, 3, 4, 2])) // 1

