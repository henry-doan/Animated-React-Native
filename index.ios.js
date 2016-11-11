import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class AnimatedReactNative extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  render() {

    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate}
      ]
    }
     const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate}
      ]
    }
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              This text is flipping on the front.
            </Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
            <Text style={styles.flipText}>
              This text is flipping on the back.
            </Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>Flip!</Text>
        </TouchableOpacity>
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
  flipCard: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    backgroundColor: "tomato",
    position: "absolute",
    top: 0,
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
  flipText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: 'Apple SD Gothic Neo',
  }
});

AppRegistry.registerComponent('AnimatedReactNative', () => AnimatedReactNative);
