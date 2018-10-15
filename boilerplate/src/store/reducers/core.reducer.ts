import { ActionType } from "typesafe-actions";
import * as coreActions from '../actions/core/types';

export interface CoreState {
  settings: boolean;
}

const initialState: CoreState = {
  settings: false,
};

export type CoreActions = ActionType<typeof coreActions>;

const coreReducer = (state = initialState, action: CoreActions) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default coreReducer;
