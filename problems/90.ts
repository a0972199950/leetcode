// 90. Subsets II

console.clear()

function subsetsWithDup(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b)
  const result = []

  const traverse = (combination: number[], rest: number[]) => {
    console.log(combination, rest)

    result.push(combination)

    if (!rest.length) {
      return
    }

    let last = null

    for (let i = 0; i < rest.length; i++) {
      const num = rest[i]

      if (num === last) {
        continue
      }
      
      console.log(`挑 ${num}, i === ${i}, last === ${last}`)
      traverse([...combination, num], rest.slice(i + 1))

      last = num
    }
  }

  traverse([], nums)
  return result
}

console.log(subsetsWithDup([1, 2, 2, 3, 3]))


