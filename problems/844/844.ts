// 844. Backspace String Compare
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/backspace-string-compare/

console.clear()

// Time: O(n)
// Space: O(1)
// function backspaceCompare(s: string, t: string): boolean {
//   let sIndex = s.length - 1
//   let tIndex = t.length - 1

//   while (sIndex >= 0 && tIndex >= 0) {
//     let sChar = ''
//     let tChar = ''

//     while (s[sIndex] === '#' && sIndex >= 0) {
//       let backSpace = 1

//       while (backSpace > 0 && sIndex >= 0) {
//         sIndex--

//         if (s[sIndex] !== '#') {
//           backSpace--
//         } else {
//           backSpace++
//         }
//       }

//       sIndex >= 0 && (sIndex--)
//     }

//     sChar = s[sIndex] || ''

//     while (t[tIndex] === '#' && tIndex >= 0) {
//       let backSpace = 1

//       while (backSpace > 0 && tIndex >= 0) {
//         tIndex--

//         if (t[tIndex] !== '#') {
//           backSpace--
//         } else {
//           backSpace++
//         }
//       }

//       tIndex >= 0 && (tIndex--)
//     }

//     console.log(tIndex)

//     tChar = t[tIndex] || ''

//     console.log(sChar, tChar)

//     if (sChar !== tChar) {
//       return false
//     } else {
//       sIndex >= 0 && (sIndex--)
//       tIndex >= 0 && (tIndex--)
//     }
//   }

//   console.log(sIndex, tIndex)
//   return sIndex === tIndex
// }

// Time: O(n)
// Space: O(n)
// function backspaceCompare(s: string, t: string): boolean {
//   const BACKSPACE = '#'

//   const build = (str: string) => {
//     const stack: string[] = []

//     for (const char of str) {
//       if (char === BACKSPACE) {
//         stack.pop()
//       } else {
//         stack.push(char)
//       }
//     }

//     return stack.join('')
//   }

//   return build(s) === build(t)
// }

// Time: O(n)
// Space: O(1)
function backspaceCompare(s: string, t: string): boolean {
  const BACKSPACE = '#'

  let sIndex = s.length - 1
  let tIndex = t.length - 1

  const backToValidIndex = (str: string, index: number) => {
    let backs = 0

    while (backs || str[index] === BACKSPACE) {
      if (str[index] === BACKSPACE) {
        backs++
        index--
      } else {
        backs--
        index--
      }
    }

    return index
  }

  while (sIndex >= 0 || tIndex >= 0) {
    sIndex = backToValidIndex(s, sIndex)
    tIndex = backToValidIndex(t, tIndex)

    if ((s[sIndex] ?? '') !== (t[tIndex] ?? '')) {
      return false
    }

    sIndex--
    tIndex--
  }

  return true
}

console.log(backspaceCompare('ab#c', 'ad#c'))   // true
console.log(backspaceCompare('ab##', 'c#d#'))   // true
console.log(backspaceCompare('a#c', 'b'))        // false
console.log(backspaceCompare('y#fo##f', 'y#f#o##f')) // true
console.log(backspaceCompare('###', ''))         // true（連退超過已有字元）
console.log(backspaceCompare('a##c', '#a#c'))    // true

