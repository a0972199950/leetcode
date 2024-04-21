// 151. Reverse Words in a String

console.clear()

// function reverseWords(s: string): string {
//   let stack = ''
//   let result = ''

//   for (let i = 0; i <= s.length; i++) {
//     const char = s[i]

//     if (char !== ' ' && char !== undefined) {
//       stack += char
//       continue
//     }

//     if (stack.length) {
//       if (!result) {
//         result = stack
//       } else {
//         result = stack + ' ' + result
//       }
      
//       stack = ''
//     }
//   }

//   return result
// }

function reverseWords(s: string): string {
  s = s.trim()

  let left = 0
  let right = 0
  const words = []

  while (right <= s.length) {
    const char = s[right]

    if (char === ' ' || char === undefined) {
      if (s[left] !== ' ') {
        words.unshift(s.slice(left, right))
      }

      left = right = right + 1
      continue
    }

    right++
  }

  // console.log(words)
  return words.join(' ')
}

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))

export {}
