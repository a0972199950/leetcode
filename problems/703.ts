// 703. Kth Largest Element in a Stream

export {}
console.clear()

// 限制只有 k size 的 min heap
class KthLargest {
  data: number[] = []
  k: number

  constructor(k: number, nums: number[]) {
    this.k = k

    for (const num of nums) {
      this._insert(num)
    }

    while (this.data.length > k) {
      this._extract()
    }
  }

  add(val: number): number {
    if (val >= (this.data[0] ? this.data[0] : -Infinity)) {
      this._insert(val)

      while (this.data.length > this.k) {
        this._extract()
      }
    }

    return this.data[0]
  }

  _insert (val: number) {
    this.data.push(val)
    let current = this.data.length - 1

    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)

      if (this.data[parent] < this.data[current]) {
        break
      }

      [this.data[parent], this.data[current]] = [this.data[current], this.data[parent]]
      current = parent
    }
  }

  _extract () {
    const val = this.data.shift()

    if (this.data.length) {
      this.data.unshift(this.data.pop())

      let current = 0

      while (current < this.data.length) {
        const left = current * 2 + 1
        const right = current * 2 + 2
        let swap = current

        if (this.data[left] < this.data[swap]) {
          swap = left
        }

        if (this.data[right] < this.data[swap]) {
          swap = right
        }

        if (swap === current) {
          break
        }

        [this.data[swap], this.data[current]] = [this.data[current], this.data[swap]]
        current = swap
      }
    }

    return val
  }
}

// Binary search
// class KthLargest {
//   data: number[]
//   k: number

//   constructor(k: number, nums: number[]) {
//     this.k = k
//     this.data = nums.sort((a, b) => b - a)
//   }

//   add(val: number): number {
//     let left = 0
//     let right = this.data.length - 1
//     let middle

//     while (right >= left) {
//       middle = Math.floor(left + (right - left) / 2)

//       if (this.data[middle] > val) {
//         left = middle + 1
//       } else {
//         right = middle - 1
//       }
//     }

//     if (this.data[middle] > val) {
//       middle++
//     }

//     this.data.splice(middle, 0, val)

//     return this.data[this.k - 1]
//   }
// }

// 二元搜尋樹
// class Node {
//   val: number
//   count = 1
//   left: Node | null = null
//   right: Node | null = null

//   constructor (val: number) {
//     this.val = val
//   }
// }

// class KthLargest {
//   head: Node | null = null
//   k: number

//   constructor(k: number, nums: number[]) {
//     this.k = k

//     for (const num of nums) {
//       this._insert(num)
//     }
//   }

//   add(val: number): number {
//     this._insert(val)
//     return this._inorderTreverse()[this.k - 1]
//   }

//   _insert (val: number) {
//     const node = new Node(val)

//     if (!this.head) {
//       this.head = node
//       return
//     }

//     let current = this.head

//     while (true) {
//       if (val === current.val) {
//         current.count++
//         return
//       }
  
//       if (val < current.val) {
//         if (!current.left) {
//           current.left = node
//           return
//         }

//         current = current.left
//       }

//       if (val > current.val) {
//         if (!current.right) {
//           current.right = node
//           return
//         }

//         current = current.right
//       }
//     }
//   }

//   _inorderTreverse () {
//     const result = []

//     const inorder = (node: Node | null) => {
//       if (!node || result.length >= this.k) {
//         return
//       }
      
//       inorder(node.right)
//       result.push(...Array(node.count).fill(node.val))
//       inorder(node.left)
//     }

//     inorder(this.head)

//     return result
//   }
// }

const kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.add(3))   // return 4
console.log(kthLargest.add(5))   // return 5
console.log(kthLargest.add(10))  // return 5
console.log(kthLargest.add(9))   // return 8
console.log(kthLargest.add(4))   // return 8


