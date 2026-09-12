// 1932. Merge BSTs to Create Single BST
// 最後練習時間：2026-09-12
// https://leetcode.com/problems/merge-bsts-to-create-single-bst/
import { BinaryTree } from '../../data-structure/BinaryTree'

console.clear()

// Time O(n^2)
// Space O(n)
// function canMerge(trees: Array<any>): TreeNode | null {
//   interface TreeNode {
//     val: number
//     root: TreeNode
//     left: TreeNode | null
//     right: TreeNode | null
//   }
//   // 只要有一個頭找不到任何葉，就可以 return null，因為代表最後一定會剩超過一棵樹
//   // 頭的選擇順序無關
//   // 怎麼算都是 Time O(n^2)

//   const heads: TreeNode[] = []
//   const leafs: ({ node: TreeNode, linkParent?: (n: TreeNode) => void } | null)[] = []

//   for (const head of trees) {
//     head.root = head
//     head.left && (head.left.root = head)
//     head.right && (head.right.root = head)

//     heads.push(head)

//     if (!head.left && !head.right) {
//       leafs.push({ node: head })
//       continue
//     }

//     head.left && (leafs.push({ node: head.left, linkParent: (n) => head.left = n }))
//     head.right && (leafs.push({ node: head.right, linkParent: (n) => head.right = n }))
//   }

//   // console.log('heads: ', heads)
//   // console.log('leafs: ', leafs)

//   let root = null

//   while (heads.length) {
//     const head = heads.pop()

//     let match = false
//     for (let i = 0; i < leafs.length; i++) {
//       const leaf = leafs[i]

//       if (!leaf || leaf.node.root === head) {
//         continue
//       }

//       if (leaf.node.val === head.val) {
//         match = true
//         leaf.linkParent?.(head)
//         leafs[i] = null

//         head.left && (head.left.root = leaf.node.root)
//         head.right && (head.right.root = leaf.node.root)

//         break
//       }
//     }

//     if (!match) {
//       if (root) {
//         return null
//       } else {
//         root = head
//       }
//     }
//   }

//   // console.log('root: ', root, heads)

//   const validBst = (root: TreeNode | null) => {
//     if (!root) {
//       return null
//     }

//     let current = -Infinity
//     let isBst = true

//     const inOrderTraverse = (node: TreeNode | null) => {
//       if (!node || !isBst) {
//         return
//       }

//       inOrderTraverse(node.left)

//       if (node.val > current) {
//         current = node.val
//       } else {
//         isBst = false
//       }
        
//       inOrderTraverse(node.right)
//     }

//     inOrderTraverse(root)

//     return isBst ? root : null
//   }

//   return validBst(root)
// }

interface TreeNode {
  val: number
  root: TreeNode
  left: TreeNode | null
  right: TreeNode | null
}

// Time: amortized O(n)
// Space: O(n)
function canMerge(trees: Array<any>): TreeNode | null {
  // 建一個 { leafValue: head[] } 的表來優化迴圈找 leaf

  const leafMap: Record<number, { node: TreeNode, linkToParent?: (n: TreeNode) => void}[]> = {}

  for (const head of trees) {
    head.root = head

    if (!head.left && !head.right) {
      !leafMap[head.val] && (leafMap[head.val] = [])
      leafMap[head.val].push({ node: head })
      continue
    }

    if (head.left) {
      head.left.root = head
      
      !leafMap[head.left.val] && (leafMap[head.left.val] = [])
      leafMap[head.left.val].push({ node: head.left, linkToParent: (n) => head.left = n })
    }

    if (head.right) {
      head.right.root = head

      !leafMap[head.right.val] && (leafMap[head.right.val] = [])
      leafMap[head.right.val].push({ node: head.right, linkToParent: (n) => head.right = n })
    }
  }

  let root = null

  while (trees.length) {
    const head = trees.pop()

    const leafs = leafMap[head.val] || []

    let match = false
    for (let i = 0; i < leafs.length; i++) {
      const leaf = leafs[i]

      if (leaf && leaf.node.root !== head) {
        match = true
        leaf.linkToParent?.(head)

        head.left && (head.left.root = leaf.node.root)
        head.right && (head.right.root = leaf.node.root)

        leafs[i] = null
        break
      }
    }

    // console.log(head.val, match)

    if (!match) {
      if (!root) {
        root = head
      } else {
        return null
      }
    }
  }

  const validBst = (root: TreeNode | null) => {
    if (!root) {
      return null
    }

    let current = -Infinity
    let isBst = true

    const inOrderTraverse = (node: TreeNode | null) => {
      if (!node || !isBst) {
        return
      }

      inOrderTraverse(node.left)

      if (node.val > current) {
        current = node.val
      } else {
        isBst = false
      }
        
      inOrderTraverse(node.right)
    }

    inOrderTraverse(root)

    return isBst ? root : null
  }

  return validBst(root)
}

// 這是 AI 寫的，找到唯一可能的 root node，從那邊開始用 dfs 建樹
// Time: O(n)
// Space: O(n)
function canMerge(trees: Array<TreeNode | null>): TreeNode | null {
  const rootMap = new Map<number, TreeNode>()
  const leafValues = new Set<number>()

  for (const tree of trees) {
    if (!tree) continue
    rootMap.set(tree.val, tree)

    if (tree.left) {
      leafValues.add(tree.left.val)
    }
    if (tree.right) {
      leafValues.add(tree.right.val)
    }
  }

  // 找出唯一「值從沒被任何 leaf 用過」的 root，它必須是最終合併樹的頂點
  let start: TreeNode | null = null

  for (const tree of trees) {
    if (!tree) continue
    if (!leafValues.has(tree.val)) {
      if (start) {
        return null // 出現第二個「沒人接得住」的 root，代表不可能合成一棵樹
      }
      start = tree
    }
  }

  if (!start) {
    return null
  }

  rootMap.delete(start.val)

  const build = (node: TreeNode | null): TreeNode | null => {
    if (!node) {
      return null
    }

    // 走到真正的 leaf，且剛好有另一棵樹的 root 值跟它一樣 → 換成那棵樹繼續往下建
    if (!node.left && !node.right && rootMap.has(node.val)) {
      const matched = rootMap.get(node.val)!
      rootMap.delete(node.val)
      return build(matched)
    }

    node.left = build(node.left)
    node.right = build(node.right)

    return node
  }

  const merged = build(start)

  if (rootMap.size > 0) {
    return null // 還有樹沒被接上
  }

  let prev = -Infinity
  let isValid = true

  const validate = (node: TreeNode | null) => {
    if (!node || !isValid) {
      return
    }

    validate(node.left)

    if (node.val > prev) {
      prev = node.val
    } else {
      isValid = false
    }

    validate(node.right)
  }

  validate(merged)

  return isValid ? merged : null
}

canMerge([new BinaryTree([2, 1]).root, new BinaryTree([3, 2, 5]).root, new BinaryTree([5, 4]).root]).print() // TreeNode { val: 3, left: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: null }, right: TreeNode { val: 5, left: TreeNode { val: 4, left: null, right: null }, right: null } }
console.log(canMerge([new BinaryTree([5, 3, 8]).root, new BinaryTree([3, 2, 6]).root])) // null
console.log(canMerge([new BinaryTree([5, 4]).root, new BinaryTree([3]).root])) // null
console.log(canMerge([new BinaryTree([1, null, 3]).root, new BinaryTree([3, 1]).root, new BinaryTree([4, 2]).root])) // null
