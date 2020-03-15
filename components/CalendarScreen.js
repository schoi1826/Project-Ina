import React, { Component } from 'react';
import { Button, View, Text, Linking, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';

export default class CalendarScreen extends Component {
	render() {
		return (
			/*<View style={{flex: 1, alignItems: "center", marginTop: 25}}>
				<Text style={{fontSize: 18}}
					onPress={()=> Linking.openURL("https://calendar.google.com/calendar/embed?src=9lvrp56s3183tjghla9ufie8l8%40group.calendar.google.com&ctz=America%2FNew_York")}>
					Click here to view the full calendar!
				</Text>

			</View>*/
			
			<WebView
				source={{uri:"https://calendar.google.com/calendar/embed?src=9lvrp56s3183tjghla9ufie8l8%40group.calendar.google.com&ctz=America%2FNew_York"}}
			/>
		);
	}
}

/*async function getEventsAsync(){
	var response = await fetch('https://www.googleapis.com/calendar/v3/calendars/9lvrp56s3183tjghla9ufie8l8@group.calendar.google.com/events');
	var responseJson = JSON.stringify(response);
}*/