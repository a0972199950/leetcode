// 209. Minimum Size Subarray Sum

export {}
console.clear()

function minSubArrayLen(target: number, nums: number[]): number {
  let min = Infinity

  let left = 0
  let right = 1
  let total = nums[0]

  const increase = () => {
    if (right < nums.length) {
      total += nums[right]
      right++
      return true
    }

    return false
  }

  const decrease = () => {
    if (left < nums.length) {
      total -= nums[left]
      left++
      return true
    }

    return false
  }

  // console.log(left, right, nums.slice(left, right), total)
  while (left < nums.length || right < nums.length) {
    
    if (min === 1) {
      console.log('a')
      break
    }

    if (total >= target) {
      min = Math.min(min, right - left)

      if (!decrease()) {
        console.log('b')
        break
      }
    }

    if (total < target) {
      if (!increase()) {
        console.log('d')
        break
      }
    }

    // console.log(left, right, nums.slice(left, right), total)
  }

  return min === Infinity ? 0 : min
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(4, [1, 3, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))


