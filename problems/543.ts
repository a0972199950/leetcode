// 543. Diameter of Binary Tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDeepSum = 0

  const inOrderTreverse = (node: TreeNode) => {
    const leftDeep = node.left ? inOrderTreverse(node.left) : 0
    const rightDeep = node.right ? inOrderTreverse(node.right) : 0

    maxDeepSum = Math.max(maxDeepSum, leftDeep + rightDeep)

    return Math.max(leftDeep, rightDeep) + 1
  }

  inOrderTreverse(root)

  return maxDeepSum
}

