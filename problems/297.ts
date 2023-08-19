// 297. Serialize and Deserialize Binary Tree
import { TreeNode, BinaryTree } from '~/data-structure/BinaryTree'

console.clear()

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) {
    return ''
  }

  const result: (number | null)[] = [root.val]
  let layer = [root]
  let nullCount = 0

  while (layer.length) {
    layer = layer.reduce((sum, node) => {
      const nextNodes = [node.left, node.right].reduce((sum, node) => {
        if (!node) {
          nullCount++
        } else {
          result.push(
            ...Array(nullCount).fill(null),
            node.val
          )

          nullCount = 0
          sum.push(node)
        }

        return sum
      }, [])

      return [...sum, ...nextNodes]
    }, [])
  }

  return JSON.stringify(result)
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let arr: (number | null)[] = []

  try {
    arr = JSON.parse(data)
    if (!Array.isArray(arr)) {
      throw ''
    }
  } catch (e) {
    return null
  }

  let index = 0
  const queue = []
  let root: null | TreeNode = null

  while (index < arr.length) {
    let node = typeof arr[index] === 'number' ? new TreeNode(arr[index]) : null

    if (!queue.length) {
      if (node) {
        queue.push(node)
      }
      root = node
      index++
      continue
    }
    
    const parent = queue.shift()
    parent.left = node
    if (node) {
      queue.push(node)
    }

    index++
    node = typeof arr[index] === 'number' ? new TreeNode(arr[index]) : null
    parent.right = node
    if (node) {
      queue.push(node)
    }

    index++
  }

  return root
}

// console.log(deserialize('[1, 2, 3]'))
// console.log(deserialize('[1,2,3,null,null,4,5]'))
// console.log(deserialize('[1,2,3,null,null,4,5,6,7]'))
// console.log(deserialize('[]'))
// console.log(deserialize('null'))

// console.log(serialize(deserialize('[1, 2, 3]')))
// console.log(serialize(deserialize('[1,2,3,null,null,4,5]')))
// console.log(serialize(deserialize('[1,2,3,null,null,4,5,6,7]')))
// console.log(serialize(deserialize('[]')))
console.log(serialize(new BinaryTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]).root))

export {}