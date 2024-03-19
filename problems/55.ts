// 55. Jump Game

console.clear()

// function canJump(nums: number[]): boolean {
//   const possibleReachEnd = Array(nums.length)
//   const lastIndex = nums.length - 1

//   for (let i = lastIndex; i >= 0; i--) {
//     if (i === lastIndex) {
//       possibleReachEnd[i] = true
//       continue
//     }

//     const val = nums[i]
//     const result = possibleReachEnd
//       .slice(i, (i + val + 1 > lastIndex + 1 ? lastIndex + 1 : i + val + 1))
//       .includes(true)

//     possibleReachEnd[i] = result
//   }

//   console.log(possibleReachEnd)
//   return possibleReachEnd[0]
// }

function canJump(nums: number[]): boolean {
  const queue: { index: number, val: number }[] = []
  const dp: boolean[] = []
  
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = true
      queue.push({ index: i, val: nums[i] })
      continue
    }

    let canReach = false
    while (!canReach && queue.length) {
      const node = queue[0]

      if (node.index + node.val < i) {
        queue.shift()
        continue
      } else {
        canReach = true
        queue.push({ index: i, val: nums[i] })
        break
      }
    }

    dp[i] = canReach
  }

  return dp[dp.length - 1]
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([6]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([4, 0, 1, 0, 4]))
console.log(canJump([0, 2, 3]))

export {}