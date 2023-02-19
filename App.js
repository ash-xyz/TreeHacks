import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Cat from './Components/Cat.jsx';
import Header, {Separator, SubHeader, Buttons} from './Components/Welcome.jsx';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Hi!</Text>*/}
      <StatusBar style="auto" />
      <Header />
      <Separator />
      <SubHeader />
      <Buttons />
      {/*<Cat />*/}
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
