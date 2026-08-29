// 20. Valid Parentheses
// 最後練習時間：2026-03-13
// https://leetcode.com/problems/valid-parentheses/

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

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([])')) // true
console.log(isValid('([)]')) // false
console.log(isValid('')) // true

