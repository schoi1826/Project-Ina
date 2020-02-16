import React, { Component } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, Card } from 'react-native-elements';

function AllResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item}) => <ResourceItem name={item.name} imagePath={item.imagePath}
			    description = {item.description}/>}
			/>
	    </View>
	);
}

function PregnancyResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item, index}) => {
			    	if(item.category == 'pregnancy') {
				    	return <ResourceItem name={item.name} imagePath={item.imagePath}
				    	description = {item.description}/>}
				    }
			    }
			/>
	    </View>
	);
}

function AfterBirthResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item, index}) => {
			    	if(item.category == 'afterBirth') {
				    	return <ResourceItem name={item.name} imagePath={item.imagePath}
				    	description = {item.description}/>}
				    }
			    }
			/>
	    </View>
	);
}

function YoungChildResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item, index}) => {
			    	if(item.category == 'youngChild') {
				    	return <ResourceItem name={item.name} imagePath={item.imagePath}
				    	description = {item.description}/>}
				    }
			    }
			/>
	    </View>
	);
}

function FinancesResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item, index}) => {
			    	if(item.category == 'finances') {
				    	return <ResourceItem name={item.name} imagePath={item.imagePath}
				    	description = {item.description}/>}
				    }
			    }
			/>
	    </View>
	);
}

function ResourceItem({name, imagePath, description}) {
  return (
    <View style={{flex: 1}}>
		<Card image = {imagePath}>
			<Text style={{fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
			<Text style ={{fontSize: 14, color: '#86878a'}}>{description}</Text>
		</Card>
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

const DATA = [
	{
		name: 'Breastfeeding Peer Counselor',
		description: 'MCH Program',
		imagePath: require("./sd_breastfeeding.png"),
		category: 'afterBirth',
		id: 'breastfeedingPeerCounselor',
	},
	{
		name: 'Coteau',
		description: 'Coteau Clinic',
		imagePath: require("./coteau.png"),
		category: 'pregnancy',
		id: 'coteau',
	},
	{
		name: 'Dakota Pride',
		description: 'SWO Pride',
		imagePath: require("./dakota_pride.png"),
		category: 'pregnancy',
		id: 'dakotaPride',
	},
	{
		name: 'Head Start',
		description: 'SWO Head Start',
		imagePath: require("./swo_ehs.png"),
		category: 'youngChild',
		id: 'headStart',
	},
	{
		name: 'Healthy Start',
		description: 'Northern Plains Healthy Start',
		imagePath: require("./healthy_start.png"),
		category: 'youngChild',
		id: 'healthyStart',
	},
	{
		name: 'IHS',
		description: 'Indian Health Services',
		imagePath: require("./ihs.png"),
		category: 'pregnancy',
		id: 'ihs',
	},
	{
		name: 'IHS Dental',
		description: 'Dental Services',
		imagePath: require("./sisseton_dental.png"),
		category: 'youngChild',
		id: 'ihsDental',
	},
	{
		name: 'IHS Nursing',
		description: 'IHS Public Health',
		imagePath: require("./sisseton_nurse.png"),
		category: 'pregnancy',
		id: 'ihsNursing',
	},
	{
		name: 'Little Steps Daycare',
		description: 'SWO Daycare',
		imagePath: require("./swo_daycare.png"),
		category: 'pregnancy',
		id: '',
	},
	{
		name: 'Medicaid Eligibility',
		description: 'SWO Benefits Coordinator',
		imagePath: require("./swo_benefits.png"),
		category: 'finances',
		id: 'medicaidEligibility',
	},
	{
		name: 'Roberts County',
		description: 'Community Health WIC',
		imagePath: require("./nesd.png"),
		category: 'pregnancy',
		id: 'robertsCounty',
	},
	{
		name: 'Social Services',
		description: 'Department of Social Services',
		imagePath: require("./social_services.png"),
		category: 'finances',
		id: 'socialServices',
	},
	{
		name: 'Special Education',
		description: 'Disability Education Services',
		imagePath: require("./swo_healthrep.png"),
		category: 'pregnancy',
		id: 'youngChild',
	},
	{
		name: 'SWO Child Protection',
		description: 'Child Proection Services',
		imagePath: require("./sd_homevisiting.png"),
		category: 'youngChild',
		id: 'childProtection',
	},
	{
		name: 'SWO Community Health Education',
		description: 'Community Health Education',
		imagePath: require("./swo_healthed.png"),
		category: 'pregnancy',
		id: 'communityHealthEducation',
	},
	{
		name: 'SWO ECI',
		description: 'Early Childhood Intervention',
		imagePath: require("./swo_intervention.png"),
		category: 'youngChild',
		id: 'eci',
	},
	{
		name: 'SWO Education',
		description: 'Education Advice',
		imagePath: require("./swo_education.png"),
		category: 'pregnancy',
		id: 'swoEducation',
	},
	{
		name: 'SWO Food Pantry',
		description: 'Food Pantry',
		imagePath: require("./swo_food.png"),
		category: 'youngChild',
		id: 'foodPantry',
	},
	{
		name: 'WIC',
		description: 'Woman, Infants & Children',
		imagePath: require("./roberts.png"),
		category: 'afterBirth',
		id: 'wic',
	},
]