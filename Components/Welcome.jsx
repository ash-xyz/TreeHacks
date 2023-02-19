import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, Button, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingTop: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  bigBold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 70,
  },
  smallBold: {
    color: 'blue',
    fontSize: 20,
    marginBottom: 70,
  },
  button: {
    fontSize: 25,
    marginTop: 140,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

const Header = () => {
  const name = 'Maru';
  return (
    //<View>
    <View style={styles.container}>
      <DisplayAnImage></DisplayAnImage>
      <Text style={styles.bigBold}>Welcome to {name}</Text>
    </View>
  );
};

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallBold}>Select An Option Below</Text>
    </View>
  )
}

const Separator = () => <View style={styles.separator} />;

const Buttons = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.fixToText}>
      {/*<Text style={styles.button}>*/}
      {/*</Text>*/}
      <Button
        title="Filters"
        color="#0ac7c4"
        onPress={() => NavigationPreloadManager.navigate("Filters")}
      />
      <Button
        title="Add"
        color="#0ac7c4"
        onPress={() => NavigationPreloadManager.navigate("Add")}
      />
      <StatusBar style="auto"
      />
    </View>
  </SafeAreaView>
);

export { Separator, SubHeader, Buttons };
export default Header;
