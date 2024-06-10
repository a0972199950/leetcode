// 4. Median of Two Sorted Arrays

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

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const half = Math.floor((nums1.length + nums2.length) / 2)
  let min = 0
  let max = nums2.length - 1
  let middle = Math.floor(min + (max - min) / 2)

  while (max > min) {
    middle = Math.floor(min + (max - min) / 2)
    console.log('min: ', min, 'max: ', max, 'middle: ', middle)
    const diff = half - (middle + 1)

    if (nums2[middle + 1] <= nums1[diff + 2] && nums1[diff + 1] <= nums2[middle + 2]) {
      break
    }
    else if (nums2[middle + 1] > nums1[diff + 2]) {
      max = middle
    }
    else {
      min = middle + 1
    }
  }

  if ((nums1.length + nums2.length) % 2 === 1) {
    return Math.min(nums2[middle + 1], nums1[half - middle + 1])
  } else {
    return (Math.min(nums2[middle + 1], nums1[half - middle + 1]) + Math.max(nums2[middle], nums1[half - middle])) / 2

  }
}

// console.log(findMedianSortedArrays([1, 3], [2]))
// console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
// console.log(findMedianSortedArrays([2], []))
// console.log(findMedianSortedArrays([], []))


