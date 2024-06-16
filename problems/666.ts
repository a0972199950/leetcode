// 666. Path Sum IV

export {}
console.clear()

interface Node {
  depth: number
  position: number
}

function pathSum(nums: number[]): number {
  const graph = {}

  for (const num of nums) {
    const [depth, position, val] = String(num)

    if (!graph[depth]) {
      graph[depth] = {}
    }

    graph[depth][position] = Number(val)
  }

  const isNode = ({ depth, position }: Node) => {
    return typeof graph[depth]?.[position] === 'number'
  }

  const isLeaf = ({ depth, position }: Node) => {
    const leftNode = {
      depth: depth + 1,
      position: (position - 1) * 2 + 1
    }

    const rightNode = {
      depth: depth + 1,
      position: (position - 1) * 2 + 2
    }

    return !isNode(leftNode) && !isNode(rightNode)
  }

  let total = 0

  const dfs = (node: Node, sum: number) => {
    if (!isNode(node)) {
      return
    }
    
    const { depth, position } = node
    const val = graph[depth][position]

    if (isLeaf(node)) {
      total += (sum + val)
      return
    }

    const leftNode = {
      depth: depth + 1,
      position: (position - 1) * 2 + 1
    }

    const rightNode = {
      depth: depth + 1,
      position: (position - 1) * 2 + 2
    }

    dfs(leftNode, sum + val)
    dfs(rightNode, sum + val)
  }

  dfs({ depth: 1, position: 1 }, 0)

  return total
}

console.log(pathSum([113, 215, 221]))
console.log(pathSum([113, 221]))


