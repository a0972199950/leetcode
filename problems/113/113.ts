// 113. Path Sum II
// 最後練習時間：2026-09-10
// https://leetcode.com/problems/path-sum-ii/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(n * h)
// Space: O(h)
// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   const result: number[][] = []

//   const isLeaf = (node: TreeNode) => {
//     return !node.left && !node.right
//   }

//   const dfs = (node: TreeNode | null, lastSum: number, lastHistory: number[]) => {
//     if (!node) {
//       return
//     }

//     const sum = lastSum + node.val
//     const history = [...lastHistory, node.val]

//     if (sum === targetSum && isLeaf(node)) {
//       result.push(history)
//       return
//     }

//     dfs(node.left, sum, history)
//     dfs(node.right, sum, history)
//   }

//   dfs(root, 0, [])

//   return result
// }

// Time: O(n)
// Space: O(h)
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = []
  const history: number[] = []

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const dfs = (node: TreeNode | null, lastSum: number) => {
    if (!node) {
      return
    }

    const sum = lastSum + node.val
    history.push(node.val)

    if (isLeaf(node) && sum === targetSum) {
      result.push([...history])
    }

    dfs(node.left, sum)
    dfs(node.right, sum)

    history.pop()
  }

  dfs(root, 0)

  return result
}

console.log(pathSum(new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]).root, 22)) // [ [ 5, 4, 11, 2 ], [ 5, 8, 4, 5 ] ]
console.log(pathSum(new BinaryTree([1, 2, 3]).root, 5)) // []
console.log(pathSum(new BinaryTree([1, 2]).root, 0)) // []
