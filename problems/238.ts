// 238. Product of Array Except Self

console.clear()

function productExceptSelf(nums: number[]): number[] {
  const prefixOrSuffix = []
  const result = []

  for (let i = 0; i < nums.length; i++) {
    prefixOrSuffix[i] = (prefixOrSuffix[i - 1] ?? 1) * (nums[i - 1] ?? 1)
  }

  console.log(prefixOrSuffix)

  for (let i = nums.length - 1; i >= 0; i--) {
    const rightSum = (prefixOrSuffix[i + 1] ?? 1) * (nums[i + 1] ?? 1)
    result[i] = rightSum * prefixOrSuffix[i]
    prefixOrSuffix[i] = rightSum
  }

  console.log(prefixOrSuffix)
  console.log(result)

  return result
}

productExceptSelf([1, 2, 3, 4])
// productExceptSelf([-1, 1, 0, -3, 3])

export {}