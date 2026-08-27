// 333. Largest BST Subtree
// 最後練習時間：2024-04-01
// https://leetcode.com/problems/largest-bst-subtree/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

function largestBSTSubtree(root: TreeNode | null): number {
  let max = 0

  const dfs = (node: TreeNode): { isBST: boolean, nodeCount: number, maxVal: number, minVal: number } => {
    let isBST = true
    let nodeCount = 1
    let minVal = node.val
    let maxVal = node.val

    if (node.left) {
      const { isBST: isLeftBST, nodeCount: leftNodeCount, minVal: leftMinVal, maxVal: leftMaxVal } = dfs(node.left)

      isBST = isBST && leftMaxVal < node.val && isLeftBST
      nodeCount += leftNodeCount
      minVal = Math.min(minVal, leftMinVal)
      maxVal = Math.max(maxVal, leftMaxVal)
    }

    if (node.right) {
      const { isBST: isRightBST, nodeCount: rightNodeCount, minVal: rightMinVal, maxVal: rightMaxVal } = dfs(node.right)

      isBST = isBST && rightMinVal > node.val && isRightBST
      nodeCount += rightNodeCount
      minVal = Math.min(minVal, rightMinVal)
      maxVal = Math.max(maxVal, rightMaxVal)
    }

    if (isBST) {
      max = Math.max(max, nodeCount)
    }

    return { isBST, nodeCount, minVal, maxVal }
  }

  if (!root) {
    return 0
  }

  dfs(root)
  return max
}

console.log(largestBSTSubtree(new BinaryTree([10, 5, 15, 1, 8, null, 7]).root)) // Expected: 3
console.log(largestBSTSubtree(new BinaryTree([4, 2, 7, 2, 3, 5, null, 2, null, null, null, null, null, 1]).root)) // Expected: 2
console.log(largestBSTSubtree(new BinaryTree([1]).root)) // Expected: 1
console.log(largestBSTSubtree(new BinaryTree([]).root)) // Expected: 0
console.log(largestBSTSubtree(new BinaryTree([3, 2, 4, null, null, 1]).root)) // Expected: 2

