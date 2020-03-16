import React, { Component } from 'react';
import { ScrollView, Modal, Button, View, Text } from 'react-native';

export default class ModalScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: true,
		};
	}

	render() {
		return (
	    	<Modal transparent={false} visible={this.state.modalOpen} animationType={"slide"} >
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: '15%' }}>
					<ScrollView>
						<Text style={{textAlign: 'center', fontWeight: 'bold'}}>Disclaimer</Text>
						<Text style={{lineHeight: 30, margin: 24}}>All content found on the app including images, glossary, and formats were created and 
							intended for informational purposes only. The content in this app is not inclusive of all proper
							treatments or methods of care or as a statement of standard the content in the app is NOT a
							substitute for medical treatment, medical advice, or diagnosis from a professional source.
							While Project Ina makes every effort to provide accurate and reliable information; the medical
							information on this app is subject to becoming outdated at any moment in accordance with
							medical and scientific research findings. The medical information in the app is reviewed on a
							yearly basis, however the information may not reflect the most recent evidence. Project Ina nor
							any of its researchers will be liable for any complications, injury, or claim with respect to any
							liabilities, incurred in connection with the information in this app. If you have any questions
							about your medical condition please seek the advice of your physician or health provider.
							Please do not delay or deny medical treatment because of the information in this app.
							{'\n\n'}
							If you are experiencing or think that you have a medical emergency call your doctor, go to the
							emergency department, or all 911.
						</Text>
						<Button onPress={() => this.setState({modalOpen: false})} title="I understand" />
					</ScrollView>
				</View>
			</Modal>
		);
	}
}