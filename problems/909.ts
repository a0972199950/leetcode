// 909. Snakes and Ladders

export {}
console.clear()

function snakesAndLadders(board: number[][]): number {
  const goal = board.length * board.length
  const getNextPosition = (position: number) => {
    if (position > goal) {
      return position
    }

    const rows = Math.floor(position / board.length)
    const remain = position % board.length

    let row
    let col

    if (remain === 0) {
      row = board.length - rows
      col = (rows % 2 === 0)
        ? remain
        : board.length - 1
    } else {
      row = board.length - rows - 1
      col = (rows % 2 === 0)
        ? remain - 1
        : board.length - remain
    }

    return board[row][col] === -1 ? position : board[row][col]
  }

  let queue: number[] = [1]

  let moves = 0
  const history = new Set([1])

  while (queue.length) {
    // console.log(queue)
    moves++
    const nextQueue: number[] = []

    for (const position of queue) {
      for (let i = 1; i <= 6; i++) {
        const nextPosition = getNextPosition(position + i)

        if (nextPosition > goal || history.has(nextPosition)) {
          continue
        }

        if (nextPosition === goal) {
          return moves
        }

        nextQueue.push(nextPosition)
        history.add(nextPosition)
      }
    }

    queue = nextQueue
  }

  return -1
}

console.log(snakesAndLadders([[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]]))
console.log(snakesAndLadders([[-1, -1], [-1, 3]]))
