import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import MyNoteScreen from '../screens/MyNoteScreen'

import Icon from 'react-native-vector-icons/MaterialIcons'
const Stack = createStackNavigator();

function NotesNavigation() {

  const headerStyle = {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerLeftContainerStyle: {
      paddingLeft: 20
    },
    headerRightContainerStyle: {
      paddingRight: 20
    },
    headerTintColor: '#000',
    headerBackTitle: ' ',
    headerBackImage: () => <Icon name="keyboard-backspace" size={30} color="#292929" />,
    headerTitleStyle: {
      fontWeight: '400',
    },
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <Stack.Screen
        name="MyNote"
        component={MyNoteScreen}
        options={headerStyle}
      />
    </Stack.Navigator>
  );
}

export default NotesNavigation;