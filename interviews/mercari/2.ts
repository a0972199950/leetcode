// 2222. Anagram

console.clear()

function getMinimumDifference(a: string[], b: string[]): number[] {
  const result: number[] = []

  const checkAnagram = (wordA: string, wordB: string): number => {
    if (wordA.length !== wordB.length) {
      return -1
    }

    const recordA: Record<string, number> = {}
    const recordB: Record<string, number> = {}

    for (const char of wordA.split('')) {
      recordA[char] = ++recordA[char] || 1
    }

    for (const char of wordB.split('')) {
      recordB[char] = ++recordB[char] || 1
    }

    Object.entries(recordA).forEach(([key, value]) => {
      recordB[key] = (recordB[key] || 0) - value
    })

    console.log('recordB: ', recordB)

    return Object.values(recordB).reduce((sum, val) => {
      return sum + Math.abs(val)
    }, 0) / 2
  }

  for (let i = 0; i < a.length; i++) {
    const wordA = a[i]
    const wordB = b[i]

    const checkResult = checkAnagram(wordA, wordB)
    result.push(checkResult)
  }

  return result
}

console.log(getMinimumDifference( ['tea', 'tea', 'act'],  ['ate', 'toe', 'acts']))

export {}
