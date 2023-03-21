import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import View1 from './views/View1';
import View2 from './views/View2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = {navigationOptions}>
        <Tab.Screen name="View 1" component={View1} />
        <Tab.Screen name="View 2" component={View2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Colors = {
  tabIconDefault: '#C8CCCE',
  tabIconSelected: '#000',
}

const navigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName;

    switch (route.name) {
      case "View 1" : 
        iconName = focused ? 'ios-home' : 'ios-home-outline';
        break;
      case "View 2" : 
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