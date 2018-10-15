import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../containers/LaunchScreen';

import styles from './styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LaunchScreen",
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
