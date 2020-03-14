import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';

export default class HomeScreen extends Component {
	render() {
		return (
	        <View style={{flex: 1}}>
		      <View style={{flex: 11, justifyContent: 'center', backgroundColor: 'skyblue'}}>
		      	<TouchableOpacity onPress={ async () => {
		      		var appMode = await AsyncStorage.getItem('appMode');
		      		var dueDay = await AsyncStorage.getItem('dueDay');
		      		var dueMonth = await AsyncStorage.getItem('dueMonth');
		      		var dueYear = await AsyncStorage.getItem('dueYear');
		      		var birthDay = await AsyncStorage.getItem('birthDay');
		      		var birthMonth = await AsyncStorage.getItem('birthMonth');
		      		var birthYear = await AsyncStorage.getItem('birthYear');

		      		if(appMode == 0)
		      			this.props.navigation.navigate('ModePicker');
		      		else if(appMode == 1) //pregnancy
		      			this.props.navigation.navigate('BabyProgress', {appMode: appMode, day: dueDay, month: dueMonth, year: dueYear});
		      		else if(appMode == 2) //young child
		      			this.props.navigation.navigate('BabyProgress', {appMode: appMode, day: birthDay, month: birthMonth, year: birthYear});
		      	}}>
		        	<View style={{alignSelf: 'center', width: 250, height: 250, borderRadius: 250/2, backgroundColor: 'white',
		        	justifyContent: 'center', alignItems: 'center'}}>
		        		<Text style={{fontSize: 25, backgroundColor: 'steelblue', color: 'white', padding: 10,
		        		shadowOffset: {width: 5, height: 5}, shadowColor: '#aaaaaa', shadowOpacity: 0.6}}>
		        		Enter Due Date</Text>
		        	</View>
		      	</TouchableOpacity>
		      </View>
		      
		      <View style={{flex: 8, backgroundColor: 'steelblue'}}>
		        <View style={{flex: 1, flexDirection: 'row'}}>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='check-box' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Checklist')}/>
		            <Text>Checklist</Text>
		          </View>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='import-contacts' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Glossary')}/>
		            <Text>Glossary</Text>
		          </View>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='search' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Resources')}/>
		            <Text>Resources</Text>
		          </View>
		        </View>
		        <View style={{flex: 1, flexDirection: 'row'}}>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='people' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Stories')}/>
		            <Text>Stories</Text>
		          </View>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='map' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Map')}/>
		            <Text>Map</Text>
		          </View>
		          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		            <Icon name='event' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Calendar')}/>
		            <Text>Calendar</Text>
		          </View>
		        </View>
		      </View>
		    </View>
		);
	}
}