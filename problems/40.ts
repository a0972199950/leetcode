// 40. Combination Sum II

console.clear()

// function combinationSum2(candidates: number[], target: number): number[][] {
//   candidates = candidates.sort()
//   const resultString: Set<string> = new Set()
//   const result = []

//   const pushResult = (indexes: number[]) => {
//     resultString.add(
//       indexes
//         .map(index => candidates[index])
//         .sort()
//         .join(',')
//     )
//   }

//   const traverse = (usedIndex: number[], lastSum: number) => {
//     let lastCandidate = null

//     for (let i = 0; i < candidates.length; i++) {
//       const candidate = candidates[i]

//       if (usedIndex.includes(i) || candidate === lastCandidate) {
//         continue
//       }

//       const currentSum = lastSum + candidates[i]

//       if (currentSum === target) {
//         pushResult([...usedIndex, i])
//       }
//       else if (currentSum > target) {
//         continue
//       }
//       else {
//         traverse([...usedIndex, i], currentSum)
//       }

//       if (lastCandidate === null) {
//         lastCandidate = candidate
//       }
//     }
//   }

//   traverse([], 0)
//   resultString.forEach(string => {
//     result.push(string.split(',').map(char => parseInt(char)))
//   })

//   return result
// }

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b)

  const result = []

  const traverse = (lastSum: number, restCandidates: number[], pickedCandidates: number[]) => {
    console.log(lastSum, restCandidates, pickedCandidates)

    if (lastSum === target) {
      result.push(pickedCandidates)
    }

    if (lastSum >= target || !restCandidates.length) {
      return
    }

    const [currentCandidate, ...currentRestCandidates] = restCandidates

    console.log(currentCandidate, currentRestCandidates)

    traverse(lastSum + currentCandidate, currentRestCandidates, [...pickedCandidates, currentCandidate])

    for (let i = 0; i < currentRestCandidates.length; i++) {
      const candidate = currentRestCandidates[i]

      if (candidate === currentCandidate) {
        continue
      }

      traverse(lastSum, currentRestCandidates.slice(i), pickedCandidates)
      break
    }
  }

  traverse(0, candidates, [])
  return result
}

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 27))

export {}
