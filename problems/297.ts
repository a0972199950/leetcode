// 297. Serialize and Deserialize Binary Tree
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const arr = []
  let queue: (TreeNode | null)[] = []

  if (root) {
    queue.push(root)
    arr.push(root.val)
  }

  while (queue.length) {
    let hasNode = false

    const nextArr = []

    queue = queue.reduce((sum, node: TreeNode) => {
      nextArr.push(node.left?.val ?? null)
      nextArr.push(node.right?.val ?? null)

      node.left && sum.push(node.left)
      node.right && sum.push(node.right)

      hasNode = !!node.left || !!node.right

      return sum
    }, [])

    console.log('nextArr: ', nextArr)

    arr.push(...nextArr)

    if (hasNode) {
      break
    }
  }

  return JSON.stringify(arr)
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const createNode = (val: number | string | null | undefined) => {
    if (val === null || val === undefined) {
      return null
    } else {
      return new TreeNode(Number(val))
    }
  }

  const arr: (number | null)[] = JSON.parse(data)

  const root = createNode(arr[0])
  let queue = [{ index: 0, node: root }]

  while (queue.length) {
    queue = queue.reduce((sum, { index, node }) => {
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2

      if (leftChildIndex < arr.length) {
        if (node) {
          node.left = createNode(arr[leftChildIndex])
        }

        sum.push({ index: leftChildIndex, node: node.left })
      }

      if (rightChildIndex < arr.length) {
        if (node) {
          node.right = createNode(arr[rightChildIndex])
        }

        sum.push({ index: rightChildIndex, node: node.right })
      }

      return sum
    }, [])
  }

  return root
}

console.log(serialize(new BinaryTree([1, 2, 3, null, null, 4, 5, 6, 7]).data))
// console.log(deserialize('[1,2,3,null,null,4,5,6,7]'))

// console.log(serialize(null))
// console.log(deserialize('[]'))


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export {}
