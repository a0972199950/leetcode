// 543. Diameter of Binary Tree
// 最後練習時間：2026-09-10
// https://leetcode.com/problems/diameter-of-binary-tree/

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// function diameterOfBinaryTree(root: TreeNode | null): number {
//   let maxDeepSum = 0

//   const inOrderTreverse = (node: TreeNode) => {
//     const leftDeep = node.left ? inOrderTreverse(node.left) : 0
//     const rightDeep = node.right ? inOrderTreverse(node.right) : 0

//     maxDeepSum = Math.max(maxDeepSum, leftDeep + rightDeep)

//     return Math.max(leftDeep, rightDeep) + 1
//   }

//   inOrderTreverse(root)

//   return maxDeepSum
// }

// Time: O(n)
// Space: O(h)
function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0
    }

    const left = dfs(node.left)
    const right = dfs(node.right)

    max = Math.max(max, left + right)
    
    return Math.max(left, right) + 1
  }

  dfs(root)

  return max
}

console.log(diameterOfBinaryTree(new BinaryTree([1, 2, 3, 4, 5]).root)) // 3
console.log(diameterOfBinaryTree(new BinaryTree([1, 2]).root)) // 1
