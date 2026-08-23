// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

export {}
console.clear()

function search(nums: number[], target: number): number {
  return nums.findIndex(item => item === target)
}


