import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

interface ListProps  {
    leftButtonTitle: string;
    rightButtonTitle: string;
    text: string;
    onLeftButtonPress: () => void;
    onRightButtonPress: () => void;
    onDeletePress: () => void;
}

const List: React.FC<ListProps> = ({
                                       leftButtonTitle,
                                       rightButtonTitle,
                                       text,
                                       onLeftButtonPress,
                                       onRightButtonPress,
                                       onDeletePress
                                   }) => {

    const renderRightActions = () => {
        return (
            <View style={styles.deleteButton}>
                <Button title="Delete" onPress={onDeletePress} color="#ff3b30" />
            </View>
        );
    };

    const renderLeftActions = () => {
        return (
            <View style={styles.deleteButton}>
                <Button title="Delete" onPress={onDeletePress} color="#ff3b30" />
            </View>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
            <View style={styles.card}>
                <Button title={leftButtonTitle} onPress={onLeftButtonPress} />
                <Text style={styles.text}>{text}</Text>
                <Button title={rightButtonTitle} onPress={onRightButtonPress} />
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        margin: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        backgroundColor: '#ff3b30',
        borderRadius: 8,
        margin: 16,
    },
});

export default List;
