/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component<{ name: string }, {}> {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class LotsOfGreetings extends Component<{}, {}> {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name='Rexxar' />
        <Greeting name='Jania' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
