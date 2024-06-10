// 572. Subtree of Another Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

const isSameTree = (node1: TreeNode | null, node2: TreeNode | null) => {
  if (node1 === null && node2 === null) {
    return true
  }
  else if (node1 && node2 === null) {
    return false
  }
  else if (node1 === null && node2) {
    return false
  }
  else {
    return node1.val === node2.val
      && isSameTree(node1.left, node2.left)
      && isSameTree(node1.right, node2.right)
  }
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    node?.left && queue.push(node.left)
    node?.right && queue.push(node.right)

    if (isSameTree(node, subRoot)) {
      return true
    }
  }

  return false
}

console.log(isSubtree(new BinaryTree([3, 4, 5, 1, 2]).root, new BinaryTree([4, 1, 2]).root)) //true
console.log(isSubtree(new BinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]).root, new BinaryTree([4, 1, 2]).root)) // false
console.log(isSubtree(new BinaryTree([]).root, new BinaryTree([]).root)) // true
console.log(isSubtree(new BinaryTree([3, 4, 5, 1, 2]).root, new BinaryTree([]).root)) // true
console.log(isSubtree(new BinaryTree([]).root, new BinaryTree([4, 1, 2]).root)) // false


