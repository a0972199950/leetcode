// 2115. Find All Possible Recipes from Given Supplies

console.clear()

// function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
//   const ans = []
//   const hasCreated = new Set()

//   let hasSomethingToCreate = true

//   while_loop:
//   while (hasSomethingToCreate) {
//     for (let i = 0; i < ingredients.length; i++) {
//       const ingredient = ingredients[i]
//       const recipe = recipes[i]

//       if (hasCreated.has(recipe)) {
//         continue
//       }

//       if (ingredient.every(item => supplies.includes(item))) {
//         supplies.push(recipe)
//         ans.push(recipe)
//         hasCreated.add(recipe)
//         continue while_loop
//       }
//     }

//     hasSomethingToCreate = false
//   }

//   return ans
// }

function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  const graph = {}

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i]
    const ingredient = ingredients[i]
    graph[recipe] = ingredient
  }

  console.log(graph)

  const ans = []
  const mySupplies = new Set(supplies)
  const cannotCreate = new Set()

  const dfs = (recipe: string, history: Set<string>) => {
    console.log(recipe)
    if (cannotCreate.has(recipe)) {
      return false
    }

    if (history.has(recipe)) {
      cannotCreate.add(recipe)
      return false
    }

    if (mySupplies.has(recipe)) {
      return true
    }

    if (!graph[recipe]) {
      cannotCreate.add(recipe)
      return false
    }

    // 遇到食譜
    history.add(recipe)
    const canCreate = graph[recipe].every(ingredient => dfs(ingredient, history))
    history.delete(recipe)

    if (canCreate) {
      ans.push(recipe)
      mySupplies.add(recipe)
    } else {
      cannotCreate.add(recipe)
    }

    return canCreate
  }
  
  for (const recipe in graph) {
    if (mySupplies.has(recipe) || cannotCreate.has(recipe)) {
      continue
    }

    dfs(recipe, new Set())
  }

  return ans
}

// console.log(findAllRecipes(['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn']))
// console.log(findAllRecipes(['bread', 'sandwich'], [['yeast', 'flour'], ['bread', 'meat']], ['yeast', 'flour', 'meat']))
// console.log(findAllRecipes(['bread', 'sandwich', 'burger'], [['yeast', 'flour'], ['bread', 'meat'], ['sandwich', 'meat', 'bread']], ['yeast', 'flour', 'meat']))
// console.log(findAllRecipes(['burger', 'sandwich', 'bread'], [['sandwich', 'meat', 'bread'], ['bread', 'meat'], ['yeast', 'flour']], ['yeast', 'flour', 'meat']))
console.log(findAllRecipes(
  ['xevvq', 'izcad', 'p', 'we', 'bxgnm', 'vpio', 'i', 'hjvu', 'igi', 'anp', 'tokfq', 'z', 'kwdmb', 'g', 'qb', 'q', 'b', 'hthy'],
  [['wbjr'], ['otr', 'fzr', 'g'], ['fzr', 'wi', 'otr', 'xgp', 'wbjr', 'igi', 'b'], ['fzr', 'xgp', 'wi', 'otr', 'tokfq', 'izcad', 'igi', 'xevvq', 'i', 'anp'], ['wi', 'xgp', 'wbjr'], ['wbjr', 'bxgnm', 'i', 'b', 'hjvu', 'izcad', 'igi', 'z', 'g'], ['xgp', 'otr', 'wbjr'], ['wbjr', 'otr'], ['wbjr', 'otr', 'fzr', 'wi', 'xgp', 'hjvu', 'tokfq', 'z', 'kwdmb'], ['xgp', 'wi', 'wbjr', 'bxgnm', 'izcad', 'p', 'xevvq'], ['bxgnm'], ['wi', 'fzr', 'otr', 'wbjr'], ['wbjr', 'wi', 'fzr', 'xgp', 'otr', 'g', 'b', 'p'], ['otr', 'fzr', 'xgp', 'wbjr'], ['xgp', 'wbjr', 'q', 'vpio', 'tokfq', 'we'], ['wbjr', 'wi', 'xgp', 'we'], ['wbjr'], ['wi']],
  ['wi', 'otr', 'wbjr', 'fzr', 'xgp']
))

console.log(findAllRecipes(
  ['ju', 'fzjnm', 'x', 'e', 'zpmcz', 'h', 'q'],
  [['d'], ['hveml', 'f', 'cpivl'], ['cpivl', 'zpmcz', 'h', 'e', 'fzjnm', 'ju'], ['cpivl', 'hveml', 'zpmcz', 'ju', 'h'], ['h', 'fzjnm', 'e', 'q', 'x'], ['d', 'hveml', 'cpivl', 'q', 'zpmcz', 'ju', 'e', 'x'], ['f', 'hveml', 'cpivl']],
  ['f', 'hveml', 'cpivl', 'd']
))

// console.log(findAllRecipes(
//   ['bread', 'milk', 'cookie'],
//   [['milk'], ['cookie'], ['bread']],
//   []
// ))


export {}
