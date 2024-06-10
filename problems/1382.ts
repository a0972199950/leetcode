// 1382. Balance a Binary Search Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function balanceBST(root: TreeNode | null): TreeNode | null {
  const nodes = []

  const inorderTreverse = (node: TreeNode) => {
    const { left, right } = node
    node.left = null
    node.right = null

    if (left) {
      inorderTreverse(left)
    }

    nodes.push(node)

    if (right) {
      inorderTreverse(right)
    }
  }

  inorderTreverse(root)

  console.log(nodes)

  let newRoot = null

  const insert = (node: TreeNode) => {
    console.log('insert: ', node)
    if (!newRoot) {
      newRoot = node
      return
    }

    let current = newRoot

    while (true) {
      if (node.val < current.val) {
        if (!current.left) {
          current.left = node
          break
        }

        current = current.left
        continue
      }

      if (node.val > current.val) {
        if (!current.right) {
          current.right = node
          break
        }

        current = current.right
        continue
      }

      if (node.val === current.val) {
        throw '題目會出相等值的node'
      }
    }
  }

  while (nodes.length) {
    const [node] = nodes.splice(Math.floor(nodes.length / 2), 1)
    insert(node)
  }

  return newRoot
}

// console.log(balanceBST(new BinaryTree([1, null, 2, null, 3, null, 4, null, null]).root))
// console.log(balanceBST(new BinaryTree([2, 1, 3]).root))
console.log(balanceBST(new BinaryTree([1, null, 15, 14, 17, 7, null, null, null, 2, 12, null, 3, 9, null, null, null, null, 11]).root))


