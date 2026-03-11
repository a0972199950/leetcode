// 442. Find All Duplicates in an Array

export {}
console.clear()

function findDuplicates(nums: number[]): number[] {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const position = Math.abs(num) - 1

    if (nums[position] < 0) {
      result.push(Math.abs(num))
    }

    nums[position] = 0 - nums[position]
  }

  return result
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDuplicates([1, 1, 2]))
console.log(findDuplicates([1]))
