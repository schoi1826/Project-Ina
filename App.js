import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import HomeScreen from './components/HomeScreen';
import ChecklistScreen from './components/ChecklistScreen';
import GlossaryScreen from './components/GlossaryScreen';
import ResourcesScreen from './components/ResourcesScreen';
import StoriesScreen from './components/StoriesScreen';
import MapScreen from './components/MapScreen';
import CalendarScreen from './components/CalendarScreen';
import PDFScreen from './components/PDFScreen';

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
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Homescreen Here!'}} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} options={{title: 'Checklists Here!'}} />
        <Stack.Screen name="Glossary" component={GlossaryScreen} options={{title: 'Glossary Here!'}} />
        <Stack.Screen name="Resources" component={ResourcesScreen} options={{title: 'Resources Here!'}} />
        <Stack.Screen name="Stories" component={StoriesScreen} options={{title: 'Stories Here!'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title: 'Map Here!'}} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{title: 'Calendar Here!'}} />
        <Stack.Screen name="PDF" component={PDFScreen} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
