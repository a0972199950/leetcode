// 78. Subsets

console.clear()

function subsets(nums: number[]): number[][] {
  const result = []

  const traverse = (combination: number[], rest: number[]) => {
    result.push(combination)

    if (!rest.length) {
      return
    }

    for (let i = 0; i < rest.length; i++) {
      traverse([...combination, rest[i]], rest.slice(i + 1))
    }
  }

  traverse([], nums)
  return result
}

console.log(subsets([0]))


