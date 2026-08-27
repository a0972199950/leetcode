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

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// Part 1: 找第 2 大
// Time: O(h)
// Space: O(1)
function secondLargest (root: TreeNode | null): number | null {
  const findTheRightest = (node: TreeNode | null) => {
    let current = node
    let parent = null

    while (current?.right) {
      parent = current
      current = current.right
    }

    return { parent, current }
  }

  const { parent, current } = findTheRightest(root)

  if (!current?.left) {
    return parent ? parent.val : null
  }

  const { current: finalAnswer } = findTheRightest(current.left)

  return finalAnswer.val
}

// Part 2: 泛化成第 k 大
// Time: O(n)
// Space: O(n)
function kthLargest (root: TreeNode | null, k: number): number {
  let answer = null

  const traverse = (node: TreeNode) => {
    if (!k) {
      return
    }

    if (node.right) {
      traverse(node.right)
    }

    if (!k) {
      return
    }

    answer = node.val
    k--

    if (node.left) {
      traverse(node.left)
    }
  }

  root && (traverse(root))
  return answer
}

// 最後一種解法：直接 in-order 遍歷輸出成嚴格遞增陣列後，用 k - 1 當 index 取值
// function kthLargest (root: TreeNode | null, k: number): number {

// }

const tree = new BinaryTree([5, 3, 6, 2, 4, null, null, 1])

console.log(secondLargest(tree.root)) // 預期 5
console.log(kthLargest(tree.root, 1)) // 預期 6
console.log(kthLargest(tree.root, 3)) // 預期 4

// --- secondLargest 額外測試 ---

// 只有 1 個節點 → 沒有第 2 大，回傳 null
const t1 = new BinaryTree([42])
console.log(secondLargest(t1.root)) // 預期 null

const t1_1 = new BinaryTree([])
console.log(secondLargest(t1_1.root)) // 預期 null

// 只有 2 個節點，max 是右子節點，無 left child → parent 即第 2 大
// 樹: 3 → 5
const t2 = new BinaryTree([3, null, 5])
console.log(secondLargest(t2.root)) // 預期 3

// 右斜樹（3 層），max 無 left child → parent 是第 2 大
// 樹: 1 → 3 → 5
const t3 = new BinaryTree([1, null, 3, null, 5])
console.log(secondLargest(t3.root)) // 預期 3

// max 有 left child，且 left child 無右子節點 → left child 本身是第 2 大
// 樹:      5
//         / \
//        2   9
//       / \ /
//      1  4 7
const t4 = new BinaryTree([5, 2, 9, 1, 4, 7, null])
console.log(secondLargest(t4.root)) // 預期 7

// max 有 left child，且 left child 有右子樹 → 右子樹最右端是第 2 大
// 樹:      5
//         / \
//        2   9
//       / \ /
//      1  4 7
//              \
//               8
const t5 = new BinaryTree([5, 2, 9, 1, 4, 7, null, null, null, null, null, null, 8])
console.log(secondLargest(t5.root)) // 預期 8

// max 是 root（無右子節點），第 2 大是左子樹的最右端
// 樹:    6
//       /
//      3
//     / \
//    1   4
const t6 = new BinaryTree([6, 3, null, 1, 4])
console.log(secondLargest(t6.root)) // 預期 4

// max 是 root，左子節點無右子節點 → 左子節點本身是第 2 大
// 樹:  6
//     /
//    4
const t7 = new BinaryTree([6, 4])
console.log(secondLargest(t7.root)) // 預期 4
