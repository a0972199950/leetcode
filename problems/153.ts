// 153. Find Minimum in Rotated Sorted Array

console.clear()

// function findMin(nums: number[]): number {
//   let middle = null

//   // 找最大
//   let left = 0
//   let right = nums.length - 1
//   let max = -Infinity

//   while (right >= left) {
//     const _middle = Math.floor(left + (right - left) / 2)

//     if (nums[_middle] > max) {
//       left = _middle + 1
//       max = nums[_middle]
//       middle = _middle
//       continue
//     }

//     right = _middle - 1
//   }

//   if (middle !== null && nums[middle + 1] < nums[middle]) {
//     return nums[middle + 1]
//   }

//   // 找最小
//   let min = Infinity
//   left = 0
//   right = nums.length - 1
//   middle = null

//   while (right >= left) {
//     const _middle = Math.floor(left + (right - left) / 2)

//     // console.log(nums[left], nums[_middle], nums[right])

//     if (nums[_middle] < min) {
//       right = _middle - 1
//       min = nums[_middle]
//       middle = _middle
//       continue
//     }

//     left = _middle + 1
//   }

//   return nums[middle]
// }

function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  let min = Infinity

  while (right > left) {
    // console.log(nums[left], nums[right])

    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left])
      break
    }

    const middle = Math.floor(left + (right - left) / 2)
    min = Math.min(min, nums[middle])

    if (nums[middle] >= nums[left]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  // console.log('end', nums[left], nums[right])

  min = Math.min(min, nums[left], nums[right])

  return min
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
console.log(findMin([5, 1, 2, 3, 4]))
console.log(findMin([284, 287, 289, 293, 295, 298, 0, 3, 8, 9, 10, 11, 12, 15, 17, 19, 20, 22, 26, 29, 30, 31, 35, 36, 37, 38, 42, 43, 45, 50, 51, 54, 56, 58, 59, 60, 62, 63, 68, 70, 73, 74, 81, 83, 84, 87, 92, 95, 99, 101, 102, 105, 108, 109, 112, 114, 115, 116, 122, 125, 126, 127, 129, 132, 134, 136, 137, 138, 139, 147, 149, 152, 153, 154, 155, 159, 160, 161, 163, 164, 165, 166, 168, 169, 171, 172, 174, 176, 177, 180, 187, 188, 190, 191, 192, 198, 200, 203, 204, 206, 207, 209, 210, 212, 214, 216, 221, 224, 227, 228, 229, 230, 233, 235, 237, 241, 242, 243, 244, 246, 248, 252, 253, 255, 257, 259, 260, 261, 262, 265, 266, 268, 269, 270, 271, 272, 273, 277, 279, 281]))
console.log(findMin([3, 1, 2]))
console.log(findMin([2, 3, 4, 5, 1]))

export {}
