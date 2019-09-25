
const patterns = require("../../lib/patterns")

module.exports = {
  description: "Generates a Load Action with Pagination si toate cele. (small case, plural)",
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
    const singularPascalName = pascalName.slice(0,-1);
    const singularCamelName = camelName.slice(0,-1)


    const props = { name: storeName, pascalName, camelName,upperName, singularPascalName, singularCamelName }
    const jobs = [
      {
        template: `actions-load-pagination.ts.ejs`,
        target: `src/store/actions/${storeName}/load.actions.tsx`,
      },

    ]
    // make the templates
    await ignite.copyBatch(toolbox, jobs, props)


    /**
     * Let the fun be gin
     * */

      // IN REDUCER
    const srcReducerIndex = `${process.cwd()}/src/store/reducers/index.ts`
        // IMPORT
    const importReducerIndex= `\nimport ${camelName}Reducer from "./${camelName}.reducer"`
    await patching.patch(srcReducerIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_IMPORTS]),
      insert:importReducerIndex
    })

    await patching.prepend(
      `${process.cwd()}/src/store/reducers/${storeName}.reducer.ts`,
      `import { PaginationParams, ${singularPascalName} } from "../../types/classes"\n`
    )
        // EXPORT
    const exportReducerIndex= `\n  ${camelName}: ${camelName}Reducer,`
    await patching.patch(srcReducerIndex,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_EXPORTS]),
      insert:exportReducerIndex
    })



    const srcReducer = `${process.cwd()}/src/store/reducers/${storeName}.reducer.ts`
        // INTERFACE
    const exportInterfaceArgs = `\n  next:boolean,
  ${camelName}: {  [id: number]:${singularPascalName}},
  loading: boolean,
  pagination: PaginationParams`
    await patching.patch(srcReducer,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_INTERFACE]),
      insert: exportInterfaceArgs
    })
        // INITIAL STATE
    const initialStateArgs = `\n  ${camelName}:{},
  loading:false,
  next:true,
  pagination: {
    size:20,
    page:1},
    `
    await patching.patch(srcReducer,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_INITIAL_STATE]),
      insert: initialStateArgs
    })
        // SWITCH
    const loadSuccess = `\ncase getType(${camelName}Actions.Load${pascalName}Success): {
      const ${camelName}: { [id: number]: ${singularPascalName} } = {}
      action.payload.results.forEach((${singularCamelName}: ${singularPascalName}) => {
        ${camelName}[${singularCamelName}.id] = ${singularCamelName}
      })
      return {
        ...state,
        next: !!action.payload.next,
        ${camelName}: {
          ...state.${camelName},
          ...${camelName}
        },
        loading: false
      }
    }`

    await patching.patch(srcReducer,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_SWITCH]),
      insert:loadSuccess
    })

    const load = `\ncase getType(${camelName}Actions.Load${pascalName}): {
      return {
        ...state,
        loading: true
      }
    }
     case getType(${camelName}Actions.IncrementPage): {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page + 1
        }
      }
    }`
    await patching.patch(srcReducer,{
      after: new RegExp(patterns[patterns.constants.PATTERN_REDUCER_SWITCH]),
      insert:load
    })


    //IN ACTIONS
      // IN TYPES
    const srcActionsTypes = `${process.cwd()}/src/store/actions/${storeName}/types.ts`
      // CONST
    const importActionsConsts = `\nconst LOAD_${upperName} = '[${pascalName}] Load ${pascalName}'
const LOAD_${upperName}_SUCCESS = '[${pascalName}] Load Success ${pascalName}'
const LOAD_${upperName}_ERROR = '[${pascalName}] Load Error ${pascalName}'
const ${upperName}_INCREMENT_PAGE = '[${pascalName}] Increment Page'
`
    await patching.patch(srcActionsTypes,{
      after: new RegExp(patterns[patterns.constants.PATTERN_ACTION_TYPES_CONST]),
      insert:importActionsConsts
    })
      // EXPORT
    const exportActionsIndex= `\n  ,${camelName}Actions,`
    await patching.patch(srcActionsTypes,{
      after: new RegExp(patterns[patterns.constants.PATTERN_ACTION_EXPORTS]),
      insert:exportActionsIndex
    })

      // EXPORT
    await patching.append(
      `${process.cwd()}/src/store/actions/${storeName}/types.ts`,
      `\nexport const Load${pascalName} = createAction(LOAD_${upperName});
export const Load${pascalName}Success = createAction(LOAD_${upperName}_SUCCESS, resolve => (response: ResponseParams< ${singularPascalName}>) => resolve(response))
export const Load${pascalName}Error = createAction(LOAD_${upperName}_ERROR, resolve => (err: string) => resolve(err));
export const IncrementPage = createAction(${upperName}_INCREMENT_PAGE);`
    )
        // IMPORT
    await patching.prepend(
      `${process.cwd()}/src/store/actions/${storeName}/types.ts`,
      `import { ${singularPascalName} } from "../../../types/classes"
import { ResponseParams } from "../../../types/interfaces"\n`
    )
        // IN INDEX
    await patching.prepend(
      `${process.cwd()}/src/store/actions/${storeName}/index.ts`,
      `export * from './load.actions'\n`
    )



  }
}
