// 61. Rotate List
import { ListNode, LinkedList } from '../data-structure/LinkedList'

export {}
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

console.log(rotateRight(new LinkedList([1, 2, 3, 4, 5]).head, 2))
console.log(rotateRight(new LinkedList([0, 1, 2]).head, 4))
console.log(rotateRight(new LinkedList([0, 1, 2]).head, 3))
console.log(rotateRight(new LinkedList([]).head, 0))
