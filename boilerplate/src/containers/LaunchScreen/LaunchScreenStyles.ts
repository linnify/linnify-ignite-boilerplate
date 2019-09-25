import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.mainContainer,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    ...ApplicationStyles.darkLabel,
    fontSize: 20,
    color: '#003A40',
    marginTop:100,
  },
  centered: {
    alignItems: 'center',
  },
});
