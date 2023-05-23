// 417. Pacific Atlantic Water Flow

console.clear()

// enum Direction {
//   Top = 'Top',
//   Right = 'Right',
//   Down = 'Down',
//   Left = 'Left',
// }

// enum HistoryType {
//   Both = 'Both',
//   None = 'None',
//   PacificOcean = 'PacificOcean',
//   AtlanticOcean = 'AtlanticOcean'
// }

// type Coor = [number, number]

// function pacificAtlantic(heights: number[][]): number[][] {
//   const canFlowTo = (coor: Coor, direction: Direction) => {
//     const [row, col] = coor
//     const height = heights[row]?.[col]

//     if (height === undefined) {
//       return false
//     }

//     switch (direction) {
//       case Direction.Top: {
//         return (heights[row - 1]?.[col] ?? 0) <= height
//       }

//       case Direction.Right: {
//         return (heights[row]?.[col + 1] ?? 0) <= height
//       }

//       case Direction.Down: {
//         return (heights[row + 1]?.[col] ?? 0) <= height
//       }

//       case Direction.Left: {
//         return (heights[row]?.[col - 1] ?? 0) <= height
//       }
//     }
//   }

//   const getPossibleFlowCoors = (coor: Coor, checked: Set<string>) => {
//     const [row, col] = coor
//     const coors = []

//     const possibleCoors: Record<Direction, Coor> = {
//       Top: [row - 1, col],
//       Right: [row, col + 1],
//       Down: [row + 1, col],
//       Left: [row, col - 1]
//     }

//     Object.entries(possibleCoors).forEach(([direction, possibleCoor]) => {
//       if (!checked.has(possibleCoor.join(',')) && canFlowTo(coor, Direction[direction])) {
//         coors.push(possibleCoor)
//         checked.add(possibleCoor.join(','))
//       }
//     })

//     return coors
//   }

//   const isPacificOcean = (coor: Coor) => {
//     return coor[0] < 0 || coor[1] < 0
//   }

//   const isAtlanticOcean = (coor: Coor) => {
//     return coor[0] >= heights.length || coor[1] >= heights[0].length
//   }

//   let count = 0

//   class History {
//     Both: Coor[] = []
//     None: Coor[] = []
//     PacificOcean: Coor[] = []
//     AtlanticOcean: Coor[] = []

//     public includes (coor: Coor, key: HistoryType) {
//       return this[key].some(item => item[0] === coor[0] && item[1] === coor[1])
//     }

//     public add (coor: Coor, status: { canFlowToPacificOcean: boolean, canFlowToAtlanticOcean: boolean }) {
//       const { canFlowToPacificOcean, canFlowToAtlanticOcean } = status

//       if (canFlowToPacificOcean && canFlowToAtlanticOcean) {
//         this.Both.push(coor)
//       }
//       else if (!canFlowToPacificOcean && !canFlowToAtlanticOcean) {
//         this.None.push(coor)
//       }
//       else if (canFlowToPacificOcean && !canFlowToAtlanticOcean) {
//         this.PacificOcean.push(coor)
//       }
//       else {
//         this.AtlanticOcean.push(coor)
//       }
//     }
//   }

//   const history = new History()

//   for (let row = 0; row < heights.length; row++) {
//     for (let col = 0; col < heights[row].length; col++) {
//       const currentCoor: [number, number] = [row, col]
//       const queue: Coor[] = [currentCoor]

//       let canFlowToPacificOcean = false
//       let canFlowToAtlanticOcean = false

//       const checked = new Set<string>().add(currentCoor.join(','))

//       while (queue.length && (!canFlowToPacificOcean || !canFlowToAtlanticOcean)) {
//         count++
//         const head = queue.shift()

//         if (history.includes(head, HistoryType.None)) {
//           continue
//         }

//         if (history.includes(head, HistoryType.PacificOcean)) {
//           canFlowToPacificOcean = true
//           continue
//         }

//         if (history.includes(head, HistoryType.AtlanticOcean)) {
//           canFlowToAtlanticOcean = true
//           continue
//         }

//         if (history.includes(head, HistoryType.Both)) {
//           canFlowToPacificOcean = true
//           canFlowToAtlanticOcean = true
//           continue
//         }

//         if (isPacificOcean(head)) {
//           canFlowToPacificOcean = true
//           continue
//         }

//         if (isAtlanticOcean(head)) {
//           canFlowToAtlanticOcean = true
//           continue
//         }

//         queue.push(...getPossibleFlowCoors(head, checked))
//       }

//       history.add(currentCoor, { canFlowToPacificOcean, canFlowToAtlanticOcean })
//     }
//   }

//   console.log('history.Both: ', history.Both, 'count: ', count)

//   return history.Both
// }

type Coor = [number, number]

function pacificAtlantic(heights: number[][]): number[][] {
  const canFlowTo = {
    PO: new Set<string>(),
    AO: new Set<string>()
  }

  const resultSet = new Set<string>()
  const result = []

  const reverseCheck = (coor: Coor, ocean: 'PO' | 'AO') => {
    const queue = [coor]

    while (queue.length) {
      const [row, col] = queue.shift()
      if (resultSet.has(`${row},${col}`)) {
        continue
      }

      const height = heights[row][col]

      canFlowTo[ocean].add(`${row},${col}`)

      const anotherOcean = ocean === 'PO' ? 'AO' : 'PO'
      if (canFlowTo[anotherOcean].has(`${row},${col}`)) {
        if (!resultSet.has(`${row},${col}`)) {
          resultSet.add(`${row},${col}`)
          result.push([row, col])
        }
      }

      const adjacents: [number, number][] = [
        [row - 1, col],
        [row, col + 1],
        [row + 1, col],
        [row, col - 1]
      ]

      adjacents.forEach(adjacent => {
        if (
          heights[adjacent[0]]?.[adjacent[1]] >= height
          && !canFlowTo[ocean].has(`${adjacent[0]},${adjacent[1]}`)
        ) {
          queue.push(adjacent)
        }
      })
    }
  }

  for (let row = 0; row < heights.length; row++) {
    for (let col = 0; col < heights[0].length; col++) {
      if (row === 0 || col === 0) {
        reverseCheck([row, col], 'PO')
      }

      if (row === heights.length - 1 || col === heights[0].length - 1) {
        reverseCheck([row, col], 'AO')
      }
    }
  }

  console.log(canFlowTo.PO)
  console.log(canFlowTo.AO)
  console.log(resultSet)

  return result
}

// console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]))
// console.log(pacificAtlantic([[1]]))
console.log(pacificAtlantic([[2, 1], [1, 2]]))

export {}
