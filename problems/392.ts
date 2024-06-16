// 392. Is Subsequence

export {}
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

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))


