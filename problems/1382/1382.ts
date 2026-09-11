// 1382. Balance a Binary Search Tree
// 最後練習時間：2026-09-11
// https://leetcode.com/problems/balance-a-binary-search-tree/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// function balanceBST(root: TreeNode | null): TreeNode | null {
//   const nodes = []

//   const inorderTreverse = (node: TreeNode) => {
//     const { left, right } = node
//     node.left = null
//     node.right = null

//     if (left) {
//       inorderTreverse(left)
//     }

//     nodes.push(node)

//     if (right) {
//       inorderTreverse(right)
//     }
//   }

//   inorderTreverse(root)

//   console.log(nodes)

//   let newRoot = null

//   const insert = (node: TreeNode) => {
//     console.log('insert: ', node)
//     if (!newRoot) {
//       newRoot = node
//       return
//     }

//     let current = newRoot

//     while (true) {
//       if (node.val < current.val) {
//         if (!current.left) {
//           current.left = node
//           break
//         }

//         current = current.left
//         continue
//       }

//       if (node.val > current.val) {
//         if (!current.right) {
//           current.right = node
//           break
//         }

//         current = current.right
//         continue
//       }

//       if (node.val === current.val) {
//         throw '題目會出相等值的node'
//       }
//     }
//   }

//   while (nodes.length) {
//     const [node] = nodes.splice(Math.floor(nodes.length / 2), 1)
//     insert(node)
//   }

//   return newRoot
// }

// Time: O(2n)
// Space: O(n)
function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }

  const inOrder: number[] = []

  const inOrderTraverse = (node: TreeNode | null) => {
    if (!node) {
      return
    }

    inOrderTraverse(node.left)
    inOrder.push(node.val)
    inOrderTraverse(node.right)
  }

  inOrderTraverse(root)

  // console.log(inOrder)

  const selectMiddle = (left: number, right: number) => {
    if (right < left) {
      return null
    }

    const middle = Math.floor(left + (right - left) / 2)
    const node = new TreeNode(inOrder[middle])

    // console.log([left, right], middle, node)

    if (right > left) {
      node.left = selectMiddle(left, middle - 1)
      node.right = selectMiddle(middle + 1, right)
    }

    return node
  }

  return selectMiddle(0, inOrder.length - 1)
}

balanceBST(new BinaryTree([1, null, 2, null, 3, null, 4, null, null]).root).print()
balanceBST(new BinaryTree([2, 1, 3]).root).print()
balanceBST(new BinaryTree([1, null, 15, 14, 17, 7, null, null, null, 2, 12, null, 3, 9, null, null, null, null, 11]).root).print() // TreeNode { val: 11, left: TreeNode { val: 9, left: TreeNode { val: 7, left: TreeNode { val: 3, left: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: null }, right: null }, right: null }, right: null }, right: TreeNode { val: 12, left: null, right: TreeNode { val: 14, left: null, right: TreeNode { val: 15, left: null, right: TreeNode { val: 17, left: null, right: null } } } } }

