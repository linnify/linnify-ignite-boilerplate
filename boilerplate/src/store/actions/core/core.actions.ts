import { Dispatch } from 'redux';
import * as Types from 'Types';
import * as coreActions from './types';

export const setSettings = () => {
  return (dispatch: Dispatch<Types.RootAction>, getState: () => Types.RootState) => {
    dispatch(coreActions.CoreSettings());
  };
};

export const launchApp = () => {
  return async (dispatch: Dispatch<Types.RootAction> | any, getState: () => Types.RootState) => {

  }
};
