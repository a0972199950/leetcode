// 449. Serialize and Deserialize BST
// https://leetcode.com/problems/serialize-and-deserialize-bst/
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

export {}
console.clear()

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  // 為了保留每個節點的原始位置，必須以完全平衡樹的方式序列化 BST，空節點填 null，和 leetcode 的出題方式一致
  // 這個算法會用 BFS
  const result = []
  let queue = [root]

  while (queue.some(node => node !== null)) {
    const nextQueue = []

    while (queue.length) {
      const node = queue.shift()

      const val = node?.val ?? null
      result.push(val)

      nextQueue.push(node?.left ?? null)
      nextQueue.push(node?.right ?? null)
    }

    queue = nextQueue
  }

  return JSON.stringify(result)
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(_data: string): TreeNode | null {
  const data = JSON.parse(_data)
  let root = data.shift()

  if (root === null) {
    return null
  }

  root = new TreeNode(root)
  let queue: (TreeNode | null)[] = [root]

  while (queue.some(node => node !== null)) {
    const nextQueue = []

    while (queue.length) {
      const node = queue.shift()

      let left = data.shift()
      left = typeof left === 'number' ? new TreeNode(left) : null

      nextQueue.push(left)

      if (node !== null) {
        node.left = left
      }

      let right = data.shift()
      right = typeof right === 'number' ? new TreeNode(right) : null

      nextQueue.push(right)

      if (node !== null) {
        node.right = right
      }
    }

    queue = nextQueue
  }

  return root
}

// console.log(serialize(new BinaryTree([2, 1, 3]).root)) // Expected: [2,1,3]
// console.log(serialize(new BinaryTree([]).root)) // Expected: []
// console.log(serialize(new BinaryTree([2, 1, 9, -1, null, 8, 10, -2]).root)) // Expected: [2,1,3]

console.log(deserialize(serialize(new BinaryTree([2, 1, 9, -1, null, 8, 10, -2]).root)))
