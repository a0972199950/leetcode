// 96. Unique Binary Search Trees

export {}
console.clear()

// function numTrees(n: number): number {
//   const results = [1, 1]

//   for (let i = 2; i <= n; i++) {
//     const subResults = []

//     for (let j = 1; j <= i; j++) {
//       const left = results[j - 1]
//       const right = results[i - j]

//       subResults.push(left * right)
//     }

//     results.push(subResults.reduce((sum, item) => sum + item, 0))
//   }

//   // console.log(results)
//   return results.at(-1)
// }

function numTrees(n: number): number {
  const dp = [1]

  const dfs = (node: number) => {
    let sum = 0

    if (dp[node]) {
      return dp[node]
    }

    for (let i = 1; i <= node; i++) {
      const left = i - 1
      const right = node - i

      sum += dfs(left) * dfs(right)
    }

    return sum
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = dfs(i)
  }

  return dp[n]
}

// console.log(numTrees(3))
// console.log(numTrees(1))
console.log(numTrees(19))


