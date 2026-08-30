// 162. Find Peak Element
// 最後練習時間：2026-08-30
// https://leetcode.com/problems/find-peak-element/

console.clear()

// function findPeakElement(nums: number[]): number {
//   let min = 0
//   let max = nums.length - 1
//   let middle

//   while (max - min > 1) {
//     middle = Math.floor(min + (max - min) / 2)

//     const left = middle - 1 < 0 ? -Infinity : nums[middle - 1]
//     const num = nums[middle]
//     const right = middle + 1 >= nums.length ? -Infinity : nums[middle + 1]

//     if (num > right && num > left) {
//       return middle
//     }

//     if (right > num) {
//       min = middle + 1
//     } else if (left > num) {
//       max = middle
//     }
//   }

//   if (nums[max] > nums[min]) {
//     return max
//   } else {
//     return min
//   }
// }

// Time: O(log n)
// Space: O(1)
function findPeakElement(nums: number[]): number {
  // 找 "任一個" 坡峰，陣列之外的元素一律視為小於陣列任何已知元素，不會有任兩個相鄰元素相同值 (也就是坡不會是平的)。
  // 那二元找 middle 有三種情況
  // 1. middle 本身就是坡峰，那直接回傳

  // 2. middle 本身是坡谷，兩邊都大於自己。
  // 按照題目要求，即使一路直線大於到最後，那最後那個元素也算是坡峰
  // 所以兩邊都可能有坡峰，隨便挑一邊

  // 3. middle 切到坡中間。那在大於自己那邊，坡峰一定存在
  // 小於自己那邊，雖然不能說一定不存在，但 "有可能" 不存在 (一路向下到底)
  // 題目只要找任一個都行，所以不用找小於自己那邊

  // 搜尋型，靠 while 裡面判斷答案，若跳出 while 迴圈則代表輸入錯誤 
  // (不管 middle 怎麼處理小數，答案都會對，比較好想)

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)

    // middle 本身就是坡峰
    if (nums[middle] === Math.max(nums[middle - 1] ?? -Infinity, nums[middle], nums[middle + 1] ?? -Infinity)) {
      return middle
    }

    // middle 切到坡中間
    if (nums[middle + 1] > nums[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  console.error('輸入錯誤沒有坡峰')
  return -1
}

function findPeakElement(nums: number[]): number {
  // 收斂型，不在 while 裡面找答案，而是收斂到跳出迴圈後，left === right, left 就是答案
  // (收斂一邊要包含 middle 一邊不用，關乎我怎麼處理 middle 的小數，比較難想)

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2)

    // middle 切到坡中間
    if (nums[middle + 1] > nums[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return left
}

// console.log(findPeakElement([1, 2, 3, 1])) // 2
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5
// console.log(findPeakElement([5, 4, 3, 4, 5])) // 0 || 4
// console.log(findPeakElement([1, 2, 3, 4, 5])) // 4
// console.log(findPeakElement([5, 4, 3, 2, 1])) // 0
// console.log(findPeakElement([3, 4, 3, 2, 1])) // 1
console.log(findPeakElement([-5, -8]))

