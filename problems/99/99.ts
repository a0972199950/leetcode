// 99. Recover Binary Search Tree
// 最後練習時間：2026-09-07
// https://leetcode.com/problems/recover-binary-search-tree/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// function recoverTree(root: TreeNode | null): void {
//   if (!root) {
//     return
//   }

//   const inOrderNodes: TreeNode[] = []
//   const mistakes: [TreeNode?, TreeNode?] = []

//   const buildInOrderList = (node: TreeNode) => {
//     if (node.left) {
//       buildInOrderList(node.left)
//     }

//     inOrderNodes.push(node)

//     if (node.right) {
//       buildInOrderList(node.right)
//     }
//   }

//   buildInOrderList(root)

//   for (
//     let i = 0, j = inOrderNodes.length - 1;
//     i < inOrderNodes.length && j > -1;
//     i++, j--
//   ) {
//     if (inOrderNodes[i - 1] && inOrderNodes[i].val < inOrderNodes[i - 1].val) {
//       mistakes[0] = inOrderNodes[i]
//     }

//     if (inOrderNodes[j + 1] && inOrderNodes[j].val > inOrderNodes[j + 1].val) {
//       mistakes[1] = inOrderNodes[j]
//     }
//   }

//   const swap = (node1: TreeNode, node2: TreeNode) => {
//     const temp = node1.val
//     node1.val = node2.val
//     node2.val = temp
//   }

//   swap(mistakes[0], mistakes[1])
// }

// Time: O(n + n log n)
// Space: O(n)
// function recoverTree(root: TreeNode | null): void {
//   const inOrder: TreeNode[] = []

//   const inOrderTraverse = (node: TreeNode) => {
//     node.left && (inOrderTraverse(node.left))
//     inOrder.push(node)
//     node.right && (inOrderTraverse(node.right))
//   }

//   inOrderTraverse(root)

//   const order = inOrder.toSorted((a, b) => a.val - b.val)

//   const swap: TreeNode[] = []

//   for (let i = 0; i < inOrder.length; i++) {
//     const swapNode = inOrder[i]
//     const shouldBe = order[i]

//     if (swapNode !== shouldBe) {
//       swap.push(swapNode)
//     }
//   }

//   const [a, b] = swap
//   const temp = a.val
//   a.val = b.val
//   b.val = temp
// }

// Time: O(n)
// Space: O(h)
function recoverTree(root: TreeNode | null): void {
  let first: TreeNode

  let prev: TreeNode
  let reverseCount = 0

  const traverse = (node: TreeNode) => {
    if (reverseCount === 2) {
      return
    }

    if (node.left) {
      traverse(node.left)
    }

    if (prev && node.val < prev.val) {
      !first && (first = prev)
      second = node
      reverseCount++
    }

    prev = node
    // console.log(node.val, prev?.val)

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(root)

  // console.log(first, second)

  const temp = first.val
  first.val = second.val
  second.val = temp
}

// Example 1: root = [1,3,null,null,2]，交換的是 1 和 3（中序 3,_,1，隔一個，兩處逆序）
const tree1 = new BinaryTree([1, 3, null, null, 2])
recoverTree(tree1.root)
tree1.print()

// Example 2: root = [3,1,4,null,null,2]，交換的是 3 和 2（中序相鄰，只有一處逆序）
const tree2 = new BinaryTree([3, 1, 4, null, null, 2])
recoverTree(tree2.root)
tree2.print()

// 最小輸入：2 個 node，中序相鄰逆序
const tree3 = new BinaryTree([1, 2])
recoverTree(tree3.root)
tree3.print()

// 較大的樹，交換 15 與 5（中序不相鄰，first 取第一處逆序的較大者、second 取最後一處的較小者）
const tree4 = new BinaryTree([10, 15, 5, 2, 7, null, 20])
recoverTree(tree4.root)
tree4.print()

