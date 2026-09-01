// 287. Find the Duplicate Number
// 最後練習時間：2026-09-01
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

// 最後練習時間：2026-09-01
// Time: O(n log n)
// Space: O(1)
function findDuplicate(nums: number[]): number {
  let left = 1
  let right = nums.length - 1

  const findAtMost = (target: number) => {
    let count = 0

    for (const num of nums) {
      if (num <= target) {
        count++
      }
    }

    return count
  }

  while (right > left) {
    const middle = Math.floor(left + (right - left) / 2)

    const atMost = findAtMost(middle)

    if (atMost > middle) {
      // 往左縮
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // 3
console.log(findDuplicate([3, 3, 3, 3, 3])) // 3
console.log(findDuplicate([1, 3, 5, 2, 2, 4, 6])) // 2
console.log(findDuplicate([1, 1, 3, 4, 2])) // 1

