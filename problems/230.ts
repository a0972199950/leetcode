// 230. Kth Smallest Element in a BST

import { BinaryTree } from '../data-structure/BinaryTree'

console.clear()

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return -1
  }

  const arr = []
  const inOrderTreverse = (node: TreeNode) => {
    if (node.left) {
      inOrderTreverse(node.left)
    }

    arr.push(node.val)

    if (node.right) {
      inOrderTreverse(node.right)
    }
  }

  inOrderTreverse(root)

  return arr[k - 1]
}

console.log(kthSmallest(new BinaryTree([3, 1, 4, null, 2]).data, 1))
console.log(kthSmallest(new BinaryTree([5, 3, 6, 2, 4, null, null, 1]).data, 3))

export {}
