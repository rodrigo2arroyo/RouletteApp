// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Button
                    title="Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View>
                <Text style={styles.text}>Header Text!</Text>
            </View>
            <View>
                <Text style={styles.text}>Welcome to the Home Screen!</Text>
            </View>
            <View>
                <Button
                    title="Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 24,
    },
});

export default HomeScreen;
