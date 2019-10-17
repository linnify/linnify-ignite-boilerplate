import * as React from 'react'
import { Provider } from 'react-redux';
import '../config';
import createStore from '../store/CreateStore';
import RootContainer from './RootContainer';
import Api from '../services/api';

// create our store
const store = createStore();
Api.getInstance();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
};


export default App;
