import { Dispatch } from "redux";
import * as Types from 'Types';
import * as coreActions from './types';

export const setSettings = () => {
  return (dispatch: Dispatch<Types.RootState>, getState: () => Types.RootState) => {
    dispatch(coreActions.CoreSettings());
  };
};
