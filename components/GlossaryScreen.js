import React, { Component } from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import PDFReader from 'rn-pdf-reader-js';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class GlossaryScreen extends Component {
	render() {
		return (
			<View style={{flex: 1, paddingBottom: 20}}>
				<FlatList
			      data = {DATA}
			      renderItem={({item}) => <GlossaryItem name={item.name} pdfPath={item.pdfPath}/>}
			    />
		    </View>
		);
	}
}

function GlossaryItem({name, pdfPath}) {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 18, paddingLeft: 7, height: 60, borderWidth: 1, borderColor: '#e1e1e1', backgroundColor: '#ffffff',
    flexDirection: 'row', justifyContent: 'flex-start'}}>
    	<Icon name='chevron-right' color='steelblue'/>
    	<Text style={{fontSize: 17, textAlign: 'right'}} onPress={() => {
          navigation.navigate('PDF', {
            pdfPath: pdfPath,
          });    		
    	}}>{name}</Text>
    </View>
  );
}

const DATA = [
  	{
  		name: 'Alcohol During Pregnancy',
  		id: 'alcoholDuringPregnancy',
      pdfPath: require('../assets/pdfs/glossary/Alcohol_During_Pregnancy.pdf'),
  	},
  	{
  		name: 'Breastfeeding',
  		id: 'breastfeeding',
      pdfPath: require('../assets/pdfs/glossary/Breastfeeding.pdf'),
  	},
  	{
  		name: 'Complicated Pregnancies',
  		id: 'complicatedPregnancies',
      pdfPath: require('../assets/pdfs/glossary/Complicated_Pregnancies.pdf'),
  	},
  	{
  		name: 'Domestic Violence',
  		id: 'domesticViolence',
      pdfPath: require('../assets/pdfs/glossary/Domestic_Violence.pdf'),
  	},
  	{
  		name: 'Family Planning',
  		id: 'familyPlanning',
      pdfPath: require('../assets/pdfs/glossary/Family_Planning.pdf'),
  	},
  	{
  		name: 'Gestational Diabetes',
  		id: 'gestationalDiabetes',
      pdfPath: require('../assets/pdfs/glossary/Gestational_Diabetes.pdf'),
  	},
  	{
  		name: 'Healthy Diet',
  		id: 'healthyDiet',
      pdfPath: require('../assets/pdfs/glossary/Healthy_Diet.pdf'),
  	},
  	{
  		name: 'Healthy Relationships',
  		id: 'healthyRelationships',
      pdfPath: require('../assets/pdfs/glossary/Healthy_Relationships.pdf'),
  	},
  	{
  		name: 'Medications During Pregnancy',
  		id: 'medicationsDuringPregnancy',
      pdfPath: require('../assets/pdfs/glossary/Medications_During_Pregnancy.pdf'),
  	},
  	{
  		name: 'Next Steps After Learning You\'re Pregnant',
  		id: 'nextSteps',
      pdfPath: require('../assets/pdfs/glossary/Next_Steps_After_Learning.pdf'),
  	},
  	{
  		name: 'Postpartum Depression',
  		id: 'postpartumDepression',
      pdfPath: require('../assets/pdfs/glossary/Postpartum_Depression.pdf'),
  	},
  	{
  		name: 'Pre-Conception Health',
  		id: 'preConceptionHealth',
      pdfPath: require('../assets/pdfs/glossary/Pre_Conception_Health.pdf'),
  	},
  	{
  		name: 'Pre-eclampsia',
  		id: 'preeclampsia',
      pdfPath: require('../assets/pdfs/glossary/Preeclampsia.pdf'),
  	},
  	{
  		name: 'Prenatal Check-ups',
  		id: 'prenatalCheckups',
      pdfPath: require('../assets/pdfs/glossary/Prenatal_Checkups.pdf'),
  	},
  	{
  		name: 'Prenatal Tests',
  		id: 'prenatalTests',
      pdfPath: require('../assets/pdfs/glossary/Prenatal_Tests.pdf'),
  	},
  	{
  		name: 'Preparing for Delivery',
  		id: 'preparingForDelivery',
      pdfPath: require('../assets/pdfs/glossary/Preparing_for_Delivery.pdf'),
  	},
  	{
  		name: 'Preterm Birth',
  		id: 'pretermBirth',
      pdfPath: require('../assets/pdfs/glossary/Preterm_Birth.pdf'),
  	},
  	{
  		name: 'Substance Abuse',
  		id: 'substaceAbuse',
      pdfPath: require('../assets/pdfs/glossary/Substance_Abuse.pdf'),
  	},
  	{
  		name: 'Teenage Pregnancy',
  		id: 'teenagePregnancy',
      pdfPath: require('../assets/pdfs/glossary/Teenage_Pregnancy.pdf'),
  	},
  	{
  		name: 'Ultrasound Exam',
  		id: 'ultrasoundExam',
      pdfPath: require('../assets/pdfs/glossary/Ultrasound_Exam.pdf'),
  	},
];