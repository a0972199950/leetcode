// 283. Move Zeroes

console.clear()

function moveZeroes(nums: number[]): void {
  let zeros = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      continue
    }

    nums.splice(i, 1)
    zeros++
    i--
  }

  nums.push(...Array(zeros).fill(0))
  console.log(nums)
}

moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0])


