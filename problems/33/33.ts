// 33. Search in Rotated Sorted Array
// 最後練習時間：2022-10-27
// https://leetcode.com/problems/search-in-rotated-sorted-array/

console.clear()

function search(nums: number[], target: number): number {
  return nums.findIndex(item => item === target)
}

