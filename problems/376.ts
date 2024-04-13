// 376. Wiggle Subsequence

console.clear()

// function wiggleMaxLength(nums: number[]): number {
//   const dp = []
//   let maxLength = 0

//   for (let i = nums.length - 1; i >= 0; i--) {
//     const currentMaxWiggleLengths = [1]

//     for (let j = i + 1; j < nums.length; j++) {
//       let nextOfJ = j + 1
//       while (nums[nextOfJ] === nums[j] && nextOfJ < nums.length) {
//         nextOfJ++
//       }

//       if (
//         nums[nextOfJ] !== undefined && Math.sign(nums[j] - nums[i]) === Math.sign(nums[nextOfJ] - nums[j])
//         || Math.sign(nums[j] - nums[i]) === 0
//       ) {
//         continue
//       }

//       currentMaxWiggleLengths.push(1 + dp[j])
//     }

//     dp[i] = Math.max(...currentMaxWiggleLengths)
//     maxLength = Math.max(maxLength, dp[i])
//   }

//   console.log(dp)
//   return maxLength
// }

function wiggleMaxLength(nums: number[]): number {
  const dp = {
    up: 1,
    down: 1
  }

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1]

    let upMax = dp.up
    let downMax = dp.down

    if (diff > 0) {
      upMax = dp.down + 1
    } else if (diff < 0) {
      downMax = dp.up + 1
    }

    dp.up = upMax
    dp.down = downMax

    // console.log(nums[i], 'up: ', dp.up, 'down: ', dp.down)
  }

  return Math.max(dp.up, dp.down)
}

// console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
// console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
// console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(wiggleMaxLength([7, 4, 5, 5, 9, 3, 6, 7]))
console.log(wiggleMaxLength([5, 5, 5, 5, 5]))

export {}
