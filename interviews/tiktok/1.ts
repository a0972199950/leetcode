// 23
// (23)
// 23 or 23
// 23 and 23
// (23 or 23)
// 23 and (23 or 23)

console.clear()

// function isValid (expr: string): boolean {
//   const stack = []

//   const isBlank = (str: string) => str === ' '
//   const isNumber = (str: string) => /^\d/i.test(str)
//   const isLeftBracket = (str: string) => str === '('
//   const isRightBracket = (str: string) => str === ')'
//   const isAlphabet = (str: string) => /^[a-z]/i.test(str)
//   const isOperator = (str: string) => str === 'and' || str === 'or'

//   const getLatest = (arr: any[]) => arr[arr.length - 1]

//   let leftBracketCount = 0

//   i_loop:
//   for (let i = 0; i < expr.length; i++) {
//     const char = expr[i]

//     // 空格
//     if (isBlank(char)) {
//       continue
//     }

//     // 數字
//     if (isNumber(char)) {
      
//       if (isNumber(getLatest(stack))) {
//         const last = stack.pop()
//         stack.push(last + char)
//       } else {
//         stack.push(char)
//       }

//       continue
//     }

//     // 左括號
//     if (isLeftBracket(char)) {
//       stack.push(char)
//       leftBracketCount++
//       continue
//     }

//     // 右括號
//     if (isRightBracket(char)) {
//       // 往前找要有左括號，找到左括號就削掉一對
//       for (let j = stack.length - 1; j >= 0; j--) {
//         if (isLeftBracket(stack[j])) {
//           stack.splice(j, 1)
//           leftBracketCount--
//           continue i_loop
//         }
//       }

//       // 沒找到左括號
//       return false
//     }

//     // 英文字母
//     if (isAlphabet(char)) {
//       if (char !== 'a' && char !== 'o') {
//         return false
//       }

//       let operator = ''

//       if (char === 'a') {
//         operator = char + expr[i + 1] + expr[i + 2]
//         i = i + 2
//       }

//       if (char === 'o') {
//         operator = char + expr[i + 1]
//         i = i + 1
//       }

//       if (!isOperator(operator) || isOperator(getLatest(stack))) {
//         return false
//       }

//       // 前一個必須要是 number
//       if (isNumber(getLatest(stack))) {
//         stack.push(operator)
//         continue
//       }

//       // 前一個不是 number
//       return false
//     }

//     // char 是不包含在題目內的字元
//     return false
//   }

//   // 檢查 stack 最後剩下甚麼
//   const lastest = getLatest(stack)

//   if (isLeftBracket(lastest) || isOperator(lastest) || leftBracketCount !== 0) {
//     return false
//   }

//   return true
// }

type ValidType = 'BLANK' | 'NUMBER' | 'ALPHABET' | 'LEFT_BRACKED' | 'RIGHT_BRACKED'

function isValid (s: string): boolean {
  const checkType = (char: string): false | ValidType => {
    if (char === ' ') {
      return 'BLANK'
    }

    if (/^\d+$/.test(char)) {
      return 'NUMBER'
    }

    if (/^[a,n,d,o,r]+$/.test(char)) {
      return 'ALPHABET'
    }

    if (char === '(') {
      return 'LEFT_BRACKED'
    }

    if (char === ')') {
      return 'RIGHT_BRACKED'
    }

    return false
  }

  const stack = []
  let open = 0
  const last = () => stack[stack.length - 1]

  for (let i = 0; i < s.length; i++) {    
    let char = s[i]
    const type = checkType(char)

    if (!type) {
      return false
    }

    if (type === 'BLANK') {
      continue
    }

    if (type === 'NUMBER') {
      // 放進 stack 組出數字
      while (checkType(last()) === 'NUMBER') {
        char = stack.pop() + char
      }

      // 檢查前面是否為 and | or，如果是的話就消掉他與前面一個數字
      if (checkType(last()) === 'ALPHABET') {
        stack.pop()
        stack.pop()
      }

      stack.push(char)
      continue
    }

    if (type === 'ALPHABET') {
      // 檢查是否能組成 and 或 or
      if (char !== 'o' && char !== 'a') {
        return false
      }

      if (char === 'o') {
        if (s[i + 1] !== 'r') {
          return false
        } else {
          i++
          char = 'or'
        }
      }

      if (char === 'a') {
        if (s[i + 1] !== 'n' || s[i + 2] !== 'd') {
          return false
        } else {
          i += 2
          char = 'and'
        }
      }

      // 檢查是否能放進 stack
      if (checkType(last()) !== 'NUMBER') {
        return false
      }

      stack.push(char)
      continue
    }

    if (type === 'LEFT_BRACKED') {
      // open + 1，未來再檢查
      open++
      continue
    }

    if (type === 'RIGHT_BRACKED') {
      // open - 1，未來再檢查
      if (open === 0) {
        return false
      }
      open--
      continue
    }
  }

  if (open) {
    return false
  }

  if (!stack.length) {
    return true
  }
  else if (stack.length === 1) {
    return checkType(last()) === 'NUMBER'
  }
  else {
    return false
  }
}

console.log(isValid('23'))
console.log(isValid('(23)'))
console.log(isValid('23 or 23'))
console.log(isValid('23 and 23'))
console.log(isValid('(23 or 23)'))
console.log(isValid('23 or 23 and 23'))
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
console.log(isValid(']'))

export default {}