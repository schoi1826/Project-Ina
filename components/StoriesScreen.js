import React, { Component } from 'react';
import { Button, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class StoriesScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingBottom: 20}}>
				<FlatList
			      data = {DATA}
			      renderItem={renderItem}
			    />
		    </View>
		);
	}
}

const renderItem = ({ item }) => (<StoryItem name={item.name} imagePath={item.imagePath}
			      pdfPath={item.pdfPath}/>);

function StoryItem({name, imagePath, pdfPath}) {
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
			</Card>
		</TouchableOpacity>
	</View>
  );
}

const DATA = [
	{
		name: 'Dakota Pregnancy Traditions',
		imagePath: require("../assets/images/pregnancy_traditions.png"),
		id: 'pregnacyTraditions',
		pdfPath: require('../assets/pdfs/stories/Dakota_Pregnancy_Traditions.pdf'),
	},
	{
		name: 'Pregnancy as Sacred',
		imagePath: require("../assets/images/pregnancy_as_sacred.jpg"),
		id: 'pregnancyAsSacred',
		pdfPath: require('../assets/pdfs/stories/Pregnancy_as_Sacred.pdf'),
	},
	{
		name: 'The Woman in the Sky',
		imagePath: require("../assets/images/the_woman_in_the_sky.jpg"),
		id: 'womanInTheSky',
		pdfPath: require('../assets/pdfs/stories/The_Woman_in_the_Sky.pdf'),
	},
]