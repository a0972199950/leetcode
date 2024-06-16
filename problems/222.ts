// 222. Count Complete Tree Nodes
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

// function countNodes(root: TreeNode | null): number {
//   if (!root) {
//     return 0
//   }

//   const queue = [root]
//   let nodes = 0

//   while (queue.length) {
//     const node = queue.shift()
//     node.left && (queue.push(node.left))
//     node.right && (queue.push(node.right))
//     nodes++
//   }

//   return nodes
// }

function countNodes(root: TreeNode | null): number {
  const getDepth = (node: TreeNode | null) => {
    if (!node) {
      return 0
    }

    return getDepth(node.left) + 1
  }

  const depth = getDepth(root)

  let sum = 0

  const treverse = (node: TreeNode | null, level: number) => {
    if (!node) {
      return
    }

    const leftDepth = getDepth(node.left)
    const rightDepth = getDepth(node.right)

    // console.log(node.val, leftDepth, rightDepth)

    if (leftDepth === rightDepth) {
      sum += 2 ** (depth - level) - 1
      sum++
      treverse(node.right, level + 1)
      return
    }

    if (leftDepth > rightDepth) {
      sum += 2 ** (depth - level - 1) - 1
      sum++
      treverse(node.left, level + 1)
      return
    }
  }

  treverse(root, 1)

  return sum
}

console.log(countNodes(new BinaryTree([1, 2, 3, 4, 5, 6]).root))
console.log(countNodes(new BinaryTree([]).root))
console.log(countNodes(new BinaryTree([1]).root))
