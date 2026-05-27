// 1283. Find the Smallest Divisor Given a Threshold

export {}
console.clear()

// Time: O(N * log(max(nums)))
// Space: O(1)
function smallestDivisor(nums: number[], threshold: number): number {
  // threshold = 6
  // [1,2,5,9] 全部除以 1 後加總為 (1+2+5+9) = 17
  // [1,2,5,9] 全部除以 4 後加總為 (1+1+2+3) = 7
  // [1,2,5,9] 全部除以 5 後加總為 (1+1+1+2) = 5
  // [1,2,5,9] 全部除以 20 後加總為 (1+1+1+1) = 4
  // 推論單調性: divisor 愈大，sum 愈小 => 可使用 binary search
  // divisor 限制為正整數
  // 題目保證會有答案，所以 threshold 不會小於 nums.length
  // 找出最小的 divisor 使 sum <= threshold
  // min: 1
  // max: max(nums)

  // Time: O(N)
  const isSumSmallThanThreshold = (divisor: number) => {
    let sum = 0

    for (const num of nums) {
      sum += Math.ceil(num / divisor)

      if (sum > threshold) {
        return false
      }
    }

    return true
  }

  let left = 1
  // Time: O(N)
  let right = Math.max(...nums)

  // Time: O(logN)
  while (left < right) {
    const middle = Math.floor(left + ((right - left) / 2))

    if (isSumSmallThanThreshold(middle)) {
      // 找是否能更小
      right = middle
    } else {
      // 排除掉左半邊，找右半邊
      left = middle + 1
    }
  }

  return left
}

console.log(smallestDivisor([1, 2, 5, 9], 6))
console.log(smallestDivisor([44, 22, 33, 11, 1], 5))
