import { AsyncStorage } from 'react-native';

const daily = [
	{id: 'Drink water', checked: false, key: 0},
	{id: 'Eat healthy', checked: false, key: 1}
]

const trim1 = [
	{id: 'Choose a healthcare provider', checked: false, key: 0 },
	{id: 'Make a prenatal appointment', checked: false, key: 1}
]

try {
	AsyncStorage.setItem('daily', JSON.stringify(daily))
	AsyncStorage.setItem('trim1', JSON.stringify(trim1))
} catch (e) {
	alert("here",e)
}