import { StyleSheet, Text, View } from 'react-native';
import { getFilteredCourses, defaultFilter } from './Components/Filter.js'
import Header from './Components/Header.js';
import React from 'react';
import {DisplayAnImage} from './Components/Header.js';
import Border from './Components/Border.js';


export default function App() {
  return (
    <View style={[styles.container, styles.playingSpace]}>
      <Text>Hi!</Text>
      <Text>{JSON.stringify(filteredCourses, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98d9d8',
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
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
  }
});
