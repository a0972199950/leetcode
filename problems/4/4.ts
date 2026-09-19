// 4. Median of Two Sorted Arrays
// 最後練習時間：2026-09-19
// https://leetcode.com/problems/median-of-two-sorted-arrays/

console.clear()

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const middle = (nums1.length + nums2.length) / 2

//   if (middle === 0) {
//     return 0
//   }

//   const arr = []
//   let index1 = 0
//   let index2 = 0

//   while (arr.length <= middle) {
//     const val1 = nums1[index1] ?? Infinity
//     const val2 = nums2[index2] ?? Infinity

//     if (val1 <= val2) {
//       arr.push(val1)
//       index1++
//     }
//     else {
//       arr.push(val2)
//       index2++
//     }
//   }

//   // console.log(arr)

//   if ((nums1.length + nums2.length) % 2 === 1) {
//     return arr[arr.length - 1]
//   } else {
//     return (arr[arr.length - 1] + arr[arr.length - 2]) / 2
//   }
// }

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   const half = Math.floor((nums1.length + nums2.length) / 2)
//   let min = 0
//   let max = nums2.length - 1
//   let middle = Math.floor(min + (max - min) / 2)

//   while (max > min) {
//     middle = Math.floor(min + (max - min) / 2)
//     console.log('min: ', min, 'max: ', max, 'middle: ', middle)
//     const diff = half - (middle + 1)

//     if (nums2[middle + 1] <= nums1[diff + 2] && nums1[diff + 1] <= nums2[middle + 2]) {
//       break
//     }
//     else if (nums2[middle + 1] > nums1[diff + 2]) {
//       max = middle
//     }
//     else {
//       min = middle + 1
//     }
//   }

//   if ((nums1.length + nums2.length) % 2 === 1) {
//     return Math.min(nums2[middle + 1], nums1[half - middle + 1])
//   } else {
//     return (Math.min(nums2[middle + 1], nums1[half - middle + 1]) + Math.max(nums2[middle], nums1[half - middle])) / 2

//   }
// }

// Time: O((m+n) / 2)
// Space: O(1)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let i = 0
  let j = 0
  
  let prev = 0
  let curr = null

  let count = 0
  const max = Math.floor((nums1.length + nums2.length) / 2) + 1

  while (count < max) {
    const num1 = nums1[i] ?? Infinity
    const num2 = nums2[j] ?? Infinity

    if (num1 <= num2) {
      prev = curr
      curr = num1
      i++
    } else {
      prev = curr
      curr = num2
      j++
    }

    count++
  }

  const length = nums1.length + nums2.length

  if (length % 2 !== 0) {
    return curr
  } else {
    return (prev + curr) / 2
  }
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4])) // 3.5
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4])) // 4.5
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
console.log(findMedianSortedArrays([2], [])) // 2
console.log(findMedianSortedArrays([3, 4], [1, 2])) // 2.5
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4])) // 2
console.log(findMedianSortedArrays([-10, -9, -8], [1, 2])) // -8

