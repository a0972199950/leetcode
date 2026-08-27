// 450. Delete Node in a BST
// 最後練習時間：2026-08-27
// https://leetcode.com/problems/delete-node-in-a-bst/
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

console.clear()

// const buildBST = (root: TreeNode | null, node: TreeNode) => {
//   if (!root) {
//     return node
//   }

//   let current = root

//   while (current) {
//     if (node.val < current.val) {
//       if (!current.left) {
//         current.left = node
//         break
//       } else {
//         current = current.left
//       }
//     }

//     if (node.val > current.val) {
//       if (!current.right) {
//         current.right = node
//         break
//       } else {
//         current = current.right
//       }
//     }
//   }

//   return root
// }

// function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
//   if (!root) {
//     return null
//   }

//   const stack = [root]
//   let result = null

//   while (stack.length) {
//     const node = stack.pop()
//     if (node.left) { stack.push(node.left) }
//     if (node.right) { stack.push(node.right) }
//     node.left = null
//     node.right = null

//     if (node.val !== key) {
//       result = buildBST(result, node)
//     }
//   }

//   return result
// }

// 最後練習時間：2026-08-27
// Time: O(h)
// Space: O(h)
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null
  }

  const traverse = (node: TreeNode | null): TreeNode => {
    if (!node) {
      return null
    }

    const { val } = node

    if (key < val) {
      node.left = traverse(node.left)
      return node
    }

    if (key > val) {
      node.right = traverse(node.right)
      return node
    }

    // 當前節點就是要刪掉的節點

    // 刪掉節點後，如果該節點沒有左小孩，直接把右小孩接上來
    if (!node.left) {
      return node.right
    }

    // 否則就要找 "以刪除節點的左小孩為根的最大節點" 接上來
    let parent = null // 要接上去的節點的父節點
    let current = node.left // 要接上去的節點 (要刪除節點的左小孩)

    while (current.right) {
      parent = current
      current = current.right
    }

    // current 已是 "以刪除節點的左小孩為根的最大節點"

    // 把 current 原本的左子樹，接回 current 被拔掉的位置
    if (parent) {
      parent.right = current.left
      current.left = node.left
    }

    current.right = node.right

    return current
  }

  return traverse(root)
}

// 或是 pre-order 排出來，拿掉目標，再重建 BST 也行，那樣會是
// Time: O(n + n*h)
// Space: O(n)

// deleteNode(new BinaryTree([5, 3, 6, 2, 4, null, 7]).root, 3).print()
// deleteNode(new BinaryTree([5, 3, 6, 2, 4, null, 7]).root, 0).print()
// console.log(deleteNode(new BinaryTree([]).root, 0))
// deleteNode(new BinaryTree([5, 3, null, 2]).root, 3).print()

const t = new BinaryTree([6, 3, null, 2, 5, 1, null, 4, null])
t.print()
console.log('==========')
deleteNode(t.root, 6).print()

