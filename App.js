import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

import LocalData from './components/LocalData';
import HomeScreen from './components/HomeScreen';
import ChecklistScreen from './components/ChecklistScreen';
import GlossaryScreen from './components/GlossaryScreen';
import ResourcesScreen from './components/ResourcesScreen';
import StoriesScreen from './components/StoriesScreen';
import MapScreen from './components/MapScreen';
import CalendarScreen from './components/CalendarScreen';
import PDFScreen from './components/PDFScreen';
import BabyProgressScreen from './components/BabyProgressScreen';
import ModePickerScreen from './components/ModePickerScreen';
import DatePickerScreen from './components/DatePickerScreen';

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
            <Button
              icon={
                <Icon name='more-vert' color="white" />
              }
              type="clear"
            />
          )
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Project Ina'}} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
        <Stack.Screen name="Glossary" component={GlossaryScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="PDF" component={PDFScreen} />
        <Stack.Screen name="BabyProgress" component={BabyProgressScreen} options={{title: 'Baby Progress'}} />
        <Stack.Screen name="ModePicker" component={ModePickerScreen} options={{title: ''}} />
        <Stack.Screen name="DatePicker" component={DatePickerScreen} options={{title: 'Date Picker'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
