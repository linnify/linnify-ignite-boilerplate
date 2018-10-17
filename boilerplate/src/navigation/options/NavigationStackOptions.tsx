import * as React from 'react';
import { NavigationStackScreenOptions } from 'react-navigation';
import styles from '../styles/NavigationStyles';
import { isIphone } from '../../transforms/Utils'

const navigationStackScreenOptions: NavigationStackScreenOptions = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle,
  headerTransparent: isIphone() ? true : false,
  headerTitleAllowFontScaling: false,
};

export default navigationStackScreenOptions;
