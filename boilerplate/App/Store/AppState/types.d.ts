import { StateType } from 'typesafe-actions';

import rootReducer from '../reducers';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  // export type RootAction = Action1 | Action2;
}
