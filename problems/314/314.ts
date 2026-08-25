// 314. Binary Tree Vertical Order Traversal
// 最後練習時間：2024-04-19
// https://leetcode.com/problems/binary-tree-vertical-order-traversal/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

export {}
console.clear()

function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const hash: Record<number, number[]> = {}
  let min = Infinity

  const queue: { node: TreeNode, index: number }[] = [{ node: root, index: 0 }]

  while (queue.length) {
    const { node, index } = queue.shift()
    min = Math.min(min, index)

    if (!hash[index]) {
      hash[index] = []
    }

    hash[index].push(node.val)

    node.left && (queue.push({ node: node.left, index: index - 1 }))
    node.right && (queue.push({ node: node.right, index: index + 1 }))
  }

  const result = []

  Object
    .entries(hash)
    .forEach(([index, val]) => {
      result[Number(index) - min] = val
    })

  return result
}

console.log(verticalOrder(new BinaryTree([3, 9, 20, null, null, 15, 7]).root)) // Expected: [ [ 9 ], [ 3, 15 ], [ 20 ], [ 7 ] ]
console.log(verticalOrder(new BinaryTree([3, 9, 8, 4, 0, 1, 7]).root)) // Expected: [ [ 4 ], [ 9 ], [ 3, 0, 1 ], [ 8 ], [ 7 ] ]
console.log(verticalOrder(new BinaryTree([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]).root)) // Expected: [ [ 4 ], [ 9, 5 ], [ 3, 0, 1 ], [ 8, 2 ], [ 7 ] ]
console.log(verticalOrder(new BinaryTree([]).root)) // Expected: []


