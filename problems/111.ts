// 111. Minimum Depth of Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function minDepth(root: TreeNode | null): number {
  let min = Infinity

  if (!root) {
    return 0
  }

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const findDepth = (node: TreeNode, lastDepth: number) => {
    const depth = lastDepth + 1

    if (isLeaf(node)) {
      min = Math.min(min, depth)
      return
    }

    node.left && findDepth(node.left, depth)
    node.right && findDepth(node.right, depth)
  }

  findDepth(root, 0)

  return min
}

console.log(minDepth(new BinaryTree([2, null, 3, null, 4, null, 5, null, 6]).root))

export {}
