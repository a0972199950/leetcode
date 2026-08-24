class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  print (): void {
    printTree(this)
  }
}

function printTree (root: TreeNode | null): void {
  if (!root) {
    console.log('(empty tree)')
    return
  }

  const positions = new Map<TreeNode, { x: number, y: number }>()
  let x = 0
  let maxDepth = 0

  const assign = (node: TreeNode | null, depth: number) => {
    if (!node) return
    assign(node.left, depth + 1)
    positions.set(node, { x: x++, y: depth })
    maxDepth = Math.max(maxDepth, depth)
    assign(node.right, depth + 1)
  }
  assign(root, 0)

  const nodeCount = x
  const maxLabelWidth = Math.max(
    ...Array.from(positions.keys()).map(node => String(node.val).length)
  )
  const cellWidth = maxLabelWidth + 2

  const rows: string[][] = []
  for (let i = 0; i <= maxDepth * 2; i++) {
    rows.push(new Array(nodeCount * cellWidth).fill(' '))
  }

  const setChar = (row: number, col: number, ch: string) => {
    if (row >= 0 && row < rows.length && col >= 0 && col < rows[row].length) {
      rows[row][col] = ch
    }
  }
  const setText = (row: number, col: number, text: string) => {
    for (let i = 0; i < text.length; i++) {
      setChar(row, col + i, text[i])
    }
  }

  for (const [node, pos] of positions) {
    const label = String(node.val)
    const colCenter = pos.x * cellWidth + Math.floor(cellWidth / 2)
    const textRow = pos.y * 2
    const connectRow = textRow + 1

    setText(textRow, colCenter - Math.floor(label.length / 2), label)

    const leftPos = node.left && positions.get(node.left)
    const rightPos = node.right && positions.get(node.right)
    const leftCenter = leftPos ? leftPos.x * cellWidth + Math.floor(cellWidth / 2) : colCenter
    const rightCenter = rightPos ? rightPos.x * cellWidth + Math.floor(cellWidth / 2) : colCenter

    if (leftPos || rightPos) {
      for (let c = leftCenter + 1; c < rightCenter; c++) {
        setChar(connectRow, c, '_')
      }
    }
    if (leftPos) {
      setChar(connectRow, leftCenter, '/')
    }
    if (rightPos) {
      setChar(connectRow, rightCenter, '\\')
    }
  }

  const output = rows
    .map(row => row.join('').replace(/\s+$/, ''))
    .join('\n')
  console.log(output)
}

class BinaryTree {
  root: TreeNode = null

  constructor (nums: number[]) {
    if (!nums.length) {
      return
    }
    
    const head = new TreeNode(nums[0])

    const queue: TreeNode[] = [head]
    let index = 1

    while (queue.length) {
      const node = queue.shift()
      const leftChild = Number.isInteger(nums[index]) ? new TreeNode(nums[index]) : null
      index++
      const rightChild = Number.isInteger(nums[index]) ? new TreeNode(nums[index]) : null
      index++

      node.left = leftChild
      node.right = rightChild

      if (leftChild) { queue.push(leftChild) }
      if (rightChild) { queue.push(rightChild) }
    }

    this.root = head
  }

  printInOrder () {
    const result = []

    const treverse = (node: TreeNode | null) => {
      if (!node) {
        return
      }

      node.left && treverse(node.left)
      result.push(node.val)
      node.right && treverse(node.right)
    }

    treverse(this.root)
    return result
  }

  print (): void {
    printTree(this.root)
  }
}

class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

class NodeTree {
  root: Node = null

  constructor (nums: number[]) {
    if (!nums.length) {
      return
    }
    
    const head = new Node(nums[0])

    const queue: Node[] = [head]
    let index = 1

    while (queue.length) {
      const node = queue.shift()
      const leftChild = Number.isInteger(nums[index]) ? new Node(nums[index]) : null
      index++
      const rightChild = Number.isInteger(nums[index]) ? new Node(nums[index]) : null
      index++

      node.left = leftChild
      node.right = rightChild

      if (leftChild) { queue.push(leftChild) }
      if (rightChild) { queue.push(rightChild) }
    }

    this.root = head
  }

  printInOrder () {
    const result = []

    const treverse = (node: Node | null) => {
      if (!node) {
        return
      }

      node.left && treverse(node.left)
      result.push(node.val)
      node.right && treverse(node.right)
    }

    treverse(this.root)
    return result
  }
}

export { BinaryTree, TreeNode, Node, NodeTree }
