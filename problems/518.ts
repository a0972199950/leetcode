// 518. Coin Change II

console.clear()

function change(amount: number, coins: number[]): number {
  let lastCoinResult = []

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]
    const nextCoinResult = []

    for (let currentAmount = 0; currentAmount <= amount; currentAmount++) {
      if (currentAmount === 0) {
        nextCoinResult.push(1)
      }
      else {
        const result =
          (nextCoinResult[currentAmount - coin] ?? 0) // 使用 coin
          + (lastCoinResult[currentAmount] ?? 0) // 不使用 coin

        nextCoinResult.push(result)
      }
    }

    console.log(nextCoinResult)
    lastCoinResult = nextCoinResult
  }

  return lastCoinResult.at(-1)
}

console.log(change(5, [1, 2, 5]))
console.log(change(3, [2]))
console.log(change(10, [10]))

export {}
