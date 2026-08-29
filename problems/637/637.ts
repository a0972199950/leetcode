// 637. Average of Levels in Binary Tree
// 最後練習時間：2024-06-16
// https://leetcode.com/problems/average-of-levels-in-binary-tree/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

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

console.log(averageOfLevels(new BinaryTree([3, 9, 20, null, null, 15, 7]).root)) // [ 3, 14.5, 11 ]
console.log(averageOfLevels(new BinaryTree([3, 9, 20, 15, 7]).root)) // [ 3, 14.5, 11 ]
