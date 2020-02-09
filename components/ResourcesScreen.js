import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements';

function AllResources() {
	return (
	    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	     	<Text>All!</Text>
	    </View>
	);
}

function PregnancyResources() {
	return (
    	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      		<Text>Pregnancy!</Text>
    	</View>
  	);
}

function AfterBirthResources() {
	return (
    	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      		<Text>After Birth!</Text>
    	</View>
  	);
}

function YoungChildResources() {
	return (
    	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      		<Text>Pregnancy!</Text>
    	</View>
  	);
}

function FinancesResources() {
	return (
    	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      		<Text>Finances!</Text>
    	</View>
  	);
}

const Tab = createBottomTabNavigator();

export default class ResourcesScreen extends Component {
	render() {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'All') {
							iconName = 'all-inclusive';
						} else if (route.name === 'Pregnancy') {
							iconName = 'pregnant-woman';
						} else if (route.name === 'After Birth') {
							iconName = 'child-friendly';
						} else if (route.name === 'Young Child') {
							iconName = 'child-care';
						} else if (route.name === 'Finances') {
							iconName = 'attach-money';
						}

						return <Icon name={iconName} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'steelblue',
				}}
			>
				<Tab.Screen name="All" component={AllResources} />
				<Tab.Screen name="Pregnancy" component={PregnancyResources} />
				<Tab.Screen name="After Birth" component={AfterBirthResources} />
				<Tab.Screen name="Young Child" component={YoungChildResources} />
				<Tab.Screen name="Finances" component={FinancesResources} />
			</Tab.Navigator>
		);
	}
}