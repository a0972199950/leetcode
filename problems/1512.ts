function numIdenticalPairs(nums: number[]): number {
  const hashTable: Record<number, number> = {}

  for (const num of nums) {
    hashTable[num] = ++hashTable[num] || 1
  }

  let total = 0

  console.log(hashTable)

  Object
    .values(hashTable)
    .forEach(count => {
      console.log(count)
      if (count > 1) {
        console.log((1 + (count - 1)) * (count - 1) / 2)
        total += (1 + (count - 1)) * (count - 1) / 2
      }
    })

  return total
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))

