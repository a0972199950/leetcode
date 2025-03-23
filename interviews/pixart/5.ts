const friends = (know, m, n) => {
  const groups = new Set()

  function join(group, members) {
    for (const member of members) {
      group.add(member)
    }
  }

  function increase(members) {
    const group = new Set()
    for (const member of members) {
      group.add(member)
    }
    groups.add(group)
  }

  for (const part of know) {
    if (part.length === 0) {
      continue
    }
    let matchGroup = null
    let members = [...part]

    for (const group of groups) {
      for (const member of members) {
        if (group.has(member)) {
          if (!matchGroup) {
            matchGroup = group
          } else {
            members = [...members, ...group]
            groups.delete(group)
          }
        }
      }
    }

    if (matchGroup) {
      join(matchGroup, members)
    } else {
      increase(members)
    }
  }

  let size = 0
  for (const group of groups) {
    size += group.size
  }

  const diff = n - size
  return groups.size + diff
}

// console.log(friends([[0, 1], [1, 2], [3, 4]], 3, 6)) // 3
console.log(friends([[]], 0, 0)) // 0
console.log(friends([[]], 0, 1)) // 1
