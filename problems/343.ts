// 343. Integer Break

export {}
console.clear()

function integerBreak(n: number): number {
  const dp = [0, 1]

  for (let num = 2; num <= n; num++) {
    const half = Math.floor(num / 2)

    const possibles = []
    for (let part1 = 1; part1 <= half; part1++) {
      const part2 = num - part1
      possibles.push(Math.max(part1, dp[part1]) * Math.max(part2, dp[part2]))
    }

    dp[num] = Math.max(...possibles)
  }

  console.log(dp)
  return dp[n]
}

integerBreak(10)


