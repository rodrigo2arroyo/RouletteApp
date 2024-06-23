import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonRight}>
                <Button
                    title="Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={styles.textCenter}>
                <Text style={styles.text}>Header Text!</Text>
            </View>
            <View style={styles.textCenter}>
                <Text style={styles.text}>Welcome to the Home Screen!</Text>
            </View>
            <View style={styles.buttonRight}>
                <Button
                    title="View options"
                    onPress={() => navigation.navigate('ListOptions')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 24,
    },
    buttonRight: {
        alignItems: 'flex-end', // Aligns the button to the right
        padding: 10, // Adds some padding
    },
    textCenter: {
        alignItems: 'center', // Centers the text horizontally
        justifyContent: 'center', // Centers the text vertically
        flex: 1, // Takes up the remaining space
    }
});

export default HomeScreen;
