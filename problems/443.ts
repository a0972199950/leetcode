// 443. String Compression

export {}
console.clear()

// Time: O(n)
// Space: O(1)
// function compress(chars: string[]): number {
//   let i = 0
//   let current = ''
//   let count = 0

//   for (let j = 0; j <= chars.length; j++) {
//     const char = chars[j]
    
//     if (!current) {
//       current = char
//       count++
//       i++
//       continue
//     }

//     if (current === char) {
//       count++
//       continue
//     }

//     if (current !== char) {
//       if (count > 1) {
//         chars.splice(i, count - 1, ...String(count).split(''))
//         i += String(count).split('').length
//       }
      
//       j = i - 1
//       current = ''
//       count = 0
//     }
//   }

//   console.log('final', chars, chars.join(''))
//   return chars.join('').length
// }

// Time: O(n)
// Space: O(1)
function compress(chars: string[]): number {
  let current = ''
  let count = 0

  for (let i = 0; i < chars.length; i++) {
    current = chars[i]
    count = 0

    let j = i

    while (j <= chars.length) {
      if (chars[j] === current) {
        count++
        j++
        continue
      }

      if ((chars[j] !== current)) {
        if (count === 1) {
          break
        }

        chars.splice(i + 1, count - 1, ...String(count).split(''))
        i += String(count).split('').length
        break
      }
    }
  }

  console.log(chars)
  return chars.length
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
console.log(compress(['a']))
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']))
