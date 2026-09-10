// 104. Maximum Depth of Binary Tree
// 最後練習時間：2026-09-10
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(n)
// Space: O(h)
function maxDepth(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return 0
    }

    return Math.max(dfs(node.left), dfs(node.right)) + 1
  }

  return dfs(root)
}

console.log(maxDepth(new BinaryTree([3, 9, 20, null, null, 15, 7]).root)) // 3
console.log(maxDepth(new BinaryTree([1, null, 2]).root)) // 2
