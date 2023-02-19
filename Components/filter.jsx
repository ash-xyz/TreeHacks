import React from 'react';
// import {Text, TextInput, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import React,{useState} from 'react';

const App = () => {

    const [selected, setSelected] = React.useState([]);
    
    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
  
    return(
      <MultipleSelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
          onSelect={() => alert(selected)} 
          label="Categories"
      />
    )
  
  };

const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);

const handleSearch = (event) =>{

}

  /* <Filter filters={maxCllassSize=50, min, }/>
const filter = (props: App) => {
    return (
        <View>
            
        </View>

      );
}; */


export default filter;