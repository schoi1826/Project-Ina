import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, AsyncStorage } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';

export default class DatePickerScreen extends Component {
	constructor(){
		super();
		this.state = {
			show: false,
		};
	}

	ShowHideComponent = () => {
    if (this.state.show == true)
    	this.setState({ show: false });
    else
    	this.setState({ show: true });
  	};

	render() {
		const category = this.props.route.params.category;
		var date = new Date();

		if(Platform.OS != 'android') { //ios
			return (
				<View style={{ flex: 1, paddingTop: 150, backgroundColor: 'white'}}>
					{this.state.show ? (
						<Text style={{textAlign: 'center', fontSize: 18}}>
						Please select a valid {category.toLowerCase()} date.</Text>
					) : null }
					
					<DateTimePicker value={date} onChange={(event, selectedDate) => {
						date = selectedDate;
					}}/>
					
					<Text style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold', backgroundColor: 'steelblue', color: 'white',
					padding: 15, marginTop: 10, shadowOffset: {width: 5, height: 5}, shadowColor: '#aaaaaa', shadowOpacity: 0.6}}
					onPress={ async () => {
						if(dateIsValid(category, date)) {
							if(category == 'DUE'){//pregnancy
					      		await AsyncStorage.setItem('dueDay', JSON.stringify(date.getDate()));
					      		await AsyncStorage.setItem('dueMonth', JSON.stringify(date.getMonth()));
					      		await AsyncStorage.setItem('dueYear', JSON.stringify(date.getFullYear()));
					      		this.props.navigation.navigate('BabyProgress', {appMode: 1, dateUpdate: true,
					      			day: date.getDate(), month: date.getMonth(), year: date.getFullYear()});
					      	}
					      	else{ //young child
					      		await AsyncStorage.setItem('birthDay', JSON.stringify(date.getDate()));
				      			await AsyncStorage.setItem('birthMonth', JSON.stringify(date.getMonth()));
				      			await AsyncStorage.setItem('birthYear', JSON.stringify(date.getFullYear()));
				      			this.props.navigation.navigate('BabyProgress', {appMode: 2, dateUpdate: true,
				      				day: date.getDate(), month: date.getMonth(), year: date.getFullYear()});
					      	}
				      	}
				      	else
				      		this.ShowHideComponent();
			      	}}>SELECT {category} DATE</Text>
			    </View>
			);
		}
		
		else{ //android
			return (
				<View style={{ flex: 1, backgroundColor: 'white'}}>
					{this.state.show ? (
						<Text style={{textAlign: 'center', fontSize: 25, marginTop: 50}}>
						Please select a valid {category.toLowerCase()} date.</Text>
					) : null }

					<DateTimePicker value={date} onChange={ async (event, selectedDate) => {
						if(dateIsValid(category, selectedDate)){
							date = selectedDate;
							if(category == 'DUE'){//pregnancy
					      		await AsyncStorage.setItem('dueDay', JSON.stringify(date.getDate()));
					      		await AsyncStorage.setItem('dueMonth', JSON.stringify(date.getMonth()));
					      		await AsyncStorage.setItem('dueYear', JSON.stringify(date.getFullYear()));
					      		this.props.navigation.navigate('BabyProgress', {appMode: 1, dateUpdate: true,
					      			day: date.getDate(), month: date.getMonth(), year: date.getFullYear()});
					      	}
					      	else{ //young child
					      		await AsyncStorage.setItem('birthDay', JSON.stringify(date.getDate()));
				      			await AsyncStorage.setItem('birthMonth', JSON.stringify(date.getMonth()));
				      			await AsyncStorage.setItem('birthYear', JSON.stringify(date.getFullYear()));
				      			this.props.navigation.navigate('BabyProgress', {appMode: 2, dateUpdate: true,
				      				day: date.getDate(), month: date.getMonth(), year: date.getFullYear()});
					      	}
						}
						else {
							this.ShowHideComponent();
						}
					}}/>
				</View>
			);
		}
	}
}

function dateIsValid(category, date){
	var currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	//Weeks and months calculated in same way as BabyProgress.js, to keep consistency
	
	if(category == "DUE"){
		var differenceInDays = Math.floor((date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
		var month = Math.floor(differenceInDays / 30.4);
        var week = Math.floor(40 - (differenceInDays / 7));
        if(week < 0 || week > 39)
        	return false;
		return true;
	}
	
	else if(category == "BIRTH"){
		var differenceInDays = Math.floor((currentDate.getTime() - date.getTime())/(1000 * 60 * 60 * 24)) + 1;
		var month = Math.floor(differenceInDays / 30.4);
		if(month < 0 || month > 35)
			return false;
		return true;
	}
}