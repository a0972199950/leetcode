// 416. Partition Equal Subset Sum

function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((sum, num) => sum + num, 0)

  if (sum % 2 !== 0) {
    return false
  }

  const target = sum / 2

  let possibleSums = new Set<number>().add(0)

  for (const num of nums) {
    const newPossibleSums = new Set<number>([...possibleSums])

    for (const item of possibleSums.values()) {
      const result = item + num

      if (result === target) {
        return true
      }

      newPossibleSums.add(result)
    }

    possibleSums = newPossibleSums
  }

  console.log(possibleSums)

  return false
}

canPartition([3, 3, 3, 4, 5])

export {}