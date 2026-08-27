// 450. Delete Node in a BST
// 最後練習時間：2026-08-27
// https://leetcode.com/problems/delete-node-in-a-bst/
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

export {}
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
  // 刪掉節點後，就讓該節點的右小孩的左邊最小; 或是左小孩的右邊最大來代替該節點就行

  if (!root) {
    return null
  }

  const traverse = (node: TreeNode | null): TreeNode => {
    if (!node) {
      return
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

    // 刪掉節點後，就讓該節點的右小孩的左邊最小; 或是左小孩的右邊最大來代替該節點就行
    if (!node.left) {
      return node.right
    } else {
      let parent = null
      let current = node.left

      while (current.right) {
        parent = current
        current = current.right
      }

      if (parent) {
        parent.right = null
      }

      current.left = node.left?.right
      current.right = node.right

      // console.log('current', current)
      // console.log('node', node)

      return current
    }
  }

  return traverse(root)
}

deleteNode(new BinaryTree([5, 3, 6, 2, 4, null, 7]).root, 3).print()
deleteNode(new BinaryTree([5, 3, 6, 2, 4, null, 7]).root, 0).print()
console.log(deleteNode(new BinaryTree([]).root, 0))
deleteNode(new BinaryTree([5, 3, null, 2]).root, 3).print()

