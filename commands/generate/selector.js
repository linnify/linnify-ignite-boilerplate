
const patterns = require("../../lib/patterns")

module.exports = {
  description: "Adds consts in selector. (small case, singular)",
  run: async function(toolbox) {
    // grab some features
    const { parameters, print, strings, ignite, patching } = toolbox
    const { pascalCase, isBlank, camelCase } = strings
    const config = ignite.loadIgniteConfig()

    // validation
    if (isBlank(parameters.first)) {
      print.info("A name is required.")
      print.info(`ignite generate screen <name>\n`)
      return
    }

    const storeName = parameters.first

    // prettier-ignore

    // get permutations of the given model name
    const pascalName = pascalCase(storeName)
    const camelName = camelCase(storeName)

    /**
     * ADDING CODE TO FILES
     * Let the fun be gin
     * */

    await patching.append(
      `${process.cwd()}/src/store/selectors/${storeName}s.selectors.ts`,
      `\nexport const select${pascalName}s = createSelector(
  get${pascalName}sState,
  (state: ${pascalName}sState) => {
    const ${camelName}s: ${pascalName}[] = [];
    Object.keys(state.${camelName}s).forEach((key: string) => {
      ${camelName}s.push(state.${camelName}s[key])
    })
    return ${camelName}s;
  }
)`)

    await patching.append(
      `${process.cwd()}/src/store/selectors/${storeName}s.selectors.ts`,
      `\nexport const selectLoading${pascalName}s = createSelector(
  get${pascalName}sState,
  (state: ${pascalName}sState) => {
    return state.loading
  }
)
`)
    await patching.prepend(
      `${process.cwd()}/src/store/selectors/${storeName}s.selectors.ts`,
      `import { ${pascalName} } from "../../types/classes"\n`
    )


  }
}
