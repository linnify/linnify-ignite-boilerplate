import * as React from 'react';
import { View, StatusBar, Text } from 'react-native';
import * as Types from 'Types';
import * as Redux from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReduxPersist from '../../config/ReduxPersist';
import NavigationService from '../../navigation/NavigationService';
import AppNavigation from '../../navigation/AppNavigation';
import styles from './RootContainerStyles';
import * as fromStore from '../../store';

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
interface DispatchProps {
  launchApp?: () => void;
}

/**
 * The properties mapped from the global state
 */
interface StateProps {}

type Props = StateProps & DispatchProps & OwnProps;

export class RootContainer extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // call startup action
      // this.props.startup();
    }
    this.props.launchApp();
  }

  public render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar />
        <AppNavigation ref={(navigatorRef: any) => NavigationService.initialize(navigatorRef)} />
      </View>
    );
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props): StateProps => {
  return {}
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<Types.RootAction>): DispatchProps =>
  bindActionCreators(
    {
      launchApp: () => fromStore.coreActions.launchApp(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
