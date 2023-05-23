// 236. Lowest Common Ancestor of a Binary Tree

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }

  let lca = null

  const check = (node: TreeNode | null) => {
    if (lca || !node) {
      return false
    }

    const isSelfTarget = node.val === p.val || node.val === q.val
    const isLeftHasTarget = check(node.left)
    const isRightHasTarget = check(node.right)

    if (isSelfTarget && (isLeftHasTarget || isRightHasTarget)) {
      lca = node
    }
    else if (!isSelfTarget && isLeftHasTarget && isRightHasTarget) {
      lca = node
    }

    return isSelfTarget || isLeftHasTarget || isRightHasTarget
  }

  check(root)

  console.log(lca?.val)
  return lca
}

export {}