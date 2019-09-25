import React, { Component } from 'react';
import { ImageBackground, Text} from 'react-native';
import { Images } from "../../themes"

// Styles
import styles from './LaunchScreenStyles';

export default class LaunchScreen extends Component {
  public render() {
    return (
      <ImageBackground source={Images.logo} style={styles.container}>
          <Text style={styles.title}>This is React Native Linnify Boilerplate</Text>
      </ImageBackground>
    );
  }
}
