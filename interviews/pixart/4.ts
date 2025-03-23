const solution = (path) => {
  const stack = []
  const parts = path.split('/')

  for (const part of parts) {
    if (part === '~') {
      stack.push('home')
      stack.push('users')
      stack.push('demo')
      continue
    }

    if (part === '..') {
      stack.pop()
      continue
    }

    if (part === '.' || !part) {
      continue
    }

    stack.push(part)
  }

  return '/' + stack.join('/')
}

// console.log(solution("a/b/c"));
// console.log(solution("a/b/../c"));
// console.log(solution("~/a/b/c"));

console.log(solution('/a/b/c'))

export default ''
