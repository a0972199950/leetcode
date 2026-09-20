// 206. Reverse Linked List
// 最後練習時間：2026-09-20
// https://leetcode.com/problems/reverse-linked-list/

import { LinkedList, ListNode } from '~/data-structure/linked-list'

console.clear()

// 迭代
// Time: O(n)
// Space: O(1)
// function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null
//   let curr = head

//   while (curr) {
//     const next = curr.next

//     curr.next = prev
//     prev = curr
//     curr = next
//   }

//   return prev
// }

// 遞迴
// Time: O(n)
// Space: O(n)
function reverseList(head: ListNode | null): ListNode | null {
  const reverse = (node: ListNode | null, prev: ListNode | null): ListNode | null => {
    if (!node) {
      return null
    }

    const next = node.next
    node.next = prev
    
    return reverse(next, node) || node
  }

  return reverse(head, null)
}

reverseList(new LinkedList([1, 2, 3, 4, 5]).head).print() // [ 5, 4, 3, 2, 1 ]
reverseList(new LinkedList([1, 2]).head).print() // [ 2, 1 ]
console.log(reverseList(new LinkedList([]).head)) // null
