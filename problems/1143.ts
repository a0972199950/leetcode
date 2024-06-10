// 1143. Longest Common Subsequence

console.clear()

function longestCommonSubsequence(text1: string, text2: string): number {
  const record: Record<string, number> = {}

  const getRecord = (row: number, col: number) => {
    return record[`${row},${col}`]
  }

  const setRecord = (row: number, col: number, val: number) => {
    record[`${row},${col}`] = val
    return val
  }

  const check = (index1: number, index2: number) => {
    if (getRecord(index1, index2)) {
      return getRecord(index1, index2)
    }

    if (index1 >= text1.length || index2 >= text2.length) {
      return 0
    }

    const target1 = text1[index1]
    const target2 = text2[index2]

    if (target1 === target2) {
      return setRecord(index1, index2, 1 + check(index1 + 1, index2 + 1))
    } else {
      const result = Math.max(
        check(index1 + 1, index2),
        check(index1, index2 + 1)
      )

      return setRecord(index1, index2, result)
    }
  }

  const result = check(0, 0)

  return result
}

// function longestCommonSubsequence(text1: string, text2: string): number {
//   const table = []

//   const getRecord = (row: number, col: number) => {
//     return table[row]?.[col] ?? 0
//   }

//   const setRecord = (row: number, col: number, val: number) => {
//     if (!table[row]) {
//       table[row] = []
//     }

//     table[row][col] = val
//   }


//   for (let text1Index = text1.length - 1; text1Index >= 0; text1Index--) {
//     for (let text2Index = text2.length - 1; text2Index >= 0; text2Index--) {
//       const target1 = text1[text1Index]
//       const target2 = text2[text2Index]

//       if (target1 === target2) {
//         setRecord(text1Index, text2Index, 1 + getRecord(text1Index + 1, text2Index + 1))
//       } else {
//         setRecord(text1Index, text2Index, Math.max(
//           getRecord(text1Index, text2Index + 1),
//           getRecord(text1Index + 1, text2Index)
//         ))
//       }
//     }
//   }

//   console.log(table)
//   return table[0][0]
// }

console.log(longestCommonSubsequence('ace', 'abcde'))
console.log(longestCommonSubsequence('abc', 'abc'))
console.log(longestCommonSubsequence('abc', 'def'))
console.log(longestCommonSubsequence('pmjghexybyrgzczy', 'hafcdqbgncrcbihkd'))


