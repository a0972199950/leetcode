// 22. Generate Parentheses

console.clear()

function generateParenthesis(n: number): string[] {
  const result = []

  const traverse = (parentheseCount: number, leftCount: number, lastString: string) => {
    if (parentheseCount === n && !leftCount) {
      result.push(lastString)
      return
    }

    // Add '('
    leftCount < n
      && traverse(parentheseCount, leftCount + 1, lastString + '(')

    // Add ')'
    leftCount >= 1
      && parentheseCount < n
      && traverse(parentheseCount + 1, leftCount - 1, lastString + ')')
  }

  traverse(0, 0, '')
  return result
}

console.log(generateParenthesis(2))


