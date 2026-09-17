// 1898. Maximum Number of Removable Characters
// 最後練習時間：2026-09-17
// https://leetcode.com/problems/maximum-number-of-removable-characters/

console.clear()

// 行不通
// function maximumRemovals(s: string, p: string, removable: number[]): number {
//   const positions: boolean[] = []
//   const remains: Record<string, number> = {}
//   let pIndex = 0

//   let positionPartition: boolean[] = []
//   let remainPartition: Record<string, number> = {}

//   const merge = () => {
    
//     positions.push(...positionPartition)
//     positionPartition = []

//     Object.keys(remainPartition).forEach((key) => {
//       remains[key] = (remains[key] ?? 0) + remainPartition[key]
//     })

//     remainPartition = {}
//   }

//   for (let sIndex = 0; sIndex < s.length; sIndex++) {
//     const sChar = s[sIndex]
//     const pChar = p[pIndex]
//     const nextPChar = p[(pIndex === p.length - 1) ? 0 : pIndex + 1]

//     if (sChar === pChar) {
//       positionPartition.push(true)
//       remainPartition[pChar] = (remainPartition[pChar] ?? 0) + 1
//       continue
//     }

//     if (sChar !== pChar && sChar !== nextPChar) {
//       positionPartition.push(false)
//       continue
//     }

//     if (sChar !== pChar && sChar === nextPChar) {
//       if (pIndex === p.length - 1) {
//         // console.log('merge', 'sIndex', sIndex, sChar, 'pIndex', pIndex)
//         merge()
//         pIndex = 0
//       } else {
//         pIndex++
//       }

//       sIndex--

//     }
//   }

//   if (positionPartition.length && pIndex === p.length - 1) {
//     merge()
//   } else {
//     positions.push(...Array(positionPartition.length).fill(false))
//   }

//   console.log(positions)
//   console.log(remains)
//   // 這上面到底在寫甚麼鬼...

//   for (let i = 0; i < removable.length; i++) {
//     if (positions[i] && --remains[s[i]] === 0) {
//       return i + 1
//     }
//   }

//   return 0
// }

// Time: O(n^2)
// Space: O(n)
function maximumRemovals(s: string, p: string, removable: number[]): number {
  const history = new Set()

  const isSubsequence = () => {
    let pIndex = 0

    for (let sIndex = 0; sIndex < s.length; sIndex++) {
      if (history.has(sIndex)) {
        continue
      }

      if (s[sIndex] === p[pIndex]) {
        if (pIndex === p.length - 1) {
          // 構成子字串
          return true
        } else {
          pIndex++
        }
      }
    }

    return false
  }

  let index = 0

  for (index = 0; index < removable.length; index++) {
    history.add(removable[index])

    if (isSubsequence()) {
      continue
    } else {
      break
    }
  }

  return index
}

console.log(maximumRemovals('abcacb', 'ab', [3, 1, 0])) // 2
console.log(maximumRemovals('abcbddddd', 'abcd', [3, 2, 1, 4, 5, 6])) // 1
console.log(maximumRemovals('abcab', 'abc', [0, 1, 2, 3, 4])) // 0
// console.log(maximumRemovals('iiaiibiiciizzzzzzzzabczz', 'abc', [])) // 0
