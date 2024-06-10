// 2506. Count Pairs Of Similar Strings

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

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']))
console.log(similarPairs(['aabb', 'ab', 'ba']))
console.log(similarPairs(['nba', 'cba', 'dba']))


