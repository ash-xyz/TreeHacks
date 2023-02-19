import React from 'react';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {View,Text} from 'react-native';

// create const for all filter drop down menus
const classSize = [
    {key: '1', value: '0-30'},
    {key: '2', value: '31-60'},
    {key: '3', value: '61-90'},
    {key: '4', value: '91-120'},
    {key: '5', value: '121-150'},
    {key: '6', value: '151-300'},
    {key: '7', value: '301+'},
]

const AverageRating = [
    {key: '1', value: '0-1'},
    {key: '2', value: '1-2'},
    {key: '3', value: '2-3'},
    {key: '4', value: '3-4'},
    {key: '5', value: '4-5'},
]

const workLoad = [
    {key: '1', value: '0-2'},
    {key: '2', value: '2-4'},
    {key: '3', value: '4-6'},
    {key: '4', value: '6-8'},
    {key: '5', value: '8-10'},
    {key: '6', value: '10+'},
]

const credits = [
    {key: '1', value: '1'},
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
    {key: '5', value: '5'},
    {key: '6', value: '6'},
]

const Lottery = [
    {key: '1', value: 'Yes'},
    {key: '2', value: 'No'},
]

const Term = [
    {key: '1', value: 'Fall'},
    {key: '2', value: 'Winter'},
    {key: '3', value: 'Spring'},
]

const Menu = (prop) => {

    const [selected, setSelected] = React.useState("");
    const [categories, setCategories] = React.useState([]);

    const data = [prop.category]
  
    return(
      <View style={{paddingHorizontal:15,marginTop:15}}>
  
        <SelectList setSelected={setSelected} data={data}  />
  
        <MultipleSelectList 
          setSelected={(val) => setCategories(val)} 
          data={data} 
          save="value"
          label="Categories"
          boxStyles={{marginTop:25}}
      />

        <View style={{marginTop:50}}>
          <Text>Selected Value : </Text>
          <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
        </View>
        
        <View style={{marginTop:50}}>
          <Text>Selected Categories : </Text>
          {
            categories.map((item) => {
              return(
                <Text key={item} style={{marginTop:10,color:'gray'}}>{item}</Text>
              )
            })
          }
          
        </View>
  
      </View>
      
    )
  
  };
  
  export default Menu;