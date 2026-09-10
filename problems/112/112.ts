// 112. Path Sum
// 最後練習時間：2026-09-10
// https://leetcode.com/problems/path-sum/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(n)
// Space: O(h)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const dfs = (node: TreeNode | null, lastSum: number): boolean => {
    if (!node) {
      return false
    }

    const sum = lastSum + node.val
    if (sum === targetSum && isLeaf(node)) {
      return true
    }

    return dfs(node.left, sum) || dfs(node.right, sum)
  }

  return dfs(root, 0)
}

console.log(hasPathSum(new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]).root, 22)) // true
console.log(hasPathSum(new BinaryTree([1, 2, 3]).root, 5)) // false
console.log(hasPathSum(new BinaryTree([]).root, 0)) // false
