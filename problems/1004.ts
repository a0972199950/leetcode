// 1004. Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/submissions/1955526995/

export {}
console.clear()

function longestOnes(nums: number[], k: number): number {
  let rest = k
  let max = 0
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      rest--
    }

    while (rest < 0) {
      if (nums[left] === 0) {
        rest++
      }

      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)) // 6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)) // 10
console.log(longestOnes([0, 0, 0, 1], 4)) // 4
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)) // 6

