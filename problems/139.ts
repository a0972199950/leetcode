// 139. Word Break

console.clear()

// function wordBreak(s: string, wordDict: string[]): boolean {
//   const wordMap = wordDict.reduce((sum, word) => ({ ...sum, [word]: true }), {})

//   let found = false

//   const decide = (start: number, end: number) => {
//     while (end <= s.length) {
//       if (found) {
//         return
//       }

//       const word = s.slice(start, end)
//       console.log('word: ', word)

//       if (wordMap[word]) {
//         if (end === s.length) {
//           found = true
//           return
//         }
//         else {
//           decide(end, end + 1)
//         }
//       }

//       end++
//     }
//   }

//   decide(0, 1)

//   console.log('found: ', found)
//   return found
// }

// function wordBreak(s: string, wordDict: string[]): boolean {
//   let found = false
//   const impossibleStarts = {}

//   const decide = (start: number) => {
//     if (impossibleStarts[start]) {
//       return
//     }

//     for (const wordOption of wordDict) {
//       if (found) {
//         return
//       }

//       const end = start + wordOption.length

//       const word = s.slice(start, end)
//       console.log('start: ', start, wordOption, word)

//       if (word === wordOption) {
//         if (end === s.length) {
//           found = true
//           return
//         }
//         else {
//           decide(end)
//         }
//       }
//     }

//     impossibleStarts[start] = true
//     console.log('impossibleStarts: ', impossibleStarts)
//   }

//   decide(0)

//   console.log('found: ', found)
//   return found
// }

function wordBreak(s: string, wordDict: string[]): boolean {
  const startsWhichCanBeBreak = Array(s.length).fill(null)
  startsWhichCanBeBreak.push(true)

  for (let start = s.length - 1; start >= 0; start--) {
    for (const wordOption of wordDict) {
      const end = start + wordOption.length

      if (end > s.length) {
        continue
      }

      const word = s.slice(start, end)

      if (word === wordOption && startsWhichCanBeBreak[end]) {
        startsWhichCanBeBreak[start] = true
        break
      }
    }

    if (startsWhichCanBeBreak[start] === null) {
      startsWhichCanBeBreak[start] = false
    }
  }

  console.log('startsWhichCanBeBreak: ', startsWhichCanBeBreak.map((item, index) => ({ index, char: s[index], item })))

  return startsWhichCanBeBreak[0]
}

// wordBreak('leetcode', ['leet', 'code'])
// wordBreak('applepenapple', ['apple', 'pen'])
// wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
wordBreak('cars', ['car', 'ca', 'rs'])
// wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'])



