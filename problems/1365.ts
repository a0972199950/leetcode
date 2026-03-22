// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

export {}
console.clear()

// time: O(3n), space: O(n)
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const hashTable: { currentCount, lessThanCurrent }[] = []

  for (const num of nums) {
    if (!hashTable[num]) {
      hashTable[num] = {
        currentCount: 1,
        lessThanCurrent: 0
      }

      continue
    }

    hashTable[num].currentCount++
  }

  let lastItem = null
  for (const index in hashTable) {
    const item = hashTable[index]

    if (!lastItem) {
      item.lessThanCurrent = 0
    } else {
      item.lessThanCurrent = lastItem.currentCount + lastItem.lessThanCurrent
    }

    lastItem = item
  }

  const result = nums.map((num) => {
    return hashTable[num].lessThanCurrent
  })

  return result
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]))
