// 61. Rotate List
// 最後練習時間：2024-06-15
// https://leetcode.com/problems/rotate-list/
import { ListNode, LinkedList } from '../../data-structure/LinkedList'

console.clear()

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null
  }

  const arr = []

  let current = head
  while (current) {
    arr.push(current)
    current = current.next
  }

  const newHeadIndex = arr.length - (k % arr.length)
  
  if (newHeadIndex === arr.length) {
    return head
  }

  const newHead = arr[newHeadIndex]

  arr[newHeadIndex - 1].next = null
  arr.at(-1).next = arr[0]
  return newHead
}

console.log(rotateRight(new LinkedList([1, 2, 3, 4, 5]).head, 2)) // Expected: ListNode { val: 4, next: ListNode { val: 5, next: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: null } } } } }
console.log(rotateRight(new LinkedList([0, 1, 2]).head, 4)) // Expected: ListNode { val: 2, next: ListNode { val: 0, next: ListNode { val: 1, next: null } } }
console.log(rotateRight(new LinkedList([0, 1, 2]).head, 3)) // Expected: ListNode { val: 0, next: ListNode { val: 1, next: ListNode { val: 2, next: null } } }
console.log(rotateRight(new LinkedList([]).head, 0)) // Expected: null
