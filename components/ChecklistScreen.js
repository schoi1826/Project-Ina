import React, { Component } from 'react';
import { Button, View, Text, FlatList, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, CheckBox } from 'react-native-elements';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheck = this.handleCheck.bind(this);
		this.state = {
			type: this.props.route.params.type ?? '',
			data: []
		};
	}

	componentDidMount = () => {
		this.setState({data: this.loadData(this.state.type)})
	}

	loadData = async () => {
		try {
			const raw = await AsyncStorage.getItem(this.state.type)
			const parsed = JSON.parse(raw)
			this.setState({data: parsed || []})
		} catch (err) {
			alert(err, 'Cannot load data!')
		}
	}

	handleCheck = async (val) => {
		try {
			const a = await AsyncStorage.getItem(this.state.type)
			const b = JSON.parse(a)
			b[val].checked = !b[val].checked
			await AsyncStorage.setItem(this.state.type, JSON.stringify(b))
			this.setState({data: b})
		} catch (err) {
			alert(err, 'Cannot get data!')
		}
	}

	handleEmpty = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text style={{ fontSize: 20, textAlign: 'center' }}>Nothing to do yet!</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={{ flex: 1}}>
		     	<FlatList
		     		contentContainerStyle={{ flex: 1 }}
		     		data={this.state.data}
		     		renderItem={({ item }) => 
		     			<CheckBox title={item.id} checked={item.checked} onPress={() => this.handleCheck(item.key)} />
		     		}
		     		ListEmptyComponent={this.handleEmpty()}
		     	/>
		    </View>
		);
	}
}

const Tab = createBottomTabNavigator();

export default class ChecklistScreen extends Component {
	render() {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Daily') {
							iconName = 'alarm-on';
						} else if (route.name === 'First Trimester') {
							iconName = 'filter-1';
						} else if (route.name === 'Second Trimester') {
							iconName = 'filter-2';
						} else if (route.name === 'Third Trimester') {
							iconName = 'filter-3';
						}

						return <Icon name={iconName} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'steelblue',
				}}
			>
				<Tab.Screen name="Daily" component={List} initialParams={{type: 'daily'}} />
				<Tab.Screen name="First Trimester" component={List} initialParams={{type: 'trim1'}} />
				<Tab.Screen name="Second Trimester" component={List} initialParams={{type: 'trim2'}} />
				<Tab.Screen name="Third Trimester" component={List} initialParams={{type: 'trim3'}} />
			</Tab.Navigator>
		);
	}
}