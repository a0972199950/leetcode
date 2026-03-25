// 643. Maximum Average Subarray I

export {}
console.clear()

// Time: O(n)
// Space: O(1)
function findMaxAverage(nums: number[], k: number): number {
  let left = 0
  let right = left + k - 1

  let sum = 0
  for (let i = left; i <= right; i++) {
    sum += nums[i]
  }

  let max = sum / k
  // console.log('max: ', max)
  while (right < nums.length - 1) {
    
    right++
    sum += nums[right]

    sum -= nums[left]
    left++

    // console.log(left, right)
    max = Math.max(max, sum / k)
    // console.log('max: ', max)
  }

  return max
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
