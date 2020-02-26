import React, { Component } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Card } from 'react-native-elements';

function AllResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    //renderItem={({item}) => <ResourceItem name={item.name} imagePath={item.imagePath}
			    //description = {item.description} pdfPath={item.pdfPath}/>}
			    renderItem={renderItemAll}
			/>
	    </View>
	);
}

const renderItemAll = ({ item }) => (<ResourceItem name={item.name} imagePath={item.imagePath}
			    description = {item.description} pdfPath={item.pdfPath}/>);

function PregnancyResources() {
	return (
	    <View style={{ flex: 1, paddingBottom: 20}}>
	     	<FlatList
	     		data = {DATA}
			    renderItem={({item, index}) => {
			    	if(item.category == 'pregnancy') {
				    	return <ResourceItem name={item.name} imagePath={item.imagePath}
				    	description = {item.description} pdfPath={item.pdfPath}/>}
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
				    	description = {item.description} pdfPath={item.pdfPath}/>}
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
				    	description = {item.description} pdfPath={item.pdfPath}/>}
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
				    	description = {item.description} pdfPath={item.pdfPath}/>}
				    }
			    }
			/>
	    </View>
	);
}


function ResourceItem({name, imagePath, pdfPath, description}) {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
	    <TouchableOpacity onPress={() => {
	    	navigation.navigate('PDF', {
	    		pdfPath: pdfPath,
	    	});
	    }}>
			<Card image = {imagePath}>
				<Text style={{fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
				<Text style ={{fontSize: 14, color: '#86878a'}}>{description}</Text>
			</Card>
		</TouchableOpacity>
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
		name: 'Link Test',
		description: 'Test',
		imagePath: require("./sd_breastfeeding.png"),
		category: 'afterBirth',
		id: 'coteauTest',
		pdfPath: require('../assets/Coteau_test.pdf'),
	},
	{
		name: 'Breastfeeding Peer Counselor',
		description: 'MCH Program',
		imagePath: require("./sd_breastfeeding.png"),
		category: 'afterBirth',
		id: 'breastfeedingPeerCounselor',
		pdfPath: require('../assets/Breastfeeding_Peer_Counselor.pdf'),
	},
	{
		name: 'Coteau',
		description: 'Coteau Clinic',
		imagePath: require("./coteau.png"),
		category: 'pregnancy',
		id: 'coteau',
		pdfPath: require('../assets/Coteau.pdf'),
	},
	{
		name: 'Dakota Pride',
		description: 'SWO Pride',
		imagePath: require("./dakota_pride.png"),
		category: 'pregnancy',
		id: 'dakotaPride',
		pdfPath: require('../assets/Dakota_Pride.pdf'),
	},
	{
		name: 'Head Start',
		description: 'SWO Head Start',
		imagePath: require("./swo_ehs.png"),
		category: 'youngChild',
		id: 'headStart',
		pdfPath: require('../assets/Head_Start.pdf'),
	},
	{
		name: 'Healthy Start',
		description: 'Northern Plains Healthy Start',
		imagePath: require("./healthy_start.png"),
		category: 'youngChild',
		id: 'healthyStart',
		pdfPath: require('../assets/Healthy_Start.pdf'),
	},
	{
		name: 'IHS',
		description: 'Indian Health Services',
		imagePath: require("./ihs.png"),
		category: 'pregnancy',
		id: 'ihs',
		pdfPath: require('../assets/IHS.pdf'),
	},
	{
		name: 'IHS Dental',
		description: 'Dental Services',
		imagePath: require("./sisseton_dental.png"),
		category: 'youngChild',
		id: 'ihsDental',
		pdfPath: require('../assets/IHS_Dental.pdf'),
	},
	{
		name: 'IHS Nursing',
		description: 'IHS Public Health',
		imagePath: require("./sisseton_nurse.png"),
		category: 'pregnancy',
		id: 'ihsNursing',
		pdfPath: require('../assets/IHS_Nursing.pdf'),
	},
	{
		name: 'Little Steps Daycare',
		description: 'SWO Daycare',
		imagePath: require("./swo_daycare.png"),
		category: 'pregnancy',
		id: '',
		pdfPath: require('../assets/Little_Steps_Daycare.pdf'),
	},
	{
		name: 'Medicaid Eligibility',
		description: 'SWO Benefits Coordinator',
		imagePath: require("./swo_benefits.png"),
		category: 'finances',
		id: 'medicaidEligibility',
		pdfPath: require('../assets/Medicaid_Eligibility.pdf'),
	},
	{
		name: 'Roberts County',
		description: 'Community Health WIC',
		imagePath: require("./nesd.png"),
		category: 'pregnancy',
		id: 'robertsCounty',
		pdfPath: require('../assets/Roberts_County.pdf'),
	},
	{
		name: 'Social Services',
		description: 'Department of Social Services',
		imagePath: require("./social_services.png"),
		category: 'finances',
		id: 'socialServices',
		pdfPath: require('../assets/Social_Services.pdf'),
	},
	{
		name: 'Special Education',
		description: 'Disability Education Services',
		imagePath: require("./swo_healthrep.png"),
		category: 'pregnancy',
		id: 'youngChild',
		pdfPath: require('../assets/Special_Education.pdf'),
	},
	{
		name: 'SWO Child Protection',
		description: 'Child Proection Services',
		imagePath: require("./sd_homevisiting.png"),
		category: 'youngChild',
		id: 'childProtection',
		pdfPath: require('../assets/SWO_Child_Protection_Program.pdf'),
	},
	{
		name: 'SWO Community Health Education',
		description: 'Community Health Education',
		imagePath: require("./swo_healthed.png"),
		category: 'pregnancy',
		id: 'communityHealthEducation',
		pdfPath: require('../assets/SWO_Community_Health_Education.pdf'),
	},
	{
		name: 'SWO ECI',
		description: 'Early Childhood Intervention',
		imagePath: require("./swo_intervention.png"),
		category: 'youngChild',
		id: 'eci',
		pdfPath: require('../assets/SWO_Early_Childhood_Intervention.pdf'),
	},
	{
		name: 'SWO Education',
		description: 'Education Advice',
		imagePath: require("./swo_education.png"),
		category: 'pregnancy',
		id: 'swoEducation',
		pdfPath: require('../assets/SWO_Education.pdf'),
	},
	{
		name: 'SWO Food Pantry',
		description: 'Food Pantry',
		imagePath: require("./swo_food.png"),
		category: 'youngChild',
		id: 'foodPantry',
		pdfPath: require('../assets/SWO_Food_Pantry.pdf'),
	},
	{
		name: 'WIC',
		description: 'Woman, Infants & Children',
		imagePath: require("./roberts.png"),
		category: 'afterBirth',
		id: 'wic',
		pdfPath: require('../assets/WIC.pdf'),
	},
]