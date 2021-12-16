import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './components/stackNavigator';


export default class App extends Component{
  render(){
    return (
      <View><StackNavigator/></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
