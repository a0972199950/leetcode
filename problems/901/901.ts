// 901. Online Stock Span
// 最後練習時間：2026-09-04
// https://leetcode.com/problems/online-stock-span/

console.clear()

// Time: O(n)
// Space: O(n)
class StockSpanner {
  private stack: { price: number, span: number }[] = []

  constructor() {
    
  }

  // Time: amortized O(1)
  next(price: number): number {
    let span = 1

    while (this.stack.length && this.stack.at(-1).price <= price) {
      span += this.stack.pop().span
    }

    this.stack.push({ price, span })
    return span
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

const stockSpanner = new StockSpanner()
console.log(stockSpanner.next(100)) // 1
console.log(stockSpanner.next(80)) // 1
console.log(stockSpanner.next(60)) // 1
console.log(stockSpanner.next(70)) // 2
console.log(stockSpanner.next(60)) // 1
console.log(stockSpanner.next(75)) // 4
console.log(stockSpanner.next(85)) // 6
