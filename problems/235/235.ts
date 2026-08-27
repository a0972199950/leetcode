// 235. Lowest Common Ancestor of a Binary Search Tree
// 最後練習時間：2026-08-25
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

import { BinaryTree, TreeNode } from '~/data-structure/BinaryTree'

console.clear()

// Time: O(2 * h)
// Space: O(h)
// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//   // 透過 BST 的特定，不需要完整 DFS，可以直接找到對應的 node
//   // 先找到第一個 node, 並且紀錄他的所有祖先，做成一個 set
//   // 找第二個 node 時，在紀錄祖先之前，先檢查該祖先是否存在於第一個 node，有了才紀錄，有新的就更新，永遠保持最新的
//   // 最後該紀錄就是答案

//   if (!root) {
//     return null
//   }

//   const findParents = (node: TreeNode) => {
//     const parents = new Set<TreeNode>()

//     let current = root

//     while (true) {
//       parents.add(current)

//       if (!current || current.val === node.val) {
//         break
//       }

//       if (node.val < current.val) {
//         current = current.left
//         continue
//       }

//       if (node.val > current.val) {
//         current = current.right
//         continue
//       }
//     }

//     return parents
//   }

//   const findLowestParent = (node: TreeNode, parents: Set<TreeNode>) => {
//     let result = null
//     let current = root

//     while (true) {
//       if (parents.has(current)) {
//         result = current
//       }

//       if (!current || current.val === node.val) {
//         break
//       }

//       if (node.val < current.val) {
//         current = current.left
//         continue
//       }

//       if (node.val > current.val) {
//         current = current.right
//         continue
//       }
//     }

//     return result
//   }

//   return findLowestParent(q, findParents(p))
// }

// Time: O(h)
// Space: O(1)
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  
  let current = root

  while (true) {
    if (current === null) {
      return null
    }

    // p, q 都在左邊, 代表 current 是共同祖先，但可能不是最近的
    if (p.val < current.val && q.val < current.val) {
      current = current.left
      continue
    }

    // p, q 都在右邊
    if (p.val > current.val && q.val > current.val) {
      current = current.right
      continue
    }

    return current
  }
}

// p, q 在根的兩側 → 根是 LCA
console.log(lowestCommonAncestor(
  new BinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root,
  new TreeNode(2),
  new TreeNode(8)).val
) // Expected: 6

// p 是 q 的祖先 → p 本身是 LCA
console.log(lowestCommonAncestor(
  new BinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root,
  new TreeNode(2),
  new TreeNode(4)).val
) // Expected: 2

// p, q 都在同一子樹的深處
console.log(lowestCommonAncestor(
  new BinaryTree([10, 5, 15, 3, 7, null, 18]).root,
  new TreeNode(3),
  new TreeNode(7)).val
) // Expected: 5

// p, q 跨越根節點
console.log(lowestCommonAncestor(
  new BinaryTree([8, 4, 12, 2, 6, 10, 14]).root,
  new TreeNode(2),
  new TreeNode(10)).val
) // Expected: 8

// 小樹：p 是根，q 是葉
console.log(lowestCommonAncestor(
  new BinaryTree([2, 1]).root,
  new TreeNode(2),
  new TreeNode(1)).val
) // Expected: 2

console.log(lowestCommonAncestor(
  new BinaryTree([]).root,
  new TreeNode(2),
  new TreeNode(1))
) // Expected: null

console.log(lowestCommonAncestor(
  new BinaryTree([8, 4, 12, 2, 6, 10, 14]).root,
  new TreeNode(40),
  new TreeNode(50))
) // Expected: null
