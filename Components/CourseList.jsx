import { getFilteredCourses, defaultFilter } from './Filter.js';
import { FlatList, ScrollView, View, Text, TextInput } from 'react-native';
import { Card, Dialog, Button, Icon } from '@rneui/themed';
import React, { useState } from 'react';
import CourseCard from './Course.jsx';
const CourseList = props => {

    const [filterSettingVisible, setFilterSettingVisible] = useState(false);

    const [title, setTitle] = useState('');
    const [professor, setProfessor] = useState('');

    const [minHours, setMinHours] = useState(0);
    const [maxHours, setMaxHours] = useState(Number.MAX_SAFE_INTEGER);

    const [minAverageRating, setMinAverageRatings] = useState(0);
    const [maxAverageRating, setMaxAverageRating] = useState(Number.MAX_SAFE_INTEGER);

    const [minClassSize, setMinClassSize] = useState(0);
    const [maxClassSize, setMaxClassSize] = useState(Number.MAX_SAFE_INTEGER);

    const [minCredits, setMinCredits] = useState(0);
    const [maxCredits, setMaxCredits] = useState(Number.MAX_SAFE_INTEGER);

    const [lotteryRequirement, setLotteryRequirement] = useState(null);

    const filter = {
        minHours: minHours, maxHours: maxHours,
        Title: title, Professor: professor,
        minAverageRating: minAverageRating, maxAverageRating: maxAverageRating,
        minClassSize: minClassSize, maxClassSize: maxClassSize,
        minCredits: minCredits, maxCredits: maxCredits,
        lotteryRequirement: lotteryRequirement
    };
    const filteredCourses = getFilteredCourses(filter);

    const toggle = () => {
        setFilterSettingVisible(!filterSettingVisible);
    };

    return (
        <View>
            <ScrollView>
                {Object.keys(filteredCourses).map((code) => (
                    <CourseCard key={code} code={code} course={filteredCourses[code]} />
                ))}
            </ScrollView>

            <Button radius={'sm'} type="solid" onPress={toggle}>
                Adjust Filters
                <Icon name="filter" type='ant-design' color="white" />
            </Button>

            <Dialog
                isVisible={filterSettingVisible}
                onBackdropPress={toggle}>
                <Dialog.Title title="Filter Settings" />
                <TextInput
                    placeholder={"Title: " + title}
                    onChangeText={newText => setTitle(newText)}
                    defaultValue={title} />
                <TextInput
                    placeholder={"Professor: " + title}
                    onChangeText={newText => setProfessor(newText)}
                    defaultValue={professor} />
                <TextInput
                    placeholder={"Minimum Hours: " + minHours}
                    onChangeText={newHours => setMinHours(newHours)}
                    defaultValue={minHours} />
                <TextInput
                    placeholder={"Maximum Hours: " + (maxHours === Number.MAX_SAFE_INTEGER ? 'MAX' : maxHours)}
                    onChangeText={newHours => setMaxHours(newHours)}
                    defaultValue={maxHours} />
                <TextInput
                    placeholder={"Minimum Average Rating: " + minAverageRating}
                    onChangeText={newRating => setMinAverageRatings(newRating)}
                    defaultValue={minAverageRating} />
                <TextInput
                    placeholder={"Maximum Average Rating: " + (maxAverageRating === Number.MAX_SAFE_INTEGER ? 'MAX' : maxAverageRating)}
                    onChangeText={newRating => setMaxAverageRating(newRating)}
                    defaultValue={maxAverageRating} />
                <TextInput
                    placeholder={"Minimum Class Size: " + minClassSize}
                    onChangeText={newSize => setMinClassSize(newSize)}
                    defaultValue={minClassSize} />
                <TextInput
                    placeholder={"Maximum Class Size: " + (maxClassSize === Number.MAX_SAFE_INTEGER ? 'MAX' : maxClassSize)}
                    onChangeText={newSize => setMaxClassSize(newSize)}
                    defaultValue={maxClassSize} />
                <TextInput
                    placeholder={"Minimum Credits: " + minCredits}
                    onChangeText={newSize => setMinCredits(newSize)}
                    defaultValue={minCredits} />
                <TextInput
                    placeholder={"Maximum Credits: " + (maxCredits === Number.MAX_SAFE_INTEGER ? 'MAX' : maxCredits)}
                    onChangeText={newSize => setMaxCredits(newSize)}
                    defaultValue={maxCredits} />

                <TextInput
                    placeholder={"Lottery Requirement (yes/none): " + lotteryRequirement}
                    onChangeText={newLottery => setLotteryRequirement(newLottery)}
                    defaultValue={lotteryRequirement} />
            </Dialog>
        </View>
    );
}

export default CourseList;