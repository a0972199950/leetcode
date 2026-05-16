// 81. Search in Rotated Sorted Array II

export {}
console.clear()

// Time O(logN + logN)
// Space O(1)
// function search(nums: number[], target: number): boolean {
//   nums.sort((a, b) => a - b)

//   let left = 0
//   let right = nums.length - 1

//   while (left !== right) {
//     const middle = Math.floor(left + ((right - left) / 2))
//     const middleNum = nums[middle]

//     if (middleNum > target) {
//       right = middle
//     } else if (middleNum < target) {
//       left = middle + 1
//     } else {
//       return true
//     }
//   }

//   return nums[left] === target
// }

// Time O(logN)
// Space O(1)
function search(nums: number[], target: number): boolean {

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const middle = Math.floor(left + ((right - left) / 2))
    // console.log(middle)

    if (nums[middle] == target) {
      return true
    }

    // 無法判斷
    if (nums[left] === nums[middle] && nums[middle] === nums[right]) {
      // console.log('無法判斷')
      // 左右各縮一個
      left++
      right--
    }
    // 左半有序
    else if (nums[left] <= nums[middle]) {
      // console.log('左半有序')
      // target 是否在左半?
      if (nums[left] <= target && target <= nums[middle]) {
        // 範圍改成左半
        right = middle - 1
      } else {
        // 範圍改成右半
        left = middle + 1
      }
    }
    // 右半有序
    else if (nums[middle] <= nums[right]) {
      // console.log('右半有序')
      // target 是否在右半?
      if (nums[middle] <= target && target <= nums[right]) {
        // 範圍改成右半
        left = middle + 1
      } else {
        // 範圍改成左半
        right = middle - 1
      }
    }
  }

  return nums[left] === target

}

// console.log(search([4, 5, 6, 6, 7, 0, 1, 2, 4, 4], 5))
// console.log(search([2, 5, 6, 0, 0, 1, 2], 0))
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3))
// console.log(search([1], 0))
// console.log(search([2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2], 3))
// console.log(search([2, 2, 2, 2, 2, 2, 2], 3))
console.log(search([5, 1, 3], 1))
