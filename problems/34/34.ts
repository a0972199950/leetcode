// 34. Find First and Last Position of Element in Sorted Array
// 最後練習時間：2026-08-29
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

console.clear()

// function searchRange(nums: number[], target: number): number[] {
//   let left = 0
//   let right = nums.length - 1
//   let middle = null

//   while (right > left) {
//     const _middle = Math.floor(left + (right - left) / 2)

//     if (nums[_middle] === target) {
//       middle = _middle
//       break
//     } else if (nums[_middle] > target) {
//       right = _middle - 1
//     } else {
//       left = _middle + 1
//     }
//   }

//   console.log(left, middle, right)

//   if (middle === null) {
//     if (nums[left] !== target && nums[right] !== target) {
//       return [-1, -1]
//     } else {
//       middle = nums[left] === target ? left : right
//     }
//   }

//   left = middle
//   right = middle

//   while (nums[left] === target || nums[right] === target) {
//     (nums[left] === target) && (left--)
//     ;(nums[right] === target) && (right++)
//   }

//   return [left + 1, right - 1]
// }

// 最後練習時間：2026-08-29
// Time: O(log n)
// Space: O(log n)
// function searchRange(nums: number[], target: number): number[] {
//   if (nums[0] === nums.at(-1) && nums[0] === target) {
//     return [0, nums.length - 1]
//   }
//   let min = Infinity
//   let max = -Infinity

//   const recursive = (_left: number, _right: number) => {
//     let left = _left
//     let right = _right

//     while (right >= left) {
//       const middle = Math.floor(left + (right - left) / 2)

//       if (nums[middle] === target) {
//         min = Math.min(min, middle)
//         max = Math.max(max, middle)
//         recursive(left, middle - 1)
//         recursive(middle + 1, right)
//         break
//       }

//       if (nums[middle] > target) {
//         right = middle - 1
//         continue
//       }

//       if (nums[middle] < target) {
//         left = middle + 1
//         continue
//       }
//     }
//   }

//   recursive(0, nums.length - 1)

//   if (min === Infinity || max === -Infinity) {
//     return [-1, -1]
//   }

//   return [min, max]
// }

// Time: O(log n)
// Space: O(1)
function searchRange(nums: number[], target: number): number[] {
  // 二分法兩次，一次找最左，一次找最右
  const find = (type: 'LEFT' | 'RIGHT') => {
    let result = -1
    let left = 0
    let right = nums.length - 1

    while (right >= left) {
      const middle = Math.floor(left + (right - left) / 2)

      if (nums[middle] > target) {
        right = middle - 1
        continue
      }

      if (nums[middle] < target) {
        left = middle + 1
        continue
      }

      if (type === 'LEFT') {
        result = middle
        right = middle - 1
      } else {
        result = middle
        left = middle + 1
      }
    }

    return result
  }

  const min = find('LEFT')

  if (min === -1) {
    return [-1, -1]
  }

  const max = find('RIGHT')
  return [min, max]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]
console.log(searchRange([], 0)) // [-1,-1]
console.log(searchRange([1, 2, 3], 2)) // [ 1, 1 ]
console.log(searchRange([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8)) // [ 0, 9 ]

