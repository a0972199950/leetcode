import fs from 'fs-extra'

const raw = process.argv.slice(2).join(' ')
const dotIndex = raw.indexOf('.')
const problemNumber = dotIndex !== -1 ? raw.slice(0, dotIndex).trim() : raw.split(' ')[0].trim()
const problemTitle = dotIndex !== -1 ? raw.slice(dotIndex + 1).trim() : raw.split(' ').slice(1).join(' ').trim()

const template = `// ${problemNumber}. ${problemTitle}

export {}
console.clear()

// paste function here

console.log()
`.replace(/\n/g, '\r')

if (!fs.existsSync(`problems/${String(problemNumber)}.ts`)) {
  fs.outputFileSync(`problems/${String(problemNumber)}.ts`, template)
} else {
  console.warn('File exists')
}
