import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../themes/index';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...ApplicationStyles.darkLabel,
    fontSize: 20,
    color: Colors.bloodOrange,
  },
  centered: {
    alignItems: 'center',
  },
});
