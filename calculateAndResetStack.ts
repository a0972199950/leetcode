// 标题
// [Coding] Calculate the CSS selector’s weight

// 题目描述
// When the browser renders the html page with css, it will calculate the weight of different css selectors to decide the rendering priority of each css rule.​

// To simplify the question, assuming that the weight of selector is decided by the sum of the atom selector’s weight, the weight of each atom selector are list as below:​
// ID selector, weight is 1000, e.g. “#container”, “#sidebar”​
// class, attribute, and pseudo-class selectors, weight is 100, e.g. “.element”, “[type=text]”, “:hover”​
// type and pseudo element selectors, weight is 10, e.g. “body”, “input”, “::before”​

// According to the algorithm above, the weight of “#container .section > .header::before” is the sum of “#container”, “.section”, “.header”, "::before", which is 1210. Please write a function to implement the algorithm.​

const BYBASS_CHAR = new Map();
[
  ' ',
  '>',
  ']'
].forEach(char => BYBASS_CHAR.set(char, true))

const SELECTOR_WEIGHT_MAP: Record<string, number> = {
  '#': 1000,
  '.': 100,
  '[': 100,
  ':': 100,
  '::': 10
}

const getSelectorWeight = (key: string) => {
  return SELECTOR_WEIGHT_MAP[key] || 10
}

const isRegularWordOrEqual = (str?: string) => {
  return str && /^[a-z|=]*$/.test(str)
}

function calculateWeight(selector: string) {
  let weight = 0
  let stack: string[] = []

  const calculateAndResetStack = () => {
    if (!stack.length) {
      return 0
    }

    const result = getSelectorWeight(stack[0])
    stack = []
    return result
  }

  for (const char of selector.split('')) {

    // no need calculate
    if (BYBASS_CHAR.has(char)) {
      continue
    }

    if (isRegularWordOrEqual(char)) {
      if (isRegularWordOrEqual(stack[stack.length - 1])) {
        stack[stack.length - 1] += char
      } else {
        stack.push(char)
      }

      continue
    }

    // Handle `:`
    if (char === ':' && stack[stack.length - 1] === ':') {
      stack[stack.length - 1] += char
      continue
    }

    weight += calculateAndResetStack()
    stack.push(char)
  }

  weight += calculateAndResetStack()

  return weight
}

console.log(calculateWeight('#container')) //1000​
console.log(calculateWeight('body .element')) // 110​
console.log(calculateWeight('body.element')) // 110​
console.log(calculateWeight('input[type=button]:hover')) // 210​
console.log(calculateWeight('#container .section > .header::before')) // 1210
console.log(calculateWeight('#container.section>.header::before')) // 1210
console.log(calculateWeight('::before')) // 10
console.log(calculateWeight(':hover')) // 100
console.log(calculateWeight('[type=button][type=button][type=button]')) // 300
