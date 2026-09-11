// 199. Binary Tree Right Side View
// 最後練習時間：2026-09-11
// https://leetcode.com/problems/binary-tree-right-side-view/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// BFS 替換 layer
// Time: O(n)
// Space: O(n)
// function rightSideView(root: TreeNode | null): number[] {
//   if (!root) {
//     return []
//   }

//   const result: number[] = []
//   let layer: TreeNode[] = [root]

//   const bfs = () => {
//     let index = 0
//     let node = null
//     const nextLayer: TreeNode[] = []

//     while (index < layer.length) {
//       node = layer[index]
//       node.left && (nextLayer.push(node.left))
//       node.right && (nextLayer.push(node.right))
//       index++
//     }

//     result.push(node.val)
//     layer = nextLayer
//   }

//   while (layer.length) {
//     bfs()
//   }

//   return result
// }

// BFS 算 index
// Time: O(n)
// Space: O(n)
// function rightSideView(root: TreeNode | null): number[] {
//   if (!root) {
//     return []
//   }

//   const result: number[] = []
//   const queue: TreeNode[] = [root]
//   let index = 0

//   while (index < queue.length) {
//     const layerWidth = queue.length - index
//     let node = null

//     for (let i = 1; i <= layerWidth; i++) {
//       node = queue[index]

//       node.left && (queue.push(node.left))
//       node.right && (queue.push(node.right))

//       index++
//     }

//     result.push(node.val)
//   }

//   return result
// }

// DFS
// Time: O(n)
// Space: O(h)
function rightSideView(root: TreeNode | null): number[] {
  const result : number[] = []

  const dfs = (node: TreeNode | null, depth: number) => {
    if (!node) {
      return
    }

    if (result[depth] === undefined) {
      result[depth] = node.val
    }

    dfs(node.right, depth + 1)
    dfs(node.left, depth + 1)
  }

  dfs(root, 0)
  return result
}

console.log(rightSideView(new BinaryTree([1, 2, 3, null, 5, null, 4]).root)) // [ 1, 3, 4 ]
console.log(rightSideView(new BinaryTree([1, 2, 3, 4, null, null, null, 5]).root)) // [ 1, 3, 4, 5 ]
console.log(rightSideView(new BinaryTree([1, null, 3]).root)) // [ 1, 3 ]
console.log(rightSideView(new BinaryTree([]).root)) // []
