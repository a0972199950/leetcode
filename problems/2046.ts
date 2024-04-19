// 2046. Sort Linked List Already Sorted Using Absolute Values
import { ListNode, LinkedList } from '../data-structure/LinkedList'

console.clear()

function sortLinkedList(head: ListNode | null): ListNode | null {
  let finalHead = head

  let last = head
  let current = head.next

  const insertFromHead = (node: ListNode) => {
    if (node.val < finalHead.val) {
      replaceHead(node)
      return
    }

    let last = finalHead
    let current = finalHead.next
    while (current.val < node.val) {
      current = current.next
      last = last.next

      if (current === null || last === null) {
        throw('出錯')
      }
    }

    last.next = node
    node.next = current
  }

  const replaceHead = (node: ListNode) => {
    node.next = finalHead
    finalHead = node
  }

  while (current) {
    if (current.val >= last.val) {
      current = current.next
      last = last.next
      continue
    }

    const target = current
    last.next = current.next
    current = current.next
    insertFromHead(target)
  }

  return finalHead
}

// console.log(sortLinkedList(new LinkedList([0,2,-5,5,10,-10]).head))
// console.log(sortLinkedList(new LinkedList([0,1,2]).head))
// console.log(sortLinkedList(new LinkedList([1]).head))
console.log(sortLinkedList(new LinkedList([0, 0, 0, 0, 0, 0, 0]).head))

export {}
