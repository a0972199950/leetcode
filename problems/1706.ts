// 1706. Where Will the Ball Fall

type Item = 1 | -1

function findBall(grid: Item[][]): number[] {
  const isStuck = (current: Item, left: Item | undefined, right: Item | undefined) => {
    if (current === 1) {
      return right === -1 || !right
    }
    else {
      return left === 1 || !left
    }
  }

  const result = []

  loop_1:
  for (let col = 0; col < grid[0].length; col++) {
    let currentCol = col

    for (let row = 0; row < grid.length; row++) {
      const current = grid[row][currentCol]

      if (isStuck(current, grid[row][currentCol - 1], grid[row][currentCol + 1])) {
        result.push(-1)
        continue loop_1
      }

      (current === 1) ? currentCol++ : currentCol--
    }

    result.push(currentCol)
  }

  return result
}

findBall([[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]])

export {}