// bst-kth-largest. Kth Largest Element in a BST
// 自訂題目（非 LeetCode 原題），出處：BST 進階練習

// ---
// Part 1：找出 BST 中第 2 大的元素
//
// 給定一個二元搜尋樹（BST）的 root，回傳樹中第 2 大的元素值。
// 範例：
//   輸入 [5, 3, 6, 2, 4, null, null, 1] （對應下方 BinaryTree 建構規則）
//   BST 結構為：
//         5
//        / \
//       3   6
//      / \
//     2   4
//    /
//   1
//   由大到小排序為 6, 5, 4, 3, 2, 1，第 2 大為 5
//
// 提示：你在 230 題已經用「中序遍歷（in-order）+ 陣列索引」解過 Kth Smallest，
// 這題請先試著只用「找第 2 大」這個限定情境思考，不用急著想通用解法。

// ---
// Part 2：泛化成「找出第 N 大元素」
//
// 承上題，將函式泛化為可傳入任意 k，回傳 BST 中第 k 大的元素值。
// 範例：
//   kthLargest(root, 1) // 6（最大值）
//   kthLargest(root, 3) // 4
//
// 思考方向：
// - Part 1 的解法能不能直接把「2」換成「k」就泛化？
// - 是否有辦法不用遍歷整棵樹、找到第 k 大就提前結束？（提示：反向中序遍歷 right -> node -> left）

import { BinaryTree, TreeNode } from '../data-structure/BinaryTree'

export {}
console.clear()

// Part 1: 找第 2 大
// Time: O(n)
// Space: O(n)
function secondLargest (root: TreeNode | null): number {
  const output = []

  const traverse = (node: TreeNode) => {
    if (output.length === 2) {
      return
    }

    if (node.right) {
      traverse(node.right)
    }

    if (output.length === 2) {
      return
    }

    output.push(node.val)

    if (node.left) {
      traverse(node.left)
    }
  }

  root && (traverse(root))
  return output.at(-1)
}

// Part 2: 泛化成第 k 大
// Time: O(n)
// Space: O(n)
function kthLargest (root: TreeNode | null, k: number): number {
  const output = []

  const traverse = (node: TreeNode) => {
    if (output.length === k) {
      return
    }

    if (node.right) {
      traverse(node.right)
    }

    if (output.length === k) {
      return
    }

    output.push(node.val)

    if (node.left) {
      traverse(node.left)
    }
  }

  root && (traverse(root))
  return output[k - 1]
}

const tree = new BinaryTree([5, 3, 6, 2, 4, null, null, 1])

console.log(secondLargest(tree.root)) // 預期 5
console.log(kthLargest(tree.root, 1)) // 預期 6
console.log(kthLargest(tree.root, 3)) // 預期 4
