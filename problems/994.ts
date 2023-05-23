// 994. Rotting Oranges

console.clear()

function orangesRotting(grid: number[][]): number {
  let rottings = []
  let fresh = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        rottings.push([row, col])
      }

      if (grid[row][col] === 1) {
        fresh++
      }
    }
  }

  let timer = 0

  while (rottings.length) {
    const nextRottings = []

    for (const rotting of rottings) {
      const [rottingRow, rottingCol] = rotting

      const adjacents = [
        [rottingRow - 1, rottingCol],
        [rottingRow, rottingCol + 1],
        [rottingRow + 1, rottingCol],
        [rottingRow, rottingCol - 1]
      ]

      adjacents.forEach(([row, col]) => {
        if (grid[row]?.[col] === 1) {
          nextRottings.push([row, col])
          grid[row][col] = 2
          fresh--
        }
      })
    }

    if (nextRottings.length) {
      timer++
    }

    rottings = nextRottings
  }

  return !fresh ? timer : -1
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
console.log(orangesRotting([[0, 2]]))

export {}
