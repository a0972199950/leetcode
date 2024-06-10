// 130. Surrounded Regions

console.clear()

// function solve(board: string[][]): void {
//   const history = new Set()
//   const shouldFlips = []

//   const findIsland = (row: number, col: number) => {
//     const island = []
//     let canFlip = true

//     const dfs = (row: number, col: number) => {
//       if (!board[row]?.[col]) {
//         canFlip = false
//         return
//       }

//       if (history.has(`[${row},${col}]`) || board[row][col] === 'X') {
//         return
//       }

//       history.add(`[${row},${col}]`)

//       island.push([row, col])

//       dfs(row + 1, col)
//       dfs(row - 1, col)
//       dfs(row, col + 1)
//       dfs(row, col - 1)
//     }

//     dfs(row, col)

//     if (canFlip) {
//       shouldFlips.push(...island)
//     }
//   }

//   for (let row = 0; row < board.length; row++) {
//     for (let col = 0; col < board[0].length; col++) {
//       if (board[row][col] === 'O' && !history.has(`[${row},${col}]`)) {
//         findIsland(row, col)
//       }
//     }
//   }

//   for (const shouldFlip of shouldFlips) {
//     board[shouldFlip[0]][shouldFlip[1]] = 'X'
//   }

//   console.log(board)
// }

function solve(board: string[][]): void {
  const dfs = (row: number, col: number) => {
    if (!board[row]?.[col] || board[row][col] !== 'O') {
      return
    }

    board[row][col] = 'T'

    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }

  const rl = board.length
  const cl = board[0].length

  let row = 0
  let col = 0

  do {
    if (board[row][col] === 'O') {
      dfs(row, col)
    }

    if (row === 0 && col < cl - 1) {
      col++
    }
    else if (row < rl - 1 && col === cl - 1) {
      row++
    }
    else if (row === rl - 1 && col > 0) {
      col--
    }
    else if (row > 0 && col === 0) {
      row--
    }

  } while (row !== 0 || col !== 0)

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X'
      } else if (board[row][col] === 'T') {
        board[row][col] = 'O'
      }
    }
  }

  console.log(board)
}

solve([['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']])


