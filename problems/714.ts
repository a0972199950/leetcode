// 714. Best Time to Buy and Sell Stock with Transaction Fee

console.clear()

function maxProfit(prices: number[], fee: number): number {
  let lastDayHoldMaxProfit = -prices[0]
  let lastDayNotHoldMaxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const todayPrice = prices[i]

    lastDayHoldMaxProfit = Math.max(
      lastDayHoldMaxProfit,
      -todayPrice + lastDayNotHoldMaxProfit
    )

    lastDayNotHoldMaxProfit = Math.max(
      lastDayNotHoldMaxProfit,
      (todayPrice - fee) + lastDayHoldMaxProfit
    )
  }

  console.log('lastDayHoldMaxProfit: ', lastDayHoldMaxProfit)
  console.log('lastDayNotHoldMaxProfit: ', lastDayNotHoldMaxProfit)

  return Math.max(lastDayHoldMaxProfit, lastDayNotHoldMaxProfit)
}

maxProfit([1, 3, 2, 8, 4, 9], 2)
maxProfit([1, 3, 7, 5, 10, 3], 3)

export {}
