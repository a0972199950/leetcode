// 17. Letter Combinations of a Phone Number

console.clear()

const letterMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return []
  }

  const isLeaf = (index: number) => {
    if (index >= digits.length) {
      throw 'index beyond'
    }

    return index === digits.length - 1
  }

  const result: string[] = []

  const traverse = (index: number, lastString: string) => {
    for (const char of letterMap[Number(digits[index])]) {
      const currentString = lastString + char

      if (isLeaf(index)) {
        result.push(currentString)
      } else {
        traverse(index + 1, currentString)
      }
    }
  }

  traverse(0, '')
  return result
}

letterCombinations('2')

export {}
