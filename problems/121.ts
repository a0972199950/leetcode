// 121. Best Time to Buy and Sell Stock

interface Transection {
  height: any
  low: any
}

function maxProfit(prices: number[]): number {
  let min = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]

    if (price < min) {
      min = price
    }

    if ((price - min) > maxProfit) {
      maxProfit = price - min
    }
  }

  return maxProfit
};

export {}