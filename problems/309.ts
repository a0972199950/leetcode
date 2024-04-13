// 309. Best Time to Buy and Sell Stock with Cooldown

console.clear()

// function maxProfit(prices: number[]): number {
//   const holdMaxProfits = [-prices[0]]
//   const notHoldMaxProfits = [0]

//   for (let i = 1; i < prices.length; i++) {
//     const todayPrice = prices[i]

//     holdMaxProfits.push(Math.max(
//       holdMaxProfits[i - 1],
//       -todayPrice + (notHoldMaxProfits[i - 2] || 0)
//     ))

//     notHoldMaxProfits.push(Math.max(
//       notHoldMaxProfits[i - 1],
//       todayPrice + holdMaxProfits[i - 1]
//     ))
//   }

//   console.log('holdMaxProfits: ', holdMaxProfits)
//   console.log('notHoldMaxProfits: ', notHoldMaxProfits)

//   return Math.max(
//     holdMaxProfits.at(-1),
//     notHoldMaxProfits.at(-1)
//   )
// }

function maxProfit(prices: number[]): number {
  const notHoldMaxProfits = [0]
  const holdMaxProfits = [-prices[0]]

  for (let i = 1; i < prices.length; i++) {
    const notHoldMaxProfit = Math.max(
      holdMaxProfits[i - 1] + prices[i], // 當天賣
      notHoldMaxProfits[i - 1] // 當天不動，前一天也未持有
    )

    const holdMaxProfit = Math.max(
      holdMaxProfits[i - 1], // 當天不動，前一天也持有
      (notHoldMaxProfits[i - 2] || 0) - prices[i] // 當天買
    )

    notHoldMaxProfits.push(notHoldMaxProfit)
    holdMaxProfits.push(holdMaxProfit)
  }

  return Math.max(notHoldMaxProfits.at(-1), holdMaxProfits.at(-1))
}

console.log(maxProfit([1, 2, 3, 0, 2]))
console.log(maxProfit([1]))

export {}
