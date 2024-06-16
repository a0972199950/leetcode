// 129. Sum Root to Leaf Numbers
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function sumNumbers(root: TreeNode | null): number {
  let sum = 0

  if (!root) {
    return 0
  }

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const traverse = (node: TreeNode, rootToLast = '') => {
    const rootToCurrent = rootToLast + String(node.val)

    if (isLeaf(node)) {
      sum += parseInt(rootToCurrent)
      return
    }

    node.left && traverse(node.left, rootToCurrent)
    node.right && traverse(node.right, rootToCurrent)
  }

  traverse(root)

  return sum
}

console.log(sumNumbers(new BinaryTree([4, 9, 0, 5, 1]).root))


