// 230. Kth Smallest Element in a BST
// 最後練習時間：2026-08-23
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// function kthSmallest(root: TreeNode | null, k: number): number {
//   if (!root) {
//     return -1
//   }

//   const arr = []
//   const inOrderTreverse = (node: TreeNode) => {
//     if (node.left) {
//       inOrderTreverse(node.left)
//     }

//     arr.push(node.val)

//     if (node.right) {
//       inOrderTreverse(node.right)
//     }
//   }

//   inOrderTreverse(root)

//   return arr[k - 1]
// }

function kthSmallest(root: TreeNode | null, k: number): number {
  const output = []

  const traverse = (node: TreeNode) => {
    if (node.left) {
      traverse(node.left)
    }

    output.push(node.val)

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(root)

  return output[k - 1]
}

console.log(kthSmallest(new BinaryTree([3, 1, 4, null, 2]).root, 1)) // Expected: 1
console.log(kthSmallest(new BinaryTree([5, 3, 6, 2, 4, null, null, 1]).root, 3)) // Expected: 3

