// 138. Copy List with Random Pointer

export {}
console.clear()

// class Node {
//   val: number
//   next: Node | null
//   random: Node | null
//   index?: number

//   constructor (val?: number, next?: Node, random?: Node) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//     this.random = (random === undefined ? null : random)
//   }
// }

// function copyRandomList(head: Node | null): Node | null {
//   let current = head
//   let index = 0

//   while (current) {
//     current.index = index
//     index++
//     current = current.next
//   }

//   index--

//   const result = []
//   let last = null
//   current = head

//   while (current) {
//     const index = current.index

//     if (!result[index]) {
//       result[index] = new Node(current.val)
//     }

//     if (current.random === null) {
//       result[index].random = null
//     }
//     else {
//       const randomIndex = current.random.index

//       if (!result[randomIndex]) {
//         result[randomIndex] = new Node(current.random.val)
//       }

//       result[index].random = result[randomIndex]
//     }

//     if (last) {
//       last.next = result[index]
//     }

//     last = result[index]
//     current = current.next
//   }

//   return result[0]
// }


class Node {
  val: number
  next: Node | null
  random: Node | null

  constructor (val?: number, next?: Node, random?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

function copyRandomList(head: Node | null): Node | null {
  const originNodeArray = []
  const resultNodeArray = []

  const originCurrent = head
  const resultCurrent = null

  while (originCurrent) {
    originNodeArray
  }
}

console.log(copyRandomList())


