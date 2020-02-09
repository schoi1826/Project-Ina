import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';

function DailyList() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	     	<Text>Daily!</Text>
	    </View>
	);
}

function FirstList() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	     	<Text>First Trimester!</Text>
	    </View>
	);
}

function SecondList() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	     	<Text>Second Trimester!</Text>
	    </View>
	);
}

function ThirdList() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	     	<Text>Third Trimester!</Text>
	    </View>
	);
}

const Tab = createBottomTabNavigator();

export default class ChecklistScreen extends Component {
	render() {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Daily') {
							iconName = 'alarm-on';
						} else if (route.name === 'First Trimester') {
							iconName = 'filter-1';
						} else if (route.name === 'Second Trimester') {
							iconName = 'filter-2';
						} else if (route.name === 'Third Trimester') {
							iconName = 'filter-3';
						}

						return <Icon name={iconName} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'steelblue',
				}}
			>
				<Tab.Screen name="Daily" component={DailyList} />
				<Tab.Screen name="First Trimester" component={FirstList} />
				<Tab.Screen name="Second Trimester" component={SecondList} />
				<Tab.Screen name="Third Trimester" component={ThirdList} />
			</Tab.Navigator>
		);
	}
}