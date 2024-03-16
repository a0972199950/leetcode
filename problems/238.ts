// 238. Product of Array Except Self

console.clear()

// function productExceptSelf(nums: number[]): number[] {
//   const prefixOrSuffix = []
//   const result = []

//   for (let i = 0; i < nums.length; i++) {
//     prefixOrSuffix[i] = (prefixOrSuffix[i - 1] ?? 1) * (nums[i - 1] ?? 1)
//   }

//   console.log(prefixOrSuffix)

//   for (let i = nums.length - 1; i >= 0; i--) {
//     const rightSum = (prefixOrSuffix[i + 1] ?? 1) * (nums[i + 1] ?? 1)
//     result[i] = rightSum * prefixOrSuffix[i]
//     prefixOrSuffix[i] = rightSum
//   }

//   console.log(prefixOrSuffix)
//   console.log(result)

//   return result
// }

// function productExceptSelf(nums: number[]): number[] {
//   const prefixProductSum = []
//   const suffixProductSum = []

//   for (
//     let i = 0, j = nums.length - 1;
//     i < nums.length && j >= 0;
//     i++, j--
//   ) {
//     prefixProductSum[i] = nums[i] * (prefixProductSum[i - 1] ?? 1)
//     suffixProductSum[j] = nums[j] * (suffixProductSum[j + 1] ?? 1)
//   }

//   const ans = []

//   for (let i = 0; i < nums.length; i++) {
//     ans.push(
//       (prefixProductSum[i - 1] ?? 1)
//       * (suffixProductSum[i + 1] ?? 1)
//     )
//   }

//   return ans
// }

function productExceptSelf(nums: number[]): number[] {
  let ans = []

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = postfix * ans[i]
    postfix *= nums[i]
  }

  return ans
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))

export {}