// 2506. Count Pairs Of Similar Strings
// 最後練習時間：2024-04-13
// https://leetcode.com/problems/count-pairs-of-similar-strings/

export {}
console.clear()

function similarPairs(words: string[]): number {
  const hashs: Record<string, number> = {}
  
  words.forEach(word => {
    let hash: string[] | string = []

    for (let i = 0; i < word.length; i++) {
      const charCode = word[i].charCodeAt(0)
      hash[charCode] = word[i]
    }

    hash = hash.join('')
    hashs[hash] = ++hashs[hash] || 1
  })

  console.log(hashs)

  let result = 0

  Object
    .entries(hashs)
    .forEach(([_, val]) => {
      if (val > 1) {
        result += (1 + val - 1) * (val - 1) / 2
      }
    })

  return result
}

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc'])) // Expected: 2
console.log(similarPairs(['aabb', 'ab', 'ba'])) // Expected: 3
console.log(similarPairs(['nba', 'cba', 'dba'])) // Expected: 0


