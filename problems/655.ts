// 655. Print Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function printTree(root: TreeNode | null): string[][] {
  const result = []

  if (!root) {
    return result
  }

  const findRows = (node: TreeNode | null) => {
    if (!node) {
      return 0
    }

    return Math.max(findRows(node.left), findRows(node.right)) + 1
  }

  const rows = findRows(root)
  const cols = 2**rows - 1
  
  const setVal = (node: TreeNode, row: number, min: number, max: number) => {
    if (!result[row]) {
      result[row] = Array(cols).fill('')
    }

    const col = Math.floor(min + ((max - min) / 2))

    result[row][col] = String(node.val)

    if (node.left) {
      setVal(node.left, row + 1, min, col)
    }

    if (node.right) {
      setVal(node.right, row + 1, col, max)
    }
  }

  setVal(root, 0, 0, cols)

  return result
}

console.log(printTree(new BinaryTree([1, 2]).root))
console.log(printTree(new BinaryTree([1, 2, 3, null, 4]).root))
console.log(printTree(new BinaryTree([1, 2, 5, 3, null, null, null, 4]).root))
