// 105. Construct Binary Tree from Preorder and Inorder Traversal

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const build = (preorder: number[], inorder: number[]) => {
    console.log(preorder, inorder)
    if (!preorder.length || !inorder.length) {
      return null
    }

    const node = new TreeNode(preorder[0])

    if (preorder.length === 1 && inorder.length === 1) {
      if (preorder[0] !== inorder[0]) {
        throw 'order 順序錯誤'
      }

      return node
    }

    const nodeIndex = inorder.findIndex(val => val === node.val)

    node.left = build(
      preorder.slice(1, 1 + nodeIndex),
      inorder.slice(0, nodeIndex)
    )

    node.right = build(
      preorder.slice(1 + nodeIndex),
      inorder.slice(1 + nodeIndex)
    )

    return node
  }

  return build(preorder, inorder)
}

// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
console.log(buildTree([-1], [-1]))

export {}