import { StyleSheet, Text, View } from 'react-native';
import CourseList from './Components/CourseList';
import React from 'react';


export default function App() {
  return (
    <View style={[styles.container, styles.playingSpace]}>
      <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 4 }}>
        <Text style={{ color: '#fff' }}></Text>
      </TouchableOpacity>
      <CourseList />
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
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 10,
  },
});
