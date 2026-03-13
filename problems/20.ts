// function isValid(s: string): boolean {
//   const closeBracketMap: any = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
//   }

//   const openBrackets = []

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]

//     if (!closeBracketMap.hasOwnProperty(char)) {
//       openBrackets.push(char)
//       continue
//     } else {
//       if (openBrackets[openBrackets.length - 1] !== closeBracketMap[char]) {
//         return false
//       }

//       openBrackets.pop()
//     }
//   }

//   return openBrackets.length === 0
// }

// Time: O(n)
// Space: O(n)
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false
  }

  const stack = []

  for (const char of s) {
    if (char === '(') {
      stack.push(')')
      continue
    }

    if (char === '[') {
      stack.push(']')
      continue
    }

    if (char === '{') {
      stack.push('}')
      continue
    }

    if (stack.pop() !== char) {
      return false
    }
  }

  return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([])'))
console.log(isValid('([)]'))
console.log(isValid(''))

