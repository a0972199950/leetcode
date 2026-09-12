// 333. Largest BST Subtree
// 最後練習時間：2026-09-12
// https://leetcode.com/problems/largest-bst-subtree/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// function largestBSTSubtree(root: TreeNode | null): number {
//   let max = 0

//   const dfs = (node: TreeNode): { isBST: boolean, nodeCount: number, maxVal: number, minVal: number } => {
//     let isBST = true
//     let nodeCount = 1
//     let minVal = node.val
//     let maxVal = node.val

//     if (node.left) {
//       const { isBST: isLeftBST, nodeCount: leftNodeCount, minVal: leftMinVal, maxVal: leftMaxVal } = dfs(node.left)

//       isBST = isBST && leftMaxVal < node.val && isLeftBST
//       nodeCount += leftNodeCount
//       minVal = Math.min(minVal, leftMinVal)
//       maxVal = Math.max(maxVal, leftMaxVal)
//     }

//     if (node.right) {
//       const { isBST: isRightBST, nodeCount: rightNodeCount, minVal: rightMinVal, maxVal: rightMaxVal } = dfs(node.right)

//       isBST = isBST && rightMinVal > node.val && isRightBST
//       nodeCount += rightNodeCount
//       minVal = Math.min(minVal, rightMinVal)
//       maxVal = Math.max(maxVal, rightMaxVal)
//     }

//     if (isBST) {
//       max = Math.max(max, nodeCount)
//     }

//     return { isBST, nodeCount, minVal, maxVal }
//   }

//   if (!root) {
//     return 0
//   }

//   dfs(root)
//   return max
// }

// Time: O(n)
// Space: O(h)
function largestBSTSubtree(root: TreeNode | null): number {
  let count = 0

  const findBst = (node: TreeNode | null): { isBst: boolean, bstNodeCount: number, min?: number, max?: number } => {
    if (!node) {
      return {
        isBst: true,
        bstNodeCount: 0,
        min: Infinity,
        max: -Infinity
      }
    }

    const left = findBst(node.left)
    const right = findBst(node.right)

    // console.log(node.val, left, right)
    
    if (!left.isBst || !right.isBst || node.val <= left.max || node.val >= right.min) {
      return {
        isBst: false,
        bstNodeCount: 0
      }
    }

    const bstNodeCount = left.bstNodeCount + 1 + right.bstNodeCount
    count = Math.max(count, bstNodeCount)

    // console.log('isBst', node.val, left, right, bstNodeCount)

    return {
      isBst: true,
      bstNodeCount,
      min: Math.min(left.min, node.val),
      max: Math.max(right.max, node.val)
    }
  }

  findBst(root)
  return count
}

console.log(largestBSTSubtree(new BinaryTree([10, 5, 15, 1, 8, null, 7]).root)) // 3
console.log(largestBSTSubtree(new BinaryTree([4, 2, 7, 2, 3, 5, null, 2, null, null, null, null, null, 1]).root)) // 2
console.log(largestBSTSubtree(new BinaryTree([1]).root)) // 1
console.log(largestBSTSubtree(new BinaryTree([]).root)) // 0
console.log(largestBSTSubtree(new BinaryTree([3, 2, 4, null, null, 1]).root)) // 2

