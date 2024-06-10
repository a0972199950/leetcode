console.clear()

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  let direction = 'right'
  let level = [root]
  const result = [[root.val]]

  const switchDirection = () => {
    direction = direction === 'right' ? 'left' : 'right'
  }

  while (level.length) {
    const nextLevel = []
    const nextResult = []

    const push = (node: TreeNode | null) => {
      if (!node) return

      nextLevel.push(node)
      nextResult.push(node.val)
    }

    for (let i = level.length - 1; i >= 0; i--) {
      const node = level[i]

      if (direction === 'right') {
        push(node.right)
        push(node.left)
      }
      else {
        push(node.left)
        push(node.right)
      }
    }

    nextResult.length && result.push(nextResult)
    level = nextLevel
    switchDirection()
  }

  console.log(result)
  return result
}

const node3 = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node100 = new TreeNode(100)
const node200 = new TreeNode(200)

node3.left = node9
node3.right = node20
node20.left = node15
node20.right = node7
node9.left = node1
node9.right = node2
node2.right = node100
node15.left = node200

zigzagLevelOrder(node3)


