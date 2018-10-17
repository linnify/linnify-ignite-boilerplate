import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import * as Types from 'Types';

export default () => {
  const store = createStore<Types.RootState>(
    appReducer,
    applyMiddleware(thunk),
  );
  return store;
};
