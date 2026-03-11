// 150. Evaluate Reverse Polish Notation

export {}
console.clear()

function evalRPN(tokens: string[]): number {
  const stack: string[] = []

  const isOperation = (token: string) => {
    return ['+', '-', '*', '/'].includes(token)
  }

  const calculate = (left: string, operator: string, right: string) => {
    if (operator === '+') {
      return String(Number(left) + Number(right))
    }

    if (operator === '-') {
      return String(Number(left) - Number(right))
    }

    if (operator === '*') {
      return String(Number(left) * Number(right))
    }

    if (operator === '/') {
      return String(Math.trunc(Number(left) / Number(right)))
    }

  }

  stack.push(tokens[0])
  stack.push(tokens[1])
  let pointer = 2

  // console.log(stack)

  while (pointer < tokens.length) {
    if (!isOperation(tokens[pointer])) {
      stack.push(tokens[pointer])
      pointer++
      // console.log(stack)
      continue
    }

    const right = stack.pop()
    const left = stack.pop()
    const result = calculate(
      left, tokens[pointer], right
    )

    stack.push(result)
    pointer++
    // console.log(stack)
  }

  return Number(stack[0])
}

// console.log(evalRPN(['2', '1', '+', '3', '*']))
// console.log(evalRPN(['4', '13', '5', '/', '+']))
// console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']))
