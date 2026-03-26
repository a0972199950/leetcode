// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/

// function findAnagrams(s: string, p: string): number[] {
//   if (s.length < p.length) {
//     return []
//   }

//   const pHashTable: number[] = Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0)
//   let currentHashTable: number[] = []

//   for (let i = 0; i < p.length; i++) {
//     pHashTable[p[i].charCodeAt(0) - 97] = ++pHashTable[p[i].charCodeAt(0) - 97] || 1
//   }

//   const pHash = pHashTable.reduce((sum: string, count, index) => (sum + `${index}${count}`), '')

//   const result: number[] = []

//   for (let i = 0; i <= (s.length - p.length); i++) {
//     if (currentHashTable.length <= 0) {
//       currentHashTable = Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0)

//       for (let i = 0; i < p.length; i++) {
//         currentHashTable[s[i].charCodeAt(0) - 97] = ++currentHashTable[s[i].charCodeAt(0) - 97] || 1
//       }
//     } else {
//       currentHashTable[s[i - 1].charCodeAt(0) - 97]--
//       currentHashTable[s[i + p.length - 1].charCodeAt(0) - 97]++
//     }

//     const currentHash = currentHashTable.reduce((sum: string, count, index) => (sum + `${index}${count}`), '')

//     if (pHash === currentHash) {
//       result.push(i)
//     }
//   }

//   return result
// }

// Time: O(n)
// Space: O(1)
function findAnagrams(s: string, p: string): number[] {
  let pHash: string | number[] = Array(26).fill(0)

  for (const c of p) {
    const charCodeAt = c.charCodeAt(0) - 'a'.charCodeAt(0)
    pHash[charCodeAt]++
  }

  pHash = pHash.join(',')

  const sRecord = Array(26).fill(0)
  let left = 0
  const result = []
  for (let right = 0; right < s.length; right++) {
    const rightC = s[right]

    const rightCharCodeAt = rightC.charCodeAt(0) - 'a'.charCodeAt(0)
    sRecord[rightCharCodeAt]++

    if ((right - left + 1) < p.length) {
      continue
    }

    if (sRecord.join(',') === pHash) {
      result.push(left)
    }

    const leftChar = s[left]
    const leftCharCodeAt = leftChar.charCodeAt(0) - 'a'.charCodeAt(0)
    sRecord[leftCharCodeAt]--
    left++
  }

  return result
}

console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))
console.log(findAnagrams('aaaaaaaaaa', 'aaa'))

