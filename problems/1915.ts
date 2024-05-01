// 1915. Number of Wonderful Substrings

console.clear()

// function wonderfulSubstrings(word: string): number {
//   let result = 0
//   const history = new Set<string>()

//   const dfs = (start: number) => {
//     const hash: Record<string, number> = {}

//     for (let i = start; i < word.length; i++) {
//       const char = word[i]
//       hash[char] = ++hash[char] || 1

//       let odds = 0
//       Object
//         .values(hash)
//         .every(count => {
//           if (odds > 1) {
//             return false
//           }

//           if (count % 2 !== 0) {
//             odds++
//           }

//           return true
//         })

//       if (odds <= 1 && !history.has(`[${start},${i}]`)) {
//         // console.log(word.slice(start, i + 1), hash, odds)
//         result++
//         history.add(`[${start},${i}]`)
//         dfs(i + 1)
//       }
//     }
//   }

//   dfs(0)

//   return result
// }

function wonderfulSubstrings(word: string): number {
  let hash: Record<string, number> = {}
  let odds = new Set<string>()

  let result = 0

  for (let i = 0; i < word.length; i++) {
    for (let j = i; j < word.length; j++) {
      const char = word[j]

      if (j === i) {
        hash = {}
        odds = new Set()
      }

      hash[char] = ++hash[char] || 1

      if (hash[char] % 2 === 0) {
        odds.delete(char)
      } else {
        odds.add(char)
      }

      if (odds.size <= 1) {
        result++
      }
    }
  }

  return result
}

console.log(wonderfulSubstrings('aba'))
console.log(wonderfulSubstrings('aabb'))
console.log(wonderfulSubstrings('he'))

export {}
