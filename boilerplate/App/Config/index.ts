import { Text } from "react-native";
import AppConfig from "./AppConfig";
import DebugConfig from "./DebugConfig";

// Allow/disallow font-scaling in app
// NOT WORKING ANYMORE WITH RN 0.55
// https://stackoverflow.com/questions/41807843/how-to-disable-font-scaling-in-react-native-for-ios-app
/*if (!Text.defaultProps) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = AppConfig.allowTextFontScaling;*/

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox;
}
