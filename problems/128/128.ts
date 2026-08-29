// 128. Longest Consecutive Sequence
// 最後練習時間：2023-05-28
// https://leetcode.com/problems/longest-consecutive-sequence/

console.clear()

function longestConsecutive(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)

  console.log(nums)

  let longestLength = 0
  let currentLength = 0
  let last = null

  const findNextI = (val: number, i: number) => {
    while (nums[i] === val) {
      i++
    }

    return i
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]

    if (current - last === 1) {
      currentLength++
    } else {
      longestLength = Math.max(longestLength, currentLength)
      currentLength = 1
    }

    i = findNextI(current, i) - 1
    last = current
  }

  longestLength = Math.max(longestLength, currentLength)

  return longestLength
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
console.log(longestConsecutive([1, 2, 0, 1])) // 3

