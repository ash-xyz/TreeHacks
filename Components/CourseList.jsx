import { getFilteredCourses, defaultFilter } from './Filter.js';
import { FlatList, ScrollView, View, Text, TextInput } from 'react-native';
import { Card, Dialog, Button, Icon } from '@rneui/themed';
import React, { useState } from 'react';
import CourseCard from './Course.jsx';
const CourseList = props => {

    const [filterSettingVisible, setFilterSettingVisible] = useState(false);
    const [title, setTitle] = useState('');

    const filter  = {
        minHours: 0, maxHours: Number.MAX_SAFE_INTEGER,
        Title: title, Professor: null,
        minAverageRating: 0, maxAverageRating: Number.MAX_SAFE_INTEGER,
        minClassSize: 0, maxClassSize: Number.MAX_SAFE_INTEGER,
        minCredits: 0, maxCredits: Number.MAX_SAFE_INTEGER,
        lotteryRequirement: null
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
            </Dialog>
        </View>
    );
}

export default CourseList;