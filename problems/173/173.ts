// 173. Binary Search Tree Iterator
// 最後練習時間：2026-08-26
// https://leetcode.com/problems/binary-search-tree-iterator/
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

console.clear()

// 最後練習時間：2022-11-06
// class BSTIterator {
//   arr: number[] = []
//   pointer = 0

//   constructor(root: TreeNode | null) {
//     if (!root) {
//       return
//     }

//     const inOrderTreverse = (node: TreeNode) => {
//       if (node.left) {
//         inOrderTreverse(node.left)
//       }

//       this.arr.push(node.val)

//       if (node.right) {
//         inOrderTreverse(node.right)
//       }
//     }

//     inOrderTreverse(root)
//   }

//   next(): number {
//     const result = this.arr[this.pointer]
//     this.pointer++
//     return result
//   }

//   hasNext(): boolean {
//     return this.pointer < this.arr.length
//   }
// }

// 最後練習時間：2026-08-26
// Space: O(2n)
class BSTIterator {
  private inOrderArray: number[] = []
  private pointer = 0

  // Time: O(n)
  constructor(root: TreeNode | null) {
    if (!root) {
      return
    }

    const inOrderTraverse = (node: TreeNode) => {
      if (node.left) {
        inOrderTraverse(node.left)
      }

      this.inOrderArray.push(node.val)

      if (node.right) {
        inOrderTraverse(node.right)
      }
    }

    inOrderTraverse(root)
  }

  // Time: O(1)
  next(): number {
    const val = this.inOrderArray[this.pointer]
    this.pointer++
    return val
  }

  // Time: O(1)
  hasNext(): boolean {
    return this.pointer <= this.inOrderArray.length - 1
  }
}

// 最後練習時間：2026-08-26
// Space: O(h)
class BSTIterator {
  private parentStack: TreeNode[] = []
  private currentNode: TreeNode | null

  // Time: O(h)
  constructor(root: TreeNode | null) {
    if (!root) {
      return
    }

    this.currentNode = root
    while (this.currentNode.left) {
      this.parentStack.push(this.currentNode)
      this.currentNode = this.currentNode.left
    }
  }

  // Time: Worst case per call：O(h); Amortized：O(1)
  next(): number {
    const val = this.currentNode.val

    if (this.currentNode.right) {
      this.currentNode = this.currentNode.right

      while (this.currentNode.left) {
        this.parentStack.push(this.currentNode)
        this.currentNode = this.currentNode.left
      }
      
    } else {
      const lastNode = this.parentStack.pop()
      this.currentNode = lastNode ?? null
    }

    return val
  }

  // Time: O(1)
  hasNext(): boolean {
    return !!this.currentNode
  }
}

// Test 1: LeetCode example — BST [7,3,15,null,null,9,20], in-order: [3,7,9,15,20]
const tree1 = new BinaryTree([7, 3, 15, null, null, 9, 20])
const it1 = new BSTIterator(tree1.root)
tree1.print()
console.log(it1.next())    // 3
console.log(it1.hasNext()) // true
console.log(it1.next())    // 7
console.log(it1.hasNext()) // true
console.log(it1.next())    // 9
console.log(it1.hasNext()) // true
console.log(it1.next())    // 15
console.log(it1.hasNext()) // true
console.log(it1.next())    // 20
console.log(it1.hasNext()) // false

// Test 2: single node
const tree2 = new BinaryTree([42])
const it2 = new BSTIterator(tree2.root)
console.log(it2.hasNext()) // true
console.log(it2.next())    // 42
console.log(it2.hasNext()) // false

// Test 3: right-skewed BST [1,null,2,null,3], in-order: [1,2,3]
const tree3 = new BinaryTree([1, null, 2, null, 3])
const it3 = new BSTIterator(tree3.root)
console.log(it3.next())    // 1
console.log(it3.hasNext()) // true
console.log(it3.next())    // 2
console.log(it3.hasNext()) // true
console.log(it3.next())    // 3
console.log(it3.hasNext()) // false
