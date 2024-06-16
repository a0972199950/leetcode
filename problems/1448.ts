// 1448. Count Good Nodes in Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function goodNodes(root: TreeNode | null): number {
  let countOfGoods = 0

  if (!root) {
    return countOfGoods
  }

  const treverse = (node: TreeNode, max: number) => {
    if (node.val >= max) {
      countOfGoods++
    }

    node.left && treverse(node.left, Math.max(max, node.val))
    node.right && treverse(node.right, Math.max(max, node.val))
  }

  treverse(root, -Infinity)

  return countOfGoods
}

console.log(goodNodes(new BinaryTree([3, 1, 4, 3, null, 1, 5]).root)) // 4
console.log(goodNodes(new BinaryTree([3, 3, null, 4, 2]).root)) // 3
console.log(goodNodes(new BinaryTree([1]).root)) // 1


