// 694. Number of Distinct Islands

export {}
console.clear()

interface Land {
  row: number
  col: number
  hash?: string
}

function numDistinctIslands(grid: number[][]): number {
  // 找出所有的島
  const islands: Land[][] = []
  const alreadyInIslands = new Set<string>()

  const getHash = (row: number, col: number) => {
    return `{${row},${col}}` 
  }

  const dfs = (row: number, col: number, index: number) => {
    if (grid[row]?.[col] !== 1 || alreadyInIslands.has(getHash(row, col))) {
      return
    }
    
    islands[index].push({ row, col })
    alreadyInIslands.add(getHash(row, col))
    dfs(row + 1, col, index)
    dfs(row - 1, col, index)
    dfs(row, col + 1, index)
    dfs(row, col - 1, index)
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const val = grid[row][col]
      const hash = getHash(row, col)

      if (val !== 1 || alreadyInIslands.has(hash)) {
        continue
      }

      islands.push([])
      dfs(row, col, islands.length - 1)
    }
  }

  // console.log(islands)

  // 標準化每個島的座標
  for (const island of islands) {
    let minRow = Infinity
    let minCol = Infinity

    island.forEach(land => {
      minRow = Math.min(minRow, land.row)
      minCol = Math.min(minCol, land.col)
    })

    island.forEach(land => {
      land.row -= minRow
      land.col -= minCol
      land.hash = getHash(land.row, land.col)
    })
  }

  // 比較哪幾個島是相同的
  const islandHashs = new Set()
  for (const island of islands) {
    const islandHash = island
      .sort()
      .reduce((sum, land) => sum + land.hash, '')

    islandHashs.add(islandHash)
  }

  console.log(islandHashs)

  return islandHashs.size
}

console.log(numDistinctIslands([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]))
console.log(numDistinctIslands([[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]]))


