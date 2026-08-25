// 926. Flip String to Monotone Increasing
// 最後練習時間：2024-04-07
// https://leetcode.com/problems/flip-string-to-monotone-increasing/

export {}
console.clear()

function minFlipsMonoIncr(s: string): number {
  let dp: Record<'0' | '1', number> = {
    '0': 0,
    '1': 0
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    const nextDp = {
      '0': dp['0'] + (char === '0' ? 0 : 1),
      '1': Math.min(dp['1'] + (char === '1' ? 0 : 1), dp['0'] + (char === '1' ? 0 : 1))
    }

    dp = nextDp
  }

  return Math.min(dp['0'], dp['1'])
}

console.log(minFlipsMonoIncr('00110')) // Expected: 1
console.log(minFlipsMonoIncr('010110')) // Expected: 2
console.log(minFlipsMonoIncr('00011000')) // Expected: 2
console.log(minFlipsMonoIncr('000000')) // Expected: 0
console.log(minFlipsMonoIncr('111111')) // Expected: 0
console.log(minFlipsMonoIncr('1111000')) // Expected: 3
console.log(minFlipsMonoIncr('')) // Expected: 0
console.log(minFlipsMonoIncr('10011111110010111011')) // Expected: 5


