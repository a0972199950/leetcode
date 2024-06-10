// 116. Populating Next Right Pointers in Each Node
import { Node, NodeTree } from '../data-structure/BinaryTree'

console.clear()

function connect(root: Node | null): Node | null {
  if (!root) {
    return null
  }

  const queue = [root]

  while (queue.length) {
    console.log(queue)
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift()

      if (i !== queueLength - 1) {
        node.next = queue[0]
      }

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  console.log(root)
  return root
}

connect(new NodeTree([1, 2, 3, 4, 5, 6, 7]).root)


