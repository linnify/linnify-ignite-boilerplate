import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import ImmutableObject from "seamless-immutable";
import Config from './DebugConfig';

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: "Ignite App" })
    .useReactNative()
    .use(reduxPlugin({ onRestore: ImmutableObject }))
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  (console as any).tron = Reactotron;
}
