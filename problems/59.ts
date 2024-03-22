// 59. Spiral Matrix II
enum Direction {
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  UP = 'UP'
}

type Coor = [number, number]

type Matrix = number[][]

const nextDirectionMap: Record<Direction, Direction> = {
  [Direction.RIGHT]: Direction.DOWN,
  [Direction.DOWN]: Direction.LEFT,
  [Direction.LEFT]: Direction.UP,
  [Direction.UP]: Direction.RIGHT
}

const getMatrixValue = (matrix: Matrix, coor: Coor) => {
  return matrix[coor[0]]?.[coor[1]]
}

const setMatrixValue = (matrix: Matrix, coor: Coor, value: number) => {
  console.log(coor, value)
  if (!Array.isArray(matrix[coor[0]])) {
    matrix[coor[0]] = []
  }

  matrix[coor[0]][coor[1]] = value
}

const isStuck = (matrix: Matrix, coor: Coor, n: number) => {
  return coor.some(val => val < 0)
    || coor.some(val => val >= n)
    || Number.isInteger(getMatrixValue(matrix, coor))
}

const getNextCoor = (coor: Coor, direction: Direction): Coor => {
  switch (direction) {
    case Direction.RIGHT:
      return [coor[0], coor[1] + 1]

    case Direction.DOWN:
      return [coor[0] + 1, coor[1]]

    case Direction.LEFT:
      return [coor[0], coor[1] - 1]

    case Direction.UP:
      return [coor[0] - 1, coor[1]]
  }
}

function generateMatrix(n: number): Matrix {
  let coor: Coor = [0, 0]
  let direction = Direction.RIGHT
  const matrix: Matrix = []

  for (let value = 1; value <= n * n; value++) {
    setMatrixValue(matrix, coor, value)

    if (isStuck(matrix, getNextCoor(coor, direction), n)) {
      direction = nextDirectionMap[direction]
    }

    coor = getNextCoor(coor, direction)
  }

  return matrix
}

console.log(generateMatrix(5))

export {}
