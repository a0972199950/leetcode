// 438. Find All Anagrams in a String

function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) {
    return []
  }

  const pHashTable: number[] = Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0)
  let currentHashTable: number[] = []

  for (let i = 0; i < p.length; i++) {
    pHashTable[p[i].charCodeAt(0) - 97] = ++pHashTable[p[i].charCodeAt(0) - 97] || 1
  }

  const pHash = pHashTable.reduce((sum: string, count, index) => (sum + `${index}${count}`), '')

  let result: number[] = []

  for (let i = 0; i <= (s.length - p.length); i++) {
    if (currentHashTable.length <= 0) {
      currentHashTable = Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).fill(0)

      for (let i = 0; i < p.length; i++) {
        currentHashTable[s[i].charCodeAt(0) - 97] = ++currentHashTable[s[i].charCodeAt(0) - 97] || 1
      }
    } else {
      currentHashTable[s[i - 1].charCodeAt(0) - 97]--
      currentHashTable[s[i + p.length - 1].charCodeAt(0) - 97]++
    }

    const currentHash = currentHashTable.reduce((sum: string, count, index) => (sum + `${index}${count}`), '')

    if (pHash === currentHash) {
      result.push(i)
    }
  }

  return result
};

console.log(findAnagrams('aaaaaaaaaa', 'aaa'))
console.log(findAnagrams('cbaebabacd', 'abc'))
// console.log(findAnagrams('bac', 'abc'))

export {}