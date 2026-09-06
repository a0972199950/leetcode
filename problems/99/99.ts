// 99. Recover Binary Search Tree
// 最後練習時間：2026-09-06
// https://leetcode.com/problems/recover-binary-search-tree/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
*/
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

function recoverTree(root: TreeNode | null): void {
  interface Item {
    node: TreeNode
    parent: TreeNode | null
    connect: 'left' | 'right'
  }

  if (!root) {
    return
  }

  const findSwapRoot = (): Item => {
    let swapRoot: Item = null

    const isValid = (node: TreeNode | null, min: number, max: number, parent: TreeNode, connect?: 'left' | 'right') => {
      if (!node || !!swapRoot) {
        return true
      }

      const isSelfValid = min < node.val && node.val < max
      const isLeftValid = isValid(node.left, min, node.val, node, 'left')
      const isRightValid = isValid(node.right, node.val, max, node, 'right')

      const valid = isSelfValid && isLeftValid && isRightValid

      console.log(node.val, isSelfValid, isLeftValid, isRightValid)

      if (!valid) {
        swapRoot = { node, parent, connect }
      }

      return valid
    }

    isValid(root, -Infinity, Infinity, null)

    return swapRoot
  }

  const swapRoot: Item = findSwapRoot()

  console.log('swapRoot: ', swapRoot)

  const inOrder: Item[] = []
  
  const inOrderTraverse = (node: TreeNode, parent: TreeNode | null, connect?: 'left' | 'right') => {
    if (node.left) {
      inOrderTraverse(node.left, parent, 'left')
    }

    inOrder.push({ node, parent, connect })

    if (node.right) {
      inOrderTraverse(node.right, parent, 'right')
    }
  }

  inOrderTraverse(swapRoot.node, swapRoot.parent, swapRoot.connect)

  console.log('inOrder: ', inOrder)

  const order: Item[] = inOrder.toSorted((a, b) => {
    return a.node.val < b.node.val ? -1 : 1
  })

  const swap = []

  for (let i = 0; i < inOrder.length; i++) {
    if (inOrder[i] !== order[i]) {
      swap.push(inOrder[i])
    }
  }

  const [a, b] = swap

  a.parent[a.connect] = b
  b.parent[b.connect] = a
}

recoverTree(new BinaryTree([4, 2, null, 3, 1]).root)

// Example 1: root = [1,3,null,null,2]，交換的是 1 和 3（中序 3,_,1，隔一個，兩處逆序）
// const tree1 = new BinaryTree([1, 3, null, null, 2])
// recoverTree(tree1.root)
// console.log(tree1.printInOrder()) // [ 1, 2, 3 ]

// Example 2: root = [3,1,4,null,null,2]，交換的是 3 和 2（中序相鄰，只有一處逆序）
// const tree2 = new BinaryTree([3, 1, 4, null, null, 2])
// recoverTree(tree2.root)
// console.log(tree2.printInOrder()) // [ 1, 2, 3, 4 ]

// // --- 補充（非官方，用來擋回歸）---

// // 最小輸入：2 個 node，中序相鄰逆序
// const tree3 = new BinaryTree([1, 2])
// recoverTree(tree3.root)
// console.log(tree3.printInOrder()) // [ 1, 2 ]

// // 較大的樹，交換 15 與 5（中序不相鄰，first 取第一處逆序的較大者、second 取最後一處的較小者）
// const tree4 = new BinaryTree([10, 15, 5, 2, 7, null, 20])
// recoverTree(tree4.root)
// console.log(tree4.printInOrder()) // [ 2, 5, 7, 10, 15, 20 ]

