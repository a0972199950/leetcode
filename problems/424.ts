// 424. Longest Repeating Character Replacement [不會的題]
// https://leetcode.com/problems/longest-repeating-character-replacement/
// 解析: https://www.youtube.com/watch?v=SLAKjysDODM

console.clear()

// function characterReplacement(s: string, k: number): number {
//   let leftIndex = 0
//   let rightIndex = 0
//   let maxLength = 1
//   const record = {
//     [s[0]]: 1
//   }

//   while (rightIndex < s.length - 1) {
//     rightIndex++

//     record[s[rightIndex]] = ++record[s[rightIndex]] || 1

//     const length = rightIndex - leftIndex + 1
//     const maxRepeat = Math.max(...Object.values(record))

//     if (length - maxRepeat <= k) {
//       maxLength = length
//       continue
//     }

//     if (length - maxRepeat > k) {
//       record[s[leftIndex]]--
//       leftIndex++
//     }
//   }

//   return maxLength
// }

// Time: O(26n)
// Space: O(n)
// function characterReplacement(s: string, k: number): number {
//   let arr = s.split('')
//   let remain = k
//   let left = 0
//   let result = 0

//   // 先把 B 都翻成 A (湊 A)
//   for (let right = 0; right < arr.length; right++) {
//     const rightChar = arr[right]

//     // 翻牌
//     if (rightChar === 'B') {
//       arr[right] = '0'
//       remain--
//     }

//     while (remain < 0) {
//       // 縮左
//       const leftChar = arr[left]
//       if (leftChar === '0') {
//         remain++
//       }
//       left++
//     }

//     // 更新 result
//     console.log(left, right, s.slice(left, right + 1))
//     result = Math.max(result, right - left + 1)
//   }

//   arr = s.split('')
//   remain = k
//   left = 0
//   // 再把 A 都翻成 B (湊 B)
//   for (let right = 0; right < arr.length; right++) {
//     const rightChar = arr[right]

//     // 翻牌
//     if (rightChar === 'A') {
//       arr[right] = '0'
//       remain--
//     }

//     while (remain < 0) {
//       // 縮左
//       const leftChar = arr[left]
//       if (leftChar === '0') {
//         remain++
//       }
//       left++
//     }

//     // 更新 result
//     result = Math.max(result, right - left + 1)
//   }

//   return result
// }

// Time: O(n)
// Space: O(1)
// function characterReplacement(s: string, k: number): number {
//   // { char: count }
//   const record: Record<string, number> = {}
//   let left = 0
//   let max = 0
//   let maxCharCount = 0

//   for (let right = 0; right < s.length; right++) {
//     const rightChar = s[right]
//     record[rightChar] = (record[rightChar] ?? 0) + 1
    
//     maxCharCount = Math.max(maxCharCount, record[rightChar])

//     // console.log((right - left + 1), maxChar, k)

//     // 縮左
//     if ((right - left + 1) - maxCharCount > k) {
//       // console.log('while')
//       const leftChar = s[left]
//       record[leftChar]--
//       left++
//     }

//     // console.log(left, right, s.slice(left, right + 1))
//     max = Math.max(max, right - left + 1)
    
//   }

//   return max
// }

// Time: O(n)
// Space: O(1)
function characterReplacement(s: string, k: number): number {
  let left = 0
  let max = 0
  // { char: count }
  const record: Record<string, number> = {}
  let maxCharCount = 0

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right]
    record[rightChar] = (record[rightChar] ?? 0) + 1

    maxCharCount = Math.max(maxCharCount, record[rightChar])

    // 窗口減最多重複 > k
    while (right - left + 1 - maxCharCount > k) {
      const leftChar = s[left]
      record[leftChar]--
      left++
    }

    max = Math.max(max, right - left + 1)
  }

  return max
}

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))
console.log(characterReplacement('AABCABBB', 2))
console.log(characterReplacement('AAAA', 2))
console.log(characterReplacement('ABCDE', 1))
console.log(characterReplacement('AAABCCCCBAAA', 1))
console.log(characterReplacement('AAAAAAA', 1))
console.log(characterReplacement('AAAFIHEINFIAAAAAAFIJEIJRTGBBBBBBB', 2))
