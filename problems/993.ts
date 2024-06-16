// 993. Cousins in Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  const result: Record<number, { depth: number, parent: TreeNode } | null> = {
    [x]: null,
    [y]: null
  }

  const dfs = (node: TreeNode, parent: TreeNode | null = null, depth = 0) => {
    if (result[x] && result[y]) {
      return
    }
    
    if (node.val === x) {
      result[x] = { depth, parent }
    } else if (node.val === y) {
      result[y] = { depth, parent }
    }

    if (result[x] && result[y]) {
      return
    }

    node.left && dfs(node.left, node, depth + 1)
    node.right && dfs(node.right, node, depth + 1)
  }

  dfs(root)

  return result[x].depth === result[y].depth && result[x].parent !== result[y].parent
}

console.log(isCousins(new BinaryTree([1, 2, 3, 4]).root, 4, 3))
console.log(isCousins(new BinaryTree([1, 2, 3, null, 4, null, 5]).root, 5, 4))
console.log(isCousins(new BinaryTree([1, 2, 3, null, 4]).root, 2, 3))


