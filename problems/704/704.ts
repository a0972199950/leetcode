// 704. Binary Search
// 最後練習時間：2026-06-16

export {}
console.clear()

// Time: O(logN)
// Space: O(1)
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)
    const num = nums[middle]

    if (num === target) {
      return middle
    }

    if (num > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // Expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // Expected: -1
