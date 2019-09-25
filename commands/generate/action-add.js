
const patterns = require("../../lib/patterns")

module.exports = {
  description: "Generates an Add Action. (small case, singular)",
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
    const upperName = storeName.toUpperCase();


    const props = { name: storeName, pascalName, camelName,upperName }
    const jobs = [
      {
        template: `actions-add.ts.ejs`,
        target: `src/store/actions/${storeName}s/add.actions.tsx`,
      },

    ]
    // make the templates
    await ignite.copyBatch(toolbox, jobs, props)


    /**
     * Let the fun be gin
     * ADDING CODE TO FILES
     * */

    // IN ACTIONS
      // IN TYPES
    const srcActionsTypes = `${process.cwd()}/src/store/actions/${storeName}s/types.ts`

    const importActionsConsts = `\n\nconst ADD_${upperName} = '[${pascalName}] Add ${pascalName}'\n`
    await patching.patch(srcActionsTypes,{
      after: new RegExp(patterns[patterns.constants.PATTERN_ACTION_TYPES_CONST]),
      insert:importActionsConsts
    })

    await patching.append(
      `${process.cwd()}/src/store/actions/${storeName}s/types.ts`,
      `\n\nexport const Add${pascalName} = createAction(ADD_${upperName}, resolve => (response: ${pascalName}) => resolve(response));
`
    )
      // IN INDEX
    await patching.prepend(
      `${process.cwd()}/src/store/actions/${storeName}s/index.ts`,
      `export * from './add.actions'\n`
    )

    // IN REDUCER
    const srcReducer = `${process.cwd()}/src/store/reducers/${storeName}s.reducer.ts`
    const addObject = `\ncase getType(${camelName}sActions.Add${pascalName}): {
      const ${camelName}Added: ${pascalName} = action.payload
      const current${pascalName}s = { ...state.${camelName}s }
      current${pascalName}s[${camelName}Added.id] = ${camelName}Added
      return {
        ...state,
        ${camelName}s: { ...current${pascalName}s }
      }
    }`
    await patching.patch(srcReducer,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_SWITCH]),
      insert:addObject
    })


  }
}
