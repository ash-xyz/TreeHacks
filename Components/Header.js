import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: -75,
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
            uri: 'https://img.freepik.com/free-vector/cute-cat-working-laptop-cartoon-icon-illustration_138676-2815.jpg?w=2000',
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
      <Text style={styles.bigBold}>Welcome to {name}</Text>
      <Text style={styles.smallBold}>To get started, select an option below.</Text>
    </View>
  );
};

export {DisplayAnImage};
export default Header;