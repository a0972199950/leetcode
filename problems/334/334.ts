// 334. Increasing Triplet Subsequence
// 最後練習時間：2022-10-24
// https://leetcode.com/problems/increasing-triplet-subsequence/

console.clear()

function increasingTriplet(nums: number[]): boolean {
  let min = Infinity

  const hasSmallerNumOnLefts = nums.map(num => {
    const result = min < num
    min = Math.min(min, num)
    return result
  })

  let max = -Infinity
  for (let i = hasSmallerNumOnLefts.length - 1; i >= 0; i--) {
    if (nums[i] < max && hasSmallerNumOnLefts[i]) {
      return true
    }

    max = Math.max(max, nums[i])
  }

  return false
}

console.log(increasingTriplet([1, 2, 3, 4, 5])) // true
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])) // true
console.log(increasingTriplet([5, 4, 3, 2, 1])) // false // false
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])) // true // true

