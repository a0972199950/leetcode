import { AVL } from './avl'

console.clear()

const avl = new AVL(0)
Array.from(Array(100)).forEach((_item, index) => avl.insert(index + 1))

console.log(avl.root)
// TreeNode { val: 63, height: 7, balance: 0, left: TreeNode { val: 31, ... }, right: TreeNode { val: 79, ... } }
// （插入 0~100 共 101 個節點後，AVL 自動旋轉平衡的結果）

avl.printInOrder()
// [0, 1, 2, ..., 100]（中序走訪應印出完整排序過的陣列）
