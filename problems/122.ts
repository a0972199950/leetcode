// 122. Best Time to Buy and Sell Stock II

console.clear()

function maxProfit(prices: number[]): number {
  let pastProfit = 0
  let lastMinPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const todayPrice = prices[i]
    const yesterdayPrice = prices[i - 1]

    if (todayPrice < yesterdayPrice) {
      pastProfit += (yesterdayPrice - lastMinPrice)
      lastMinPrice = todayPrice
    }
    else {
      lastMinPrice = Math.min(lastMinPrice, todayPrice)
    }
  }

  if (prices.at(-1) > lastMinPrice) {
    pastProfit += (prices.at(-1) - lastMinPrice)
  }

  return pastProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))

