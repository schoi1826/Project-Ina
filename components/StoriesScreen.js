import React, { Component } from 'react';
import { Button, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class StoriesScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingBottom: 20}}>
				<FlatList
			      data = {DATA}
			      renderItem={({item}) => <StoryItem name={item.name} imagePath={item.imagePath}
			      pdfPath={item.pdfPath} navigation={this.props.navigation}/>}
			    />
		    </View>
		);
	}
}

function StoryItem({name, imagePath, pdfPath, navigation}) {
  return (
    <View style={{flex: 1}}>
	    <TouchableOpacity onPress={() => {
	    	navigation.navigate('PDF', {
	    		pdfPath: pdfPath,
	    	});
	    }}>
			<Card image = {imagePath}>
				<Text style={{fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
			</Card>
		</TouchableOpacity>
	</View>
  );
}

const DATA = [
	{
		name: 'Dakota Pregnancy Traditions',
		imagePath: require("./pregnancy_traditions.png"),
		id: 'pregnacyTraditions',
		pdfPath: require('../assets/Dakota_Pregnancy_Traditions.pdf'),
	},
	{
		name: 'Pregnancy as Sacred',
		imagePath: require("./pregnancy_as_sacred.jpg"),
		id: 'pregnancyAsSacred',
		pdfPath: require('../assets/Pregnancy_as_Sacred.pdf'),
	},
	{
		name: 'The Woman in the Sky',
		imagePath: require("./the_woman_in_the_sky.jpg"),
		id: 'womanInTheSky',
		pdfPath: require('../assets/The_Woman_in_the_Sky.pdf'),
	},
]