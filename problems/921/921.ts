// 921. Minimum Add to Make Parentheses Valid
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

export {}
console.clear()

function minAddToMakeValid(s: string): number {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === ')' && stack.at(-1) === '(') {
      stack.pop()
      continue
    }

    stack.push(char)
  }
  
  return stack.length
}

console.log(minAddToMakeValid('())')) // Expected: 1
console.log(minAddToMakeValid('(((')) // Expected: 3
console.log(minAddToMakeValid(')))(((')) // Expected: 6
console.log(minAddToMakeValid('((()))')) // Expected: 0
console.log(minAddToMakeValid('()()()()()')) // Expected: 0


