import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

var dueDay; var dueMonth; var dueYear; var birthDay; var birthMonth; var birthYear;

export default class BabyProgressScreen extends Component {
	render() {
		const appMode = this.props.route.params.appMode;
		if(appMode == 1) //pregnancy
			return pregnancyMode(this.props);
		else if(appMode == 2) //child under 3
			return youngChildMode(this.props);
	}
}

async function loadData(key){
	return await AsyncStorage.getItem(key);
}

function pregnancyMode(parentReference){
	//determine due Date
	var dueDay = parentReference.route.params.day;
	var dueMonth = parentReference.route.params.month; //months represented from 0-11
	var dueYear = parentReference.route.params.year;
	var dueDate = new Date(dueYear, dueMonth, dueDay);

	//determine current Date
	var currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	//use difference between current date and due date to determine current month/week and progress
	//Math.floor used to produce integer numbers
	var differenceInDays = Math.floor((dueDate.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24)) + 1;
	var month = Math.floor(differenceInDays / 30.4);
    var week = 40 - (differenceInDays / 7); //keep as a decimal to accurately calculate progress
    var progress = Math.floor((week / 40) * 100);
    week = Math.floor(week);

    //determine current trimester, shifted by 1 to accomodate zero-indexing
    var trimester = 0;
    if(week > 27)
    	trimester = 2;
    else if(week > 13)
    	trimester = 1;
    else
    	trimester = 0;

	return (
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
			<View style={{flexDirection: 'row'}}>
				<Image source={weekData[week].imagePath} style={{width: 150, height: 150}}/>
				<View style={{marginTop: 40, marginLeft: 5}}>
					<Text style={{fontSize: 23, fontWeight: "bold"}}>Week {weekData[week].id}</Text>
					<Text style={{fontSize: 17, color: '#666666'}}>Trimester {trimesterData[trimester].id}</Text>
					<Text style={{fontSize: 17, color: '#666666'}}>Due Date: {parseInt(dueMonth) + 1}/{dueDay}/{dueYear}</Text>
				</View>
			</View>

			<View style={{marginLeft: 15, marginRight: 15}}>
				<Text style={{fontSize: 23}}>Progress: {progress}%</Text>
				<ProgressBar style="height: 20" progress={progress / 100} color='steelblue'/>

				<Text>{"\n"}</Text>

				<Text style={{fontSize: 17, color: 'steelblue', fontWeight: 'bold'}}
				onPress={() => {
					parentReference.navigation.navigate('ModePicker');
				}}>CHANGE DUE DATE</Text>

				<Text>{"\n"}</Text>

				<Text style={{marginBottom: 8, fontSize: 23, fontWeight: "bold"}}>Trimester {trimesterData[trimester].id} Facts</Text>
				<Text style={{fontSize: 17, color: '#666666'}}>{trimesterData[trimester].description}</Text>
				<Text>{"\n"}</Text>
				<Text style={{marginBottom: 8, fontSize: 23, fontWeight: "bold"}}>Week {weekData[week].id} Facts</Text>
				<Text style={{fontSize: 17, color: '#666666'}}>{weekData[week].description}</Text>
			</View>
		</View>
	);
}



function youngChildMode(parentReference){
	//determine birth Date
	var birthDay = parentReference.route.params.day;
	var birthMonth = parentReference.route.params.month; //months represented from 0-11
	var birthYear = parentReference.route.params.year;
	var birthDate = new Date(birthYear, birthMonth, birthDay);

	//determine current Date
	var currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

	//use difference between current date and due date to determine current month/week and progress
	//Math.floor used to produce integer numbers
	var differenceInDays = Math.floor((currentDate.getTime() - birthDate.getTime())/(1000 * 60 * 60 * 24)) + 1;
	var month = Math.floor(differenceInDays / 30.4); //goes from 0-35

	return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
			<View style={{flexDirection: 'row'}}>
				<Image source={require("../assets/images/baby.png")} style={{width: 120, height: 150, margin: 15}}/>
				<View style={{marginTop: 40, marginLeft: 5}}>
					<Text style={{fontSize: 23, fontWeight: "bold"}}>Month {monthData[month].id}</Text>
					<Text style={{fontSize: 17, color: '#666666'}}>Birth Date: {birthMonth}/{birthDay}/{birthYear}</Text>
					<Text style={{fontSize: 17, color: 'steelblue', marginTop: 10, fontWeight: 'bold'}}
					onPress={() => {
						parentReference.navigation.navigate('ModePicker');
					}}>CHANGE BIRTH DATE</Text>
				</View>
			</View>

			<View style={{marginLeft: 15, marginRight: 15, marginTop: 20}}>
				<Text style={{marginBottom: 8, fontSize: 23, fontWeight: "bold"}}>Month {monthData[month].id} Facts</Text>
				<Text style={{fontSize: 17, color: '#666666'}}>{monthData[month].description}</Text>
			</View>
		</View>
	);
}




