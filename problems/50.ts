// 50. Pow(x, n)

console.clear()

function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  }

  const dfs = (pow: number) => {
    if (pow === 1) {
      return x
    }

    if (pow % 2 !== 0) {
      const halfResult = dfs(((pow - 1) / 2))
      return x * halfResult * halfResult
    } else {
      const halfResult = dfs(pow / 2)
      return halfResult * halfResult
    }
  }

  return n > 0 ? dfs(Math.abs(n)) : (1 / dfs(Math.abs(n)))
}

// console.log(myPow(2.00000, 10))
console.log(myPow(2.00000, -2))


