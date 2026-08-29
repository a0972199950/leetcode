// 680. Valid Palindrome II
// 最後練習時間：2024-04-19
// https://leetcode.com/problems/valid-palindrome-ii/

console.clear()

function validPalindrome(s: string): boolean {
  const checkStr = (left: number, right: number, hasDeleted: boolean) => {
    while (right >= left) {
      if (s[left] === s[right]) {
        left++
        right--
        continue
      }

      if (hasDeleted) {
        return false
      }

      return checkStr(left + 1, right, true) || checkStr(left, right - 1, true)
    }

    return true
  }

  return checkStr(0, s.length - 1, false)
}

console.log(validPalindrome('aba')) // true
console.log(validPalindrome('abca')) // true
console.log(validPalindrome('abc')) // false

