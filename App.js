import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ListsScreen from "./screens/ListsScreen";
import ComingSoonScreen from "./screens/ComingSoonScreen";
import listsScreen from "./screens/ListsScreen";
import ListOptionsScreen from "./screens/ListOptionsScreen";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={ListsScreen} />
        <HomeStack.Screen name="ListOptions" component={ListOptionsScreen} />
    </HomeStack.Navigator>
);

const SettingsStackScreen = () => (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
        <SettingsStack.Screen name="Settings" component={ComingSoonScreen} />
        <SettingsStack.Screen name="Details" component={ListsScreen} />
    </SettingsStack.Navigator>
);

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="Roulette" component={HomeStackScreen} />
              <Tab.Screen name="Soon" component={SettingsStackScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
