import * as React from 'react';
import { Provider } from 'react-redux';
import '../config';
import createStore from '../store/CreateStore';
import RootContainer from './RootContainer';
import Api from '../services/api';

// create our store
const store = createStore();
Api.initialize();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
// export default DebugConfig.useReactotron
// ? Reactotron.overlay(App)
// : App;

export default App;
