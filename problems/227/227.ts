// 227. Basic Calculator II
// 最後練習時間：2026-09-05
// https://leetcode.com/problems/basic-calculator-ii/

console.clear()

// function calculate(s: string): number {
//   if (s.length <= 0) {
//     return 0
//   }

//   s += ';'
//   const stack = []

//   let pendingOperation = '+'
//   let pendingNumber = 0

//   for (const char of s.split('')) {
//     if (char === ' ') {
//       continue
//     }

//     // Number
//     if (/\d/.test(char)) {
//       pendingNumber = Number(String(pendingNumber) + char)
//     }

//     // Operation
//     if (/\D/.test(char)) {
//       switch (pendingOperation) {
//         case '+': {
//           stack.push(pendingNumber)
//           break
//         }

//         case '-': {
//           stack.push(-pendingNumber)
//           break
//         }

//         case '*': {
//           stack.push(stack.pop() * pendingNumber)
//           break
//         }

//         case '/': {
//           const lastNumber = stack.pop()
//           stack.push(Math.sign(lastNumber / pendingNumber) * Math.floor(Math.abs(lastNumber / pendingNumber)))
//           break
//         }
//       }

//       pendingOperation = char
//       pendingNumber = 0
//     }
//   }

//   if (pendingOperation !== ';') {
//     throw '錯誤'
//   }

//   const result = stack.reduce((a, b) => a + b)

//   console.log(result, eval(s))

//   return result
// }

// function calculate(s: string): number {
//   s = s.replace(/\s/g, '')

//   const stack = []

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]

//     // 數字
//     if (/\d/.test(char)) {
//       if (Number.isInteger(stack.at(-1))) {
//         stack.push(Number(stack.pop() + char))
//       } else {
//         stack.push(Number(char))
//       }
//     }
//     else {
//       let nextNumStr = ''

//       while (/\d/.test(s[i + 1])) {
//         nextNumStr += s[i + 1]
//         i++
//       }

//       if (char === '+' || char === '-') {
//         stack.push(Number(`${char}${nextNumStr}`))
//       }
//       else if (char === '*') {
//         const result = stack.pop() * Number(nextNumStr)
//         stack.push(result)
//       }
//       else if (char === '/') {
//         const val = stack.pop() / Number(nextNumStr)
//         const sign = Math.sign(val)
//         stack.push(sign * Math.floor(Math.abs(val)))
//       }
//       else {
//         console.error(`Invalid sign: ${char}`)
//         return 0
//       }
//     }
//   }

//   console.log(stack)
//   return stack.reduce((sum, num) => sum + num, 0)
// }

// Time: O(n)
// Space: O(1)
function calculate(s: string): number {
  const numberStack: number[] = []
  const operatorStack: string[] = []

  const cal = (num1: number, operator: string, num2: number) => {
    // console.log(num1, operator, num2)
    switch (operator) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return Math.trunc(num1 / num2) // 向零截斷不是無條件捨去
    }
  }

  const deal = (all: boolean) => {
    // + || -, deal 完
    if (all) {
      while (operatorStack.length) {
        const operator = operatorStack.pop()

        let num2 = NaN
        let num1 = NaN

        while (isNaN(num2)) {
          num2 = numberStack.pop()
        }

        while (isNaN(num1)) {
          num1 = numberStack.pop()
        }

        const result = cal(num1, operator, num2)
        numberStack.push(result)
      }

      return
    }

    // * || /, 只把 * || / 消耗掉
    while (['*', '/'].includes(operatorStack.at(-1))) {
      const operator = operatorStack.pop()
      
      let num2 = NaN
      let num1 = NaN

      while (isNaN(num2)) {
        num2 = numberStack.pop()
      }

      while (isNaN(num1)) {
        num1 = numberStack.pop()
      }
        
      const result = cal(num1, operator, num2)
      numberStack.push(result)
    }
  }

  for (const char of s) {
    if (char  === ' ') {
      continue
    }

    if (['+', '-', '*', '/'].includes(char)) {
      deal(['+', '-'].includes(char))
      operatorStack.push(char)
      numberStack.push(NaN)
      continue
    }

    if (!numberStack.length || isNaN(numberStack.at(-1))) {
      numberStack.push(Number(char))
    } else {
      const num = numberStack.pop()
      numberStack.push(10 * num + Number(char))
    }
    // console.log(numberStack, operatorStack)
  }

  deal(true)
  
  return numberStack[0]
}

console.log(calculate('1+2+3+4+5')) // 15
console.log(calculate('3+2*2')) // 7
console.log(calculate(' 3/2 ')) // 1
console.log(calculate(' 3+5 / 2 ')) // 5
console.log(calculate('3+5/2+7*4')) // 33
console.log(calculate('14-3/2')) // 13
console.log(calculate('2-3+4')) // 3

