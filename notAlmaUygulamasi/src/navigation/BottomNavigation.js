import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeNavigation from './HomeNavigation'
import CreateNoteScreen from '../screens/CreateNoteScreen'
import NotesNavigation from './NotesNavigation'

import { FirebaseProvider } from '../provider/Provider'

const Tab = createBottomTabNavigator();

const BottomNavigation = (props) => {
  return (
    <NavigationContainer>
      <FirebaseProvider>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
              height: 75,
              alignItems: 'center'
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeNavigation}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="Take Note"
            component={CreateNoteScreen}
            options={{
              tabBarLabel: 'Take Note',
              tabBarIcon: ({ color, size }) => (
                <Icon name="note-add" color={color} size={35} />
              ),
            }}
          />
          <Tab.Screen
            name="Notes"
            component={NotesNavigation}
            options={{
              tabBarLabel: 'Notes',
              tabBarIcon: ({ color, size }) => (
                <Icon name="description" color={color} size={35} />
              ),
            }}
          />
        </Tab.Navigator>
      </FirebaseProvider>
    </NavigationContainer >
  );
}

export default BottomNavigation;