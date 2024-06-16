import { BinaryTree, TreeNode } from '~/data-structure/BinaryTree'

export {}
console.clear()

const fn = (head: TreeNode | null): number => {
  let sum = 0
  let nodeCount = 0

  const queue = [head]

  while (queue.length) {
    const target = queue.shift()
    sum += target.val
    nodeCount++

    if (target.left) {
      queue.push(target.left)
    }

    if (target.right) {
      queue.push(target.right)
    }
  }

  if (sum % nodeCount !== 0) {
    return -1
  }

  const average = sum / nodeCount

  let result = 0

  const treverse = (node: TreeNode | null) => {
    if (!node) {
      return 0
    }

    const modifiedVal = node.val + treverse(node.left) + treverse(node.right)
    const diff = modifiedVal - average
    result += Math.abs(diff)
    return diff
  }

  treverse(head)

  return result
}

console.log(fn(new BinaryTree([2, 2, 4, 1, 3, 1, 1]).root))
console.log(fn(new BinaryTree([1, 2, 5, 1, 3, 1, 1]).root))
console.log(fn(new BinaryTree([2, 2, 5, 1, 3, 1, 1]).root))

