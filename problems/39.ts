// 39. Combination Sum

export {}
console.clear()

// interface RecordInterface {
//   sum: number
//   combination: number[]
// }

// function combinationSum(candidates: number[], target: number): number[][] {
//   const record: RecordInterface[] = []

//   const result: number[][] = []

//   for (const candidate of candidates) {
//     const possibleMaxCount = Math.floor(target / candidate)
//     const cachedRecordLength = record.length
//     console.log(candidate, possibleMaxCount)

//     for (let count = 1; count <= possibleMaxCount; count++) {
//       console.log(record)
//       const sum = count * candidate
//       const combination = Array(count).fill(candidate)

//       if (sum === target) {
//         result.push(combination)
//       }
//       else if (sum < target) {
//         record.push({ sum, combination })
//       }

//       for (let i = 0; i < cachedRecordLength; i++) {
//         const newSum = record[i].sum + sum
//         const newCombination = [...record[i].combination, ...combination]

//         if (newSum > target) {
//           continue
//         }
//         else if (newSum === target) {
//           result.push(newCombination)
//         }
//         else {
//           record.push({ sum: newSum, combination: newCombination })
//         }
//       }
//     }
//   }

//   console.log('result: ', result)
//   return result
// }

// function combinationSum(candidates: number[], target: number): number[][] {
//   const result: number[][] = []

//   const dfs = (i: number, combination: number[], sum: number) => {
//     if (sum > target || i >= candidates.length) {
//       return
//     }
//     else if (sum === target) {
//       result.push([...combination])
//       return
//     }
//     else {
//       combination.push(candidates[i])
//       dfs(i, combination, sum + candidates[i])

//       combination.pop()
//       dfs(i + 1, combination, sum)
//     }
//   }

//   dfs(0, [], 0)

//   console.log('result: ', result)
//   return result
// }


// function combinationSum(candidates: number[], target: number): number[][] {
//   const results = []

//   const dfs = (index: number, combination: number[], sum: number) => {
//     // 如果 index 已經超過 candidates 的長度
//     if (index >= candidates.length) {
//       return
//     }

//     // 如果 sum 已經超過 target
//     if (sum > target) {
//       return
//     }

//     // 如果 sum 等於 target
//     if (sum === target) {
//       results.push(combination)
//       return
//     }

//     // 如果 sum 還小於 target
//     if (sum < target) {
//       // 選當下的 index
//       dfs(index, [...combination, candidates[index]], sum + candidates[index])

//       // 不選當下的 index
//       dfs(index + 1, combination, sum)
//     }
//   }

//   dfs(0, [], 0)

//   console.log('results: ', results)
//   return results
// }

function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b)

  const results: number[][] = []

  const dfs = (lastSum: number, lastCombination: number[], startIndex: number) => {
    for (let index = startIndex; index < candidates.length; index++) {
      const candidate = candidates[index]

      const sum = lastSum + candidate
      const combination = [...lastCombination, candidate]

      if (sum > target) {
        break
      }

      if (sum === target) {
        results.push(combination)
      }

      if (sum < target) {
        dfs(sum, combination, index)
      }
    }
  }

  dfs(0, [], 0)

  console.log(results)

  return results
}

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([2], 1))


