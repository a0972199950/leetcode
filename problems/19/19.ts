// 19. Remove Nth Node From End of List
// 最後練習時間：2026-09-25
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let distance = 1
//   let curr = head
//   let target = null
//   let targetPrev = null

//   if (!head) {
//     return null
//   }

//   do {
//     curr = curr.next

//     if (distance < n) {
//       distance++
//     }

//     if (distance === n && !target) {
//       target = head
//     }
//     else {
//       targetPrev = target
//       target = target.next
//     }
//   }
//   while (curr?.next)

//   console.log(targetPrev?.val, target?.val)

//   if (target && targetPrev) {
//     targetPrev.next = target.next
//     return head
//   }
//   else if (target && !targetPrev) {
//     return head.next
//   }
//   else {
//     return head
//   }
// }

// 一般陣列法
// Time: O(n)
// Space: O(n)
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const arr = []
//   const dummy = new ListNode(null, head)
//   let curr = dummy

//   while (curr) {
//     arr.push(curr)
//     curr = curr.next
//   }

//   const index = arr.length - n
//   arr[index - 1].next = arr[index + 1] || null

//   return dummy.next
// }

// 雙指針法
// Time: O(n)
// Space: O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(null, head)

  let slow = dummy
  let fast = dummy

  for (let i = 1; i < n; i++) {
    fast = fast.next
  }

  let prev = slow

  while (fast?.next) {
    prev = slow
    slow = slow.next
    fast = fast.next
  }

  prev.next = slow.next

  return dummy.next
}

removeNthFromEnd(new LinkedList([1, 2, 3, 4, 5]).head, 2).print() // [ 1, 2, 3, 5 ]
console.log(removeNthFromEnd(new LinkedList([1]).head, 1)) // null
removeNthFromEnd(new LinkedList([1, 2]).head, 1).print() // [ 1 ]
