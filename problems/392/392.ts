// 392. Is Subsequence
// 最後練習時間：2022-10-27
// https://leetcode.com/problems/is-subsequence/

console.clear()

function isSubsequence(s: string, t: string): boolean {
  if (!s) {
    return true
  }

  let anchor = 0

  for (const char of t.split('')) {
    if (char === s[anchor]) {
      anchor++
    }
  }

  return anchor === s.length
}

console.log(isSubsequence('abc', 'ahbgdc')) // Expected: true
console.log(isSubsequence('axc', 'ahbgdc')) // Expected: false

