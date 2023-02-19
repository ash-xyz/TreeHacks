import { Text, Card, Dialog, Button, Icon } from '@rneui/themed';
import React, { useState } from 'react';

const CourseCard = props => {
    const [fullInfoVisible, setFullInfoVisible] = useState(false);

    const toggle = () => {
        setFullInfoVisible(!fullInfoVisible);
    };
    return (
        <Card>
            <Text>{props.code}</Text>
            <Text h4>{props.course.Title}</Text>
            <Text>{props.course.Term} | Professor {props.course.Professor}</Text>
            <Text>{props.course['Workload (hrs/wk)']}⌛
                {props.course['ClassSize']}🧍
                {props.course.Credits}🍪
                {props.course.AverageRating}{props.course.AverageRating < 3 ? '📉' : '📈'}
                {props.course.LotteryRequirement}🎰
            </Text>
            <Text>{'\n'}</Text>
            <Button radius={'sm'} type="solid" onPress={toggle}>
                Learn More
                <Icon name="info" color="white" />
            </Button>

            <Dialog
                isVisible={fullInfoVisible}
                onBackdropPress={toggle}>
                <Dialog.Title title={props.code} />
                <Text h4>{props.course.Title}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Thaught by</Text> Professor {props.course.Professor}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Term:</Text> {props.course.Term}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Workload (hrs/wk):</Text> {props.course['Workload (hrs/wk)']}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Class Size:</Text> {props.course['ClassSize']}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Credits:</Text> {props.course.Credits} </Text>
                <Text><Text style={{ fontWeight: "bold" }}>Average Rating:</Text> {props.course.AverageRating} {props.course.AverageRating < 3 ? '📉' : '📈'}</Text>
                <Text><Text style={{ fontWeight: "bold" }}>Lottery Requirement</Text> {props.course.LotteryRequirement}</Text>
                <Text style={{ fontWeight: "bold" }}>Reviews:</Text>
                <Text>{
                    props.course.Reviews.map((y) => {
                        return (<Text>
                            {`\u2022`} {y} {'\n'}
                        </Text>);
                    })
                }</Text>
            </Dialog>
        </Card>
    );
};

export default CourseCard;