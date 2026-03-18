// 394. Decode String

// function decodeString(s: string): string {
//   const stack: string[] = []

//   for (const char of s) {
//     if (char !== ']') {
//       stack.push(char)
//       continue
//     }

//     let repeatTarget = ''

//     while (stack[stack.length - 1] !== '[') {
//       repeatTarget = stack.pop() + repeatTarget
//     }

//     stack.pop()

//     let repeat = ''

//     while (/\d/.test(stack[stack.length - 1])) {
//       repeat = stack.pop() + repeat
//     }

//     stack.push(Array.from(Array(parseInt(repeat))).reduce((sum) => sum += repeatTarget, ''))
//   }

//   return stack.join('')
// }

// Time: O(n)
// Space: O(n)
// function decodeString(s: string): string {
//   const stack: string[] = [] // number or alphabet

//   for (const char of s) {
//     // number
//     if (/\d/.test(char)) {
//       if (!/\d/.test(stack.at(-1))) {
//         stack.push(char)
//       } else {
//         stack[stack.length - 1] += char
//       }
//     }
//     // [
//     else if (char === '[') {
//       stack.push(char)
//     }
//     // ]
//     else if (char === ']') {
//       let word = stack.pop()

//       while (stack.at(-1) !== '[') {
//         word = stack.pop() + word
//       }

//       stack.pop()

//       const num = stack.pop()
//       word = word.repeat(Number(num))
//       stack.push(word)
//     }
//     // alphabet
//     else {
//       if (!stack.length || /\d/.test(stack.at(-1)) || stack.at(-1) === '[') {
//         stack.push(char)
//       } else {
//         stack[stack.length - 1] += char
//       }
//     }

//     // console.log(stack)
//   }

//   return stack.join('')
// }

// Time: O(n)
// Space: O(n)
// function decodeString(s: string): string {
//   let index = 0

//   const getBracketWord = () => {
//     // console.log('getBracketWord: ', s[index] + s[index + 1])
//     if (s[index] !== '[') {
//       throw new Error('getBracketWord 不能在此地方呼叫: ' + s[index])
//     }
//     index++

//     let result = ''

//     while (s[index] !== ']') {
//       if (/\d/.test(s[index])) {
//         result += repeatWord()
//         continue
//       }

//       result += s[index]
//       index++
//     }

//     index++
//     return result
//   }

//   const repeatWord = () => {
//     // console.log('repeatWord: ', s[index])
//     let num = ''

//     while(/\d/.test(s[index])) {
//       num += s[index]
//       index++
//     }

//     if (s[index] !== '[') {
//       throw new Error('數字後面一定要接 [, got: ' + s[index])
//     }

//     return getBracketWord().repeat(Number(num))
//   }

//   const getPureWord = () => {
//     let result = ''

//     while (index < s.length && s[index] !== '[' && !/\d/.test(s[index])) {
//       result += s[index]
//       index++
//     }

//     return result
//   }

//   const process = () => {
//     if (/\d/.test(s[index])) {
//       return repeatWord()
//     }
//     else if (s[index] === '[') {
//       return getBracketWord()
//     }
//     else {
//       return getPureWord()
//     }
//   }

//   let result = ''

//   while (index < s.length) {
//     result += process()
//     // console.log('result: ', result)
//   }

//   return result
// }

// Time: O(n)
// Space: O(n)
// 還是不懂雙 stack 的解法
function decodeString(s: string): string {
  let result = ''
  let repeat = ''

  const repeatStack = []
  const resultStack = []

  for (const char of s) {
    // 數字
    if (/\d/.test(char)) {
      repeat += char
    }
    // [
    else if (char === '[') {
      repeatStack.push(Number(repeat))
      resultStack.push(result)

      result = ''
      repeat = ''
    }
    // ]
    else if (char === ']') {
      result = (resultStack.pop() || '') + result.repeat((repeatStack.pop() || 1))
    }
    // 其他字符
    else {
      result += char
    }
  }

  // resultStack.push(result)

  console.log('repeatStack: ', repeatStack)
  console.log('resultStack: ', resultStack)

  return result
}

// console.log(decodeString('10[hi]'))
// console.log(decodeString('[hi]'))
// console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString('abcde'))
console.log(decodeString('abc3[cd]xyz'))
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'))
