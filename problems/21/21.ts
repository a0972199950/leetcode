// 21. Merge Two Sorted Lists
// 最後練習時間：2026-09-20
// https://leetcode.com/problems/merge-two-sorted-lists/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// Time: O(m+n)
// Space: O(1)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head1: ListNode | null = list1
  let head2: ListNode | null = list2

  let prev = new ListNode()
  const prefix = prev

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      prev.next = head1
      prev = head1
      head1 = head1.next
    } else {
      prev.next = head2
      prev = head2
      head2 = head2.next
    }
  }

  prev.next = (head1 ? head1 : head2)

  return prefix.next
}

mergeTwoLists(new LinkedList([1, 2, 4]).head, new LinkedList([1, 3, 4]).head)?.print() // [ 1, 1, 2, 3, 4, 4 ]
console.log(mergeTwoLists(new LinkedList([]).head, new LinkedList([]).head)) // null
mergeTwoLists(new LinkedList([]).head, new LinkedList([0]).head)?.print() // [ 0 ]
