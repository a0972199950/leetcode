// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

export {}
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

// function subarraySum(nums: number[], k: number): number {
//   let sum = 0
//   const prefixSums = {}
//   let result = 0

//   for (const num of nums) {
//     sum += num

//     if (sum === k) {
//       result++
//     }

//     const diff = sum - k

//     if (prefixSums[diff]) {
//       result += prefixSums[diff]
//     }

//     prefixSums[sum] = ++prefixSums[sum] || 1
//   }

//   return result
// }

// Time: O(n^3)
// Space: O(1)
// function subarraySum(nums: number[], k: number): number {
//   let result = 0

//   const getSum = (i, j) => {
//     let sum = 0

//     for (let x = i; x <= j; x++) {
//       sum += nums[x]
//     }

//     return sum
//   }

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       const sum = getSum(i, j)
//       if (sum === k) {
//         result++
//       }
//     }
//   }

//   return result
// }

// Time: O(n)
// Space: O(n)
// function subarraySum(nums: number[], k: number): number {
//   const prefixSums = new Map()
//   prefixSums.set(0, 1)

//   let sum = 0
//   let result = 0
//   for (const num of nums) {
//     sum += num

//     const prefix = sum - k

//     if (prefixSums.has(prefix)) {
//       result += prefixSums.get(prefix)
//     }

//     prefixSums.set(sum, (prefixSums.get(sum) ?? 0) + 1)
//   }

//   return result
// }

// Time: O(n)
// Space: O(n)
function subarraySum(nums: number[], k: number): number {
  const prefixMap: Record<number, number> = { 0: 1 }

  let sum = 0
  let result = 0
  for (const num of nums) {
    sum += num

    const diff = sum - k

    if (prefixMap[diff]) {
      result += prefixMap[diff]
    }

    prefixMap[sum] = (prefixMap[sum] ?? 0) + 1
  }

  return result
}

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, 2, 3], 5))
console.log(subarraySum([-1, -1, 1], 0))

