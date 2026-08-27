// 1038. Binary Search Tree to Greater Sum Tree
// 最後練習時間：2026-08-25
// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(n)
// Space: O(h)
function bstToGst(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }

  let sum = 0

  const reverseInOrder = (node: TreeNode) => {
    if (node.right) {
      reverseInOrder(node.right)
    }

    const { val } = node
    node.val += sum
    sum += val

    if (node.left) {
      reverseInOrder(node.left)
    }
  }

  reverseInOrder(root)
  return root
}

bstToGst(new BinaryTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]).root).print() // Expected: TreeNode { val: 30, left: TreeNode { val: 36, left: TreeNode { val: 36, left: null, right: null }, right: TreeNode { val: 35, left: TreeNode { val: 33, left: null, right: null }, right: null } }, right: TreeNode { val: 21, left: TreeNode { val: 26, left: null, right: null }, right: TreeNode { val: 15, left: null, right: TreeNode { val: 8, left: null, right: null } } } }
bstToGst(new BinaryTree([0, null, 1]).root).print() // Expected: TreeNode { val: 1, left: null, right: TreeNode { val: 1, left: null, right: null } }
bstToGst(new BinaryTree([]).root) // Expected: null
bstToGst(new BinaryTree([5, 3, null, 1]).root).print() // Expected: 

