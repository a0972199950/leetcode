// 3. Longest Substring Without Repeating Characters

export {}
console.clear()

function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0
  }
  
  let left = 0
  let right = 0

  const uniques = new Set<string>(s[0])
  let max = 1

  while (left < s.length && right < s.length) {
    // 選出 max
    max = Math.max(max, right - left + 1)

    const nextChar = s[right + 1]

    // 縮小 sliding window 左邊界
    if (uniques.has(nextChar)) {
      while (left <= right) {
        uniques.delete(s[left])
        left++

        if(s[left - 1] === nextChar) {
          break
        }
      }
    }

    // 擴張 sliding window 右邊界
    right++
    uniques.add(nextChar)

  }

  return max
}

// function lengthOfLongestSubstring(s: string): number {
//   let left = 0
//   let right = 0
//   let max = 0
//   const record = new Set<string>()

//   while (right < s.length) {
//     if (record.has(s[right])) {
//       while (left <= right && record.has(s[right])) {
//         record.delete(s[left])
//         left++
//       }
//     }

//     record.add(s[right])
//     max = Math.max(max, right - left + 1)
//     right++
//   }

//   return max
// }

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(''))

