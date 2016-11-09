import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
  View
} from 'react-native';

const {height} = Dimensions.get("window");
export default class AnimatedReactNative extends Component {
  
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 500,
        duration: 300
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3,
      })
    ]).start();
  }

  render() {

    const animatedStyle = {
      transform: [
        { translateY: this.animatedValue1},
        { scale: this.animatedValue2}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F5FCFF',
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100
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
