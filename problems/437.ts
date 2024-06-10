import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

function pathSum(root: TreeNode | null, targetSum: number): number {
  let result = 0

  const isLeaf = (node: TreeNode) => {
    return !node.left && !node.right
  }

  const merge = (obj1: Record<number, number>, obj2: Record<number, number>) => {
    Object.entries(obj2).forEach(([key, value]) => {
      obj1[key] = (Number(obj1[key]) || 0) + value
    })

    return obj1
  }

  const getSums = (node: TreeNode | null) => {
    const sums: Record<number, number> = {}
    const val = node?.val

    if (!node) {
      return sums
    }

    sums[val] = 1

    if (isLeaf(node)) {
      return sums
    }

    const childSums = merge(getSums(node.left), getSums(node.right))

    Object.entries(childSums).forEach(([_sum, count]) => {
      const sum = Number(_sum)
      const newSum = sum + val

      sums[newSum] = (sums[newSum] || 0) + count
    })

    result += sums[targetSum] || 0

    return sums
  }

  getSums(root)
  return result || 0
}

console.log(pathSum(new BinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]).data, 8))
console.log(pathSum(new BinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]).data, 22))


