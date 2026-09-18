class TreeNode {
  val: number
  left: TreeNode | null = null
  right: TreeNode | null = null
  height = 1
  balance = 0

  constructor (val: number) {
    this.val = val
  }
}

enum RotateDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

enum NodeDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export class AVL {
  root: TreeNode | null = null

  constructor (val?: number) {
    if (val !== undefined) {
      this.root = new TreeNode(val)
    }
  }

  _updateHeight (node: TreeNode) {
    const leftHeight = node.left?.height ?? 0
    const rightHeight = node.right?.height ?? 0

    node.height = Math.max(leftHeight, rightHeight) + 1
    node.balance = Math.abs(leftHeight - rightHeight)
  }

  _rotate (child: TreeNode, parent: TreeNode, grandParent?: TreeNode) {
    const checkRotateDirection = (child: TreeNode, parent: TreeNode) => {
      if (parent.left === child) {
        return RotateDirection.RIGHT
      }
      else if (parent.right === child) {
        return RotateDirection.LEFT
      }
      else {
        console.error('Parent and child is not near')
        return null
      }
    }

    const direction = checkRotateDirection(child, parent)
    if (!direction) {
      return
    }

    if (direction === RotateDirection.LEFT) {
      const temp = child.left
      child.left = parent
      parent.right = temp
    }
    else if (direction === RotateDirection.RIGHT) {
      const temp = child.right
      child.right = parent
      parent.left = temp
    }

    if (grandParent) {
      if (grandParent.left === parent) {
        grandParent.left = child
      }
      else if (grandParent.right === parent) {
        grandParent.right = child
      }
      else {
        console.error('Grandparent 錯誤')
      }
    }

    if (this.root === parent) {
      this.root = child
    }

  }

  insert (val: number) {
    if (!this.root) {
      this.root = new TreeNode(val)
      return this.root
    }

    const treverseHistory: {
      node: TreeNode
      isDirectionOfParent: NodeDirection | null
    }[] = []

    const recrusive = (node: TreeNode, direction: null | NodeDirection) => {
      treverseHistory.push({ node, isDirectionOfParent: direction })

      if (val < node.val) {
        if (!node.left) {
          node.left = new TreeNode(val)
          treverseHistory.push({ node: node.left, isDirectionOfParent: NodeDirection.LEFT })
        } else {
          recrusive(node.left, NodeDirection.LEFT)
        }
      }
      else if (val > node.val) {
        if (!node.right) {
          node.right = new TreeNode(val)
          treverseHistory.push({ node: node.right, isDirectionOfParent: NodeDirection.RIGHT })
        } else {
          recrusive(node.right, NodeDirection.RIGHT)
        }
      }
      else {
        throw new Error('值不可重複')
      }

      this._updateHeight(node)
    }

    recrusive(this.root, null)

    let lastUnBalancedNodeIndex = -1
    for (let i = treverseHistory.length - 1; i >= 0; i--) {
      if (treverseHistory[i].node.balance > 1) {
        lastUnBalancedNodeIndex = i
        break
      }
    }

    if (lastUnBalancedNodeIndex > -1) {
      const grandParent = treverseHistory[lastUnBalancedNodeIndex - 1]
      const parent = treverseHistory[lastUnBalancedNodeIndex]
      const child = treverseHistory[lastUnBalancedNodeIndex + 1]
      const grandChild = treverseHistory[lastUnBalancedNodeIndex + 2]

      if (child.isDirectionOfParent === grandChild.isDirectionOfParent) {
        this._rotate(child.node, parent.node, grandParent?.node)
        this._updateHeight(parent.node)
        this._updateHeight(child.node)
      }
      else {
        this._rotate(grandChild.node, child.node, parent.node)
        this._rotate(grandChild.node, parent.node, grandParent?.node)
        this._updateHeight(child.node)
        this._updateHeight(parent.node)
        this._updateHeight(grandChild.node)
      }

      for (let i = lastUnBalancedNodeIndex - 1; i >= 0; i--) {
        this._updateHeight(treverseHistory[i].node)
      }
    }

    return this.root
  }

  printInOrder () {
    const result: number[] = []

    const inOrderTreverse = (node: TreeNode | null) => {
      if (!node) {
        return
      }

      if (node.left) {
        inOrderTreverse(node.left)
      }

      result.push(node.val)

      if (node.right) {
        inOrderTreverse(node.right)
      }
    }

    inOrderTreverse(this.root)

    console.log(result)
  }
}

