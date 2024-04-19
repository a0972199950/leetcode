// 2. Add Two Numbers
import { ListNode, LinkedList } from '../data-structure/LinkedList'

console.clear()

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let currentL1 = l1
  let currentL2 = l2
  let currentNode = null
  let head = null
  let remain = 0

  while (currentL1 || currentL2) {
    let val = (currentL1?.val ?? 0) + (currentL2?.val ?? 0) + remain

    if (val >= 10) {
      remain = 1
      val -= 10
    } else {
      remain = 0
    }

    if (!currentNode) {
      currentNode = new ListNode(val)
      head = currentNode
    } else {
      currentNode.next = new ListNode(val)
      currentNode = currentNode.next
    }

    currentL1 && (currentL1 = currentL1.next)
    currentL2 && (currentL2 = currentL2.next)
  }

  if (remain) {
    currentNode.next = new ListNode(remain)
  }

  return head
}

console.log(addTwoNumbers(new LinkedList([2, 4, 3]).head, new LinkedList([5, 6, 4]).head))
console.log(addTwoNumbers(new LinkedList([0]).head, new LinkedList([0]).head))
console.log(addTwoNumbers(new LinkedList([9, 9, 9, 9, 9, 9, 9]).head, new LinkedList([9, 9, 9, 9]).head))

export {}
