// 86. Partition List
// 最後練習時間：2024-06-15
// https://leetcode.com/problems/partition-list/
import { ListNode, LinkedList } from '../../data-structure/LinkedList'

console.clear()

interface Group {
  head: ListNode | null
  current: ListNode | null
}

function partition(head: ListNode | null, x: number): ListNode | null {
  const front: Group = {
    head: null,
    current: null
  }

  const back: Group = {
    head: null,
    current: null
  }

  const append = (group: Group, node: ListNode) => {
    if (!group.head) {
      group.head = node
    }

    if (group.current) {
      group.current.next = node
    }

    group.current = node
  }

  let current = head
  while (current) {
    if (current.val < x) {
      append(front, current)
    } else {
      append(back, current)
    }

    current = current.next
  }

  front.current && (front.current.next = back.head)
  back.current && (back.current.next = null)
  return front.head || back.head
}

console.log(partition(new LinkedList([1, 4, 3, 2, 5, 2]).head, 3)) // Expected: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 2, next: ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 5, next: null } } } } } }
console.log(partition(new LinkedList([2, 1]).head, 2)) // Expected: ListNode { val: 1, next: ListNode { val: 2, next: null } }
console.log(partition(new LinkedList([]).head, 0)) // Expected: null
console.log(partition(new LinkedList([1]).head, 0)) // Expected: ListNode { val: 1, next: null }
