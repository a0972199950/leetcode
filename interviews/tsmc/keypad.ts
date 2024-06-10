// keypad.
// https://hackmd.io/@alan25sprout/S1Yjq9RUO

console.clear()

function findTime(str: string, keypad: string[][]): number {
  if (!str) {
    return 0
  }

  const cood: Record<string, { x: number, y: number }> = {}

  for (let x = 0; x < keypad.length; x++) {
    for (let y = 0; y < keypad[0].length; y++) {
      const key = keypad[x][y]
      cood[key] = { x, y }
    }
  }

  // console.log(cood)

  let lastCharCood = cood[str[0]]
  let result = 0

  for (let i = 1; i < str.length; i++) {
    const char = str[i]
    const charCood = cood[char]

    // Time: 0
    if (charCood.x === lastCharCood.x && charCood.y === lastCharCood.y) {
      // console.log(char, 0)
      result += 0
    }
    // Time: 1
    else if (Math.abs(charCood.x - lastCharCood.x) < 2 && Math.abs(charCood.y - lastCharCood.y) < 2) {
      // console.log(char, 1)
      result += 1
    }
    // Time: 2
    else {
      // console.log(char, 2)
      result += 2
    }

    lastCharCood = charCood
  }

  return result
}

console.log(findTime('423692', [['9', '2', '3'], ['8', '5', '7'], ['6', '1', '4']]))
console.log(findTime('5111', [['7', '5', '2'], ['9', '6', '1'], ['3', '4', '8']]))
console.log(findTime('91566165', [['6', '3', '9'], ['4', '8', '5'], ['7', '1', '2']]))


