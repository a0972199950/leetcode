// 300. Longest Increasing Subsequence

console.clear()

// function lengthOfLIS(nums: number[]): number {
//   const dp = []
//   let maxLength = -Infinity

//   for (let i = nums.length - 1; i >= 0; i--) {
//     const combinations = [1] // 只用 nums[i] 一個組成的 increasing subsequence

//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] <= nums[i]) {
//         continue
//       }

//       combinations.push(dp[j] + 1)
//     }

//     dp[i] = Math.max(...combinations)
//     maxLength = Math.max(maxLength, dp[i])
//   }

//   console.log(dp)
//   return maxLength
// }

// function lengthOfLIS(nums: number[]): number {
//   let max = -Infinity

//   const dfs = (lastLength: number, lastMaxNum: number, index: number) => {
//     let length = lastLength
//     let maxNum = lastMaxNum

//     if (nums[index] > lastMaxNum) {
//       length++
//       maxNum = nums[index]
//     }

//     if (index === nums.length - 1) {
//       max = Math.max(max, length)
//       return
//     }

//     dfs(length, maxNum, index + 1)
//     dfs(lastLength, lastMaxNum, index + 1)
//   }

//   for (let i = 0; i < nums.length; i++) {
//     dfs(0, -Infinity, 0)
//   }

//   return max
// }

// function lengthOfLIS(nums: number[]): number {
//   let dp: number[][] = []

//   for (const num of nums) {
//     const nextDp = [
//       [num],
//       ...dp.reduce((sum, arr) => arr.at(-1) < num ? [...sum, [...arr, num]] : sum, [] as number[]),
//       ...dp
//     ] as any

//     dp = nextDp
//   }

//   // console.log(dp)

//   return dp.reduce((max, arr) => arr.length > max ? arr.length : max, -Infinity)
// }

function lengthOfLIS(nums: number[]): number {
  const dp = Array(nums.length).fill(null)
  let min = nums.at(-1)

  dp[dp.length - 1] = 1

  for (let i = nums.length - 2; i >= 0; i--) {
    dp[i] = Math.max(
      1, // 只有自己
      nums[i] < min ? 1 + dp[i + 1] : -Infinity, // 包含自己和下一個
      dp[i + 1] // 不包含自己，只有下一個
    )

    if (nums[i] < min) {
      min = nums[i]
    }
  }

  console.log(dp)
  return dp[0]
}

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7]))
// console.log(lengthOfLIS([1, 2, 4, 3]))
// console.log(lengthOfLIS([1, 2, 3]))
// console.log(lengthOfLIS([0, 1, 0]))
// console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))


