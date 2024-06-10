// 99. Recover Binary Search Tree
import { BinaryTree, TreeNode } from '../data-structure/BinaryTree'

console.clear()
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

/**
 Do not return anything, modify root in-place instead.
*/
function recoverTree(root: TreeNode | null): void {
  if (!root) {
    return
  }

  const inOrderNodes: TreeNode[] = []
  const mistakes: [TreeNode?, TreeNode?] = []

  const buildInOrderList = (node: TreeNode) => {
    if (node.left) {
      buildInOrderList(node.left)
    }

    inOrderNodes.push(node)

    if (node.right) {
      buildInOrderList(node.right)
    }
  }

  buildInOrderList(root)

  for (
    let i = 0, j = inOrderNodes.length - 1;
    i < inOrderNodes.length && j > -1;
    i++, j--
  ) {
    if (inOrderNodes[i - 1] && inOrderNodes[i].val < inOrderNodes[i - 1].val) {
      mistakes[0] = inOrderNodes[i]
    }

    if (inOrderNodes[j + 1] && inOrderNodes[j].val > inOrderNodes[j + 1].val) {
      mistakes[1] = inOrderNodes[j]
    }
  }

  const swap = (node1: TreeNode, node2: TreeNode) => {
    const temp = node1.val
    node1.val = node2.val
    node2.val = temp
  }

  swap(mistakes[0], mistakes[1])
}

const tree = new BinaryTree([3, null, 2, null, 1])

recoverTree(tree.root)


