// 921. Minimum Add to Make Parentheses Valid
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

console.clear()

// function minAddToMakeValid(s: string): number {
//   const stack = []

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]

//     if (char === ')' && stack.at(-1) === '(') {
//       stack.pop()
//       continue
//     }

//     stack.push(char)
//   }
  
//   return stack.length
// }

// Time: O(n)
// Space: O(n)
// function minAddToMakeValid(s: string): number {
//   const stack = []
//   let moves = 0

//   for (const char of s) {
//     if (char === '(') {
//       stack.push(char)
//       continue
//     }
    
//     if (stack.at(-1) === '(') {
//       stack.pop()
//     } else {
//       moves++
//     }
//   }

//   return moves + stack.length
// }

// Time: O(n)
// Space: O(1)
function minAddToMakeValid(s: string): number {
  let leftCount = 0
  let move = 0

  for (const char of s) {
    if (char === '(') {
      leftCount++
      continue
    }
  
    if (leftCount) {
      leftCount--
    } else {
      move++
    }
    
  }

  return leftCount + move
}

console.log(minAddToMakeValid('())')) // 1
console.log(minAddToMakeValid('(((')) // 3
console.log(minAddToMakeValid(')))(((')) // 6
console.log(minAddToMakeValid('((()))')) // 0
console.log(minAddToMakeValid('()()()()()')) // 0

