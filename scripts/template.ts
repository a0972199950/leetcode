import fs from 'fs-extra'

const args = process.argv.slice(2)

const problemNumber = args[0].replace('.', '')
const problemTitle = args.slice(1).join(' ')

const template = `// ${problemNumber}. ${problemTitle}

console.clear()

// paste function here

export {}
`.replace(/\n/g, '\r')

if (!fs.existsSync(`problems/${String(problemNumber)}.ts`)) {
  fs.outputFileSync(`problems/${String(problemNumber)}.ts`, template)
} else {
  console.warn('File exists')
}
