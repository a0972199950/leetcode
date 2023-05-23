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
class BST {
  root: TreeNode | null = null

  constructor (val?: number) {
    if (val !== undefined) {
      this.root = new TreeNode(val)
    }
  }

  insert (val: number) {
    if (!this.root) {
      this.root = new TreeNode(val)
      return this.root
    }

    let current = this.root

    while (true) {
      if (current.val > val) {
        if (!current.left) {
          current.left = new TreeNode(val)
          return this.root
        } else {
          current = current.left
        }
      }
      else if (current.val < val) {
        if (!current.right) {
          current.right = new TreeNode(val)
          return this.root
        } else {
          current = current.right
        }
      }
      else {
        console.error('會出現重複數字喔')
        return this.root
      }
    }
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const bst = new BST()

  const recursive = (nums: number[]) => {
    if (!nums.length) {
      return
    }

    const middle = Math.floor(nums.length / 2)
    bst.insert(nums[middle])
    console.log(nums[middle])

    recursive(nums.slice(0, middle))
    recursive(nums.slice(middle + 1))
  }

  recursive(nums)

  console.log(bst)
  return bst.root
}

sortedArrayToBST([-10, -3, 0, 5, 9])
// sortedArrayToBST([0, 1, 2, 3, 4, 5])

export {}
