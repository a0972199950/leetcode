// 490. The Maze

export {}
console.clear()

function hasPath(maze: number[][], start: number[], destination: number[]): boolean {
  const queue: Record<number, number>[] = [start]
  const hash = new Set()

  const isWall = (node: Record<number, number>) => {
    return maze[node[0]]?.[node[1]] === 1 || maze[node[0]]?.[node[1]] === undefined
  }

  const goDirection = (direction: 'U' | 'R' | 'D' | 'L', node: Record<number, number>) => {
    let lastNode = null
    let nextNode = node

    const getNextNode = () => {
      lastNode = nextNode

      if (direction === 'U') {
        nextNode = [nextNode[0] - 1, nextNode[1]]
      } else if (direction === 'R') {
        nextNode = [nextNode[0], nextNode[1] + 1]
      } else if (direction === 'D') {
        nextNode = [nextNode[0] + 1, nextNode[1]]
      } else {
        nextNode = [nextNode[0], nextNode[1] - 1]
      }
    }

    getNextNode()
    
    while (!isWall(nextNode)) {
      getNextNode()
    }

    if (!hash.has(JSON.stringify(lastNode))) {
      queue.push(lastNode)
    }
  }

  while (queue.length) {
    const node = queue.shift()

    if (hash.has(JSON.stringify(node))) {
      continue
    }

    if (node[0] === destination[0] && node[1] === destination[1]) {
      return true
    }

    hash.add(JSON.stringify(node))

    // go up
    goDirection('U', node)

    // go right
    goDirection('R', node)

    // go down
    goDirection('D', node)

    // go left
    goDirection('L', node)
  }

  return false
}

console.log(hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [4, 4]))
console.log(hasPath([[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], [0, 4], [3, 2]))
console.log(hasPath([[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], [4, 3], [0, 1]))


