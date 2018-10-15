import * as Types from 'Types';
import { CoreState } from '../Reducers/core.reducer';
import { createSelector } from 'reselect';

const getCoreState = (state: Types.RootState): CoreState => state.core;

export const selectSettings = createSelector(
  getCoreState,
  (state: CoreState) => state.settings,
);
