// 259. 3Sum Smaller

console.clear()

// function threeSumSmaller(nums: number[], target: number): number {
//   if (nums.length < 3) {
//     return 0
//   }

//   let ans = 0

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] < target) {
//           ans++
//         }
//       }
//     }
//   }

//   return ans
// }

function threeSumSmaller(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let ans = 0

  for (let i = 0; i < nums.length; i++) {
    let left = i - 1
    let right = i + 1
    const diff = target - nums[i]

    while (left > -1 && right < nums.length) {
      const sum = nums[left] + nums[right]

      if (sum < diff) {
        ans += (left + 1)
        right++
        continue
      }

      if (sum >= diff) {
        left--
        continue
      }
    }
  }

  return ans
}

// console.log(threeSumSmaller([-2, 0, 1, 3], 2))
// console.log(threeSumSmaller([], 0))
// console.log(threeSumSmaller([0], 0))
console.log(threeSumSmaller([30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], 1))


