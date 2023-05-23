// 55. Jump Game

function canJump(nums: number[]): boolean {
  const possibleReachEnd = Array(nums.length)
  const lastIndex = nums.length - 1

  for (let i = lastIndex; i >= 0; i--) {
    if (i === lastIndex) {
      possibleReachEnd[i] = true
      continue
    }

    const val = nums[i]
    const result = possibleReachEnd
      .slice(i, (i + val + 1 > lastIndex + 1 ? lastIndex + 1 : i + val + 1))
      .includes(true)

    possibleReachEnd[i] = result
  }

  console.log(possibleReachEnd)
  return possibleReachEnd[0]
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([6]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([4, 0, 1, 0, 4]))
console.log(canJump([0, 2, 3]))

export {}