// 8. String to Integer (atoi)

export {}
console.clear()

// Time: O(n)
// Space: O(n)
function myAtoi(s: string): number {
  const stack = []
  let startReadingNum = false
  let isPositive = null
  let isLeadingWhiteSpace = true

  const isNum = (char: string) => {
    return /\d/.test(char)
  }

  const isSign = (char: string) => {
    return ['+', '-'].includes(char)
  }

  const isWhiteSpace = (char: string) => {
    return char === ' '
  }

  const isRegularChar = (char: string) => {
    return !isNum(char) && !isSign(char) && !isWhiteSpace(char)
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (isNum(char)) {
      stack.push(char)
      startReadingNum = true
      isLeadingWhiteSpace = false
    }
    else if (isSign(char)) {
      if (startReadingNum || isPositive !== null) {
        break
      }

      if (char === '-') {
        isPositive = false
      }

      if (char === '+') {
        isPositive = true
      }

      isLeadingWhiteSpace = false
    }
    else if (isWhiteSpace(char)) {
      if (isLeadingWhiteSpace) {
        continue
      } else {
        break
      }
    }
    else if (isRegularChar(char)) {
      isLeadingWhiteSpace = false
      break
    }
  }

  // console.log(stack)

  if (!stack.length) {
    return 0
  }
  const result = isPositive === false ? 0 - Number(stack.join('')) : Number(stack.join(''))

  if (result < -(2 ** 31)) {
    return -(2 ** 31)
  }

  if (result > (2 ** 31 - 1)) {
    return (2 ** 31 - 1)
  }

  return result
}
console.log(myAtoi('42'))
console.log(myAtoi('   -042'))
console.log(myAtoi('1337c0d3'))
console.log(myAtoi('0-1'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('+-12'))
console.log(myAtoi('  +  413'))

