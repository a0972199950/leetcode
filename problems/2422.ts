// 2422. Merge Operations to Turn Array Into a Palindrome

export {}
console.clear()

function minimumOperations(nums: number[]): number {
  let operations = 0
  
  let l = 0
  let r = nums.length - 1
  let lSum = nums[l]
  let rSum = nums[r]

  while (r > l) {
    if (lSum > rSum) {
      r--
      rSum += nums[r]
      operations++
    }
    else if (lSum < rSum) {
      l++
      lSum += nums[l]
      operations++
    }
    else {
      l++
      r--
      lSum = nums[l]
      rSum = nums[r]
    }
  }

  return operations
}

console.log(minimumOperations([4, 3, 2, 1, 2, 3, 1]))
console.log(minimumOperations([1, 2, 3, 4]))
console.log(minimumOperations([1, 2, 3, 1]))
console.log(minimumOperations([10]))
console.log(minimumOperations([1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(minimumOperations([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]))


