import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen';

import Cats from './Cats';
import Dogs from './Dogs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          toBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home': 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-planet' : 'ios-planet';
            } else if (route.name === 'Cats') {
              iconName = focused ? 'ios-fish' : 'ios-fish';
            } else if (route.name === 'Dogs') {
              iconName = focused ? 'ios-paws' : 'ios-paws';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOption={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Cats" component={Cats} />
        <Tab.Screen name="Dogs" component={Dogs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
