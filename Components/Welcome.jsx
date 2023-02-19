import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, Button, SafeAreaView } from 'react-native';

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <DisplayAnImage></DisplayAnImage>
        <Text style={styles.bigBold}>Welcome to Maru</Text>
        <Text style={styles.smallBold}>Select An Option Below</Text>
        <View style={styles.separator} />
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
            {/*<Text style={styles.button}>*/}
            {/*</Text>*/}
            <Button
                title="Filters"
                color="#0ac7c4"
                onPress = {() => NavigationPreloadManager.navigate("Filters")}
            />
            <Button
                title="Add"
                color="#0ac7c4"
                onPress={() => NavigationPreloadManager.navigate("Add")}
            />
            <StatusBar style = "auto"
            />
            </View>
            </SafeAreaView>
                </View>
    );
    };

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