// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

export {}
console.clear()

function lengthOfLastWord(s: string): number {
  let length = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]

    if (char === ' ' && length) {
      return length
    }

    if (char === ' ' && !length) {
      continue
    }

    length++
  }

  return length
}

console.log(lengthOfLastWord('Hello World')) // Expected: 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // Expected: 4
console.log(lengthOfLastWord('luffy is still joyboy')) // Expected: 6
console.log(lengthOfLastWord('a')) // Expected: 1


