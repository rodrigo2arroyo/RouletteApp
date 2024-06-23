import {View, Text, StyleSheet, Button, Animated} from 'react-native';
import React, { useState } from 'react';
import Option from "../components/Option";

const ListOptionsScreen = () => {

    const [options, setOptions] =
        useState<{ id: number, optionName: string, optionProbability: string}[]>([]);

    const addOption = () => {
        setOptions([...options, { id: options.length, optionName: 'Option '+options.length, optionProbability: '1'}]);
        console.warn("Option Added")
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Options List Screen</Text>
            <Option optionName='Opción 1' optionProbability='3' onLeftSwipe={null} onRightSwipe={null}/>
            {options.map(option => (
                <Option
                    key={option.id}
                    optionName={option.optionName}
                    optionProbability={option.optionProbability}
                    onLeftSwipe={() => console.log('Left swipe, should highlight the option')}
                    onRightSwipe={() => console.log('Right swipe, should delete the option')}/>
            ))}
            <Button title='Agregar opción' onPress={addOption}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default ListOptionsScreen;
