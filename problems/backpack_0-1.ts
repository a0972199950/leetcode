// backpack_0-1. 

export {}
console.clear()

function testWeightBagProblem(
  weight: number[],
  value: number[],
  size: number
): number {
  const length = weight.length

  const cache: (null | number)[][] = []

  for (let i = 0; i < length; i++) {
    for (let w = 0; w <= size; w++) {
      if (!cache[i]) {
        cache[i] = []
      }

      cache[i][w] = null
    }
  }

  // i: 物品
  // w: 重量
  const dp = (i: number, w: number) => {
    if (isNaN(i) || isNaN(w)) {
      throw ''
    }

    if (typeof cache[i]?.[w] === 'number') {
      return cache[i][w]
    }

    let result: number

    if (w <= 0 || i <= -1) {
      result = 0
    }
    else if (i === 0) {
      result = weight[i] > w ? 0 : value[i]
    }
    else {
      result = Math.max(
        // 取
        weight[i] > w
          ? 0
          : value[i] + dp(i - 1, w - weight[i]),

        // 不取
        dp(i - 1, w)
      )
    }

    cache[i][w] = result
    return result
  }

  dp(length - 1, size)

  return cache[length - 1][size]
}

console.log(testWeightBagProblem([2, 3, 4, 5], [3, 4, 5, 6], 5)) // 7
console.log(testWeightBagProblem([1, 2, 3], [6, 10, 12], 5)) // 22
console.log(testWeightBagProblem([4, 5, 1], [3, 4, 2], 3)) // 2
console.log(testWeightBagProblem([2, 2, 3, 5], [3, 4, 1, 6], 8)) // 10


