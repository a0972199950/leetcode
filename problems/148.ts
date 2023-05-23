// 148. Sort List

import { LinkedList, ListNode } from '../data-structure/LinkedList'

console.clear()

function sortList(head: ListNode | null): ListNode | null {
  const nodes: ListNode[] = []
  let current = head

  while (current) {
    nodes.push(current)
    current = current.next
  }

  if (nodes.length) {
    nodes
      .sort((a, b) => a.val - b.val)
      .reduce((prev, next) => {
        if (prev) {
          prev.next = next
        }
        return next
      })

    nodes.at(-1).next = null
  }

  console.log(nodes)
  return nodes[0] || null
}

console.log(sortList(new LinkedList([4, 2, 1, 3]).data))
console.log(sortList(new LinkedList([]).data))

export {}
