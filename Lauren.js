import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
//import {Text} from 'react-native';

/*export default function App() {
  return (
    <View style={styles.container}>*/
const getTitle = 'Welcome to';
getTitle.style.fontSize = "150%"; 
//const heading = () => {
<Text>{getTitle}</Text>;
//};
    
//export default heading;
    
      /*<Text>Welcome to _______</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const bruh = (props) => {
  return (
    <View style={styles.item}>
     <View style={styles.itemLeft}>
       <TouchableOpacity style={styles.square}></TouchableOpacity>
       <Text> style={styles.itemText}>(props.text)</Text>
     </View>
     <View styler={styles.circular}></View>
    <View>
     

  )
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
