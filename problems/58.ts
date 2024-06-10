// 58. Length of Last Word

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

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))
console.log(lengthOfLastWord('a'))


