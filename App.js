import { StyleSheet, Text, View } from 'react-native';
import { getFilteredCourses, defaultFilter } from './Components/Filter.js'
import CourseCard from './Components/Course.jsx';
import React from 'react';


export default function App() {
  let filter = defaultFilter;
  const filteredCourses = getFilteredCourses(filter);
  return (
    <View style={styles.container}>
      <CourseCard code='PHIL 186'
        course={filteredCourses['PHIL 186']} />
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
