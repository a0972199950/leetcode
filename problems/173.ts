// 173. Binary Search Tree Iterator
import { TreeNode } from '../data-structure/BinaryTree'

class BSTIterator {
  arr: number[] = []
  pointer = 0

  constructor(root: TreeNode | null) {
    if (!root) {
      return
    }

    const inOrderTreverse = (node: TreeNode) => {
      if (node.left) {
        inOrderTreverse(node.left)
      }

      this.arr.push(node.val)

      if (node.right) {
        inOrderTreverse(node.right)
      }
    }

    inOrderTreverse(root)
  }

  next(): number {
    const result = this.arr[this.pointer]
    this.pointer++
    return result
  }

  hasNext(): boolean {
    return this.pointer < this.arr.length
  }
}
