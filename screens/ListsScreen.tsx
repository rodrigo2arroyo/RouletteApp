import {View, Text, StyleSheet, Button, Animated} from 'react-native';
import List from "../components/List";
import React, { useState } from 'react';
import add = Animated.add;

const ListsScreen = () => {

    const [lists, setLists] =
        useState<{ id: number, leftButtonTitle: string, rightButtonTitle: string, text: string, onLeftButtonPress: any, onRightButtonPress: any  }[]>([]);

    const addList = () => {
        setLists([...lists, { id: lists.length, leftButtonTitle: 'Left', rightButtonTitle: 'Right', text: 'New List', onLeftButtonPress: null, onRightButtonPress: null }]);
        console.warn("List Added")
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Details Screen</Text>
            <List leftButtonTitle='123' rightButtonTitle='123' text='123' onLeftButtonPress={null} onRightButtonPress={null} onDeletePress={null}>

            </List>
            {lists.map(list => (
                <List
                    key={list.id}
                    leftButtonTitle={list.leftButtonTitle}
                    rightButtonTitle={list.rightButtonTitle}
                    text={list.text}
                    onLeftButtonPress={() => console.log('Left button pressed')}
                    onRightButtonPress={() => console.log('Right button pressed')}
                    onDeletePress={null}/>
            ))}
            <Button title='Agregar Lista' onPress={addList}>

            </Button>
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

export default ListsScreen;
