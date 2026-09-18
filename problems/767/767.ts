// 767. Reorganize String
// 最後練習時間：2024-03-31
// https://leetcode.com/problems/reorganize-string/
import { Heap } from '~/data-structure/heap'

console.clear()

function reorganizeString(s: string): string {
  const map: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = ++map[s[i]] || 1
  }

  const ans: string[] = []
  const heap = new Heap<{ key: string, value: number }>((a, b) => a.value - b.value)

  Object
    .entries(map)
    .forEach(([key, value]) => {
      heap.push({ key, value: -value })
    })

  const findNext = () => {
    const nexts = [heap.shift(), heap.shift()]

    if (nexts[0].key === ans[ans.length - 1]) {
      heap.push(nexts[0])
      return nexts[1]
    } else {
      heap.push(nexts[1])
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
      heap.push(next)
    }
  }

  return ans.join('')
}

console.log(reorganizeString('aab')) // aba
console.log(reorganizeString('aaab')) // ''
console.log(reorganizeString('bbbbbbb')) // ''
console.log(reorganizeString('aabb')) // abab 或 baba（不唯一）
console.log(reorganizeString('aabbb')) // babab

