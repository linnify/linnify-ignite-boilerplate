import { combineReducers } from 'redux';
import { AppState } from "../state/AppState";
import coreReducer from "./core.reducer";

export default combineReducers<AppState>({
  core: coreReducer,
});
