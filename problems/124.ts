// 124. Binary Tree Maximum Path Sum
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

const isLeaf = (node: TreeNode) => {
  return !node.left && !node.right
}

function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity

  if (!root) {
    return 0
  }

  const treverse = (node: TreeNode): number => { // Return value is the max sum value of SINGLE root-to-leaf path    
    if (isLeaf(node)) {
      max = Math.max(max, node.val)
      return node.val
    }
    
    const maxLeftPathSum = node.left ? treverse(node.left) : 0
    const maxRightPathSum = node.right ? treverse(node.right) : 0

    const maxPathSum = Math.max(
      node.val,
      node.val + maxLeftPathSum,
      node.val + maxRightPathSum,
      maxLeftPathSum + node.val + maxRightPathSum
    )

    max = Math.max(max, maxPathSum)

    return Math.max(
      node.val,
      node.val + maxLeftPathSum,
      node.val + maxRightPathSum
    )
  }

  treverse(root)

  return max
}

console.log(maxPathSum(new BinaryTree([1, 2, 3]).root)) // 6
console.log(maxPathSum(new BinaryTree([-10, 9, 20, null, null, 15, 7]).root)) // 42
console.log(maxPathSum(new BinaryTree([-3]).root)) // -3
console.log(maxPathSum(new BinaryTree([1, 2]).root)) // 3
console.log(maxPathSum(new BinaryTree([2, -1]).root)) // 2
console.log(maxPathSum(new BinaryTree([9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6]).root)) // 16


