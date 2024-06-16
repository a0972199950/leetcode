// 856. Score of Parentheses

export {}
console.clear()

function scoreOfParentheses(s: string): number {
  const stack = []
  let leftCount = 0

  for (const char of s.split('')) {
    if (char === '(') {
      stack.push(char)
      leftCount++
    }
    else if (char === ')') {
      if (leftCount === 0) {
        return -1
      }

      let pop = stack.pop()
      let sum = 0

      while (pop !== '(') {
        sum += pop
        pop = stack.pop()
      }

      stack.push(sum === 0 ? 1 : 2 * sum)
      leftCount--
    }
    else {
      // 不合法字元
      return -1
    }
  }

  if (leftCount !== 0) {
    return -1
  } else {
    return stack.reduce((sum, num) => sum + num, 0)
  }
}

console.log(scoreOfParentheses('()'))
console.log(scoreOfParentheses('(())'))
console.log(scoreOfParentheses('()()'))
console.log(scoreOfParentheses('(()())'))
console.log(scoreOfParentheses('(()(()))'))
console.log(scoreOfParentheses('(()())h'))
console.log(scoreOfParentheses('()()('))
console.log(scoreOfParentheses(')('))


