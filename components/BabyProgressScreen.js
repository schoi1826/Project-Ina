import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default class BabyProgressScreen extends Component {
	render() {
		//determine current Date
		//month shifted by 1 to accomodate zero-indexing
		var currentDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

		//determine due Date
		var dueDay = 13;
		var dueMonth = 3;
		var dueYear = 2020;
		var dueDate = new Date(dueYear, dueMonth, dueDay);

		//use difference between current date and due date to determine current month/week and progress
		//Math.floor used to produce integer numbers
		var differenceInDays = Math.floor((dueDate.getTime() - currentDate.getTime())/(1000 * 60 * 60 * 24)) + 1;
		console.log(differenceInDays);
		var month = Math.floor(differenceInDays / 30.4) + 1; //month shifted by 1 to accomodate zero-indexing
        var week = 40 - (differenceInDays / 7); //keep as a decimal to accurately calculate progress
        var progress = Math.floor((week / 40) * 100);
        week = Math.floor(week);
        console.log(week);

        //if week < 0 (due date before current)
        //if week > 39 (due date after 9 months)

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
						<Text style={{fontSize: 23, fontWeight: "bold"}}>Week  {weekData[week].id}</Text>
						<Text style={{fontSize: 17, color: '#666666'}}>Trimester {trimesterData[trimester].id}</Text>
						<Text style={{fontSize: 17, color: '#666666'}}>Due Date: {dueMonth}/{dueDay}/{dueYear}</Text>
					</View>
				</View>

				<View style={{marginLeft: 15, marginRight: 15}}>
					<Text style={{fontSize: 23}}>Progress: {progress}%</Text>
					<ProgressBar style="height: 20" progress={progress / 100} color='steelblue'/>
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
}


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