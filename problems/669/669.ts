// 669. Trim a Binary Search Tree
import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

export {}
console.clear()

// Time: O(n + n*h)
// Space: O(n)
function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null
  }

  const printBfs = (node: TreeNode): number[] => {
    const result = []

    const queue = [node]

    while (queue.length) {
      const node = queue.shift()

      // console.log(low, node.val, high)
      if (low <= node.val && node.val <= high) {
        result.push(node.val)
      }

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    return result
  }

  const bfs: number[] = printBfs(root)

  // console.log('bfs: ', bfs)

  const buildBst = (bfs: number[]): TreeNode => {
    const data = [...bfs]
    let root = null

    while (data.length) {
      const val = data.shift()
      const target = new TreeNode(val)

      if (!root) {
        root = target
        continue
      }

      let current = root
      while (true) {
        if (target.val < current.val) {
          if (!current.left) {
            current.left = target
            break
          }

          current = current.left
          continue
        }

        if (target.val > current.val) {
          if (!current.right) {
            current.right = target
            break
          }

          current = current.right
          continue
        }
      }
    }

    return root
  }

  return buildBst(bfs)
}

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null
  }
  
  const trim = (node: TreeNode, low: number, high: number) => {

  }
  
}

console.log(trimBST(new BinaryTree([1, 0, 2]).root, 1, 2)) // Expected: TreeNode { val: 1, left: null, right: TreeNode { val: 2, ... } }
console.log(trimBST(new BinaryTree([3, 0, 4, null, 2, null, null, 1]).root, 1, 3)) // Expected: TreeNode { val: 3, left: TreeNode { val: 2, left: TreeNode { val: 1, ... }, right: null }, right: null }
