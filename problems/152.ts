console.clear()

// 152. Maximum Product Subarray

// function maxProduct(nums: number[]): number {
//   let max = -Infinity
//   let cache = new Set<number>().add(1)

//   for (const num of nums) {
//     const newCache = new Set<number>().add(num)
//     max = Math.max(max, num)

//     cache.forEach(item => {
//       const result = item * num
//       console.log('oldMax: ', max, 'result: ', result)
//       max = Math.max(max, result)
//       console.log('max: ', max)
//       newCache.add(result)
//     })

//     cache = newCache
//   }

//   console.log(...cache)
//   console.log(max)

//   return max
// }

// function maxProduct(nums: number[]): number {
//   let max = -Infinity

//   let previousMax = 1
//   let previousMin = 1

//   for (const num of nums) {
//     const posibleNums = [num, previousMax * num, previousMin * num]
//     previousMax = Math.max(...posibleNums)
//     previousMin = Math.min(...posibleNums)
//     max = Math.max(max, previousMax)

//     console.log(num, previousMax, previousMin)
//   }

//   return max
// }

function maxProduct(nums: number[]): number {
  let max = nums[0]

  let dp = {
    max: nums[0],
    min: nums[0]
  }

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]

    dp = {
      max: Math.max(num, dp.max * num, dp.min * num),
      min: Math.min(num, dp.max * num, dp.min * num)
    }

    max = Math.max(max, dp.max, dp.min)
    // console.log(num, dp, max)
  }

  return max
}

// console.log(maxProduct([2, 3, -2, 4]))
// console.log(maxProduct([2, 3, -2, -4]))
// console.log(maxProduct([-2, 0, -1]))
// console.log(maxProduct([2, 3, 3, -2, 4, 9]))
// console.log(maxProduct([0, 5]))
console.log(maxProduct([-4, -3, -2]))
console.log(maxProduct([0]))

