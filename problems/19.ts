// 19. Remove Nth Node From End of List

import { LinkedList } from '../data-structure/LinkedList'

console.clear()

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let distance = 1
  let curr = head
  let target = null
  let targetPrev = null

  if (!head) {
    return null
  }

  do {
    curr = curr.next

    if (distance < n) {
      distance++
    }

    if (distance === n && !target) {
      target = head
    }
    else {
      targetPrev = target
      target = target.next
    }
  }
  while (curr?.next)

  console.log(targetPrev?.val, target?.val)

  if (target && targetPrev) {
    targetPrev.next = target.next
    return head
  }
  else if (target && !targetPrev) {
    return head.next
  }
  else {
    return head
  }
}

removeNthFromEnd(new LinkedList([1, 2, 3, 4, 5]).data, 2)

export {}
