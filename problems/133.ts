// 133. Clone Graph

console.clear()

class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = (val===undefined ? 0 : val)
    this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}

// function cloneGraph(node: Node | null): Node | null {
//   if (!node) {
//     return null
//   }
  
//   let head = null
//   const nodes = []
//   const history = new Set()
//   const queue = [node]

//   while (queue.length) {
//     const node = queue.shift()

//     if (history.has(node.val)) {
//       continue
//     }

//     const copyNode = nodes[node.val] = (nodes[node.val] || new Node(node.val))

//     if (!head) {
//       head = copyNode
//     }

//     for (const neighbor of node.neighbors) {
//       const copyNeighbor = nodes[neighbor.val] = (nodes[neighbor.val] || new Node(neighbor.val))

//       copyNode.neighbors.push(copyNeighbor)
//       queue.push(neighbor)
//     }

//     history.add(node.val)
//   }

//   return head
// }

function cloneGraph(node: Node | null): Node | null {
  let head = null
  const history = new Set()
  const nodes = []

  const dfs = (node: Node | null) => {
    if (!node || history.has(node.val)) {
      return
    }

    history.add(node.val)

    const copyNode = nodes[node.val] = (nodes[node.val] || new Node(node.val))

    if (!head) {
      head = copyNode
    }

    for (const neighbor of node.neighbors) {
      const copyNeighbor = nodes[neighbor.val] = (nodes[neighbor.val] || new Node(neighbor.val))
      copyNode.neighbors.push(copyNeighbor)
      dfs(neighbor)
    }
  }

  dfs(node)

  return head
}

export {}
