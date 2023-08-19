// 23
// (23)
// 23 or 23
// 23 and 23
// (23 or 23)
// 23 and (23 or 23)

function isValid (expr: string): any {
  const stack = []

  const isNum = (char: string) => {
    return /^\d/.test(char)
  }

  let isLastAnOperator = false

  mainLoop:
  for (let i = 0; i < expr.length; i++) {
    let partExpr = expr[i]

    if (
      partExpr !== ' '
        && partExpr !== '('
        && partExpr !== ')'
        && partExpr !== 'a'
        && partExpr !== 'o'
        && !isNum(partExpr)
    ) { return false }

    // 跳過
    if (partExpr === ' ') {
      continue
    }

    // 只需要進堆疊
    if (partExpr === '(') {
      stack.push(partExpr)
      isLastAnOperator = false
      continue
    }

    // 只需要進堆疊
    if (isNum(partExpr)) {
      for (var j = i + 1; j < expr.length; j++) {
        if (isNum(expr[j])) {
          partExpr += expr[j]
        } else {
          break
        }
      }

      stack.push(partExpr)
      isLastAnOperator = false
      i = j - 1
    }

    // 檢查堆疊
    if (partExpr === ')') {
      while (stack.length) {
        const item = stack.pop()
        partExpr = item + partExpr

        if (item === '(') {
          stack.push(partExpr)
          isLastAnOperator = false
          continue mainLoop
        }
      }

      return false
    }

    // 檢查堆疊
    if (partExpr === 'o') {
      if (expr[i + 1] !== 'r' || stack.length <= 0 || isLastAnOperator) {
        return false
      } else {
        i++
        stack.push('or')
        isLastAnOperator = true
      }
    }

    // 檢查堆疊
    if (partExpr === 'a') {
      if (expr[i + 1] !== 'n' || expr[i + 2] !== 'd' || stack.length <= 0 || isLastAnOperator) {
        return false
      } else {
        i += 2
        stack.push('and')
        isLastAnOperator = true
      }
    }
  }

  return stack[stack.length - 1] !== 'or' && stack[stack.length - 1] !== 'and' && !stack.includes('(')
}

console.log(isValid('23'))
console.log(isValid('(23)'))
console.log(isValid('23 or 23'))
console.log(isValid('23 and 23'))
console.log(isValid('(23 or 23)'))
console.log(isValid('23 and (23 or 23)'))

console.log('==========')

console.log(isValid('23())'))
console.log(isValid('((2333)'))
console.log(isValid('('))
console.log(isValid('23 ann 23'))
console.log(isValid('23 oa 23'))
console.log(isValid('23 p 23'))
console.log(isValid('23 and'))
console.log(isValid('23 or'))
console.log(isValid('23 or and 23'))
console.log(isValid('and'))
console.log(isValid('or'))

export default {}
