const args = process.argv.slice(2)

const [arg1, arg2] = args

if (/\d/.test(arg1)) {
  (() => import(`../problems/${arg1}.ts`))()
} else {
  (() => import(`../interviews/${arg1}/${arg2}.ts`))()
}

export {}
