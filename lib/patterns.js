const constants = {
  PATTERN_REDUCER_IMPORTS: "reducerImports",
  PATTERN_REDUCER_EXPORTS:"reducerExports",
  PATTERN_REDUCER_INTERFACE:"recuderInterface",
  PATTERN_REDUCER_INITIAL_STATE:"reducerInitialState",
  PATTERN_REDUCER_SWITCH:"reducerSwitch",
  PATTERN_ACTION_IMPORTS: "actionImports",
  PATTERN_ACTION_TYPES_CONST:"actionConsts",
  PATTERN_ACTION_EXPORTS:"actionExports",
  PATTERN_STATE_IMPORTS:"stateImports",
  PATTERN_STATE_APPSTATE_EXPORTS:"stateAppStateExports",
  PATTERN_STATE_INDEX_EXPORTS:"stateIndexExports",
  PATTERN_SELECTORS_EXPORTS:"selectorsExports",

}

module.exports = {
  constants,
  [constants.PATTERN_REDUCER_IMPORTS]: `import coreReducer from "./core.reducer";?`,
  [constants.PATTERN_REDUCER_EXPORTS]: `core: coreReducer,`,
  [constants.PATTERN_ACTION_IMPORTS]: `import [*] as coreActions from "./core/core.actions";?`,
  [constants.PATTERN_ACTION_EXPORTS]: `[{] coreActions;?`,
  [constants.PATTERN_STATE_IMPORTS]: `import { Core[\\s\\S]* } from "../reducers/core.reducer";?`,
  [constants.PATTERN_STATE_APPSTATE_EXPORTS]: `core: CoreState;?`,
  [constants.PATTERN_STATE_INDEX_EXPORTS]: `= CoreActions`,
  [constants.PATTERN_SELECTORS_EXPORTS]: `export [*] from "./core.selectors";?`,
  [constants.PATTERN_ACTION_TYPES_CONST]: `import [{] createAction [}] from 'typesafe-actions';?`,
  [constants.PATTERN_REDUCER_INTERFACE]:`export interface [\\s\\S]*State [{]`,
  [constants.PATTERN_REDUCER_INITIAL_STATE]:`const initialState: [\\s\\S]*State = [{]`,
  [constants.PATTERN_REDUCER_SWITCH]:`switch [(]action.type[)] [{]`
}
