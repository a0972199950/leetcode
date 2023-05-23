/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  let slow = head
  let fast = head

  do {
    slow = slow.next
    fast = fast.next?.next
  } while (slow !== fast || fast)

  if (!fast) {
    return null
  }

  let checker = head

  while (checker !== slow) {
    checker = checker.next
    slow = slow.next
  }

  console.log(checker)

  return checker
};