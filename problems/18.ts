// 18. 4Sum

export {}
console.clear()

// function fourSum(nums: number[], target: number): number[][] {
//   nums = nums.sort((a, b) => a - b)

//   const result = []
//   const history = new Set()

//   const dfs = (leftBound: number, rightBound: number) => {
//     if (rightBound - leftBound < 3) {
//       return
//     }

//     let left = leftBound + 1
//     let right = rightBound - 1

//     while (right > left) {
//       const sum = nums[leftBound] + nums[left] + nums[right] + nums[rightBound]

//       if (sum < target) {
//         left++
//         continue
//       }
      
//       if (sum > target) {
//         right--
//         continue
//       }

//       if (!history.has(`[${nums[leftBound]},${nums[left]},${nums[right]},${nums[rightBound]}]`)) {
//         result.push([nums[leftBound], nums[left], nums[right], nums[rightBound]])
//         history.add(`[${nums[leftBound]},${nums[left]},${nums[right]},${nums[rightBound]}]`)
//       }
      
//       right--
//     }

//     dfs(leftBound + 1, rightBound)
//     dfs(leftBound, rightBound - 1)
//     dfs(leftBound + 1, rightBound - 1)
//   }

//   dfs(0, nums.length - 1)
//   return result
// }

function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b)
  // console.log(nums)

  const result = []
  const members: number[] = []

  const fn = (start: number, k: number, diff: number) => {
    if (k > 2) {
      for (let i = start; i < nums.length - (k - 1); i++) {
        members.push(nums[i])
        fn(i + 1, k - 1, diff - nums[i])
        members.pop()

        while (nums[i] === nums[i + 1]) {
          i++
        }
      }

      return
    }

    let left = start
    let right = nums.length - 1

    while (right > left) {
      const sum = nums[left] + nums[right]

      if (sum === diff) {
        result.push([...members, nums[left], nums[right]])
      }

      if (sum >= diff) {
        do {
          right--
        } while (nums[right] === nums[right + 1] && right >= left)
        continue
      }

      if (sum < diff) {
        do {
          left++
        } while (nums[left] === nums[left - 1] && right >= left)
        continue
      }
    }
  }

  fn(0, 4, target)

  return result
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2, 2], 8))
console.log(fourSum([0, 0, 0], 0))
console.log(fourSum([0, 0, 0, 0], 0))


