// 395. Longest Substring with At Least K Repeating Characters

console.clear()

function longestSubstring(s: string, k: number): number {
  let max = 0

  const checkSubString = (str: string, lastExcludes: Set<string>) => {
    console.log('checkSubString')
    if (lastExcludes.size === 0) {
      max = Math.max(max, str.length)
      return
    }
    
    let hash: Record<string, number> = {}
    let excludes = new Set<string>()
    let subStr = ''

    for (let i = 0; i <= str.length; i++) {
      const char = str[i]

      if (!char || lastExcludes.has(char)) {
        subStr && checkSubString(subStr, excludes)
        hash = {}
        excludes = new Set()
        subStr = ''
        continue
      }
      
      hash[char] = ++hash[char] || 1
        
      if (hash[char] >= k) {
        excludes.delete(char)
      } else {
        excludes.add(char)
      }

      subStr += char
    }
  }

  const hash: Record<string, number> = {}
  const excludes: Set<string> = new Set()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    hash[char] = ++hash[char] || 1

    if (hash[char] >= k) {
      excludes.delete(char)
    } else {
      excludes.add(char)
    }
  }

  checkSubString(s, excludes)

  return max
}

// function longestSubstring(s: string, k: number): number {
//   const chackSubStr = (start: number, end: number): number => {
//     const hash = Array(26)

//     for (let i = start; i <= end; i++) {
//       hash[s[i].charCodeAt(0) - 97] = ++hash[s[i].charCodeAt(0) - 97] || 1
//     }

//     // console.log(hash, start, end)

//     for (let i = start; i <= end; i++) {
//       const charCode = s[i].charCodeAt(0) - 97

//       if (!hash[charCode] || hash[charCode] >= k) {
//         continue
//       }

//       if (hash[charCode] < k) {
//         return Math.max(...[
//           i > start && chackSubStr(start, i - 1), // left
//           i < end && chackSubStr(i + 1, end) // right
//         ])
//       }
//     }

//     return end - start + 1
//   }

//   return chackSubStr(0, s.length - 1)
// }

console.log(longestSubstring('aaabb', 3))
console.log(longestSubstring('ababbc', 2))
console.log(longestSubstring('ababbc', 3))
console.log(longestSubstring('ababbc', 4))


