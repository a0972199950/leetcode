const args = process.argv.slice(2)

const [filename] = args

;(() => import(`../data-structure/${filename}.test.ts`))()
