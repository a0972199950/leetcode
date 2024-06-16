// 530. Minimum Absolute Difference in BST
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function getMinimumDifference(root: TreeNode | null): number {
  const values = []
  let minDiff = Infinity

  const inorder = (node: TreeNode) => {
    node.left && (inorder(node.left))
    values.push(node.val)

    if (values.length > 1) {
      minDiff = Math.min(minDiff, Math.abs(values.at(-1) - values.at(-2)))
    }
    node.right && (inorder(node.right))
  }

  inorder(root)

  return minDiff
}

console.log(getMinimumDifference(new BinaryTree([4, 2, 6, 1, 3]).root))
console.log(getMinimumDifference(new BinaryTree([1, 0, 48, null, null, 12, 49]).root))
