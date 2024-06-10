// 767. Reorganize String
import MinHeap from '../data-structure/Heap'

console.clear()

function reorganizeString(s: string): string {
  const map: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = ++map[s[i]] || 1
  }

  const ans: string[] = []
  const heap = new MinHeap<{ key: string, value: number }>(node => node.value)

  Object
    .entries(map)
    .forEach(([key, value]) => {
      heap.insert({ key, value: -value })
    })

  const findNext = () => {
    const nexts = [heap.extract(), heap.extract()]

    if (nexts[0].key === ans[ans.length - 1]) {
      heap.insert(nexts[0])
      return nexts[1]
    } else {
      heap.insert(nexts[1])
      return nexts[0]
    }
  }

  while (ans.length < s.length) {
    const next = findNext()

    if (!next) {
      return ''
    }

    ans.push(next.key)
    next.value++

    if (next.value) {
      heap.insert(next)
    }
  }

  return ans.join('')
}

console.log(reorganizeString('aab'))
console.log(reorganizeString('aaab'))
console.log(reorganizeString('bbbbbbb'))
console.log(reorganizeString('aabb'))
console.log(reorganizeString('aabbb'))


