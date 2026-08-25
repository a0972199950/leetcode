// 669. Trim a Binary Search Tree
// 最後練習時間：2026-08-24
// https://leetcode.com/problems/trim-a-binary-search-tree/description/

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

export {}
console.clear()

// Time: O(n + n*h)
// Space: O(n)
// function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
//   if (!root) {
//     return null
//   }

//   const printBfs = (node: TreeNode): number[] => {
//     const result = []

//     const queue = [node]

//     while (queue.length) {
//       const node = queue.shift()

//       // console.log(low, node.val, high)
//       if (low <= node.val && node.val <= high) {
//         result.push(node.val)
//       }

//       if (node.left) {
//         queue.push(node.left)
//       }
//       if (node.right) {
//         queue.push(node.right)
//       }
//     }

//     return result
//   }

//   const bfs: number[] = printBfs(root)

//   // console.log('bfs: ', bfs)

//   const buildBst = (bfs: number[]): TreeNode => {
//     const data = [...bfs]
//     let root = null

//     while (data.length) {
//       const val = data.shift()
//       const target = new TreeNode(val)

//       if (!root) {
//         root = target
//         continue
//       }

//       let current = root
//       while (true) {
//         if (target.val < current.val) {
//           if (!current.left) {
//             current.left = target
//             break
//           }

//           current = current.left
//           continue
//         }

//         if (target.val > current.val) {
//           if (!current.right) {
//             current.right = target
//             break
//           }

//           current = current.right
//           continue
//         }
//       }
//     }

//     return root
//   }

//   return buildBst(bfs)
// }

// Time: O(n)
// Space: O(h)
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null
  }
  
  // 當我問到一個 node 時的情境

  // 1. 該 node < low
  // 那代表該 node 與其左子樹全部排除
  // 回傳右小孩

  // 2. 該 node > high
  // 那代表該 node 與其右子樹全部排除
  // 回傳左小孩
  
  // 3. 該 node 符合範圍
  // 但不代表該 node 的子樹都符合範圍
  // node.left = 遞迴一遍循環(left)
  // node.right = 遞迴一遍循環(right)

  // 那如果 root 就不符合範圍呢?
  // 那會掉到 1/2，還是能回一個 node

  const traverse = (node: TreeNode | null): TreeNode | null => {
    if (node === null) {
      return null
    }

    const { val } = node

    if (val < low) {
      return traverse(node.right)
    }

    if (val > high) {
      return traverse(node.left)
    }

    node.left = traverse(node.left)
    node.right = traverse(node.right)
    return node
  }

  return traverse(root)
}

console.log(trimBST(new BinaryTree([1, 0, 2]).root, 1, 2)) // Expected: TreeNode { val: 1, left: null, right: TreeNode { val: 2, ... } }
console.log(trimBST(new BinaryTree([3, 0, 4, null, 2, null, null, 1]).root, 1, 3)) // Expected: TreeNode { val: 3, left: TreeNode { val: 2, left: TreeNode { val: 1, ... }, right: null }, right: null }

const t3 = new BinaryTree([3, 1, 4, null, 2])
t3.print()
trimBST(t3.root, 3, 4).print()
console.log(trimBST(t3.root, 3, 4))

