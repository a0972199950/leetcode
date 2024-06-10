// 12. Integer to Roman

console.clear()

function intToRoman(num: number): string {
  const romans: [string, number][] = [
    ['M', 1000], ['CM', 900],
    ['D', 500],  ['CD', 400],
    ['C', 100],  ['XC', 90],
    ['L', 50],   ['XL', 40],
    ['X', 10],   ['IX', 9],
    ['V', 5],    ['IV', 4],
    ['I', 1]
  ]

  let result = ''

  for (const sub of [1000, 100, 10, 1]) {
    let remain = Math.floor(num / sub) * sub
    num %= sub

    if (!remain) {
      continue
    }

    for (const [symbol, value] of romans) {
      const count = Math.floor(remain / value)

      if (!count) {
        continue
      }

      result += Array(count).fill(symbol).join('')

      remain %= value
      if (!remain) {
        break
      }
    }
  }

  return result
}

// console.log(intToRoman(9))
// console.log(intToRoman(13))
console.log(intToRoman(3749))


