i
import { getFilteredCourses, defaultFilter } from './Filter.js';
import { FlatList,ScrollView, View, Text } from 'react-native';
import CourseCard from './Course.jsx';
const CourseList = props => {
    let filter = defaultFilter;
    const filteredCourses = getFilteredCourses(filter);
    return (
        <ScrollView>
            {/* <FlatList> */}
                <Text>Hi</Text>
                {Object.keys(filteredCourses).map((code) => (
                    <CourseCard key={code} code={code} course={filteredCourses[code]} />
                ))}
            {/* </FlatList> */}
        </ScrollView>
    );
}

export default CourseList;