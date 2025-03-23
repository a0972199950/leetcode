console.clear()

import { TreeNode } from '../../data-structure/BinaryTree'

function solution(root: TreeNode | null) {
  const isLeaf = (node) => {
    if (!node.left && !node.right) {
      return true
    }
  }
  
  const dfs = (node, min, max) => {
    if (!node) {
      return true
    }
    
    if (isLeaf(node)) {
      return node.value > min && node.value < max
    }

    return dfs(node.left, min, Math.min(max, node.value)) && dfs(node.right, Math.max(min, node.value), max)
  }

  const result = dfs(root, -Infinity, Infinity)
  return result
}

export default ''