//DATA

const weekData = [
	{
		id: 1,
		imagePath: require("../assets/images/baby_progress/week_1.jpg"),
		description: "\u2022 If your egg is fertilized by a sperm, your baby begins as a single cell (known as a zygote).\n\u2022 Your baby\'s weight is miniscule.\n\u2022 Your baby (a zygote) begins to divide into multiple cells.",
	},
	{
		id: 2,
		imagePath: require("../assets/images/baby_progress/week_2.jpg"),
		description: "\u2022 Your baby’s cells will continue to divide as they travel down the fallopian tubes to your uterus.\n\u2022 Your baby\'s weight is miniscule.\n\u2022 Your baby’s cells begin to differentiate into 3 different types of tissue (the endoderm, the mesoderm, and the ectoderm). These three different types of tissue will eventually grow into different kinds of organs and organ systems as your baby matures. For example, the ectoderm will give rise to your baby’s skin and nervous system.",
	},
	{
		id: 3,
		imagePath: require("../assets/images/baby_progress/week_3.jpg"),
		description: "\u2022 Your baby is now a blastocyst, which is a microscopic ball of hundreds of rapidly dividing cells, and is nestled in the nutrient-rich lining of your uterus.\n\u2022 Your baby\'s weight is miniscule.\n\u2022 Your baby is starting to produce pregnancy hormone (hCG), which tells your ovaries to stop releasing eggs.",
	},
	{
		id: 4,
		imagePath: require("../assets/images/baby_progress/week_4.jpg"),
		description: "\u2022 Your baby is the size of a poppy seed.\n\u2022 Your baby\'s weight is less than 0.04 oz.\n\u2022 Your baby is now officially an embryo! This is when you might be able to get a positive result on an at home pregnancy test.",
	},
	{
		id: 5,
		imagePath: require("../assets/images/baby_progress/week_5.jpg"),
		description: "\u2022 Your baby is the size of a peppercorn.\n\u2022 Your baby\'s weight is less than 0.04 oz.\n\u2022 Your baby resembles a tadpole, and the circulatory system (including the heart and blood vessels) begins to form. Your baby’s tiny heart will begin to beat this week!",
	},
	{
		id: 6,
		imagePath: require("../assets/images/baby_progress/week_6.jpg"),
		description: "\u2022 Your baby is the size of a pomegranate seed.\n\u2022 Your baby\'s weight is less than 0.04 oz.\n\u2022 Your baby\'s nose, mouth and ears are starting to take shape, and the intestines and brain are beginning to develop.",
	},
	{
		id: 7,
		imagePath: require("../assets/images/baby_progress/week_7.jpg"),
		description: "\u2022 Your baby is the size of a blueberry.\n\u2022 Your baby\'s weight is less than 0.04 oz.\n\u2022 Your baby has doubled in size since last week, but still has a tail, which will soon disappear. Little hands and feet that look more like paddles are emerging from the developing arms and legs.",
	},
	{
		id: 8,
		imagePath: require("../assets/images/baby_progress/week_8.jpg"),
		description: "\u2022 Your baby is the size of a raspberry.\n\u2022 Your baby\'s weight is less than 0.04 oz.\n\u2022 Your baby has started moving around, though you won\'t feel movement yet. Nerve cells are branching out, forming primitive neural pathways. Your baby’s hands and feet now have webbed fingers and toes, which will soon give rise to individual fingers and toes. Breathing tubes now extend from your baby’s throat to developing lungs.",
	},
	{
		id: 9,
		imagePath: require("../assets/images/baby_progress/week_9.jpg"),
		description: "Your baby is the size of a cherry.\n\u2022 Your baby\'s weight is around 0.07 oz.\n\u2022 Your baby has graduated from an embryo to a fetus. Your baby\'s basic physiology is in place—the digestive tract and reproductive organs are formed, and your baby even has tiny earlobes!",
	},
	{
		id: 10,
		imagePath: require("../assets/images/baby_progress/week_10.jpg"),
		description: "Your baby is the size of a kumquat.\n\u2022 Your baby\'s weight is around 0.14 oz.\n\u2022 Your embryo has completed the most critical portion of development. Your baby’s skin is still translucent, but his tiny limbs can bend and fine details like nails and eyebrows are starting to form.",
	},
	{
		id: 11,
		imagePath: require("../assets/images/baby_progress/week_11.jpg"),
		description: "Your baby is the size of a fig.\n\u2022 Your baby\'s weight is around 0.25 oz.\n\u2022 Your baby is almost fully formed. She\'s kicking, stretching, and even hiccupping as her diaphragm develops, although you can\'t feel any activity yet.",
	},
	{
		id: 12,
		imagePath: require("../assets/images/baby_progress/week_12.jpg"),
		description: "\u2022 Your baby is the size of a lime.\n\u2022 Your baby\'s weight is around 0.49 oz.\n\u2022 Fingernails, toenails, and bones are forming, and a fine layer of hair covers most of her body. This week your baby\'s reflexes kick in. You baby will feel it if you gently poke your tummy – though you won\'t feel his or her movements yet.",
	},
	{
		id: 13,
		imagePath: require("../assets/images/baby_progress/week_13.jpg"),
		description: "\u2022 Your baby is the size of a lemon.\n\u2022 Your baby\'s weight is around 0.81 oz.\n\u2022 Your baby\'s tiny fingers now have fingerprints, and veins and organs are clearly visible through your baby’s skin.",
	},
	{
		id: 14,
		imagePath: require("../assets/images/baby_progress/week_14.jpg"),
		description: "\u2022 Your baby is the size of a peach.\n\u2022 Your baby\'s weight is around 1.52 oz.\n\u2022 Your baby\'s brain impulses have begun to fire and he\'s using his facial muscles. His kidneys are working now, too.",
	},
	{
		id: 15,
		imagePath: require("../assets/images/baby_progress/week_15.jpg"),
		description: "\u2022 Your baby is the size of an apple.\n\u2022 Your baby\'s weight is around 2.47 oz.\n\u2022 Your baby\'s eyelids are still fused shut, but she can sense light. His brain now controls all the muscles in her body; he is able to move. Yes, he\'ll even do somersaults! But if this is your first baby, you probably won\'t feel him moving for several more weeks.",
	},
	{
		id: 16,
		imagePath: require("../assets/images/baby_progress/week_16.jpg"),
		description: "\u2022 Your baby is the size of an avocado.\n\u2022 Your baby\'s weight is around 3.53 oz.\n\u2022 The patterning on your baby\'s scalp has begun, though the hair isn\'t visible yet. Your baby’s legs are more developed and his or her head is more upright.",
	},
	{
		id: 17,
		imagePath: require("../assets/images/baby_progress/week_17.jpg"),
		description: "\u2022 Your baby is the size of a pear.\n\u2022 Your baby\'s weight is around 4.94 oz.\n\u2022 Your baby can move her joints, and her skeleton – formerly soft cartilage – is now hardening to bone. The umbilical cord is growing stronger and thicker.",
	},
	{
		id: 18,
		imagePath: require("../assets/images/baby_progress/week_18.jpg"),
		description: "\u2022 Your baby is the size of an artichoke.\n\u2022 Your baby\'s weight is around 6.70 oz.\n\u2022 Your baby is now flexing his or her arms and legs. Internally, a protective coating of myelin is forming around his nerves.",
	},
	{
		id: 19,
		imagePath: require("../assets/images/baby_progress/week_19.jpg"),
		description: "\u2022 Your baby is the size of a mango.\n\u2022 Your baby\'s weight is around 8.47 oz.\n\u2022 Your baby\'s senses – smell, vision, touch, taste and hearing – are developing and she may be able to hear your voice.",
	},
	{
		id: 20,
		imagePath: require("../assets/images/baby_progress/week_20.jpg"),
		description: "\u2022 Your baby is the size of a banana.\n\u2022 Your baby\'s weight is around 10.58 oz.\n\u2022 Your baby can swallow now, and your baby’s digestive system is producing meconium, the dark, sticky goo that your baby will pass in his or her first poop.",
	},
	{
		id: 21,
		imagePath: require("../assets/images/baby_progress/week_21.jpg"),
		description: "\u2022 Your baby is the size of a carrot.\n\u2022 Your baby\'s weight is around 0.75 pounds.\n\u2022 Your baby will begin to jab or kick the wall of your womb.\n\u2022 You may begin to notice patterns in your baby’s movements.",
	},
	{
		id: 22,
		imagePath: require("../assets/images/baby_progress/week_22.jpg"),
		description: "\u2022 Your baby is roughly the size of a papaya.\n\u2022 Your baby\'s weight is almost 1 pound.\n\u2022 Your baby now looks almost like a small newborn.\n\u2022 Your baby has more developed lips and eyebrows, but does not have colored eyes yet.",
	},
	{
		id: 23,
		imagePath: require("../assets/images/baby_progress/week_23.jpg"),
		description: "\u2022 Your baby is the size of a sweet potato.\n\u2022 Your baby\'s weight is just over 1 pound.\n\u2022 Your baby’s ability to detect sounds is improving.",
	},
	{
		id: 24,
		imagePath: require("../assets/images/baby_progress/week_24.jpg"),
		description: "\u2022 Your baby is the size of an ear of corn.\n\u2022 Your baby\'s weight is around 1.33 pounds.\n\u2022 Your baby\'s skin is still translucent and thin.",
	},
	{
		id: 25,
		imagePath: require("../assets/images/baby_progress/week_25.jpg"),
		description: "\u2022 Your baby is the size of an acorn squash.\n\u2022 Your baby\'s weight is around 1.5 pounds.\n\u2022 Your baby\'s skin is starting to become baby fat.\n\u2022 Your baby’s hair is starting to grow, with its natural color and texture.",
	},
	{
		id: 26,
		imagePath: require("../assets/images/baby_progress/week_26.jpg"),
		description: "\u2022 Your baby is the size of a zucchini\n\u2022 Your baby\'s weight is around 1.67 pounds.\n\u2022 Your baby is now inhaling and exhaling amniotic fluid.\n\u2022 Through breathing the amniotic fluid in and out, your baby will start to develop lungs.",
	},
	{
		id: 27,
		imagePath: require("../assets/images/baby_progress/week_27.jpg"),
		description: "\u2022 Your baby is the size of a head of cauliflower.\n\u2022 Your baby\'s weight is almost 2 pounds.\n\u2022 This is the last week of your second trimester.\n\u2022 Your baby now has a regular sleep schedule and an active brain, but not yet fully formed lungs.",
	},
	{
		id: 28,
		imagePath: require("../assets/images/baby_progress/week_28.jpg"),
		description: "\u2022 Your baby is the size of a large eggplant.\n\u2022 Your baby\'s weight is around 2.25 pounds.\n\u2022 Your baby can blink and has grown eyelashes.\n\u2022 Your baby is beginning to develop eyesight, and can sense light filtering in from outside the womb.",
	},
	{
		id: 29,
		imagePath: require("../assets/images/baby_progress/week_29.jpg"),
		description: "\u2022 Your baby is the size of a butternut squash.\n\u2022 Your baby\'s weight is around 2.5 pounds.\n\u2022 Your baby is continuing to grow and develop its muscles and lungs, as well as its head for its brain!",
	},
	{
		id: 30,
		imagePath: require("../assets/images/baby_progress/week_30.jpg"),
		description: "\u2022 Your baby is the size of a large cabbage.\n\u2022 Your baby\'s weight is almost 3 pounds.\n\u2022 Your baby is continuing to develop eyesight, but this likely won’t be fully developed until after birth.",
	},
	{
		id: 31,
		imagePath: require("../assets/images/baby_progress/week_31.jpg"),
		description: "\u2022 Your baby is the size of a coconut.\n\u2022 Your baby\'s weight is around 3.33 pounds.\n\u2022 Your baby can turn its head from side to side. Your baby can also move around its limbs a lot more, so be prepared for more kicks!",
	},
	{
		id: 32,
		imagePath: require("../assets/images/baby_progress/week_32.jpg"),
		description: "\u2022 Your baby is the size of a Napa cabbage.\n\u2022 Your baby\'s weight is around 3.75 pounds.\n\u2022 Your baby now has fingernails, toenails, and real hair, and is still accumulating baby fat.",
	},
	{
		id: 33,
		imagePath: require("../assets/images/baby_progress/week_33.jpg"),
		description: "\u2022 Your baby is the size of a pineapple.\n\u2022 Your baby\'s weight is just over 4 pounds.\n\u2022 Your baby\'s skeleton is firming up, but its head will still remain largely flexible until after birth.",
	},
	{
		id: 34,
		imagePath: require("../assets/images/baby_progress/week_34.jpg"),
		description: "\u2022 Your baby is the size of a cantaloupe.\n\u2022 Your baby\'s weight is around 4.75 pounds.\n\u2022 Your baby\'s nervous system and lungs are maturing. Its skin is also very smoothed out now.",
	},
	{
		id: 35,
		imagePath: require("../assets/images/baby_progress/week_35.jpg"),
		description: "\u2022 Your baby is the size of an honeydew melon.\n\u2022 Your baby\'s weight is around 5.25 pounds.\n\u2022 Your baby is getting pretty big for the womb, so it won’t be somersaulting much, but it’ll still be kicking! Also, its kidneys are fully developed by now, and its liver is almost ready.",
	},
	{
		id: 36,
		imagePath: require("../assets/images/baby_progress/week_36.jpg"),
		description: "\u2022 Your baby is the size of a head of romaine lettuce.\n\u2022 Your baby\'s weight is around 6 pounds.\n\u2022 Your baby is shedding its vernix caseosa, which was the waxy substance covering the skin for the last nine months. This will be swallowed and incorporated into the meconium.",
	},
	{
		id: 37,
		imagePath: require("../assets/images/baby_progress/week_37.jpg"),
		description: "\u2022 Your baby is the size of a bunch of Swiss chard.\n\u2022 Your baby\'s weight is around 6.33 pounds.\n\u2022 Your baby is continuing to fatten up before birth, and has grown out most of its hair, if any at all.",
	},
	{
		id: 38,
		imagePath: require("../assets/images/baby_progress/week_38.jpg"),
		description: "\u2022 Your baby is the size of a leek.\n\u2022 Your baby\'s weight is around 6.8 pounds.\n\u2022 Your baby has matured its organs, and also now has a firm grasp to hold your hand with!",
	},
	{
		id: 39,
		imagePath: require("../assets/images/baby_progress/week_39.jpg"),
		description: "\u2022 Your baby is the size of a pumpkin.\n\u2022 Your baby\'s weight is just over 7 pounds.\n\u2022 Your baby is now sloughing off old layers of skin for new, fresh ones.",
	},
	{
		id: 40,
		imagePath: require("../assets/images/baby_progress/week_40.jpg"),
		description: "\u2022 Your baby is likely the size of a watermelon.\n\u2022 Your baby\'s weight is around 7.5 pounds.\n\u2022 Your baby’s skull is not yet fully fused, so that it can pass more easily through the birth canal.",
	},
]

