// 1062. Longest Repeating Substring

export {}
console.clear()

// function longestRepeatingSubstring(s: string): number {
//   const hash = new Set<string>()
//   let maxLength = -Infinity

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       const subString = s.slice(i, j + 1)

//       if (hash.has(subString)) {
//         maxLength = Math.max(maxLength, j - i + 1)
//       }

//       hash.add(subString)
//     }
//   }

//   return maxLength === -Infinity ? 0 : maxLength
// }

function longestRepeatingSubstring(s: string): number {
  let left = 0
  let right = s.length - 2

  let max = -Infinity

  const checkHasRepeating = (length: number) => {
    const hash = new Set()

    for (
      let i = 0, j = length;
      j <= s.length;
      i++, j++
    ) {
      const subStr = s.slice(i, j)
      if (hash.has(subStr)) {
        return subStr
      } else {
        hash.add(subStr)
      }
    }

    return false
  }

  while (right - left > 1) {
    const middle = Math.ceil(left + (right - left) / 2)
    // console.log(middle)

    if (checkHasRepeating(middle)) {
      max = Math.max(max, middle)
      left = middle
    } else {
      right = middle
    }
  }

  if (checkHasRepeating(right + 1)) {
    return right + 1
  } else {
    return max === -Infinity ? 0 : max
  }
}

console.log(longestRepeatingSubstring('abcd'))
console.log(longestRepeatingSubstring('abbaba'))
console.log(longestRepeatingSubstring('aabcaabdaab'))
console.log(longestRepeatingSubstring('aaaaa'))


