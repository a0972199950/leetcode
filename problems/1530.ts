// 1530. Number of Good Leaf Nodes Pairs
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function countPairs(root: TreeNode | null, distance: number): number {
  let goods = 0

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const calculate = (leftPaths: number[], rightPaths: number[]) => {
    if (!leftPaths.length || !rightPaths.length) {
      return 0
    }

    let count = 0

    for (let i = 0; i < leftPaths.length; i++) {
      for (let j = 0; j < rightPaths.length; j++) {
        if (leftPaths[i] + rightPaths[j] <= distance) {
          count++
        }
      }
    }

    return count
  }

  const dfs = (node: TreeNode | null) => {
    if (!node) {
      return []
    }

    if (isLeaf(node)) {
      return [1]
    }

    const allLeftPathsToLeaf = dfs(node.left)
    const allRightPathsToLeaf = dfs(node.right)

    console.log(`節點 ${node.val} 的所有葉節點距離: `, allLeftPathsToLeaf, allRightPathsToLeaf)
    const count = calculate(allLeftPathsToLeaf, allRightPathsToLeaf)

    if (count > 0) {
      console.log(`在節點 ${node.val} 找到 ${count} 個`)
    }

    goods += count

    return [...allLeftPathsToLeaf, ...allRightPathsToLeaf].map(path => path + 1)
  }

  dfs(root)

  return goods
}

// console.log(countPairs(new BinaryTree([1, 2, 3, null, 4]).root, 3))
// console.log(countPairs(new BinaryTree([1, 2, 3, 4, 5, 6, 7]).root, 3))
// console.log(countPairs(new BinaryTree([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]).root, 3))
console.log(countPairs(new BinaryTree([15, 66, 55, 97, 60, 12, 56, null, 54, null, 49, null, 9, null, null, null, null, null, 90]).root, 5))


