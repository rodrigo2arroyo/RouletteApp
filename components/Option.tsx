import React from 'react';
import { View, Text, Button } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

interface OptionProps  {
    optionName: string;
    optionProbability: string;
    onRightSwipe: () => void;
    onLeftSwipe: () => void;
}

const Option: React.FC<OptionProps> = ({
                                       optionName,
                                        optionProbability,
                                        onRightSwipe,
                                        onLeftSwipe,
                                   }) => {

    const renderRightActions = () => {
        return (
            <View>
                <Button title="Delete" onPress={onRightSwipe} color="#ff3b30" />
            </View>
        );
    };

    const renderLeftActions = () => {
        return (
            <View >
                <Button title="Mark" onPress={onLeftSwipe} color="#ff3b30" />
            </View>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <View>
                <Text>{optionName}:{optionProbability}</Text>
            </View>
        </Swipeable>
    );
};


export default Option;
