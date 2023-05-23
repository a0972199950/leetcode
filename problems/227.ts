// 227. Basic Calculator II

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

function calculate(s: string): number {
  s = s.replace(/\s/g, '')

  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    // 數字
    if (/\d/.test(char)) {
      if (Number.isInteger(stack.at(-1))) {
        stack.push(Number(stack.pop() + char))
      } else {
        stack.push(Number(char))
      }
    }
    else {
      let nextNumStr = ''

      while (/\d/.test(s[i + 1])) {
        nextNumStr += s[i + 1]
        i++
      }

      if (char === '+' || char === '-') {
        stack.push(Number(`${char}${nextNumStr}`))
      }
      else if (char === '*') {
        const result = stack.pop() * Number(nextNumStr)
        stack.push(result)
      }
      else if (char === '/') {
        const val = stack.pop() / Number(nextNumStr)
        const sign = Math.sign(val)
        stack.push(sign * Math.floor(Math.abs(val)))
      }
      else {
        console.error(`Invalid sign: ${char}`)
        return 0
      }
    }
  }

  console.log(stack)
  return stack.reduce((sum, num) => sum + num, 0)
}

console.log(calculate('3+2*2'))
console.log(calculate('3+26*2'))
console.log(calculate(' 3/2 '))
console.log(calculate(' 3+5 / 2 '))
console.log(calculate('3+5/2+7*4'))
console.log(calculate('14-3/2'))

export {}
