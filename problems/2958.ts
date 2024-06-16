// 2958. Length of Longest Subarray With at Most K Frequency

export {}
console.clear()

function maxSubarrayLength(nums: number[], k: number): number {
  let max = 1

  let left = 0
  let right = 0
  const hash = {
    [nums[0]]: 1
  }

  while (right < nums.length - 1) {
    right++

    hash[nums[right]] = ++hash[nums[right]] || 1

    while (hash[nums[right]] > k) {
      hash[nums[left]]--
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2))
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1))
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4))
console.log(maxSubarrayLength([1, 4, 4, 3], 1))


