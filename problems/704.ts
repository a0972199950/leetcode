// 704. Binary Search

export {}
console.clear()

// Time: O(logN)
// Space: O(1)
function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length

  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2)
    const num = nums[middle]

    if (num === target) {
      return middle
    }

    if (num > target) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
