// 413. Arithmetic Slices

console.clear()

function numberOfArithmeticSlices(nums: number[]): number {
  let result = 0
  let diff = null
  let start = 0
  let end = 1

  const increaseResult = (start: number, end: number) => {
    const count = end - start + 1 - 2
    result += (1 + count) * count / 2
  }

  while (end < nums.length) {
    if (end - start === 1) {
      diff = nums[end] - nums[start]
    }

    if (nums[end + 1] - nums[end] === diff) {
      end++
      continue
    }

    if (nums[end + 1] - nums[end] !== diff && end - start > 1) {
      increaseResult(start, end)
    }

    start = end
    end++
    diff = null
  }

  console.log('result: ', result)

  return result
}

// numberOfArithmeticSlices([1, 2, 3, 4])
// numberOfArithmeticSlices([1, 2, 3, 4, 5])
// numberOfArithmeticSlices([1, 2, 3, 4, 2])
// numberOfArithmeticSlices([1, 2, 3, 4, 2, 4])
// numberOfArithmeticSlices([1, 2, 3, 4, 2, 4, 6])
// numberOfArithmeticSlices([1, 2, 3, 4, 2, 4, 6, 8])
// numberOfArithmeticSlices([1, 2, 3, 4, 3, 0, -3, -6])
// numberOfArithmeticSlices([1, 2, 3, 4, 2, 0, -2, -4])
// numberOfArithmeticSlices([1, 2, 3])
// numberOfArithmeticSlices([1, 2])
// numberOfArithmeticSlices([1])

export {}
