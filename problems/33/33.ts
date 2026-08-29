// 33. Search in Rotated Sorted Array
// 最後練習時間：2026-08-29
// https://leetcode.com/problems/search-in-rotated-sorted-array/

console.clear()

// function search(nums: number[], target: number): number {
//   return nums.findIndex(item => item === target)
// }

// 最後練習時間：2026-08-29
// Time: O(2 * logN)
// Time: O(1)
// function search(nums: number[], target: number): number {
//   // 先找旋轉點，再做兩次 binary search
  
//   const findRotateIndex = () => {
//     let left = 0
//     let right = nums.length - 1

//     while (right > left) {
      
//       const middle = Math.floor(left + (right - left) / 2)

//       const isLeftRotated = nums[0] > nums[middle]
//       const isRightRotated = nums.at(-1) < nums[middle]

//       if (isLeftRotated) {
//         right = middle
//         continue
//       }

//       if (isRightRotated) {
//         left = middle + 1
//         continue
//       }

//       if (!isLeftRotated && !isRightRotated) {
//         break
//       }
//     }

//     return left
//   }

//   const rotateIndex = findRotateIndex()

//   const findNum = (_left: number, _right: number) => {
//     let left = _left
//     let right = _right

//     if (right < 0 || target < nums[left] || target > nums[right]) {
//       return null
//     }

//     while (right > left) {
//       const middle = Math.floor(left + (right - left) / 2)

//       if (nums[middle] === target) {
//         return middle
//       }

//       if (nums[middle] > target) {
//         right = middle - 1
//       }

//       if (nums[middle] < target) {
//         left = middle + 1
//       }
//     }

//     return (nums[left] === target) ? left : null
//   }

//   return findNum(0, rotateIndex - 1) ?? findNum(rotateIndex, nums.length - 1) ?? -1
// }

// 最後練習時間：2026-08-29
// Time: O(log n)
// Time: O(1)
function search(nums: number[], target: number): number {
  // 在找 middle 的途中，遇到有序的那半，就檢查值有沒有可能在那半
  // 有可能，那就只找那半，他不可能出現在另一半
  // 沒可能，那找另一半
  
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)

    if (nums[middle] === target) {
      return middle
    }

    const isLeftAscending  = nums[left] <= nums[middle]

    if (isLeftAscending) {
      if (nums[left] <= target && nums[middle] >= target) {
        // 找左邊
        right = middle - 1
      } else {
        left = middle + 1
      }

    } else {
      if (nums[middle] <= target && nums[right] >= target) {
        // 找右邊
        left = middle + 1
      } else {
        right = middle
      }
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1, 2, 3, 4, 5], 3)) // 2
console.log(search([1, 2, 3, 4, 5], 9)) // -1
console.log(search([1], 0)) // -1
console.log(search([], 0)) // -1
console.log(search([1, 3], 2)) // -1
console.log(search([5, 1, 3], 1)) // 1
console.log(search([5, 1, 3], 5)) // 0
