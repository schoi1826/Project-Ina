import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default class ModePickerScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'steelblue'}}>
				<LinearGradient style={{flex: 1}} colors={['steelblue', 'skyblue', 'white']}>
					<Text style={{textAlign: 'center', margin: 20, marginTop: 50, fontSize: 21, color: 'white', fontWeight: 'bold'}}>
					Please select how you would like to use this app.</Text>
					
					<Text style={styles.box} onPress={() => {
						//save appMode = 1
						this.props.navigation.navigate('DatePicker', {category: "DUE"});
					}}>I'M PREGNANT</Text>
					
					<Text style={styles.box} onPress={() => {
						//save appMode = 2
						this.props.navigation.navigate('DatePicker', {category: "BIRTH"});
					}}>MY BABY IS UNDER 3 YEARS OLD</Text>
				</LinearGradient>
		    </View>
		);
	}
}


const styles = StyleSheet.create({
	box: {
		fontSize: 25,
		borderColor: '#ffffff',
		borderWidth: 2,
		margin: 20,
		padding: 50,
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
	}
});