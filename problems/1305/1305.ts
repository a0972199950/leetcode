// 1305. All Elements in Two Binary Search Trees
// 最後練習時間：2026-09-12
// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// Time: O(2n)
// Space: O(2n)
function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {

  const buildInOrder = (root: TreeNode | null) => {
    const inOrder: number[] = []
  
    const inOrderTraverse = (node: TreeNode | null) => {
      if (!node) {
        return
      }

      inOrderTraverse(node.left)
      inOrder.push(node.val)
      inOrderTraverse(node.right)
    }

    inOrderTraverse(root)

    return inOrder
  }

  const inOrder1 = buildInOrder(root1)
  const inOrder2 = buildInOrder(root2)

  const result: number[] = []
  let i = 0
  let j = 0

  while (i < inOrder1.length || j < inOrder2.length) {
    const num1 = inOrder1[i] ?? Infinity
    const num2 = inOrder2[j] ?? Infinity

    if (num1 <= num2) {
      result.push(num1)
      i++
    } else {
      result.push(num2)
      j++
    }
  }

  return result
}

console.log(getAllElements(new BinaryTree([2, 1, 4]).root, new BinaryTree([1, 0, 3]).root)) // [ 0, 1, 1, 2, 3, 4 ]
console.log(getAllElements(new BinaryTree([1, null, 8]).root, new BinaryTree([8, 1]).root)) // [ 1, 1, 8, 8 ]
