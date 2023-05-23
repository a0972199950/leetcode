// 5. Longest Palindromic Substring
console.clear()

function longestPalindrome(s: string): string {
  let longestPalindromeLeft = null
  let longestPalindromeRight = null

  for (let center = 0; center < s.length; center++) {
    // 檢查以 center 為中心的奇數回文
    for (
      let left = center - 1, right = center + 1;
      left >= 0 && right < s.length;
      left--, right++
    ) {
      if (s[left] !== s[right]) {
        break
      } else {
        if (Math.abs(longestPalindromeRight - longestPalindromeLeft) < Math.abs(right - left)) {
          longestPalindromeLeft = left
          longestPalindromeRight = right
        }
      }
    }

    // 檢查以 center 為中心的偶數回文
    for (
      let left = center, right = center + 1;
      left >= 0 && right < s.length;
      left--, right++
    ) {
      if (s[left] !== s[right]) {
        break
      } else {
        if (Math.abs(longestPalindromeRight - longestPalindromeLeft) < Math.abs(right - left)) {
          longestPalindromeLeft = left
          longestPalindromeRight = right
        }
      }
    }
  }

  return s.slice(longestPalindromeLeft, longestPalindromeRight + 1)
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('abccb'))
console.log(longestPalindrome('a'))

export {}


