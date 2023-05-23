// 114. Flatten Binary Tree to Linked List
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function flatten(root: TreeNode | null): void {
  if (!root) {
    return null
  }

  const stack = [root]
  let current = null

  do {
    if (current) {
      current.right = stack.pop()
      current.left = null
      current = current.right
    } else {
      current = stack.pop()
    }

    if (current.right) {
      stack.push(current.right)
    }

    if (current.left) {
      stack.push(current.left)
    }

  } while (stack.length)
}

flatten(new BinaryTree([]).root)

export {}
