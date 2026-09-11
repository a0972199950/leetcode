// 103. Binary Tree Zigzag Level Order Traversal
// 最後練習時間：2026-09-11
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//   if (!root) {
//     return []
//   }

//   let direction = 'right'
//   let level = [root]
//   const result = [[root.val]]

//   const switchDirection = () => {
//     direction = direction === 'right' ? 'left' : 'right'
//   }

//   while (level.length) {
//     const nextLevel = []
//     const nextResult = []

//     const push = (node: TreeNode | null) => {
//       if (!node) return

//       nextLevel.push(node)
//       nextResult.push(node.val)
//     }

//     for (let i = level.length - 1; i >= 0; i--) {
//       const node = level[i]

//       if (direction === 'right') {
//         push(node.right)
//         push(node.left)
//       }
//       else {
//         push(node.left)
//         push(node.right)
//       }
//     }

//     nextResult.length && result.push(nextResult)
//     level = nextLevel
//     switchDirection()
//   }

//   console.log(result)
//   return result
// }

// Time: O(n)
// Space: O(n)
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const result: number[][] = []
  let layer: TreeNode[] = [root]
  let isReverse = false

  const bfs = () => {
    const nextResult: number[] = []
    const nextLayer: TreeNode[] = []
    
    for (
      let i = 0, j = layer.length - 1;
      i < layer.length && j >= 0;
      i++, j--
    ) {
      const iNode = layer[i]
      const jNode = layer[j]

      if (!isReverse) {
        nextResult.push(iNode.val)
      } else {
        nextResult.push(jNode.val)
      }

      iNode.left && (nextLayer.push(iNode.left))
      iNode.right && (nextLayer.push(iNode.right))
    }

    result.push(nextResult)
    layer = nextLayer
    isReverse = !isReverse
  }

  while (layer.length) {
    bfs()
  }

  return result
}

console.log(zigzagLevelOrder(new BinaryTree([3, 9, 20, null, null, 15, 7]).root)) // [[3],[20,9],[15,7]]
console.log(zigzagLevelOrder(new BinaryTree([1]).root)) // [[1]]
console.log(zigzagLevelOrder(new BinaryTree([]).root)) // []

