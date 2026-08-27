// 1405. Longest Happy String
// 最後練習時間：2024-03-31
// https://leetcode.com/problems/longest-happy-string/

console.clear()

function longestDiverseString(a: number, b: number, c: number): string {
  const ans = []
  const remain = { a, b, c }

  const pickMax = () => {
    const options = { ...remain }
    if (ans[ans.length - 1] === ans[ans.length - 2]) {
      delete options[ans[ans.length - 1]]
    }

    return Object
      .entries(options)
      .reduce((sum, [key, value]) => {
        if (!sum) {
          return value > 0 ? { key, value } : sum
        } else {
          return (value > 0 && value > sum.value) ? { key, value } : sum
        }
      }, null as null | { key: string, value: number })
  }

  while (ans.length < a + b + c) {
    const max = pickMax()

    if (!max) {
      break
    }

    ans.push(max.key)
    remain[max.key]--
  }

  return ans.join('')
}

console.log(longestDiverseString(1, 1, 7)) // Expected: ccaccbcc
console.log(longestDiverseString(7, 1, 0)) // Expected: aabaa
console.log(longestDiverseString(1, 0, 5)) // Expected: ccacc
console.log(longestDiverseString(7, 0, 0)) // Expected: aa
console.log(longestDiverseString(0, 0, 0)) // Expected: 
console.log(longestDiverseString(1, 1, 1)) // Expected: abc
console.log(longestDiverseString(6, 6, 6)) // Expected: abcabcabcabcabcabc
console.log(longestDiverseString(0, 8, 11)) // Expected: ccbccbcbcbcbcbcbcbc