const trimesterData = [
	{
		id: "1",
		description: "There are so many changes taking place, both inside and outside of your body. Your baby is growing faster than at any other stage of your pregnancy, with its heart, brain and spine already developing.",
	},
	{
		id: "2",
		description: "The second trimester of pregnancy is full of baby kicks and growing bumps. Morning sickness usually starts to calms down.",
	},
	{
		id: "3",
		description: "You will look very pregnant now and regularly feel your baby wriggling around. It is a great time to be shopping for baby!",
	}
]



const monthData = [
	{
		id: 1,
		description: "\u2022 Most babies will be able to suck well, focus on a face, and lift their heads briefly.\n\n\u2022 It is normal for baby’s to sleep up to 18 hours out of 24 a day when they are younger than 3 months, but not more than 1 to 3 hours at a time.\n\n\u2022 Play with your baby, keeping in mind that he/she can only see between 8-12 inches in front of his or her face. While you’re enjoying this one-on-one time, she’ll learn how to identify you by sight and sound at the same time you’re helping her to develop motor and cognitive skills.",
	},
	{
		id: 2,
		description: "\u2022 If your baby hasn\'t done so already, your baby is about to crack a spectacular toothless smile.\n\n\u2022 She may also laugh, coo, and recognize your face and your voice about now.\n\n\u2022 Start trying to recognize signs that your baby is tired (rubbing his eyes, flicking his ear with his hand, losing interest in people and toys), and put your baby down in his crib when you see them to help regulate his sleep.",
	},        
	{
		id: 3,
		description: "\u2022 Your baby will have started or will start making their first sounds, especially different vowel noises.\n\n\u2022 Your baby will continue to be more active.\n\n\u2022 Be careful about baby safety — he\'s still pretty teeny and vulnerable to a host of serious injuries including shaken-baby syndrome. Hold off on the horseplay for now and focus on cuddles for a while longer.",
	},
	{
		id: 4,
		description: "\u2022 By this age, your baby can raise up on her arms when placed on her tummy (thanks to all the supervised tummy time you give her) and keep her head level when propped in a sitting position.\n\n\u2022 He might even turn in the direction of your voice and complain if you take away his toy.\n\n\u2022 You should still only be feeding your baby breast milk or formula at this age.",
	},
	{
		id: 5,
		description: "\u2022 Your baby has learned object permanence, so he’ll probably love playing peek-a-boo or finding “hidden” items.\n\n\u2022 Your baby can start eating solids now.\n\n\u2022 Eczema and food allergies often emerge around now, so be on the look out.\n\n\u2022 For allergies, introduce new foods one at a time and wait two or three days before offering another new food. Keeping a food log can also help you pinpoint the cause if your baby has an adverse reaction.",
	},
	{
		id: 6,
		description: "\u2022 Your baby\'s probably able to bear weight on her legs when you hold her upright and may even be ready to hit the road, albeit at a crawl.\n\n\u2022 If your baby is still not sleeping through the night, this may be a good time to consider some sleep strategies, like showing him the difference between night time and day time through different lights and sounds.",
	},
	{
		id: 7,
		description: "\u2022 Your baby can or will soon be able sit without support, and wave or play patty-cake.\n\n\u2022 During this and the surrounding months, your child should eat a diet similar o around 1-3 teaspoons fruit in four feedings, 1-3 teaspoon vegetables in four feedings, and 3 to 9 tablespoons cereal in 2 or 3 feedings in addition to formula or breast milk.",
	},
	{
		id: 8,
		description: "\u2022 Gone are the days when your baby would stay where you plopped her. Most critters are ready to roll…and scoot, creep, crawl, or cruise.\n\n\u2022 If baby’s show readiness for finger foods (like transferring items between hands and moving jaw in a chewing motion), you can start to feed her things like O-shaped cereal, small bits of scrambled eggs, well-cooked pieces of potato, or teething crackers.",
	},
	{
		id: 9,
		description: "\u2022 Listen up, Mom, and you\'ll start to hear emerging baby speech patterns. Also, your baby will probably be able to respond to simple commands (“Give mommy the cup”).\n\n\u2022 Your easy-eater may become picky around now—you can mediate this by laying out a few nibbles for her to select from, and let her pick and choose.",
	},
	{
		id: 10,
		description: "\u2022 Your baby will be able to stand holding on, and may be able to stand alone (for a second) or even walk unassisted (the chase begins, Mom!).\n\n\u2022 You (and/or your baby) may be ready to wean (or not) so make a plan (though be ready to revise your timetable, perhaps more than once).",
	},
	{
		id: 11,
		description: "\u2022 Your baby loves games — especially those that involve pointing — and his interest in books will grow exponentially as he begins to comprehend more and recognize familiar pictures.\n\n\u2022 A few things not to be concerned about: bowed legs (almost always normal and temporary) and hitting milestones later than his peers.\n\n\u2022Children learn best and build confidence when you let them learn at their own pace, but if you\'re truly concerned, check with your pediatrician.",
	},
	{
		id: 12,
		description: "\u2022 One-year-olds are pretty good at doing a few things for themselves, such as eating with their fingers, helping their parents dress them, and turning the pages of a storybook. Your baby should be starting to use a few everyday items correctly, including a spoon, telephone, and hairbrush.\n\n\u2022 At this point, your baby can transition from human milk to cow milk (start with whole milk), and eat honey.",
	},
	{
		id: 13,
		description: "\u2022 Your baby will begin to stand on his or her own well.\n\n\u2022 Your little one can still choke on chunks of food. Never offer peanuts, whole grapes, cherry tomatoes (unless they\'re cut in quarters), whole carrots, seeds (i.e., processed pumpkin or sunflower seeds), nor whole or large sections of hot dogs.",
	},
	{
		id: 14,
		description: "\u2022 Your baby will probably be able to walk well on his own.\n\n\u2022 Don\'t restrict fats from your baby’s menu at this point. Babies and young toddlers should get about half of their calories from fat, which are very important for their growth and development at this age.",
	},
	{
		id: 15,
		description: "\u2022 About half of baby’s can walk backwards by 15 months.\n\n\u2022 The generally agreeable nature of a 12-month-old can morph overnight into something more exhausting. Rigid, contrarian behavior shows that your child is beginning to understand a huge concept: She\'s a separate person from you.\n\n\u2022 Baby’s need about 1,000 calories divided among three meals and two snacks per day for good nutrition. Don\'t count on your child always eating it that way though—the eating habits of toddlers are erratic and unpredictable from one day to the next!",
	},
	{
		id: 16,
		description: "\u2022 Your baby will be hard at work understanding rules (and also testing their limits).\n\n\u2022 Bedtime will go more smoothly if you establish a routine your child can count on (like a bath, putting on pajamas, or reading a book).",
	},
	{
		id: 17,
		description: "\u2022 About half of babies at 17 months can walk up stairs with help.\n\n\u2022 Lisping and mixing regular words with babbling phrases isn\'t unusual at 17 months. As your child\'s tongue and mouth muscles develop, enunciation should improve. Help him out by repeating what he says.",
	},
	{
		id: 18,
		description: "\u2022 You baby should be able to speak at least 15 words by the end of 18 months.\n\n\u2022 Don’t worry if your toddler suddenly decides to hate milk. Keep serving it, but don’t force her to drink it. Serve other diary products as well to make sure she is getting enough calcium.",
	},
	{
		id: 19,
		description: "\u2022 Your baby has a vocabulary of anywhere from 10 to 50 words.\n\n\u2022 Your baby may also start testing backwards and sideways movements.\n\n\u2022 Your baby needs between 11-14 hours of sleep a day.",
	},
	{
		id: 20,
		description: "\u2022 Your baby will start exploring its artistic skills, drawing simple lines and shapes.\n\n\u2022 Your baby will start experimenting with fuller, simple sentences.\n\n\u2022 Your baby needs between 11-14 hours of sleep a day.",
	},
     {
		id: 21,
		description: "\u2022 Your baby will begin to test its balance and climbing ability.\n\n\u2022 Your baby can also now begin naming most body parts.\n\n\u2022 Your baby needs between 11-14 hours of sleep a day.",
	},
	{
		id: 22,
		description: "\u2022 Your baby is beginning to explore its dexterity.\n\n\u2022 Your baby can also start to ask simple questions.\n\n\u2022 Your baby needs between 11-14 hours of sleep a day.",
	},
	{
		id: 23,
		description: "",
	},
	{
		id: 24,
		description: "",
	},
	{
		id: 25,
		description: "",
	},
	{
		id: 26,
		description: "",
	},
	{
		id: 27,
		description: "",
	},
	{
		id: 28,
		description: "",
	},
	{
		id: 29,
		description: "",
	},
	{
		id: 30,
		description: "",
	},
	{
		id: 31,
		description: "",
	},
	{
		id: 32,
		description: "",
	},
	{
		id: 33,
		description: "",
	},
	{
		id: 34,
		description: "",
	},
	{
		id: 35,
		description: "",
	},
	{
		id: 36,
		description: "",
	},
]