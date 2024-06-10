// 424. Longest Repeating Character Replacement [不會的題]
// 解析: https://www.youtube.com/watch?v=SLAKjysDODM

function characterReplacement(s: string, k: number): number {
  let leftIndex = 0
  let rightIndex = 0
  let maxLength = 1
  const record = {
    [s[0]]: 1
  }

  while (rightIndex < s.length - 1) {
    rightIndex++

    record[s[rightIndex]] = ++record[s[rightIndex]] || 1

    const length = rightIndex - leftIndex + 1
    const maxRepeat = Math.max(...Object.values(record))

    if (length - maxRepeat <= k) {
      maxLength = length
      continue
    }

    if (length - maxRepeat > k) {
      record[s[leftIndex]]--
      leftIndex++
    }
  }

  return maxLength
}

console.log(characterReplacement('AABABBA', 1))
console.log(characterReplacement('AABCABBB', 2))
console.log(characterReplacement('AAAA', 2))

