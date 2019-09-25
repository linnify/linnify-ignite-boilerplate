import { CoreActions } from '../reducers/core.reducer';
import { StateType } from 'typesafe-actions';
import rootReducer from '../reducers';

export type RootAction =
  | CoreActions

export type RootState = StateType<typeof rootReducer>
