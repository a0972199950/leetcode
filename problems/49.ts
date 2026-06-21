// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

export {}
console.clear()

// function groupAnagrams(strs: string[]): string[][] {
//   const results: Record<string, string[]> = {}

//   const charCodePrefix = 'a'.charCodeAt(0)

//   const generateStrKey = (str: string) => {
//     const arr = Array(26).fill(0)

//     for (let i = 0; i < str.length; i++) {
//       arr[str[i].charCodeAt(0) - charCodePrefix]++
//     }

//     return arr.join(',')
//   }

//   for (const str of strs) {
//     const key = generateStrKey(str)

//     if (!results[key]) {
//       results[key] = [str]
//     } else {
//       results[key].push(str)
//     }
//   }

//   return Object.values(results)
// }

// Time: O(n * k)
// Space: O(n)
function groupAnagrams(strs: string[]): string[][] {
  const getHashKey = (s: string) => {
    const result = Array(26).fill(0)

    for (const c of s) {
      const charCode = c.charCodeAt(0) - 'a'.charCodeAt(0)
      result[charCode]++
    }

    return result.join(',')
  }

  const hashTable: Record<string, string[]> = {}

  for (const str of strs) {
    const hashKey = getHashKey(str)
    if (hashTable[hashKey]) {
      hashTable[hashKey].push(str)
    } else {
      hashTable[hashKey] = [str]
    }
  }

  return Object.values(hashTable)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['']))
console.log(groupAnagrams(['a']))

