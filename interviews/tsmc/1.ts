// tsmc. 1

console.clear()

function getTime(s: string): number {
  let lastCharCode = 'A'.charCodeAt(0)
  let result = 0

  for (const char of s.split('')) {
    const charCode = char.charCodeAt(0)
    const length = Math.abs(lastCharCode - charCode)

    const step = Math.min(
      length,
      25 - length + 1
    )

    result += step
    lastCharCode = charCode
  }

  return result
}

console.log(getTime('BZA'))
console.log(getTime('AZGB'))

export {}
