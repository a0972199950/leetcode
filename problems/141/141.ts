// 141. Linked List Cycle
// 最後練習時間：2026-09-23
// https://leetcode.com/problems/linked-list-cycle/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// 走過的做記號
// Time: O(n)
// Space: O(n)
// function hasCycle(head: ListNode& { hasReached?: boolean } | null): boolean {
//   let curr = head

//   while (curr) {
//     if (curr.hasReached) {
//       return true
//     }

//     curr.hasReached = true
//     curr = curr.next
//   }

//   return false
// }

// 快慢指標
// Time: O(n)
// Space: O(1)
function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast?.next) {
    slow = slow.next
    fast = fast.next?.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

console.log(hasCycle(new LinkedList([3, 2, 0, -4], 1).head)) // true
console.log(hasCycle(new LinkedList([1, 2], 0).head)) // true
console.log(hasCycle(new LinkedList([1]).head)) // false
console.log(hasCycle(new LinkedList([1], 0).head)) // true

