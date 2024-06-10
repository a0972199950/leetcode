// 2096. Step-By-Step Directions From a Binary Tree Node to Another
import { TreeNode, BinaryTree } from '../data-structure/BinaryTree'

console.clear()

// type Path = 'L' | 'R' | 'U'

// function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
//   let result = null

//   const reverse = (paths: Path[]) => {
//     return paths.map(() => 'U')
//   }

//   const dfs = (node: TreeNode | null, relationship: 'L' | 'R') => {
//     if (!node || result) {
//       return false
//     }

//     if ([startValue, destValue].includes(node.val)) {
//       const found = dfs(node.left, 'L') || dfs(node.right, 'R')

//       if (!found) {
//         return {
//           val: node.val,
//           paths: [relationship]
//         }
//       }

//       if (node.val === startValue) {
//         result = found.paths
//       } else {
//         result = reverse(found.paths)
//       }

//       return false
//     }

//     const foundLeft = dfs(node.left, 'L')
//     const foundRight = dfs(node.right, 'R')

//     if (foundLeft && foundRight) {
//       if (foundLeft.val === startValue) {
//         result = reverse(foundLeft.paths).concat(foundRight.paths)
//       } else {
//         result = reverse(foundRight.paths).concat(foundLeft.paths)
//       }

//       return false
//     }
//     else if (foundLeft) {
//       return {
//         ...foundLeft,
//         paths: [relationship, ...foundLeft.paths]
//       }
//     }
//     else if (foundRight) {
//       return {
//         ...foundRight,
//         paths: [relationship, ...foundRight.paths]
//       }
//     }
//     else {
//       return false
//     }
//   }

//   dfs(root, 'L')

//   return result.join('')
// }

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  let rootToStart: string | null = null
  let rootToDest: string | null = null

  const dfs = (node: TreeNode | null, path: string) => {
    if (!node || (rootToStart !== null && rootToDest !== null)) {
      return
    }

    if (node.val === startValue) {
      rootToStart = path
    }

    if (node.val === destValue) {
      rootToDest = path
    }

    dfs(node.left, path + 'L')
    dfs(node.right, path + 'R')
  }

  dfs(root, '')

  // console.log('rootToStart: ', rootToStart, 'rootToDest: ', rootToDest)

  let diffStartAt

  for (let i = 0; i <= Math.min(rootToStart.length, rootToDest.length); i++) {
    if (rootToStart[i] !== rootToDest[i]) {
      diffStartAt = i
      break
    }
  }

  // console.log('diffStartAt: ', diffStartAt)

  return Array(rootToStart.slice(diffStartAt).length).fill('U').join('') + rootToDest.slice(diffStartAt)
}

console.log(getDirections(new BinaryTree([5, 1, 2, 3, null, 6, 4]). root, 3, 6))
console.log(getDirections(new BinaryTree([2, 1]).root, 2, 1))


