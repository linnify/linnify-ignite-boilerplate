import { combineReducers } from 'redux';
import { AppState } from "../AppState/AppState";
import coreReducer from "./core.reducer";

export default combineReducers<AppState>({
  core: coreReducer,
});
