// 101. Symmetric Tree
// 最後練習時間：2022-11-07
// https://leetcode.com/problems/symmetric-tree/
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

export {}
console.clear()

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false
  }

  const check = (leftSideNode: TreeNode | null, rightSideNode: TreeNode | null) => {
    if (!leftSideNode && !rightSideNode) {
      return true
    }

    return leftSideNode?.val === rightSideNode?.val
      && check(leftSideNode?.left, rightSideNode?.right)
      && check(leftSideNode?.right, rightSideNode?.left)
  }

  return check(root.left, root.right)
}

console.log(isSymmetric(new BinaryTree([1, 2, 2, 3, 4, 4, 3]).root)) // Expected: true
console.log(isSymmetric(new BinaryTree([1, 2, 2, null, 3, null, 3]).root)) // Expected: false

