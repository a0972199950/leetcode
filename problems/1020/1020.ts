// 1020. Number of Enclaves
// 最後練習時間：2026-09-09
// https://leetcode.com/problems/number-of-enclaves/

console.clear()

// Time: O(m * n)
// Space: O(n)
// function numEnclaves(grid: number[][]): number {
//   // 1: 還沒檢查過的陸地
//   // 0: 確定走不出去的陸地或海洋
//   // 2: 確定走得出去的陸地
//   // undefined: 界外，確定走出去了
//   // set 裡面: 不確定，正在檢查的
//   // DFS, 先找出每個1，往四個方向走，同時把走過的單元格傳給下面。一旦有一個單元格走出去了，那就把所有歷史格標為2並回傳 true
//   // 一旦遇到四個方向都回傳 false，那答案+1。如果走到 2，那直接回 true 不用繼續遍歷
//   // 用 -1 標記走過，避免回頭

//   type Cell = [number, number]

//   let result = 0
//   let history = new Set<string>()

//   const dfs = (cell: Cell): boolean => {
//     const [row, col] = cell
//     const cellType = grid[row]?.[col]
//     const id = `[${row},${col}]`

//     // 回頭了
//     if (history.has(id)) {
//       return false
//     }

//     // 界外
//     if (cellType === undefined) {
//       return true
//     }

//     // 確定出不去
//     if (cellType === 0) {
//       return false
//     }

//     // 確定走得出去
//     if (cellType === 2) {
//       return true
//     }

//     history.add(id)

//     // console.log(cell, cellType)

//     // 剩下 1，不確定能不能出去，上下左右都問
//     const up = dfs([row - 1, col]) // up
//     const right = dfs([row, col + 1]) // right
//     const down = dfs([row + 1, col]) // down
//     const left = dfs([row, col - 1]) // left

//     // console.log('canEscape: ', canEscape)
//     return up || right || down || left
//   }

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       const cellType = grid[row][col]
//       if (cellType !== 1) {
//         continue
//       }

//       const canEscape = dfs([row, col])

//       if (!canEscape) {
//         result += history.size
//       }

//       history.forEach((cell) => {
//         const [row, col] = eval(cell)
//         grid[row][col] = canEscape ? 2 : 0
//       })

//       history = new Set()
//     }
//   }

//   // console.log(grid)

//   return result
// }

// Time: O(2 * m*n)
// Space: O(m*n)
function numEnclaves(grid: number[][]): number {
  let isolated = 0

  const dfs = (i: number, j: number) => {
    const cellType = grid[i]?.[j]
    if (!cellType) {
      return
    }

    grid[i][j] = 0
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i !== 0 && i !== grid.length - 1 && j !== 0 && j !== grid[0].length - 1) {
        continue
      }

      dfs(i, j)
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cellType = grid[i][j]

      if (cellType) {
        isolated++
      }
    }
  }

  return isolated
}

console.log(numEnclaves([[0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]])) // 1
console.log(numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])) // 3
console.log(numEnclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]])) // 0
