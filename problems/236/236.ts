// 236. Lowest Common Ancestor of a Binary Tree
// 最後練習時間：2026-09-11
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

import { BinaryTree, TreeNode } from '../../data-structure/BinaryTree'

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//   if (!root) {
//     return null
//   }

//   let lca = null

//   const check = (node: TreeNode | null) => {
//     if (lca || !node) {
//       return false
//     }

//     const isSelfTarget = node.val === p.val || node.val === q.val
//     const isLeftHasTarget = check(node.left)
//     const isRightHasTarget = check(node.right)

//     if (isSelfTarget && (isLeftHasTarget || isRightHasTarget)) {
//       lca = node
//     }
//     else if (!isSelfTarget && isLeftHasTarget && isRightHasTarget) {
//       lca = node
//     }

//     return isSelfTarget || isLeftHasTarget || isRightHasTarget
//   }

//   check(root)

//   console.log(lca?.val)
//   return lca
// }

// Time: O(n)
// Space: O(h)
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let lca = null
  
  const hasTargetNode = (node: TreeNode | null): boolean => {
    if (!node || !!lca) {
      return false
    }

    const isSelfMatch = node.val === p.val || node.val === q.val
    const isLeftMatch = hasTargetNode(node.left)
    const isRightMatch = hasTargetNode(node.right)

    // console.log(node.val, isSelfMatch, isLeftMatch, isRightMatch)

    if (Number(isSelfMatch) + Number(isLeftMatch) + Number(isRightMatch) === 2) {
      lca = node
    }

    return isSelfMatch || isLeftMatch || isRightMatch
  }

  hasTargetNode(root)

  return lca
}

console.log(lowestCommonAncestor(new BinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).root, new TreeNode(5), new TreeNode(1)).val) // 3
console.log(lowestCommonAncestor(new BinaryTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]).root, new TreeNode(5), new TreeNode(4)).val) // 5
console.log(lowestCommonAncestor(new BinaryTree([1, null, 2]).root, new TreeNode(2), new TreeNode(1)).val) // 1
console.log(lowestCommonAncestor(new BinaryTree([2, 1, 3]).root, new TreeNode(1), new TreeNode(3)).val) // 2
