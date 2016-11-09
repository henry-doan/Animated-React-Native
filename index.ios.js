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
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.stagger(300, [
      Animated.timing(this.animatedValue1, {
        toValue: height,
        duration: 1500
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height,
        duration: 1500
      }),
      Animated.timing(this.animatedValue3, {
        toValue: height,
        duration: 1500
      }),
    ]).start();
  }

  render() {

    const animatedStyle1 = {
      height: this.animatedValue1
    }
    const animatedStyle2 = {
      height: this.animatedValue2
    }
    const animatedStyle3 = {
      height: this.animatedValue3
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle1]}>
        </Animated.View>
        <Animated.View style={[styles.box, animatedStyle2]}>
        </Animated.View>
        <Animated.View style={[styles.box, animatedStyle3]}>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 1,
    backgroundColor: "#333",
    marginHorizontal: 5,
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
