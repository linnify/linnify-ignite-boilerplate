import * as React from 'react';
import { NavigationStackScreenOptions } from 'react-navigation';
import styles from './Styles/NavigationStyles';
import { isIphone } from '../Transforms/Utils';

const navigationStackScreenOptions: NavigationStackScreenOptions = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle,
  headerTransparent: isIphone() ? true : false,
  headerTitleAllowFontScaling: false,
};

export default navigationStackScreenOptions;
