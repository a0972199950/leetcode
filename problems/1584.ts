// 1584. Min Cost to Connect All Points

console.clear()

interface Edge {
  index: number
  cost: number
}

class MinHeap {
  data: Edge[] = []

  private _getVal (index: number) {
    return this.data[index]?.cost
  }

  insert (node: Edge) {
    this.data.push(node)

    let current = this.data.length - 1

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)
      
      if (this._getVal(parent) > this._getVal(current)) {
        [this.data[current], this.data[parent]] = [this.data[parent], this.data[current]]
      }

      current = parent
    }
  }

  extract (): Edge {
    const node = this.data.shift()

    if (this.data.length > 1) {
      this.data.unshift(this.data.pop())

      let current = 0

      while (current < this.data.length) {
        const left = current * 2 + 1
        const right = current * 2 + 2
        let swap = current

        if (this._getVal(left) < this._getVal(swap)) {
          swap = left
        }

        if (this._getVal(right) < this._getVal(swap)) {
          swap = right
        }

        if (swap === current) {
          break
        }

        [this.data[current], this.data[swap]] = [this.data[swap], this.data[current]]
        current = swap
      }
    }

    return node
  }
}

// function minCostConnectPoints(points: number[][]): number {
//   const minHeap = new MinHeap()
//   let costs = 0
//   const history = new Set<number>()

//   minHeap.insert({ index: 0, cost: 0 })

//   while (history.size < points.length) {
//     let currentEdge: Edge

//     do {
//       currentEdge = minHeap.extract()
//     } while (history.has(currentEdge.index))

//     history.add(currentEdge.index)
//     costs += currentEdge.cost

//     for (let i = 0; i < points.length; i++) {
//       if (history.has(i)) {
//         continue
//       }

//       const currentPoint = points[currentEdge.index]
//       const point = points[i]
//       const cost = Math.abs(point[0] - currentPoint[0]) + Math.abs(point[1] - currentPoint[1])

//       minHeap.insert({ index: i, cost })
//     }
//   }

//   return costs
// }

function minCostConnectPoints(points: number[][]): number {
  const graph: Record<number, Edge[]> = {}

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])

      if (!graph[i]) { graph[i] = [] }
      if (!graph[j]) { graph[j] = [] }

      graph[i].push({ index: j, cost })
      graph[j].push({ index: i, cost })
    }
  }

  let costs = 0
  const history = new Set<number>()
  const minHeap = new MinHeap()

  minHeap.insert({ index: 0, cost: 0 })

  while (history.size < points.length) {
    const edge = minHeap.extract()

    if (history.has(edge.index)) {
      continue
    }
    history.add(edge.index)

    costs += edge.cost

    for (const neiEdge of (graph[edge.index] || [])) {
      minHeap.insert(neiEdge)
    }
  }

  return costs
}

// console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))
// console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]))
// console.log(minCostConnectPoints([[0, 0], [1, 1], [1, 0], [-1, 1]]))
console.log(minCostConnectPoints([[0, 0]]))


