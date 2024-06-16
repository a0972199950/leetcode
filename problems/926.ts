// 926. Flip String to Monotone Increasing

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

console.log(minFlipsMonoIncr('00110'))
console.log(minFlipsMonoIncr('010110'))
console.log(minFlipsMonoIncr('00011000'))
console.log(minFlipsMonoIncr('000000'))
console.log(minFlipsMonoIncr('111111'))
console.log(minFlipsMonoIncr('1111000'))
console.log(minFlipsMonoIncr(''))
console.log(minFlipsMonoIncr('10011111110010111011'))


