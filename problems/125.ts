// 125. Valid Palindrome

console.clear()

function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  const isValid = (index: number) => {
    return s[index].match(/^[a-zA-Z0-9]+$/i)
  }

  do {
    while (left < s.length && !isValid(left)) {
      left++
    }

    while (right >=0 && !isValid(right)) {
      right--
    }

    if (left >= s.length || right < 0) {
      return true
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      // console.log(s[left].toLowerCase(), s[right].toLowerCase())
      return false
    } else {
      // console.log(s[left].toLowerCase(), s[right].toLowerCase())

      left++
      right--
    }
  }
  while (right > left)

  return true
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('race a car'))
console.log(isPalindrome(' '))
console.log(isPalindrome(':::""'))
console.log(isPalindrome(''))


