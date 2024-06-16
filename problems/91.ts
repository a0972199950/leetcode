// 91. Decode Ways

export {}
console.clear()

function numDecodings(s: string): number {
  const map = Array(26).fill(null).reduce((sum, _item, index) => ({
    ...sum,
    [index + 1]: String.fromCharCode(65 + index)
  }), {})

  if (!map[s[0]]) {
    return 0
  }

  const canWithPrev = (i: number) => {
    return map[s.slice(i - 1, i + 1)]
  }

  const canWithoutPrev = (i: number) => {
    return map[s[i]]
  }

  const maxPossible = [1]

  for (let i = 1; i < s.length; i++) {
    const withPrev = canWithPrev(i) ? (maxPossible[i - 2] || 1) : null
    const withoutPrev = canWithoutPrev(i) ? maxPossible[i - 1] : null

    if (withPrev === null && withoutPrev === null) {
      return 0
    }

    maxPossible.push(withPrev + withoutPrev)
  }

  console.log(maxPossible)

  return maxPossible.at(-1)
}

// numDecodings('11106')
// numDecodings('226')
// numDecodings('06')
// numDecodings('11111')
numDecodings('10011')


