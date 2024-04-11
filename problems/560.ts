// 560. Subarray Sum Equals K

console.clear()

// function subarraySum(nums: number[], k: number): number {
//   let count = 0
//   let left = 0
//   let right = 0
//   let sum = nums[0]

//   while (left < nums.length && right < nums.length) {
//     console.log(left, right, sum, k)

//     if (sum === k) {
//       count++
//       left = right
//       sum = nums[right]
//     }
//     else if (sum < k) {
//       if (right < nums.length - 1) {
//         right++
//         sum += nums[right]
//       } else {
//         break
//       }
//     }
//     else if (sum > k) {
//       if (left < nums.length - 1) {
//         sum -= nums[left]
//         left++
//       } else {
//         break
//       }
//     }
//   }

//   console.log('count: ', count)
//   return count
// }

function subarraySum(nums: number[], k: number): number {
  let sum = 0
  const prefixSums = {}
  let result = 0

  for (const num of nums) {
    sum += num

    if (sum === k) {
      result++
    }

    const diff = sum - k

    if (prefixSums[diff]) {
      result += prefixSums[diff]
    }

    prefixSums[sum] = ++prefixSums[sum] || 1
  }

  return result
}

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, 2, 3], 5))
console.log(subarraySum([-1, -1, 1], 0))

export {}
