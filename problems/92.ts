// 92. Reverse Linked List II
import { ListNode, LinkedList } from '../data-structure/LinkedList'

export {}
console.clear()

// function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
//   let current = head
//   let start = null
//   let index = 1

//   while (index < left) {
//     start = current
//     current = current.next
//     index++
//   }

//   const stack: ListNode[] = []

//   while (index <= right) {
//     stack.push(current)
//     current = current.next
//     index++
//   }

//   const end = current
//   current = start

//   while (stack.length) {
//     const node = stack.pop()

//     if (!current) {
//       current = node
//       head = node
//       continue
//     }

//     current.next = node
//     current = current.next
//   }

//   current.next = end

//   return head
// }

console.log(reverseBetween(new LinkedList([1, 2, 3, 4, 5]).head, 2, 4))
// console.log(reverseBetween(new LinkedList([5]).head, 1, 1))
// console.log(reverseBetween(new LinkedList([3, 5]).head, 1, 2))


