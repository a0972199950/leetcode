// 110. Balanced Binary Tree
import { BinaryTree, TreeNode } from '../data-structure/BinaryTree'

export {}
console.clear()

function isBalanced(root: TreeNode | null): boolean {
  let result = true

  const getHeight = (node: TreeNode | null) => {
    if (!result) {
      return 0
    }

    if (!node) {
      return 0
    }

    const leftHeight = getHeight(node.left)
    const rightHeight = getHeight(node.right)

    const balance = Math.abs(leftHeight - rightHeight)

    if (balance > 1) {
      result = false
    }

    return Math.max(leftHeight, rightHeight) + 1
  }

  getHeight(root)
  return result
}

console.log(isBalanced(new BinaryTree([3, 9, 20, null, null, 15, 7]).data))
console.log(isBalanced(new BinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]).data))


