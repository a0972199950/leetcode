// 96. Unique Binary Search Trees

console.clear()

function numTrees(n: number): number {
  const results = [1, 1]

  for (let i = 2; i <= n; i++) {
    const subResults = []

    for (let j = 1; j <= i; j++) {
      const left = results[j - 1]
      const right = results[i - j]

      subResults.push(left * right)
    }

    results.push(subResults.reduce((sum, item) => sum + item, 0))
  }

  console.log(results)
  return results.at(-1)
}

numTrees(4)
numTrees(1)

export {}
