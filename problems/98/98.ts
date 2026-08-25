// 98. Validate Binary Search Tree
// 最後練習時間：2026-08-23
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

export {}
console.clear()

// Time: O(n)
// Space: O(n)
// interface Result {
//   min: number
//   max: number
// }

// function isValidBST(root: TreeNode | null): boolean {
//   let isValid = true

//   const traverse = (node: TreeNode | null): Result => {
//     if (!isValid) {
//       return
//     }

//     if (!node) {
//       return { min: Infinity, max: -Infinity }
//     }

//     const leftResult = traverse(node.left)
//     const rightResult = traverse(node.right)

//     if (!isValid) {
//       return
//     }

//     const result = leftResult.max < node.val && node.val < rightResult.min
//     // console.log(node.val, result, leftResult.max, rightResult.min)
//     isValid = result
//     return {
//       min: Math.min(node.val, leftResult.min),
//       max: Math.max(node.val, rightResult.max)
//     }
//   }

//   traverse(root)
//   return isValid
// }

// 往下傳邊界，每個 node 都應該處於 parent 給定的 [min, max] 範圍內
// Time: O(n)
// Space: O(n)
// function isValidBST(root: TreeNode | null): boolean {

//   const traverse = (node: TreeNode | null, min: number, max: number): boolean => {
//     if (!node) {
//       return true
//     }

//     // console.log(min, node.val, max)
//     if (node.val <= min || node.val >= max) {
//       return false
//     }

//     return traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
//   }

//   return traverse(root, -Infinity, Infinity)
// }

// 中序遍歷，輸出必為嚴格遞增
// Time: O(n)
// Space: O(n)
function isValidBST(root: TreeNode | null): boolean {
  let last = -Infinity
  let isValid = true

  const traverse = (node: TreeNode) => {
    if (!isValid) {
      return
    }

    if (node.left) {
      traverse(node.left)
    }

    const { val } = node

    if (val <= last) {
      isValid = false
      return
    }

    last = val

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(root)
  // console.log(output)
  return isValid
}

console.log(isValidBST(new BinaryTree([2, 1, 3]).root)) // Expected: true
console.log(isValidBST(new BinaryTree([5, 1, 4, null, null, 3, 6]).root)) // Expected: false
console.log(isValidBST(new BinaryTree([0]).root)) // Expected: true

new BinaryTree([2, 1, null, 1, null, null, null]).print()
console.log(isValidBST(new BinaryTree([2, 1, null, 1, null, null, null]).root)) // Expected: false

console.log(isValidBST(new BinaryTree([5, 14, null, 1]).root)) // Expected: false

// new BinaryTree([5, 4, 6, null, null, 3, 7]).print()
console.log(isValidBST(new BinaryTree([5, 4, 6, null, null, 3, 7]).root)) // Expected: false

