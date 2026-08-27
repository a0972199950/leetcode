// 58. Length of Last Word
// 最後練習時間：2024-05-26
// https://leetcode.com/problems/length-of-last-word/

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

