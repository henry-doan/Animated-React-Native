import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  Easing,
  Text,
  View
} from 'react-native';

export default class AnimatedReactNative extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1000,
      easing: Easing.bounce
    }).start()
  }

  render() {
    const animatedStyle = { height: this.animatedValue }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
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
    height: 100
  }
});

AppRegistry.registerComponent('AnimatedReactNative', () => AnimatedReactNative);
