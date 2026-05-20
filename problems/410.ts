// 410. Split Array Largest Sum

export {}
console.clear()

// Time: O(N * log(sum(N)))
// Space: O(1)
function splitArray(nums: number[], k: number): number {
  const canPartition = (maxAllowed: number) => {
    let splits = 1
    let current = 0

    for (const num of nums) {
      current += num

      if (current > maxAllowed) {
        splits++
        current = num
      }

      if (splits > k) {
        return false
      }
    }

    // ≤ k 就合法，因為只要能分成 <= k 段，那就一定能隨意切得更細成 k 段 (只要 k 不超過 nums 的長度)
    return true
  }

  let left = -Infinity // max(nums)
  let right = 0 // sum(nums)

  for (const num of nums) {
    left = Math.max(left, num)
    right += num
  }

  while (left < right) {
    const middle = Math.floor(left + ((right - left) / 2))

    if (canPartition(middle)) {
      // 嘗試找更小
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

// console.log(splitArray([1, 1, 1, 1, 1, 1, 1], 1))
// console.log(splitArray([7, 2, 5, 10, 8], 2))
// console.log(splitArray([1, 2, 3, 4, 5], 2))
// console.log(splitArray([7, 2, 5, 10, 8], 5))
console.log(splitArray([10, 6, 6, 10], 4))

