// 377. Combination Sum IV

export {}
console.clear()

function combinationSum4(nums: number[], target: number): number {
  const possible = {}
  const impossible = new Set<number>()

  const check = (remain: number) => {
    if (possible[remain]) {
      return possible[remain]
    }

    if (impossible.has(remain)) {
      return 0
    }

    console.log('check', remain)

    if (remain < 0) {
      impossible.add(remain)
      return 0
    }
    else if (remain === 0) {
      possible[remain] = 1
      return 1
    }
    else {
      let result = 0

      for (const num of nums) {
        result += check(remain - num)
      }

      if (result === 0) {
        impossible.add(remain)
      }
      else {
        possible[remain] = result
      }

      return result
    }
  }

  return check(target)
}

// console.log(combinationSum4([1, 2, 3], 4))
// console.log(combinationSum4([9], 3))
console.log(combinationSum4([1, 2, 3], 32))


