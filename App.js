import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Cat from './Components/Cat.jsx';
import Welcome from './Components/Welcome.jsx';
import Filters from './Components/Filters.jsx';
import Header, {Separator, SubHeader, Buttons} from './Components/Welcome.jsx';
import Classes from './Components/Filters.jsx';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
        />
        <Stack.Screen
          name="Filters"
          component={Filters}
        />
        <Stack.Screen
          name="Add"
          component={Add}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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

export function TypeOfClasses() {
  <View style={styles.container}>
    <Classes />
  </View>
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
