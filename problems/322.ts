// 322. Coin Change

console.clear()

// DFS + cache
function coinChange(coins: number[], amount: number): number {
  if (!amount) {
    return 0
  }

  const dp = {
    [0]: 0,
    ...coins.reduce((sum, coin) => ({ ...sum, [coin]: 1 }), {})
  }

  const check = (amount: number) => {
    if (dp[amount]) {
      return dp[amount]
    }

    if (amount < 0) {
      dp[amount] = -1
      return dp[amount]
    }

    const possibles = coins
      .map(coin => check(amount - coin))
      .filter(count => count >= 0)

    if (!possibles.length) {
      dp[amount] = -1
      return dp[amount]
    }

    const currentMin = Math.min(...possibles) + 1
    dp[amount] = currentMin
    return dp[amount]
  }

  check(amount)
  return dp[amount]
}

// DP
function coinChange(coins: number[], maxAmount: number): number {
  let lastCoinResult = []

  for (const coin of coins) {
    const coinResult = []

    for (let amount = 0; amount <= maxAmount; amount++) {
      if (amount === 0) {
        coinResult[amount] = 0
        continue
      }

      const options = []
      if (coinResult[amount - coin] >= 0) {
        options.push(1 + coinResult[amount - coin])
      }

      if (lastCoinResult[amount] >= 0) {
        options.push(lastCoinResult[amount])
      }

      if (options.length) {
        coinResult[amount] = Math.min(...options)
      } else {
        coinResult[amount] = -1
      }
    }

    // console.log(coin, coinResult)
    lastCoinResult = coinResult
  }

  return lastCoinResult[maxAmount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([1, 2, 5, 7], 11))
console.log(coinChange([1, 2, 5, 7, 10, 11], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([493, 416, 144, 164, 314, 25], 5607))
console.log(coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864))
console.log(coinChange([186, 419, 83, 408], 6249))

export {}