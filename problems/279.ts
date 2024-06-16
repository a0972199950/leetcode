// 279. Perfect Squares

export {}
console.clear()

function numSquares(n: number): number {
  const dp = [0, 1]

  for (let num = 2; num <= n; num++) {
    const maxSqrt = Math.floor(Math.sqrt(num))

    const possibles = []
    for (let sqrt = maxSqrt; sqrt >= 1; sqrt--) {
      const remain = num - Math.pow(sqrt, 2)

      if (remain === 0) {
        possibles.push(1)
        break
      }

      if (dp[remain] !== 0) {
        possibles.push(1 + dp[remain])
      }
    }

    dp[num] = Math.min(...possibles)
  }

  console.log(dp.reduce((sum, count, index) => ({ ...sum, [index]: count }), {}))
  return dp[n]
}

numSquares(13)


