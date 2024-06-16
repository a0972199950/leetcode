// 289. Game of Life

export {}
console.clear()

function gameOfLife(board: number[][]): void {
  const getAround = (row: number, col: number) => {
    let lives = 0

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        const val = board[r]?.[c]

        if (
          (r === row && c === col)
          || typeof val !== 'number'
        ) {
          continue
        }

        if (val === 1) {
          lives++
        }
      }
    }

    return lives
  }

  const switchs = new Set<string>()

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const val = board[row][col]
      const lives = getAround(row, col)

      if (
        (val === 1 && lives < 2)
        ||  (val === 1 && lives > 3)
        || (val === 0 && lives === 3)
      ) {
        switchs.add(`[${row},${col}]`)
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const hash = `[${row},${col}]`
      const val = board[row][col]

      if (!switchs.has(hash)) {
        continue
      }

      if (val === 1) {
        board[row][col] = 0
      } else {
        board[row][col] = 1
      }
    }
  }

  console.log(board)
}

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])
gameOfLife([[1, 1], [1, 0]])


