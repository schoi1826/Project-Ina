import React, { Component } from 'react';
import { Button, View, Text, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import {Asset} from 'expo-asset';
import PDFViewer from 'rn-pdf-reader-js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class PDFScreen extends Component {
	render() {
		const pdfPath = this.props.route.params.pdfPath;
		
		let absolute_path = Asset.fromModule(pdfPath).uri;
		if(Platform.OS == 'android')
			absolute_path = "https://drive.google.com/viewerng/viewer?embedded=true&url=" + absolute_path;
		
		return(
			<WebView
				source={{uri: absolute_path}}
				onShouldStartLoadWithRequest={event => { //opens embedded links in browser
					if (event.url !== absolute_path) {
    					Linking.openURL(event.url);
    					return false;
					}
					return true;
				}}
				dataDetectorTypes={'link', 'phoneNumber'}
			/>
		);
        		
		//decelerationRate = {'fast'}
	}
}