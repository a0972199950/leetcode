// 198. House Robber

console.clear()

function rob(nums: number[]): number {
  const dp = []

  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(
      (dp[i - 1] ?? 0),
      nums[i] + (dp[i - 2] ?? 0)
    )
  }

  console.log(dp)
  return dp.at(-1)
}

rob([1, 2, 3, 1])
rob([2, 7, 9, 3, 1])

export {}
