// 5. Longest Palindromic Substring
console.clear()

// function longestPalindrome(s: string): string {
//   let longestPalindromeLeft = null
//   let longestPalindromeRight = null

//   for (let center = 0; center < s.length; center++) {
//     // 檢查以 center 為中心的奇數回文
//     for (
//       let left = center - 1, right = center + 1;
//       left >= 0 && right < s.length;
//       left--, right++
//     ) {
//       if (s[left] !== s[right]) {
//         break
//       } else {
//         if (Math.abs(longestPalindromeRight - longestPalindromeLeft) < Math.abs(right - left)) {
//           longestPalindromeLeft = left
//           longestPalindromeRight = right
//         }
//       }
//     }

//     // 檢查以 center 為中心的偶數回文
//     for (
//       let left = center, right = center + 1;
//       left >= 0 && right < s.length;
//       left--, right++
//     ) {
//       if (s[left] !== s[right]) {
//         break
//       } else {
//         if (Math.abs(longestPalindromeRight - longestPalindromeLeft) < Math.abs(right - left)) {
//           longestPalindromeLeft = left
//           longestPalindromeRight = right
//         }
//       }
//     }
//   }

//   return s.slice(longestPalindromeLeft, longestPalindromeRight + 1)
// }


// function longestPalindrome(s: string): string {
//   let finalLeft = 0
//   let finalRight = 0

//   for (let center = 0; center < s.length; center++) {
//     // 奇數
//     for (
//       let left = center - 1, right = center + 1;
//       left >= 0 && right < s.length;
//       left--, right++
//     ) {
//       if (s[left] !== s[right]) {
//         break
//       }

//       if ((finalRight - finalLeft) < (right - left)) {
//         finalLeft = left
//         finalRight = right
//       }
//     }

//     // 偶數
//     for (
//       let left = center, right = center + 1;
//       left >= 0 && right < s.length;
//       left--, right++
//     ) {
//       if (s[left] !== s[right]) {
//         break
//       }

//       if ((finalRight - finalLeft) < (right - left)) {
//         finalLeft = left
//         finalRight = right
//       }
//     }
//   }

//   return s.slice(finalLeft, finalRight + 1)
// }

function longestPalindrome(s: string): string {
  let min = 0
  let max = 0

  for (let i = 0; i < s.length; i++) {
    // 奇數
    for (
      let left = i - 1, right = i + 1;
      left >= 0 && right < s.length;
      left--, right++
    ) {
      if (s[left] !== s[right]) {
        break
      }

      if (max - min < right - left) {
        min = left
        max = right
      }
    }

    // 偶數
    for (
      let left = i, right = i + 1;
      left >= 0 && right < s.length;
      left--, right++
    ) {
      if (s[left] !== s[right]) {
        break
      }
      
      if (max - min < right - left) {
        min = left
        max = right
      }
    }
  }

  return s.slice(min, max + 1)
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('abccb'))
console.log(longestPalindrome('a'))

export {}


