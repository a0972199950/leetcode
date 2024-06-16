// 228. Summary Ranges

export {}
console.clear()

function summaryRanges(nums: number[]): string[] {
  if (!nums.length) {
    return []
  }

  const result = []
  let start = nums[0]
  let prev = nums[0]

  const [_, ...rest] = nums

  const pushResult = (start: number, end: number) => {
    if (start === end) {
      result.push(`${start}`)
    } else {
      result.push(`${start}->${end}`)
    }
  }

  for (const num of rest) {
    if (num - prev === 1) {
      prev = num
      continue
    }

    pushResult(start, prev)
    start = num
    prev = num
  }

  pushResult(start, prev)

  return result
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
console.log(summaryRanges([]))
