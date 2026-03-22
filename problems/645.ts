// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/

export {}
console.clear()

function findErrorNums(nums: number[]): number[] {
  const set = new Set()

  let duplicate = -1
  let missing  = -1

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    if (set.has(current)) {
      duplicate = current
    }

    set.add(current)
  }

  for (let i = 0; i < nums.length; i++) {
    const shouldBe = i + 1

    if (!set.has(shouldBe)) {
      missing = shouldBe
      break
    }
  }

  return [duplicate, missing]
}

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
