// 637. Average of Levels in Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) {
    return []
  }

  const res = []
  let queue = [root]

  while (queue.length) {
    const nextQueue = []
    let sum = 0

    for (const node of queue) {
      sum += node.val
      node.left && (nextQueue.push(node.left))
      node.right && (nextQueue.push(node.right))
    }

    res.push(sum / queue.length)
    queue = nextQueue
  }

  return res
}

console.log(averageOfLevels(new BinaryTree([3, 9, 20, null, null, 15, 7]).root))
console.log(averageOfLevels(new BinaryTree([3, 9, 20, 15, 7]).root))
