// 257. Binary Tree Paths
// 最後練習時間：2026-09-11
// https://leetcode.com/problems/binary-tree-paths/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(n * h)
// Space: O(n)
function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = []
  const paths: number[] = []

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return
    }

    paths.push(node.val)

    if (isLeaf(node)) {
      result.push(paths.join('->'))
    }

    dfs(node.left)
    dfs(node.right)

    paths.pop()
  }

  dfs(root)

  return result
}

console.log(binaryTreePaths(new BinaryTree([1, 2, 3, null, 5]).root)) // [ '1->2->5', '1->3' ]
console.log(binaryTreePaths(new BinaryTree([1]).root)) // [ '1' ]
console.log(binaryTreePaths(new BinaryTree([1, 2, 3, 4, 5]).root)) // [ '1->2->4', '1->2->5', '1->3' ]
console.log(binaryTreePaths(new BinaryTree([]).root)) // []
