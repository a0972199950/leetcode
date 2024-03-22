// 653. Two Sum IV - Input is a BST

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) {
    return false
  }

  const breadthNodes = new Set()
  const breadthFirstStack: TreeNode[] = [root]

  while (breadthFirstStack.length) {
    const head = breadthFirstStack.pop()!

    // 先檢查廣度上有沒有符合條件的
    if (breadthNodes.has(k - head.val)) {
      return true
    }

    breadthNodes.add(head.val)

    const targetVal = k - head.val

    if (targetVal !== head.val) {
      let current: TreeNode | null = head
      do {
        current = targetVal > current.val ? current.right : current.left
        if (current?.val === targetVal) {
          console.log(head.val, targetVal)
          return true
        }
      } while (current)
    }

    head.right && breadthFirstStack.push(head.right)
    head.left && breadthFirstStack.push(head.left)
  }

  return false
}

export {}