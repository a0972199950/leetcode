// 516. Longest Palindromic Subsequence

console.clear()

function longestPalindromeSubseq(s: string): number {
  const getRecordKey = (i: number, j: number) => {
    return `${i},${j}`
  }

  const record = {}

  for (let round = 0; round < s.length; round++) {
    for (let count = 0; count < s.length - round; count++) {
      const i = count
      const j = count + round

      let result = null

      if (i === j) {
        result = 1
      }
      else {
        if (s[i] === s[j]) {
          result = (record[getRecordKey(i + 1, j - 1)] || 0) + 2
        }
        else {
          result = Math.max(
            record[getRecordKey(i, j - 1)],
            record[getRecordKey(i + 1, j)]
          )
        }
      }

      console.log(i, j, result)

      record[getRecordKey(i, j)] = result
    }
  }

  console.log(record)

  return record[getRecordKey(0, s.length - 1)]
}

// console.log(longestPalindromeSubseq('bbbab'))
// console.log(longestPalindromeSubseq('cbbd'))
// console.log(longestPalindromeSubseq('a'))
console.log(longestPalindromeSubseq('aabaa'))


