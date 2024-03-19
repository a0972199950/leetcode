// 45. Jump Game II

console.clear()

// 一開始想的不知道是什麼的看不懂的暴力算法
// function jump(nums: number[]): number {
//   const mins = Array(nums.length)
//   const lastIndex = nums.length - 1

//   for (let i = lastIndex; i >= 0; i--) {
//     if (i === lastIndex) {
//       mins[i] = 0
//       continue
//     }

//     const val = nums[i]
//     const possibleMins = mins.slice(i + 1, i + val + 1)

//     mins[i] = Math.min(...possibleMins) + 1
//   }

//   return mins[0]
// }

// dp 算法
// function jump(nums: number[]): number {
//   const dp: number[] = []
//   const lastPositions: { index: number, val: number, min: number }[] = []

//   for (let i = 0; i < nums.length; i++) {
//     // console.log(i, lastPositions)
//     if (i === 0) {
//       lastPositions.push({ index: i, val: nums[i], min: 0 })
//       dp[i] = 0
//       continue
//     }

//     let j = 0
//     let min = Infinity
//     while (j < lastPositions.length) {
//       const node = lastPositions[j]

//       if (node.index + node.val < i) {
//         lastPositions.splice(j, 1)
//         continue
//       } else {
//         min = Math.min(min, node.min + 1)
//         j++
//       }
//     }

//     lastPositions.push({ index: i, val: nums[i], min: min })
//     dp[i] = min
//   }

//   // console.log(dp)
//   return dp[dp.length - 1]
// }

// Greedy 算法 (BFS)
// function jump(nums: number[]): number {
//   if (nums.length === 1) {
//     return 0
//   }

//   const queue: { index: number, val: number, min: number }[] = []
//   const history = new Set<number>()

//   queue.push({ index: 0, val: nums[0], min: 0 })
//   history.add(0)
  
//   while (queue.length) {
//     console.log(queue)
//     const position = queue.shift()

//     for (let steps = 1; steps <= position.val; steps++) {
//       const nextIndex = position.index + steps

//       if (nextIndex === nums.length - 1) {
//         return position.min + 1
//       }

//       if (!history.has(nextIndex)) {
//         queue.push({ index: nextIndex, val: nums[nextIndex], min: position.min + 1})
//         history.add(nextIndex)
//       }
//     }
//   }
// }

function jump(nums: number[]): number {
  let res = 0
  let left = 0
  let right = 0

  while (right < nums.length - 1) {
    let farthest = 0

    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, i + nums[i])
    }

    left = right + 1
    right = farthest
    res++
  }

  return res
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([0]))

export {}