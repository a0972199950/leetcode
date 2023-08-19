// 474. Ones and Zeroes

console.clear()

interface Node {
  '0': number
  '1': number
}

interface Result extends Omit<Node, 'val'> {
  count: number
  hash: string
}

const getHash = (result: Result) => {
  return [result['0'], result['1'], result.count].join(',')
}

function findMaxForm(strs: string[], m: number, n: number): number {
  const nodes = strs.map(str => {
    const node: Node = {
      '0': 0,
      '1': 0
    }

    for (const char of str.split('')) {
      node[char] = ++node[char]
    }

    return node
  }) as Node[]

  const initialResult: Result = {
    '0': 0,
    '1': 0,
    count: 0,
    hash: ''
  }

  initialResult.hash = getHash(initialResult)

  const lastResults: Result[] = [initialResult]
  const hashSet = new Set<string>(initialResult.hash)

  let maxCount = 0

  for (const node of nodes) {
    const lastResultsLength = lastResults.length

    for (let i = 0; i < lastResultsLength; i++) {
      const lastResult = lastResults[i]

      const newResult: Result = {
        '0': lastResult['0'] + node['0'],
        '1': lastResult['1'] + node['1'],
        count: lastResult.count + 1,
        hash: ''
      }

      newResult.hash = getHash(newResult)

      if (
        newResult['0'] > m || newResult['1'] > n
        || hashSet.has(newResult.hash)
      ) {
        continue
      }

      maxCount = Math.max(maxCount, newResult.count)
      lastResults.push(newResult)
      hashSet.add(newResult.hash)
    }
  }

  console.log(lastResults)

  return maxCount
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)) // 4
// console.log(findMaxForm(['10', '0', '1'], 1, 1)) // 2
// console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 0, 0)) // 0
// console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 4, 3)) // 3

export {}
