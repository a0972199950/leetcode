// 3333. mex

console.clear()

let _log

function getMaximumMex(arr: number[], x: number): number {
  arr = arr.sort((a, b) => a - b)

  const findTargetByCal = (target: number, candidates: number[]): { canCalToTarget: boolean, rest: number[] } => {

    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i]

      if (
        target === candidate
        || Math.abs(target - candidate) % x === 0
      ) {
        return {
          canCalToTarget: true,
          rest: [target, ...candidates.filter((_num, index) => index !== i)]
        }
      }
    }

    return {
      canCalToTarget: false,
      rest: []
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const {
      canCalToTarget,
      rest
    } = findTargetByCal(i, arr.slice(i))


    if (canCalToTarget) {
      arr.splice(i, Infinity, ...rest)
    } else {
      return i
    }

  }

  return arr.length
}


console.log(getMaximumMex([1, 3, 4], 2)) // Output: 2
console.log(getMaximumMex([0, 1, 2, 1, 3], 3)) // Output: 5
console.log(getMaximumMex([0, 0, 0, 1, 2, 2, 10], 3)) // Output: 7
console.log(getMaximumMex([1, 0, 3, 2, 5], 0)) // Output: 4
console.log(getMaximumMex([3, 2, 1, 4], 2)) // Output: 4
console.log(getMaximumMex([6, 1, 3, 2, 4], 3)) // Output: 5


export {}
