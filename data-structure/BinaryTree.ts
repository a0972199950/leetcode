class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  print (): void {
    printTree(this)
  }
}

interface TreeBlock {
  lines: string[]
  width: number
  center: number // 節點標籤中心在區塊內的欄位
}

function printTree (root: TreeNode | null): void {
  if (!root) {
    console.log('(empty tree)')
    return
  }

  const pad = (s: string, width: number): string =>
    s.length >= width ? s : s + ' '.repeat(width - s.length)

  // 依子樹「實際寬度」排版：兩邊都有子樹才展開並排，只有單邊時父節點直接貼著子樹
  const render = (node: TreeNode): TreeBlock => {
    const label = String(node.val)
    const L = label.length

    if (!node.left && !node.right) {
      return { lines: [label], width: L, center: L >> 1 }
    }

    // 只有左子樹：父節點緊貼左子樹的右上方，一路斜下去
    if (node.left && !node.right) {
      const sub = render(node.left)
      const slashCol = sub.center + 1
      const parentCol = sub.center + 2
      return {
        lines: [
          ' '.repeat(parentCol) + label,
          ' '.repeat(slashCol) + '/',
          ...sub.lines
        ],
        width: Math.max(sub.width, parentCol + L),
        center: parentCol + (L >> 1)
      }
    }

    // 只有右子樹：父節點緊貼右子樹的左上方
    if (!node.left && node.right) {
      const sub = render(node.right)
      let parentCol = sub.center - 1 - L
      let shift = 0
      if (parentCol < 0) {
        shift = -parentCol
        parentCol = 0
      }
      const slashCol = parentCol + L
      return {
        lines: [
          ' '.repeat(parentCol) + label,
          ' '.repeat(slashCol) + '\\',
          ...sub.lines.map(l => ' '.repeat(shift) + l)
        ],
        width: Math.max(slashCol + 1, shift + sub.width),
        center: parentCol + (L >> 1)
      }
    }

    // 左右子樹都有：兩塊並排，父節點置中，用對角線接上兩邊
    const left = render(node.left)
    const right = render(node.right)
    const gap = 1
    const lc = left.center
    // 兩個子節點中心至少隔這麼開，父節點與 / \ 才有落腳空間
    // （左子樹若本身是單邊鏈，它的 center 會貼在自己右緣，butt 起來就沒空間了）
    const minSpread = L + 3
    let rightOffset = left.width + gap
    if (rightOffset + right.center - lc < minSpread) {
      rightOffset = lc + minSpread - right.center
    }
    const rc = rightOffset + right.center
    const parentCenter = Math.round((lc + rc) / 2)
    const labelStart = Math.max(0, parentCenter - (L >> 1))
    const leftSlash = labelStart - 1
    const rightSlash = labelStart + L
    const leftSteps = Math.max(1, leftSlash - lc)
    const rightSteps = Math.max(1, rc - rightSlash)
    const connH = Math.max(leftSteps, rightSteps)
    const totalWidth = Math.max(rightOffset + right.width, labelStart + L)

    const out: string[] = [pad(' '.repeat(labelStart) + label, totalWidth)]

    for (let i = 0; i < connH; i++) {
      const row = new Array(totalWidth).fill(' ')
      const lCol = i < leftSteps ? Math.max(leftSlash - i, lc) : lc
      const rCol = i < rightSteps ? Math.min(rightSlash + i, rc) : rc
      row[lCol] = i < leftSteps ? '/' : '|'
      row[rCol] = i < rightSteps ? '\\' : '|'
      out.push(row.join(''))
    }

    const h = Math.max(left.lines.length, right.lines.length)
    for (let i = 0; i < h; i++) {
      const l = i < left.lines.length ? left.lines[i] : ''
      const r = i < right.lines.length ? right.lines[i] : ''
      out.push(pad(pad(l, rightOffset) + r, totalWidth))
    }

    return { lines: out, width: totalWidth, center: parentCenter }
  }

  const output = render(root)
    .lines.map(line => line.replace(/\s+$/, ''))
    .join('\n')
  console.log(output)
}

class BinaryTree {
  root: TreeNode = null

  constructor (nums: number[]) {
    if (!nums.length) {
      return
    }
    
    const head = new TreeNode(nums[0])

    const queue: TreeNode[] = [head]
    let index = 1

    while (queue.length) {
      const node = queue.shift()
      const leftChild = Number.isInteger(nums[index]) ? new TreeNode(nums[index]) : null
      index++
      const rightChild = Number.isInteger(nums[index]) ? new TreeNode(nums[index]) : null
      index++

      node.left = leftChild
      node.right = rightChild

      if (leftChild) { queue.push(leftChild) }
      if (rightChild) { queue.push(rightChild) }
    }

    this.root = head
  }

  printInOrder () {
    const result = []

    const treverse = (node: TreeNode | null) => {
      if (!node) {
        return
      }

      node.left && treverse(node.left)
      result.push(node.val)
      node.right && treverse(node.right)
    }

    treverse(this.root)
    return result
  }

  print (): void {
    printTree(this.root)
  }
}

class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

class NodeTree {
  root: Node = null

  constructor (nums: number[]) {
    if (!nums.length) {
      return
    }
    
    const head = new Node(nums[0])

    const queue: Node[] = [head]
    let index = 1

    while (queue.length) {
      const node = queue.shift()
      const leftChild = Number.isInteger(nums[index]) ? new Node(nums[index]) : null
      index++
      const rightChild = Number.isInteger(nums[index]) ? new Node(nums[index]) : null
      index++

      node.left = leftChild
      node.right = rightChild

      if (leftChild) { queue.push(leftChild) }
      if (rightChild) { queue.push(rightChild) }
    }

    this.root = head
  }

  printInOrder () {
    const result = []

    const treverse = (node: Node | null) => {
      if (!node) {
        return
      }

      node.left && treverse(node.left)
      result.push(node.val)
      node.right && treverse(node.right)
    }

    treverse(this.root)
    return result
  }
}

export { BinaryTree, TreeNode, Node, NodeTree }
