import { StateType } from 'typesafe-actions';
import rootReducer from '../reducers';
import { CoreActions } from '../reducers/core.reducer;

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = CoreActions;
}
