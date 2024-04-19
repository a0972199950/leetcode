// 680. Valid Palindrome II

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

console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
console.log(validPalindrome('abc'))

export {}
