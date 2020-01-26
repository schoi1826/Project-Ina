import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
      <View style={{flex: 11, justifyContent: 'center', backgroundColor: 'skyblue'}}>
        <View style={{alignSelf: 'center', width: 250, height: 250, borderRadius: 250/2, backgroundColor: 'white'}}/>
      </View>
      <View style={{flex: 8, backgroundColor: 'steelblue'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='check-box' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Checklist</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='import-contacts' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Glossary</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='search' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Resources</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='people' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Stories</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='map' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Map</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='event' color='white' size={100} underlayColor='steelblue' onPress={() => {alert('You tapped the button!');}}/>
            <Text>Calendar</Text>
          </View>
        </View>
      </View>
    </View>
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
