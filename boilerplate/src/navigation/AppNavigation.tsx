import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../containers/LaunchScreen";

const AppNavigatior = createSwitchNavigator(

    {
      LaunchScreen:LaunchScreen
    },
    {
      initialRouteName:'LaunchScreen'
    }
)
export default createAppContainer(AppNavigatior)
