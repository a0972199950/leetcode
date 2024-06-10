// 647. Palindromic Substrings

console.clear()

// 解法1: 遍歷的字符當作回文子字符的正中間
function countSubstrings(s: string): number {
  let count = 0

  const findPalindromic = (left: number, right: number) => {
    do {
      if (s[left] !== s[right]) {
        return
      }

      count++
      left--
      right++
    } while (left >= 0 && right < s.length)
  }

  for (let i = 0; i < s.length; i++) {
    // 奇數
    findPalindromic(i, i)

    // 偶數
    findPalindromic(i, i + 1)
  }
    
  return count
}

// 解法2: 遍歷的字符當作回文子字符的最左邊
// const isPalindromic = (str: string) => {
//   for (
//     let i = 0, j = str.length - 1;
//     i <= j;
//     i++, j--
//   ) {
//     if (str[i] !== str[j]) {
//       return false
//     }
//   }

//   return true
// }

// function countSubstrings(s: string): number {
//   const cache = new Set<string>()
//   let count = 0

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const subStr = s.slice(i, j)

//       if (cache.has(subStr)) {
//         count++
//         continue
//       }
      
//       if (isPalindromic(subStr)) {
//         cache.add(subStr)
//         count++
//       }
//     }
//   }

//   return count
// }

console.log(countSubstrings('abc'))
console.log(countSubstrings('aaa'))


