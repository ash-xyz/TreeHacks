import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'Menu';
import AverageRating from './dropDownMenu.jsx';

<Menu category = AverageRating></Menu>


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const Classes = () => {
    return(
        <View style={styles.container}>
            <Text>This is a test for the classes that will be here.</Text>
        </View>
    )
};

export default Classes;
  