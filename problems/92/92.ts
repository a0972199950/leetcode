// 92. Reverse Linked List II
// 最後練習時間：2026-09-25
// https://leetcode.com/problems/reverse-linked-list-ii/
import { ListNode, LinkedList } from '~/data-structure/linked-list'

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

// Time: O(n)
// Space: O(1)
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(null, head)
  let curr = dummy
  let position = 0

  let leftBoundary: ListNode | null = null
  let tail: ListNode
  let prev = dummy

  while (curr) {
    const next = curr?.next

    if (position === left) {
      leftBoundary = prev
      tail = curr
      curr.next = null
    }

    if (left < position && position <= right) {
      curr.next = prev

      if (position === right) {
        leftBoundary.next = curr
      }
    }

    if (position === right + 1) {
      tail.next = curr
      break
    }

    prev = curr
    curr = next
    position++
  }

  // console.log('leftBoundary: ', leftBoundary, 'tail: ', tail, 'dummy: ', dummy)

  return dummy.next
}

reverseBetween(new LinkedList([1, 2, 3, 4, 5]).head, 2, 4).print() // [ 1, 4, 3, 2, 5 ]
reverseBetween(new LinkedList([5]).head, 1, 1).print() // [ 5 ]
reverseBetween(new LinkedList([3, 5]).head, 1, 2).print() // [5, 3]

