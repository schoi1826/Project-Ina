import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import LocalData from './components/LocalData';
import HomeScreen from './components/HomeScreen';
import ChecklistScreen from './components/ChecklistScreen';
import GlossaryScreen from './components/GlossaryScreen';
import ResourcesScreen from './components/ResourcesScreen';
import StoriesScreen from './components/StoriesScreen';
import MapScreen from './components/MapScreen';
import CalendarScreen from './components/CalendarScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'powderblue',
          },
          headerTintColor: 'steelblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Icon 
              name='more-vert' 
              size={30} 
              color="steelblue" 
              onPress={() => {alert('Settings!');}}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Project Ina'}} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
        <Stack.Screen name="Glossary" component={GlossaryScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
