// 1658. Minimum Operations to Reduce X to Zero

export {}
console.clear()

// Time: O(n)
// Space: O(1)
function minOperations(nums: number[], x: number): number {
  let sum = 0

  for (const num of nums) {
    sum += num
  }

  if (sum < x) {
    return -1
  }

  const windowTarget = sum - x

  let min = Infinity
  let left = 0
  let windowSum = 0

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right]

    while (windowSum > windowTarget) {
      // 縮左，增加 outsideSum
      windowSum -= nums[left]
      left++
    }

    if (windowSum === windowTarget) {
      // 紀錄答案
      min = Math.min(min, nums.length - (right - left + 1))
    }
  }

  return min === Infinity ? -1 : min
}

console.log(minOperations([2, 1, 1, 4, 3], 5))
console.log(minOperations([2, 1, 1, 4, 3], 6))
console.log(minOperations([3, 2, 40, 40, 1, 1, 1, 1, 1], 5))
console.log(minOperations( [1, 1, 4, 2, 3], 5))
console.log(minOperations([5, 6, 7, 8, 9], 4))
console.log(minOperations([3, 2, 20, 1, 1, 3], 10))
console.log(minOperations([1, 1], 3))
console.log(minOperations([40, 1, 1, 1, 1, 40], 3))
