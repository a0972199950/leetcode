// 328. Odd Even Linked List
// https://leetcode.com/problems/odd-even-linked-list/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  const thirdNode = head?.next?.next

  if (!thirdNode) {
    return head
  }

  let previous = head
  let current = head.next
  let next = current.next

  const oddHead = previous // 奇數頭
  const evenHead = current // 偶數頭

  let oddTail = oddHead // 奇數尾
  let eventTail = evenHead // 偶數尾

  do {
    current.next = null
    previous.next = next

    if (oddTail.next) {
      oddTail = oddTail.next
    }

    if (eventTail.next) {
      eventTail = eventTail.next
    }

    previous = current
    current = next
    next = next.next
  } while (next)

  oddTail.next = evenHead

  return head
}

const input = [1, 2, 3, 4, 5, 6, 7].map(num => new ListNode(num))
input.reduce((prev, curr) => prev.next = curr)

oddEvenList(input[0])

