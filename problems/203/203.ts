// 203. Remove Linked List Elements
// 最後練習時間：2026-09-20
// https://leetcode.com/problems/remove-linked-list-elements/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// Time: O(n)
// Space: O(1)
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const prefix = new ListNode(null, head)

  let prev = prefix
  let curr = head

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
    } else {
      prev = curr
    }

    curr = curr.next
  }

  return prefix.next
}

removeElements(new LinkedList([1, 2, 6, 3, 4, 5, 6]).head, 6)?.print() // [ 1, 2, 3, 4, 5 ]
removeElements(new LinkedList([1, 2, 6, 3, 4, 5, 6]).head, 1)?.print() // [ 2, 6, 3, 4, 5, 6 ]
console.log(removeElements(new LinkedList([]).head, 1)) // null
console.log(removeElements(new LinkedList([7, 7, 7, 7]).head, 7)) // null
