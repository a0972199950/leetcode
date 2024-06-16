// 226. Invert Binary Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

// paste function here
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root
  }

  const reverseNode = (node: TreeNode) => {
    const temp = node.left
    node.left = node.right
    node.right = temp
  }

  const queue: TreeNode[] = [root]

  while (queue.length) {
    const node = queue.shift()
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)

    reverseNode(node)
  }

  return root
}

console.log(invertTree(new BinaryTree([4, 2, 7, null, 3, 6, 9]).root))
console.log(invertTree(new BinaryTree([2, 1, 3]).root))


