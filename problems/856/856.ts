// 856. Score of Parentheses
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/score-of-parentheses/

console.clear()

// function scoreOfParentheses(s: string): number {
//   const stack = []
//   let leftCount = 0

//   for (const char of s.split('')) {
//     if (char === '(') {
//       stack.push(char)
//       leftCount++
//     }
//     else if (char === ')') {
//       if (leftCount === 0) {
//         return -1
//       }

//       let pop = stack.pop()
//       let sum = 0

//       while (pop !== '(') {
//         sum += pop
//         pop = stack.pop()
//       }

//       stack.push(sum === 0 ? 1 : 2 * sum)
//       leftCount--
//     }
//     else {
//       // 不合法字元
//       return -1
//     }
//   }

//   if (leftCount !== 0) {
//     return -1
//   } else {
//     return stack.reduce((sum, num) => sum + num, 0)
//   }
// }

// Time: O(n)
// Space: O(n)
function scoreOfParentheses(s: string): number {
  const stack: number[] = []

  for (const char of s) {
    if (char === '(') {
      stack.push(0)
      continue
    }

    let sum = 0
    while (stack.at(-1) !== 0) {
      sum += stack.pop() as number
    }

    stack.pop()

    if (sum) {
      stack.push(2 * sum)
    } else {
      stack.push(1)
    }
  }

  return stack.reduce((acc, num) => acc + num, 0)
}

console.log(scoreOfParentheses('()')) // 1
console.log(scoreOfParentheses('(())')) // 2
console.log(scoreOfParentheses('()()')) // 2
console.log(scoreOfParentheses('(()())')) // 4
console.log(scoreOfParentheses('(()(()))')) // 6

