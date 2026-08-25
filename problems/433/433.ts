// 433. Minimum Genetic Mutation
// 最後練習時間：2024-06-23
// https://leetcode.com/problems/minimum-genetic-mutation/

export {}
console.clear()

function minMutation(startGene: string, endGene: string, bank: string[]): number {
  let queue: string[] = [startGene]
  let mutations = 0
  const history = new Set<string>()

  const isOneMutation = (gene1: string, gene2: string) => {
    let diff = 0

    for (let i = 0; i < 8; i++) {
      if (gene1[i] !== gene2[i]) {
        diff++
      }

      if (diff > 1) {
        return false
      }
    }

    return diff === 1
  }

  while (queue.length) {
    // console.log(queue, history)
    mutations++

    const nextQueue: string[] = []

    for (const gene of queue) {
      for (const valid of bank) {
        if (!history.has(valid) && isOneMutation(gene, valid)) {
          if (valid === endGene) {
            return mutations
          }

          nextQueue.push(valid)
          history.add(valid)
        }
      }
    }

    queue = nextQueue
  }

  return -1
}

console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])) // Expected: 1
console.log(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])) // Expected: 2
console.log(minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'])) // Expected: 3
console.log(minMutation('AACCGGTT', 'AACCGGTA', [])) // Expected: -1
console.log(minMutation('AAAACCCC', 'CCCCCCCC', ['AAAACCCA', 'AAACCCCA', 'AACCCCCA', 'AACCCCCC', 'ACCCCCCC', 'CCCCCCCC', 'AAACCCCC', 'AACCCCCC'])) // Expected: 4
console.log(minMutation('AAAAAAAA', 'CCCCCCCC', ['AAAAAAAA', 'AAAAAAAC', 'AAAAAACC', 'AAAAACCC', 'AAAACCCC', 'AACACCCC', 'ACCACCCC', 'ACCCCCCC', 'CCCCCCCA'])) // Expected: -1
