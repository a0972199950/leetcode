// 530. Minimum Absolute Difference in BST
// 最後練習時間：2024-06-16
// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

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

console.log(getMinimumDifference(new BinaryTree([4, 2, 6, 1, 3]).root)) // 1
console.log(getMinimumDifference(new BinaryTree([1, 0, 48, null, null, 12, 49]).root)) // 1
