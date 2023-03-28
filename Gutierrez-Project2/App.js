import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import BrowserScreen from './BrowserScreen';

const Stack = createBottomTabNavigator();


const Colors = {
  tabIconDefault: '#C8CCCE',
  tabIconSelected: '#000',
}

const navigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;

    switch (route.name) {
      case "Home" : 
        iconName = focused ? 'ios-home' : 'ios-home-outline';
        break;
      case "Browser" : 
        iconName = focused ? 'ios-list' : 'ios-list-outline';
        break;
    }

    return (
      <Ionicons name={iconName} size={28} style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />);
  },
  tabBarActiveTintColor: Colors.tabIconSelected,
  tabBarInactiveTintColor: Colors.tabIconDefault,
})

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={navigationOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Browser" component={BrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

