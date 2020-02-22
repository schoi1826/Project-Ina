import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import {Asset} from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class PDFScreen extends Component {
	render() {
		const pdfPath = this.props.route.params.pdfPath;
		
		let absolute_path = Asset.fromModule(pdfPath).uri;
		return (
			<PDFReader
				source={{uri: absolute_path}}
			/>
		);
	}
}