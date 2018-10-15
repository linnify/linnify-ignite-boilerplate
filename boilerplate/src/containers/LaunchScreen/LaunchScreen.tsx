import React, { Component } from "react";
import { Image, Text, View } from "react-native";

// Styles
import styles from "./LaunchScreenStyles";

export default class LaunchScreen extends Component {
  public render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>This is React Native Linnify Boilerplate</Text>
      </View>
    );
  }
}
