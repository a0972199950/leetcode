// 80. Remove Duplicates from Sorted Array II

console.clear()

function removeDuplicates(nums: number[]): number {
  let prev = null
  let removeFrom = null
  let count = 0

  for (let i = nums.length - 1; i >= -1; i--) {
    const num = nums[i]
    
    if (num !== prev) {
      if (removeFrom !== null) {
        nums.splice(removeFrom, count - 2)
      }

      prev = num
      count = 1
      removeFrom = null
      continue
    }

    if (num === prev) {
      count++
    }

    if (count > 2) {
      removeFrom = i
    }
  }

  console.log(nums)

  return nums.length
}

removeDuplicates([1, 1, 1, 2, 2, 3])
// removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3, 3])

export {}
