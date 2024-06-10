// 450. Delete Node in a BST
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

console.clear()

const buildBST = (root: TreeNode | null, node: TreeNode) => {
  if (!root) {
    return node
  }

  let current = root

  while (current) {
    if (node.val < current.val) {
      if (!current.left) {
        current.left = node
        break
      } else {
        current = current.left
      }
    }

    if (node.val > current.val) {
      if (!current.right) {
        current.right = node
        break
      } else {
        current = current.right
      }
    }
  }

  return root
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null
  }

  const stack = [root]
  let result = null

  while (stack.length) {
    const node = stack.pop()
    if (node.left) { stack.push(node.left) }
    if (node.right) { stack.push(node.right) }
    node.left = null
    node.right = null

    if (node.val !== key) {
      result = buildBST(result, node)
    }
  }

  return result
}

const input = new BinaryTree([])
const ans = deleteNode(input.data, 0)
console.log(ans)


