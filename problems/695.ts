// 695. Max Area of Island

export {}
console.clear()

function maxAreaOfIsland(grid: number[][]): number {
  const history = new Set<string>()

  const dfs = (row: number, col: number): number => {
    if (!grid[row]?.[col] || history.has(`[${row},${col}]`)) {
      return 0
    }

    history.add(`[${row},${col}]`)

    return 1
      + dfs(row - 1, col)
      + dfs(row, col + 1)
      + dfs(row + 1, col)
      + dfs(row, col - 1)
  }

  let maxArea = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1 && !history.has(`[${row},${col}]`)) {
        const area = dfs(row, col)
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}

// console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]))


