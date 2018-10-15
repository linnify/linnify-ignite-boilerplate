import {Dimensions, Platform} from "react-native";

const { width, height } = Dimensions.get("window");

// Used via Metrics.baseMargin
const metrics = {
  containerMargin: 20,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  hugeMargin: 30,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === "ios") ? 64 : 54,
  borderRadius: 8,
  borderWidth: 1,
  elevation: 2,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    sMedium: 30,
    medium: 40,
    mediumLarge: 50,
    large: 60,
    profile: 70,
    logo: 200,
  },
};

export default metrics;
