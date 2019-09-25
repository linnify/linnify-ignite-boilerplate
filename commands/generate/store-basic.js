
const patterns = require("../../lib/patterns")

module.exports = {
  description: "Generates a Store. (small case, plural)",
  run: async function(toolbox) {
    // grab some features
    const { parameters, print, strings, ignite, filesystem, patching } = toolbox
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

    const props = { name: storeName, pascalName, camelName }
    const jobs = [
      {
        template: `store-index.ts.ejs`,
        target: `src/store/actions/${storeName}/index.ts`,
      },
      {
        template: `store-types.ts.ejs`,
        target: `src/store/actions/${storeName}/types.ts`,
      },
      {
        template: `store-reducer.ts.ejs`,
        target: `src/store/reducers/${storeName}.reducer.ts`,
      },
      {
        template: `store-selectors.ts.ejs`,
        target: `src/store/selectors/${storeName}.selectors.ts`,
      },
      {
        template: `actions-base.ts.ejs`,
        target:`src/store/actions/${storeName}/base.actions.tsx`,
      }
    ]
    // make the templates
    await ignite.copyBatch(toolbox, jobs, props)


    /**
     * ADDING CODE TO FILES
     * */

      // IN REDUCER
    const srcReducerIndex = `${process.cwd()}/src/store/reducers/index.ts`
        // IMPORT
    const importReducerIndex= `\nimport ${camelName}Reducer from "./${camelName}.reducer"`
    await patching.patch(srcReducerIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_IMPORTS]),
      insert:importReducerIndex
    })
      // EXPORT
    const exportReducerIndex= `\n  ${camelName}: ${camelName}Reducer,`
    await patching.patch(srcReducerIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_EXPORTS]),
      insert:exportReducerIndex
    })


    // IN ACTIONS
    const srcActionsIndex = `${process.cwd()}/src/store/actions/index.ts`
     // IMPORT
    const importActionsIndex = `\nimport * as ${camelName}Actions from './${camelName}'`
    await patching.patch(srcActionsIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_ACTION_IMPORTS]),
      insert:importActionsIndex
    })
    // EXPORT
    const exportActionsIndex= `\n  ,${camelName}Actions`
    await patching.patch(srcActionsIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_ACTION_EXPORTS]),
      insert:exportActionsIndex
    })


    /*IN STATE*/
    // APP STATE
    const srcStateAppState = `${process.cwd()}/src/store/state/AppState.ts`
      // IMPORT
    const importStateAppState= `\nimport { ${pascalName}State } from "../reducers/${camelName}.reducer"`
    await patching.patch(srcStateAppState,{
      after: new RegExp(patterns[patterns.constants.PATTERN_STATE_IMPORTS]),
      insert:importStateAppState
    })
      // EXPORT
    const exportStateAppState= `\n  ,${camelName}: ${pascalName}State`
    await patching.patch(srcStateAppState,{
      after: new RegExp(patterns[patterns.constants.PATTERN_STATE_APPSTATE_EXPORTS]),
      insert:exportStateAppState
    })


     // IN INDEX
    const srcStateIndex = `${process.cwd()}/src/store/state/index.ts`
       // IMPORT
    const importStateIndex= `\nimport { ${pascalName}Actions } from "../reducers/${camelName}.reducer"`
    await patching.patch(srcStateIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_STATE_IMPORTS]),
      insert:importStateIndex
    })
      // EXPORT
    const exportStateIndex= `\n  | ${pascalName}Actions`
    await patching.patch(srcStateIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_STATE_INDEX_EXPORTS]),
      insert:exportStateIndex
    })

      //IN SELECTOR
    const srcSelectorsIndex = `${process.cwd()}/src/store/selectors/index.ts`
    const exportSelectorsIndex= `\nexport * from "./${camelName}.selectors"`
    await patching.patch(srcSelectorsIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_SELECTORS_EXPORTS]),
      insert:exportSelectorsIndex
    })

    await patching.prepend(
      `${process.cwd()}/src/store/actions/${camelName}/index.ts`,
      `export * from './base.actions'\n`
    )

  }
}
