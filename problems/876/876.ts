// 876. Middle of the Linked List
// 最後練習時間：2026-09-23
// https://leetcode.com/problems/middle-of-the-linked-list/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// Time: O(n/2)
// Space: O(1)
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head

  while (fast?.next) {
    slow = slow.next
    fast = fast.next?.next
  }

  return slow
}

console.log(middleNode(new LinkedList([1, 2, 3, 4, 5]).head)) // 3
console.log(middleNode(new LinkedList([1, 2, 3, 4, 5, 6]).head)) // 4
