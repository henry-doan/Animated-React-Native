import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  Text,
  View
} from 'react-native';

export default class AnimatedReactNative extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
    })

    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    })

    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF"
  }
});

AppRegistry.registerComponent('AnimatedReactNative', () => AnimatedReactNative);
