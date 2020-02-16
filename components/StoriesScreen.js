import React, { Component } from 'react';
import { Button, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class StoriesScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingBottom: 20}}>
				<FlatList
			      data = {DATA}
			      renderItem={({item}) => <StoryItem name={item.name} imagePath={item.imagePath}/>}
			    />
		    </View>
		);
	}
}

function StoryItem({name, imagePath}) {
  return (
    <View style={{flex: 1}}>
	    <TouchableOpacity onPress={() => {alert('Clicked ' + name);}}>
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
		id: 'pregnancyTraditions',
	},
	{
		name: 'Pregnancy as Sacred',
		imagePath: require("./pregnancy_as_sacred.jpg"),
		id: 'pregnancyAsSacred',
	},
	{
		name: 'The Woman in the Sky',
		imagePath: require("./the_woman_in_the_sky.jpg"),
		id: 'womanInTheSky',
	},
]