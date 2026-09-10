// 102. Binary Tree Level Order Traversal
// 最後練習時間：2026-09-10
// https://leetcode.com/problems/binary-tree-level-order-traversal/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// function levelOrder(root: TreeNode | null): number[][] {
//   let queue: TreeNode[] = [root]
//   const ans: number[][] = []

//   if (!root) {
//     return ans
//   }

//   while (queue.length) {
//     const nextQueue: TreeNode[] = []
//     const nextAns = []

//     for (const node of queue) {
//       nextAns.push(node.val)
//       node.left && (nextQueue.push(node.left))
//       node.right && (nextQueue.push(node.right))
//     }

//     queue = nextQueue
//     ans.push(nextAns)
//   }

//   return ans
// }

// Time: O(n)
// Space: O(n)
// function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) {
//     return []
//   }

//   const result = []
//   const queue: ('' | TreeNode)[] = ['', root]
//   let index = 0

//   while (index < queue.length) {
//     const node = queue[index]

//     if (index === queue.length - 1 && node === '') {
//       break
//     }

//     if (node === '') {
//       result.push([])
//       queue.push('')
//     } else {
//       result.at(-1).push(node.val)

//       node.left && (queue.push(node.left))
//       node.right && (queue.push(node.right))
//     }
    
//     index++
//   }

//   return result
// }

// Time: O(n) —— index 往前走，每個節點進出各一次，無 shift
// Space: O(n)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const result: number[][] = []
  const queue: TreeNode[] = [root]
  let index = 0

  while (index < queue.length) {
    const levelSize = queue.length - index
    const level: number[] = []

    for (let i = 1; i <= levelSize; i++) {
      const node = queue[index]
      level.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)

      index++
    }

    result.push(level)
  }

  return result
}

console.log(levelOrder(new BinaryTree([3, 9, 20, null, null, 15, 7]).root)) // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
console.log(levelOrder(new BinaryTree([1]).root)) // [ [ 1 ] ]
console.log(levelOrder(new BinaryTree([]).root)) // []

