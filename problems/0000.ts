console.clear()

const fn = (str: string): number => {
  let lastSum = {
    '0': 0,
    '1': 0
  }

  const getMyStep = (char: string, target: string): number => {
    if (char === target) {
      return 0
    }

    return 1
  }

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i]

    const currentSum = {
      '0': getMyStep(char, '0') + Math.min(lastSum['0'], lastSum['1']),
      '1': getMyStep(char, '1') + lastSum[1]
    }

    lastSum = currentSum
  }

  return Math.min(lastSum['0'], lastSum['1'])
}

console.log(fn('010110')) // => 2
console.log(fn('0010')) // => 1
console.log(fn('111111')) // => 0
console.log(fn('000000')) // => 0
console.log(fn('001111')) // => 0
console.log(fn('100000001')) // => 1

export {}
