class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head
  if (!current) {
    return null
  }

  const result = [current]
  let duplicate: number | null = null

  while (current.next) {
    current = current.next

    if (current.val === result.at(-1).val) {
      duplicate = result.at(-1).val
      continue
    } else {
      if (duplicate !== null) {
        result.pop()
        duplicate = null
      }

      if (result.at(-1)) {
        result.at(-1).next = current
      }
      result.push(current)
    }
  }

  if (duplicate !== null) {
    result.pop()
  }

  if (result.at(-1)) {
    result.at(-1).next = null
  }

  console.log(result.map(item => item.val))
  console.log(result[0])
  return result[0] || null
}

const nodes = [
  new ListNode(1),
  new ListNode(2),
  new ListNode(3),
  new ListNode(3),
  new ListNode(4),
  new ListNode(4),
  new ListNode(5)
]

nodes.reduce((a, b) => a.next = b)

// const nodes = [
//   new ListNode(1),
//   new ListNode(1),
//   new ListNode(1),
//   new ListNode(2),
//   new ListNode(3)
// ]

// nodes.reduce((a, b) => a.next = b)

// const nodes = [
//   new ListNode(1),
//   new ListNode(1)
// ]

// nodes.reduce((a, b) => a.next = b)

deleteDuplicates(nodes[0])

export {}