// 166. Fraction to Recurring Decimal

console.clear()

function fractionToDecimal(numerator: number, denominator: number): string {
  const numerators = new Set([numerator])
  let result = ''

  let currentNumerator = numerator

  console.log(currentNumerator)
  do {
    while (currentNumerator < denominator) {
      result += '0'
      currentNumerator *= 10
    }

    console.log(currentNumerator)

    const remain = currentNumerator % denominator
    const ans = (currentNumerator - remain) / denominator
    result += ans
    currentNumerator = remain

    if (result.length > 10) {
      break
    }

  } while (currentNumerator)

  return result
}

console.log(fractionToDecimal(4, 333))
console.log(4 / 333)


