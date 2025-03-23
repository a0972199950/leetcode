console.clear()

const escape = (board) => {
  for (let i = 0; i < board.length; i++) {
    const line = board[i]
    board[i] = line.split('')
  }

  const isDragen = (row, col) => {
    return board[row][col] === 'N'
      || board[row][col] === 'S'
      || board[row][col] === 'E'
      || board[row][col] === 'W'
  }

  const isFire = (row, col) => {
    return board[row][col] === -1
  }

  const isHistory = (row, col) => {
    return board[row][col] === 0
  }

  const isOutOfBounds = (row, col) => {
    return row < 0 || row >= board.length || col < 0 || col >= board[row].length
  }

  const canMove = (row, col) => {
    return !isOutOfBounds(row, col) && !isDragen(row, col) && !isFire(row, col) && !isHistory(row, col)
  }

  const setFire = (row, col) => {
    const direction = board[row][col]

    if (direction === 'N') {
      for (let i = row - 1; i >= 0; i--) {
        if (isDragen(i, col)) {
          break
        }
        board[i][col] = -1
      }
    }

    if (direction === 'S') {
      for (let i = row + 1; i < board.length; i++) {
        if (isDragen(i, col)) {
          break
        }
        board[i][col] = -1
      }
    }

    if (direction === 'W') {
      for (let i = col - 1; i >= 0; i--) {
        if (isDragen(row, i)) {
          break
        }
        board[row][i] = -1
      }
    }

    if (direction === 'E') {
      for (let i = col + 1; i < board[row].length; i++) {
        if (isDragen(row, i)) {
          break
        }
        board[row][i] = -1
      }
    }
  }

  const setHistory = (row, col) => {
    board[row][col] = 0
  }

  const resetHistory = (row, col) => {
    board[row][col] = '-'
  }

  // Set fires
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (isDragen(row, col)) {
        setFire(row, col)
      }
    }
  }

  const dfs = (row, col) => {
    if (!canMove(row, col)) {
      return false
    }

    if (row === board.length - 1 && col === board[row].length - 1) {
      return true
    }

    setHistory(row, col)

    let next = [row, col]
    let canEscape = false

    // Up
    next = [row - 1, col]
    canEscape = dfs(next[0], next[1])
    if (canEscape) {
      return true
    }

    // Down
    next = [row + 1, col]
    canEscape = dfs(next[0], next[1])
    if (canEscape) {
      return true
    }

    // Left
    next = [row, col - 1]
    canEscape = dfs(next[0], next[1])
    if (canEscape) {
      return true
    }

    // Right
    next = [row, col + 1]
    canEscape = dfs(next[0], next[1])
    if (canEscape) {
      return true
    }

    resetHistory(row, col)
    return false
  }

  return dfs(0, 0)
}

// console.log(escape([
//   '...', 
//   '.W.', 
//   'N..'
// ]))

// console.log(escape([
//   '...', 
//   '.W.', 
//   '...'
// ]))

// console.log(escape([
//   '......E', 
//   '..S....', 
//   '.E.W...', 
//   '..N....'
// ]))

console.log(escape([
  '...', 
  '...'
]))

export default ''
