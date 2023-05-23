class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
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
