// 142. Linked List Cycle II
// 最後練習時間：2026-09-24
// https://leetcode.com/problems/linked-list-cycle-ii/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// function detectCycle(head: ListNode | null): ListNode | null {
//   if (!head) {
//     return null
//   }

//   let slow = head
//   let fast = head

//   do {
//     slow = slow.next
//     fast = fast.next?.next
//   } while (slow !== fast || fast)

//   if (!fast) {
//     return null
//   }

//   let checker = head

//   while (checker !== slow) {
//     checker = checker.next
//     slow = slow.next
//   }

//   console.log(checker)

//   return checker
// }

// Time: O(n)
// Space: O(n)
// function detectCycle(head: ListNode & { visited?: boolean } | null): ListNode | null {
//   let curr = head

//   while (curr) {
//     if (curr.visited) {
//       return curr
//     }

//     curr.visited = true
//     curr = curr.next
//   }

//   return null
// }

// Time: O(n)
// Space: O(1)
function detectCycle(head: ListNode| null): ListNode | null {
  let slow = new ListNode(null, head)
  let fast = new ListNode(null, head)

  while (fast?.next && slow !== fast) {
    slow = slow.next
    fast = fast?.next?.next
  }

  if (!fast || (slow !== fast)) {
    return null
  }

  let slow2 = new ListNode(null, head)

  while (slow2 !== slow) {
    slow2 = slow2.next
    slow = slow.next
  }

  return slow2
}

console.log(detectCycle(new LinkedList([3, 2, 0, -4], 1).head)) // 2
console.log(detectCycle(new LinkedList([1, 2], 0).head)) // 1
console.log(detectCycle(new LinkedList([1]).head)) // null
