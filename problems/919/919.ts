// 919. Complete Binary Tree Inserter
// 最後練習時間：2024-04-03
// https://leetcode.com/problems/complete-binary-tree-inserter/
import { TreeNode, BinaryTree } from '../../data-structure/BinaryTree'

export {}
console.clear()

class CBTInserter {
  root: TreeNode
  queue: TreeNode[]

  constructor(root: TreeNode | null) {
    this.root = root
  }

  insert(val: number): number {
    const queue: TreeNode[] = this.queue || [this.root]

    while (queue.length) {
      const current = queue.shift()

      if (!current.left) {
        current.left = new TreeNode(val)
        queue.unshift(current)
        this.queue = queue
        return current.val
      } else {
        queue.push(current.left)
      }

      if (!current.right) {
        current.right = new TreeNode(val)
        queue.unshift(current)
        this.queue = queue
        return current.val
      } else {
        queue.push(current.right)
      }
    }
  }

  get_root(): TreeNode | null {
    return this.root
  }
}

// const cbt = new CBTInserter(new BinaryTree([1, 2]).root)
// cbt.insert(3)
// cbt.insert(4)
// console.log(cbt.get_root())

const cbt = new CBTInserter(new BinaryTree([1]).root)
cbt.insert(2)
cbt.insert(3)
cbt.insert(4)
cbt.insert(5)
cbt.insert(6)
console.log(cbt.get_root()) // Expected: TreeNode { val: 1, left: TreeNode { val: 2, left: TreeNode { val: 4, left: null, right: null }, right: TreeNode { val: 5, left: null, right: null } }, right: TreeNode { val: 3, left: TreeNode { val: 6, left: null, right: null }, right: null } }


