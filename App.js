import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import {Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: 'black',
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 1,
    margin: 24,
  }
});
