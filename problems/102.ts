// 102. Binary Tree Level Order Traversal
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function levelOrder(root: TreeNode | null): number[][] {
  let queue: TreeNode[] = [root]
  const ans: number[][] = []

  if (!root) {
    return ans
  }

  while (queue.length) {
    const nextQueue: TreeNode[] = []
    const nextAns = []

    for (const node of queue) {
      nextAns.push(node.val)
      node.left && (nextQueue.push(node.left))
      node.right && (nextQueue.push(node.right))
    }

    queue = nextQueue
    ans.push(nextAns)
  }

  return ans
}

console.log(levelOrder(new BinaryTree([3, 9, 20, null, null, 15, 7]).root))
console.log(levelOrder(new BinaryTree([1]).root))
console.log(levelOrder(new BinaryTree([]).root))

export {}
