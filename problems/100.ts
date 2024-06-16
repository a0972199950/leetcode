// 100. Same Tree
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

export {}
console.clear()

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const hashP = []
  const hashQ = []

  const preOrder = (node: TreeNode | null, storage: any) => {
    storage.push(node ? node.val : null)

    if (node?.right) {
      preOrder(node.left, storage)
      preOrder(node.right, storage)
    }
    else if (node?.left) {
      preOrder(node.left, storage)
    }
  }

  preOrder(p, hashP)
  preOrder(q, hashQ)

  // console.log(hashP, hashQ)

  return hashP.join(',') === hashQ.join(',')
}

// console.log(isSameTree(new BinaryTree([1, 2, 3]).root, new BinaryTree([1, 2, 3]).root))
// console.log(isSameTree(new BinaryTree([1, 2]).root, new BinaryTree([1, null, 2]).root))
console.log(isSameTree(new BinaryTree([1, 2, 1]).root, new BinaryTree([1, 1, 2]).root))


