// 652. Find Duplicate Subtrees
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const hashMap: Record<string, TreeNode[]> = {}

  const preorder = (node: TreeNode | null) => {
    if (!node) {
      return 'N'
    }

    const left = preorder(node.left)
    const right = preorder(node.right)
    const hash = [node.val, left, right].join(',')

    if (!hashMap[hash]) {
      hashMap[hash] = []
    }

    hashMap[hash].push(node)

    return hash
  }

  preorder(root)

  console.log(hashMap)

  const result = []

  for (const nodes of Object.values(hashMap)) {
    if (nodes.length > 1) {
      result.push(nodes[0])
    }
  }

  return result
}

console.log(findDuplicateSubtrees(new BinaryTree([1, 2, 3, 4, null, 2, 4, null, null, 4]).root))
console.log(findDuplicateSubtrees(new BinaryTree([2, 1, 1]).root))
console.log(findDuplicateSubtrees(new BinaryTree([2, 2, 2, 3, null, 3, null]).root))
console.log(findDuplicateSubtrees(new BinaryTree([0, 0, 0, 0, null, null, 0, null, null, null, 0]).root))


