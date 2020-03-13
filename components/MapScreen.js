import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount = () => {
		this.loadData()
	}

	loadData = async () => {
		try {
			const raw = await AsyncStorage.getItem('map')
			const parsed = JSON.parse(raw)
			this.setState({data: parsed || []})
		} catch (err) {
			alert(err, 'Cannot load data!')
		}
	}

	render() {
		if(this.state.data.length == 0) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text style={{ fontSize: 20, textAlign: 'center' }}>Loading...</Text>
				</View>
			);
		}

		return (
			<View>
		    	<MapView style={styles.map}>
		    		{Object.values(this.state.data).map((item) => {
		    			return (
		    				<MapView.Marker
		      					coordinate={item.coordinates}
		      					title={item.title}
		      				>
		      					<MapView.Callout onPress={() => {alert('TODO: link pdfs')} }>
		      						<Text>{item.title}</Text>
		      					</MapView.Callout>
		      				</MapView.Marker>
		    			)
		    		})}
		    	</MapView>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
	map: {
    	width: Dimensions.get('window').width,
    	height: Dimensions.get('window').height,
  	}
});