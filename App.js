import { StyleSheet, Text, View } from 'react-native';
import { getFilteredCourses, defaultFilter } from './Components/Filter.js'
import React from 'react';


export default function App() {
  let filter = defaultFilter;
  filter.Professor = 'Werning';
  const filteredCourses = getFilteredCourses(filter);
  console.log(filteredCourses)
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <Text>{JSON.stringify(filteredCourses, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
