// 219. Contains Duplicate II

export {}
console.clear()

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const windowSize = Math.min(nums.length, k + 1)

  const hash: Set<number> = Array(windowSize).fill(null).reduce((set, _, index) => {
    set.add(nums[index])
    return set
  }, new Set<number>())

  console.log(hash)

  if (windowSize > 1 && hash.size < windowSize) {
    return true
  }

  let index = windowSize
  while (index < nums.length) {
    hash.delete(nums[index - windowSize])
    hash.add(nums[index])

    console.log(hash)

    if (windowSize > 1 && hash.size < windowSize) {
      return true
    }

    index++
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15))
console.log(containsNearbyDuplicate([1], 1))
console.log(containsNearbyDuplicate([1, 2], 2))
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3))


