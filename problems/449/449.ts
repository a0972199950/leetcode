// 449. Serialize and Deserialize BST
// 最後練習時間：2026-08-27
// https://leetcode.com/problems/serialize-and-deserialize-bst/
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

console.clear()

// 最後練習時間：2026-08-24
/*
 * Encodes a tree to a single string.
 */
// function serialize(root: TreeNode | null): string {
//   // 為了保留每個節點的原始位置，必須以完全平衡樹的方式序列化 BST，空節點填 null，和 leetcode 的出題方式一致
//   // 這個算法會用 BFS
//   const result = []
//   let queue = [root]

//   while (queue.some(node => node !== null)) {
//     const nextQueue = []

//     while (queue.length) {
//       const node = queue.shift()

//       const val = node?.val ?? null
//       result.push(val)

//       nextQueue.push(node?.left ?? null)
//       nextQueue.push(node?.right ?? null)
//     }

//     queue = nextQueue
//   }

//   return JSON.stringify(result)
// }

/*
 * Decodes your encoded data to tree.
 */
// function deserialize(_data: string): TreeNode | null {
//   const data = JSON.parse(_data)
//   let root = data.shift()

//   if (root === null) {
//     return null
//   }

//   root = new TreeNode(root)
//   let queue: (TreeNode | null)[] = [root]

//   while (queue.some(node => node !== null)) {
//     const nextQueue = []

//     while (queue.length) {
//       const node = queue.shift()

//       let left = data.shift()
//       left = typeof left === 'number' ? new TreeNode(left) : null

//       nextQueue.push(left)

//       if (node !== null) {
//         node.left = left
//       }

//       let right = data.shift()
//       right = typeof right === 'number' ? new TreeNode(right) : null

//       nextQueue.push(right)

//       if (node !== null) {
//         node.right = right
//       }
//     }

//     queue = nextQueue
//   }

//   return root
// }

// 最後練習時間：2026-08-27
// Time: O(n)
// Space: O(n + h)
function serialize(root: TreeNode | null): string {
  if (!root) {
    return ''
  }

  const result = []

  const preOrderTraverse = (node: TreeNode) => {
    result.push(node.val)

    if (node.left) {
      preOrderTraverse(node.left)
    }

    if (node.right) {
      preOrderTraverse(node.right)
    }
  }

  preOrderTraverse(root)

  return JSON.stringify(result)
}

// Time: O(n * h)
// Space: O(n)
// function deserialize(_data: string): TreeNode | null {
//   if (!_data) {
//     return null
//   }
//   const data: number[] = JSON.parse(_data)

//   let root = null
//   let pointer = 0

//   while (pointer < data.length) {
//     const val = data[pointer]
//     const node = new TreeNode(val)

//     if (!root) {
//       root = node
//       pointer++
//       continue
//     }

//     let current = root
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

//       console.error('不該出現重複數字：', node.val)
//       break
//     }

//     pointer++
//   }

//   return root
// }

// Time: O(n)
// Space: O(h)
function deserialize(_data: string): TreeNode | null {
  if (!_data) {
    return null
  }
  const data: number[] = JSON.parse(_data)

  let pointer = 0

  const build = (min: number, max: number) => {
    if (pointer >= data.length || data[pointer] < min || data[pointer] > max) {
      return null
    }

    const node = new TreeNode(data[pointer])
    pointer++

    node.left = build(min, node.val)
    node.right = build(node.val, max)

    return node
  }

  const result = build(-Infinity, Infinity)
  // console.log(result)
  return result
}

deserialize(serialize(new BinaryTree([2, 1, 3]).root)).print() // Expected: [2,1,3]
console.log(deserialize(serialize(new BinaryTree([]).root))) // Expected: []
deserialize(serialize(new BinaryTree([2, 1, 9, -1, null, 8, 10, -2]).root)).print() // Expected: [2,1,3]

