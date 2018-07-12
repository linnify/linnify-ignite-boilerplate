import * as React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ReduxPersist from "../../Config/ReduxPersist";

// Styles
import styles from "./RootContainerStyles";
import AppNavigation from "../../Navigation/AppNavigation";

interface Props {
}

interface State {

}

export class RootContainer extends React.Component<Props, State> {
  public componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // call startup action
      // this.props.startup();
    }
  }

  public render() {
    return (
      <View style={styles.applicationView}>
        <AppNavigation />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any): Props => ({
  // startup: () => dispatch(StartupActions.startup())
});

export default connect(null, mapDispatchToProps)(RootContainer);
