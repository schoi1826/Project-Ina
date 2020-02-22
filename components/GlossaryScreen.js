import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import PDFReader from 'rn-pdf-reader-js';

export default class GlossaryScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingBottom: 20}}>
				<FlatList
			      data = {DATA}
			      renderItem={({item}) => <GlossaryItem name={item.name}/>}
			    />
		    </View>
		);
	}
}

function GlossaryItem({name}) {
  return (
    <View style={{paddingTop: 18, paddingLeft: 7, height: 60, borderWidth: 1, borderColor: '#e1e1e1', backgroundColor: '#ffffff',
    flexDirection: 'row', justifyContent: 'flex-start'}}>
    	<Icon name='chevron-right' color='steelblue'/>
    	<Text style={{fontSize: 17, textAlign: 'right'}} onPress={() => {
    		
    	}}>{name}</Text>
    </View>
  );
}

const DATA = [
  	{
  		name: 'Alcohol During Pregnancy',
  		id: 'alcoholDuringPregnancy',
  	},
  	{
  		name: 'Breastfeeding',
  		id: 'breastfeeding',
  	},
  	{
  		name: 'Complicated Pregnancies',
  		id: 'complicatedPregnancies',
  	},
  	{
  		name: 'Domestic Violence',
  		id: 'domesticViolence',
  	},
  	{
  		name: 'Family Planning',
  		id: 'familyPlanning',
  	},
  	{
  		name: 'Gestational Diabetes',
  		id: 'gestationalDiabetes',
  	},
  	{
  		name: 'Healthy Diet',
  		id: 'healthyDIet',
  	},
  	{
  		name: 'Healthy Relationships',
  		id: 'healthyRelationships',
  	},
  	{
  		name: 'Medications During Pregnancy',
  		id: 'medicationsDuringPregnancy',
  	},
  	{
  		name: 'Next Steps After Learning You\'re Pregnant',
  		id: 'nextSteps',
  	},
  	{
  		name: 'Postpartum Depression',
  		id: 'postpartumDepression',
  	},
  	{
  		name: 'Pre-Conception Health',
  		id: 'preConceptionHealth',
  	},
  	{
  		name: 'Pre-eclampsia',
  		id: 'preeclampsia',
  	},
  	{
  		name: 'Prenatal Check-ups',
  		id: 'prenatalCheckups',
  	},
  	{
  		name: 'Prenatal Tests',
  		id: 'prenatalTests',
  	},
  	{
  		name: 'Preparing for Delivery',
  		id: 'preparingForDelivery',
  	},
  	{
  		name: 'Preterm Birth',
  		id: 'pretermBirth',
  	},
  	{
  		name: 'Substance Abuse',
  		id: 'substaceAbuse',
  	},
  	{
  		name: 'Teenage Pregnancy',
  		id: 'teenagePregnancy',
  	},
  	{
  		name: 'Ultrasound Exam',
  		id: 'ultrasoundExam',
  	},
];