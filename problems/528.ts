// 528. Random Pick with Weight

console.clear()

class Solution {
  data: number[]
  sum: number

  constructor(w: number[]) {
    this.data = w
    this.sum = w.reduce((sum, weight) => sum + weight, 0)
  }

  pickIndex(): number {
    const randomW = Math.round(Math.random() * this.sum)
    let sum = 0

    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i]
      if (sum >= randomW) {
        return i
      }
    }

    return this.data.length - 1
  }
}

export {}
