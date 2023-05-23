// 45. Jump Game II

function jump(nums: number[]): number {
  const mins = Array(nums.length)
  const lastIndex = nums.length - 1

  for (let i = lastIndex; i >= 0; i--) {
    if (i === lastIndex) {
      mins[i] = 0
      continue
    }

    const val = nums[i]
    const possibleMins = mins.slice(i + 1, i + val + 1)

    mins[i] = Math.min(...possibleMins) + 1
  }

  return mins[0]
}

jump([2, 3, 1, 1, 4])
jump([2, 3, 0, 1, 4])

export {}