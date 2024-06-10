// 935. Knight Dialer

console.clear()

// function knightDialer(n: number): number {
//   const graph = {
//     0: [4, 6],
//     1: [6, 8],
//     2: [7, 9],
//     3: [4, 8],
//     4: [0, 3, 9],
//     5: [],
//     6: [0, 1, 7],
//     7: [2, 6],
//     8: [1, 3],
//     9: [2, 4]
//   }

//   let result = 0

//   const dfs = (step: number, count: number) => {
//     if (count === n) {
//       result++
//       return
//     }

//     for (const nextStep of graph[step]) {
//       dfs(nextStep, count + 1)
//     }
//   }

//   for (let i = 0; i <= 9; i++) {
//     dfs(i, 1)
//   }

//   return result % (10**9 + 7)
// }

function knightDialer(n: number): number {
  const graph = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    5: [],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4]
  }

  let dp: bigint[] = Array(10).fill(BigInt(1))

  for (let i = 2; i <= n; i++) {
    const nextDp: bigint[] = []

    for (const [stop, count] of Object.entries(dp)) {
      for (const nextStop of graph[stop]) {
        nextDp[nextStop] = (nextDp[nextStop] || BigInt(0)) + count
      }
    }

    dp = nextDp
  }

  return Number(dp.reduce((sum, count) => sum + count, BigInt(0)) % BigInt(10**9 + 7))
}

// console.log(knightDialer(1))
// console.log(knightDialer(2))
// console.log(knightDialer(3))
// console.log(knightDialer(10))
console.log(knightDialer(3131))


