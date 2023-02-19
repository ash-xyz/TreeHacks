/* import React from 'react';
// import {Text, TextInput, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import React,{useState, useEffect} from 'react';

data = {
    "Title": "Introduction to Archaeological Science",
        "Term": "2023 Spring",
        "Professor": "Warinner",
        "AverageRating": 4.2,
        "Workload (hrs/wk)": 4,
        "ClassSize": 82,
        "Credits": 4,
        "LotteryRequirement": "None",
        "Reviews": [
            "This is bad",
            "This is good",
            "This is juuust right"]}




/* const [allData, setAllData] = useState([]);
const [filteredData, setFilteredData] = useState(allData);

const handleSearch = (event) => {
    }

useEffect(() => {data}, []);

<div className="App">
<div style={{ margin: '0 auto', marginTop: '10%' }}>
<label>Search:</label>
<input type="text" onChange={(event) =>handleSearch(event)} />
</div>
<div style={{padding:10}}>
{filteredData.map((value,index)=>{
    const styles = {
        display:'inline',
        width:'30%',
        height:50,
        float:'left',
        padding:5,
        border:'0.5px solid black',
        marginBottom:10,
        marginRight:10
        }
return(
<div>
<div style={styles} key={value.id}>
{value.title}
</div>
</div>
)
})}
</div>
</div>

let value = event.target.value.toLowerCase();

let result = [];

result = allData.filter

result = allData.filter((data) => {
});

return data.title.search(value) != -1;

const _Search = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
    return data.title.search(value) != -1;
    });
    setFilteredData(result);
    }

/*
const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);

const handleSearch = (event) =>{

}

<Filter filters={maxCllassSize=50, min, }/>
const filter = (props: App) => {
    return (
        <View>
            
        </View>

      );
}; 


export default handleSearch;
 */