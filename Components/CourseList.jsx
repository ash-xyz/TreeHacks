import { getFilteredCourses, defaultFilter } from './Filter.js';
import { View } from 'react-native';
import CourseCard from './Course.jsx';
const CourseList = props => {
    let filter = defaultFilter;
    const filteredCourses = getFilteredCourses(filter);
    return (
        <View>
            <CourseCard code='PHIL 186'
                course={filteredCourses['PHIL 186']} />
        </View>
    );
}

export default CourseList;

{/* <View>
            {Object.keys(filteredCourses).map((code) => (
                <CourseCard key={code} code={code} course={filteredCourses[code]} />
            ))}
        </View> */}