// 54. Spiral Matrix

enum Direction {
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  UP = 'UP'
}

type Coor = [number, number]

const getNextCoor = (coor: Coor, direction: Direction | null): Coor => {
  const result: Coor = [...coor]

  if (direction === Direction.RIGHT) {
    result[1]++
  }
  else if (direction === Direction.DOWN) {
    result[0]++
  }
  else if (direction === Direction.LEFT) {
    result[1]--
  }
  else if (direction === Direction.UP) {
    result[0]--
  } else {
    console.error('Wrong direction: ', direction)
  }

  return result
}

const getMatrixVal = (matrix: (number | null)[][], coor: Coor) => {
  return matrix[coor[0]]?.[coor[1]]
}

const possibleNextDirection: Record<Direction, [Direction, Direction]> = {
  [Direction.RIGHT]: [Direction.RIGHT, Direction.DOWN],
  [Direction.DOWN]: [Direction.DOWN, Direction.LEFT],
  [Direction.LEFT]: [Direction.LEFT, Direction.UP],
  [Direction.UP]: [Direction.UP, Direction.RIGHT]
}

function spiralOrder(matrix: (number | null)[][]): number[] {
  let lastDirection: Direction = Direction.RIGHT
  let nextDirection: Direction | null = null
  let currentCoor: Coor = [0, 0]

  const result: number[] = []

  while (true) {
    result.push(getMatrixVal(matrix, currentCoor) as any)

    const possibleNextDirections: Direction[] = possibleNextDirection[lastDirection]
    for (const direction of possibleNextDirections) {
      if (Number.isInteger(getMatrixVal(matrix, getNextCoor(currentCoor, direction)))) {
        nextDirection = direction
        break
      }
    }

    if (nextDirection) {
      matrix[currentCoor[0]][currentCoor[1]] = null
      currentCoor = getNextCoor(currentCoor, nextDirection)
      lastDirection = nextDirection
      nextDirection = null
    } else {
      return result
    }
  }
}

console.log(spiralOrder([[2, 5], [8, 4], [0, -1]]))



