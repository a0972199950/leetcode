// 300. Longest Increasing Subsequence

console.clear()

function lengthOfLIS(nums: number[]): number {
  const dp = []
  let maxLength = -Infinity

  for (let i = nums.length - 1; i >= 0; i--) {
    const combinations = [1] // 只用 nums[i] 一個組成的 increasing subsequence

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] <= nums[i]) {
        continue
      }

      combinations.push(dp[j] + 1)
    }

    dp[i] = Math.max(...combinations)
    maxLength = Math.max(maxLength, dp[i])
  }

  console.log(dp)
  return maxLength
}

// lengthOfLIS([1, 2, 4, 3])
// lengthOfLIS([1, 2, 3])
lengthOfLIS([7, 7, 7, 7, 7, 7])
// lengthOfLIS([0, 1, 0, 3, 2, 3])
// lengthOfLIS([0, 1, 0])
// lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])

export {}
