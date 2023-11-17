// 416. Partition Equal Subset Sum

console.clear()

// 一維 dp
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((lastResult, num) => lastResult + num, 0)

  if (sum % 2 !== 0) {
    return false
  }

  const halfSum = sum / 2
  let dp: boolean[] = Array.from(new Array(halfSum + 1)).fill(false)

  for (let i = 0; i < nums.length; i++) {
    // console.log(dp)
    const num = nums[i]
    const nextDp: boolean[] = []

    for (let targetSum = 0; targetSum <= halfSum; targetSum++) {
      if (targetSum === 0) {
        nextDp[targetSum] = true
      }
      else if (i === 0) {
        nextDp[targetSum] = targetSum === num
      }
      else {
        // 有機會使用 num
        if (targetSum >= num) {
          nextDp[targetSum] = 
            dp[targetSum - num] // 使用 num
            || dp[targetSum] // 不使用 num
        }
        // 沒機會使用 num
        else {
          nextDp[targetSum] = dp[targetSum]
        }
      }
    }

    dp = nextDp
  }

  return dp[dp.length - 1]
}

// 暴力遍歷 + cache
// function canPartition(nums: number[]): boolean {
//   const sum = nums.reduce((last, num) => last + num, 0)

//   // 總數的一半是小數，代表無法完整切分
//   if (sum % 2 !== 0) {
//     return false
//   }

//   const halfSum = sum / 2
//   // 到目前為止出現的數字中，有可能組出的不重複的 sum 的集合
//   const allUniquePossibleSums = new Set<number>([0])

//   for (const num of nums) {
//     // 遍歷所有到上一個數字為止有可能出現的不重複的 sum，將其與當下數字相加，看看會不會出現新的，不重複的 sum
//     // 如果有出現新的，而它剛好和 halfSum 相等，代表已找到，return true。如果不相等，則將其放入集合中，待下一次與新的數字相加運算

//     const copyAllUniquePossibleSums = new Set(allUniquePossibleSums.values())

//     for (const lastPossibleSum of copyAllUniquePossibleSums.values()) {
//       const newPossibleSum = lastPossibleSum + num

//       if (newPossibleSum === halfSum) {
//         return true
//       }

//       if (newPossibleSum > halfSum) {
//         continue
//       }

//       allUniquePossibleSums.add(newPossibleSum)
//     }
//   }

//   return false
// }

console.log(canPartition([1, 11, 5, 5]))
console.log(canPartition([3, 3, 3, 4, 5]))
console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([1, 2, 5]))

export {}