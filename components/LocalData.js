import { AsyncStorage } from 'react-native';

const daily = [
	{id: 'Drink water', checked: false},
	{id: 'Eat healthy', checked: false},
	{id: 'Get a good night\’s sleep', checked: false},
	{id: 'Check in with a friend', checked: false},
	{id: 'Know the signs of a pregnancy problem', checked: false},
	{id: 'Limit caffeine', checked: false},
	{id: 'Avoid dangerous food with bacteria, parasites, or toxins like raw fish', checked: false},
	{id: 'Track your weight gain', checked: false},
	{id: 'Don\’t smoke', checked: false},
	{id: 'Don\’t drink alcohol', checked: false},
	{id: 'Stretch', checked: false},
	{id: 'Sneak in a pregnancy power nap', checked: false},
	{id: 'Try a relaxation technique', checked: false},
	{id: 'Take a quick walk', checked: false},
	{id: 'Write down your pregnancy memories', checked: false},
	{id: 'Do something nice for yourself', checked: false},
	{id: 'Jot down your crazy pregnancy dreams', checked: false},
	{id: 'Take belly photos', checked: false},
]

const trim1 = [
	{id: 'Choose a healthcare provider', checked: false},
	{id: 'Make a prenatal appointment', checked: false},
	{id: 'Find out if your health insurance will cover for prenatal costs and your new baby', checked: false},
	{id: 'Apply for Medicaid if you need to', checked: false},
	{id: 'Discuss with your health care provider: Should I start taking prenatal vitamins with Folic Acid?', checked: false},
	{id: 'Discuss with your health care provider: Are my current medications safe to take during pregnancy (make sure to bring all medications to your first appointment)?', checked: false},
	{id: 'Discuss with your health care provider: Are there over-the-counter medications or other substances that I should avoid during pregnancy?', checked: false},
	{id: 'Discuss with your health care provider: What activities of daily life are pregnancy-safe during my first trimester and are there activities I should avoid?', checked: false},
	{id: 'Discuss with your health care provider: Are there prenatal exercises that will be beneficial for me during my first trimester?', checked: false},
	{id: 'Discuss with your health care provider: How can I get relief from morning sickness?', checked: false},
	{id: 'Discuss with your health care provider: What are my options for prenatal testing?', checked: false},
	{id: 'Discuss with your health care provider: What are the signs of pregnancy problems and what should I do if I experience them?', checked: false},
	{id: 'Discuss with your health care provider: When should I start thinking about a birth plan and what are my options?', checked: false},
	{id: 'Discuss with your health care provider: Is it safe for me to be vaccinated during pregnancy?', checked: false},
	{id: 'Stock your kitchen with healthy food', checked: false},
	{id: 'Think about when and how you\'ll announce your pregnancy', checked: false},
	{id: 'Pick up pregnancy books', checked: false},
	{id: 'Follow your baby\'s development', checked: false},
	{id: 'Start taking belly photos', checked: false},
	{id: 'Start a daily ritual to connect with your baby', checked: false},
	{id: 'Buy some new bras and underwear', checked: false},
	{id: 'Initiate discussions with your partner about parenting', checked: false},
	{id: 'Start making a pre and post birth \"baby budget\"', checked: false},
	{id: 'Start researching for your birth plan', checked: false},
	{id: 'If you are working, research your workplace\'s maternity leave policies', checked: false},
]

const trim2 = [
	{id: 'Learn about second trimester prenatal visits and tests', checked: false},
	{id: 'Make your second trimester prenatal appointments', checked: false},
	{id: 'Discuss with your health care provider: What activities of daily life are pregnancy-safe during my second trimester?', checked: false},
	{id: 'Discuss with your health care provider: Are there prenatal exercises that will be beneficial for me during my second trimester?', checked: false},
	{id: 'Discuss with your health care provider: What prenatal tests do I need to schedule during this time?', checked: false},
	{id: 'Discuss with your health care provider: Should I make any changes to my daily routines, sleep habits, medications, and foods?', checked: false},
	{id: 'Discuss with your health care provider: Do I need to worry about having sex with my partner?', checked: false},
	{id: 'Discuss with your health care provider: When and how will I find out the sex of my baby?', checked: false},
	{id: 'Discuss with your health care provider: What if I don’t want to know the sex of my baby?', checked: false},
	{id: 'Make dental appointment to get your teeth cleaned', checked: false},
	{id: 'Find a prenatal exercise class, if approved by your health care provider', checked: false},
	{id: 'Start shopping for maternity clothes', checked: false},
	{id: 'Start thinking about baby names', checked: false},
	{id: 'Start moisturizing your belly', checked: false},
	{id: 'Decide whether you want to find out the sex of your baby', checked: false},
	{id: 'Look into childbirth classes', checked: false},
	{id: 'Flesh out your \”baby budget\”', checked: false},
	{id: 'Talk to your employer about maternity leave', checked: false},
	{id: 'Prepare your older children', checked: false},
	{id: 'Prepare your pets', checked: false},
	{id: 'Start your childcare search', checked: false},
	{id: 'Celebrate your halfway point', checked: false},
	{id: 'Plan some adult time and consider a \”babymoon\”', checked: false},
	{id: 'Start sleeping on your side', checked: false},
	{id: 'Start doing Kegel exercises', checked: false},
	{id: 'Think about your baby shower and create a baby registry', checked: false},
	{id: 'Write a letter to your baby', checked: false},
	{id: 'Prepare your baby\’s room', checked: false},
	{id: 'Think about who will care for your baby (daycare, nanny, family member)', checked: false},
	{id: 'If you want, find out the gender of your baby', checked: false},
	{id: 'Decide whether to hire a professional labor coach (doula/midwife)', checked: false},
	{id: 'Research and order nursery furniture, strollers, car seats, and other baby supplies (stay within your \”baby budget\”)', checked: false},
]

const trim3 = [
	{id: 'Learn about third trimester prenatal visits and tests', checked: false},
	{id: 'Make your third trimester prenatal appointments', checked: false},
	{id: 'Discuss with your health care provider: What activities of daily life are pregnancy-safe during my third trimester?', checked: false},
	{id: 'Discuss with your health care provider: Are there restrictions on travel during this time?', checked: false},
	{id: 'Discuss with your health care provider: Are there prenatal exercises that will be beneficial for me during my third trimester?', checked: false},
	{id: 'Discuss with your health care provider: What prenatal tests do I need to schedule during this time?', checked: false},
	{id: 'Discuss with your health care provider: Should I make any changes to my daily routines, sleep habits, medications, and foods?', checked: false},
	{id: 'Discuss with your health care provider: What should I expect as my delivery time draws near?', checked: false},
	{id: 'Discuss with your health care provider: How will I know if I\’m really in labor?', checked: false},
	{id: 'Discuss with your health care provider: What should I know about late-pregnancy complications?', checked: false},
	{id: 'Discuss with your health care provider: What should I expect after giving birth?', checked: false},
	{id: 'Finalize your birth plan', checked: false},
	{id: 'Keep track of your baby\’s movements', checked: false},
	{id: 'Consider more classes', checked: false},
	{id: 'Prepare for breastfeeding', checked: false},
	{id: 'Choose a pediatrician', checked: false},
	{id: 'Think about big decisions (religious ceremonies, etc.)', checked: false},
	{id: 'Set up a safe place for your baby to sleep', checked: false},
	{id: 'Wash your baby\’s clothing and bedding', checked: false},
	{id: 'Learn about the stages of labor and coping with labor pain', checked: false},
	{id: 'Learn about how your body will look and feel after birth', checked: false},
	{id: 'Start thinking about and contacting \”helpers\” (family, friends, daycare, etc.)', checked: false},
	{id: 'Finalize your post-delivery \”baby budget\”', checked: false},
	{id: 'Consider the most financially stressful baby costs and plan for how you might deal with them', checked: false},
	{id: 'Consider how you might be able to save on recurring expenses', checked: false},
	{id: 'Read up on baby care', checked: false},
	{id: 'Pack your bags for the hospital or birth center', checked: false},
	{id: 'Tour your hospital or birth center', checked: false},
	{id: 'Make a plan for when labor starts', checked: false},
	{id: 'Look out for late-pregnancy complications', checked: false},
	{id: 'Look out for signs of false labor', checked: false},
	{id: 'Clean your house in preparation for the baby\’s arrival', checked: false},
	{id: 'Stock up on household and personal supplies', checked: false},
	{id: 'Stock up on light entertainment', checked: false},
	{id: 'Plan meals and make food for after your baby\’s born', checked: false},
	{id: 'Install your infant car seat', checked: false},
	{id: 'Finalize your list of baby names', checked: false},
	{id: 'Cope with late-pregnancy jitters', checked: false},
]

var appMode = 0;

var dueDay = null;
var dueMonth = null;
var dueYear = null;

var birthDay = null;
var birthMonth = null;
var birthYear = null;

var imagePath = null;

const map = [
	{coordinates: {latitude: 45.568170, longitude: -97.061490}, title: 'Head Start', pdfPath: require('../assets/pdfs/resources/Head_Start.pdf')},
	{coordinates: {latitude: 45.572700, longitude: -97.063040}, title: 'SWO Early Childhood Intervention', pdfPath: require('../assets/pdfs/resources/SWO_Early_Childhood_Intervention.pdf')},
	{coordinates: {latitude: 45.657550, longitude: -97.016550}, title: 'IHS', pdfPath: require('../assets/pdfs/resources/IHS.pdf')},
	{coordinates: {latitude: 45.667390, longitude: -97.045690}, title: 'Roberts County', pdfPath: require('../assets/pdfs/resources/Roberts_County.pdf')},
	{coordinates: {latitude: 45.563680, longitude: -97.076940}, title: 'Dakota Pride', pdfPath: require('../assets/pdfs/resources/Dakota_Pride.pdf')},
	{coordinates: {latitude: 45.657690, longitude: -97.050410}, title: 'Coteau', pdfPath: require('../assets/pdfs/resources/Coteau.pdf')},
	{coordinates: {latitude: 45.568210, longitude: -97.066030}, title: 'Little Steps Daycare', pdfPath: require('../assets/pdfs/resources/Little_Steps_Daycare.pdf')},
	{coordinates: {latitude: 45.660170, longitude: -97.050050}, title: 'WIC', pdfPath: require('../assets/pdfs/resources/WIC.pdf')},
	{coordinates: {latitude: 45.665210, longitude: -97.049590}, title: 'Healthy Start', pdfPath: require('../assets/pdfs/resources/Healthy_Start.pdf')},
	{coordinates: {latitude: 44.370310, longitude: -100.341570}, title: 'Social Services', pdfPath: require('../assets/pdfs/resources/Social_Services.pdf')},
	{coordinates: {latitude: 45.665360, longitude: -97.061120}, title: 'Special Education', pdfPath: require('../assets/pdfs/resources/Special_Education.pdf')},
	{coordinates: {latitude: 45.568200, longitude: -97.064440}, title: 'SWO Food Pantry', pdfPath: require('../assets/pdfs/resources/SWO_Food_Pantry.pdf')},
]

try {
	AsyncStorage.setItem('daily', JSON.stringify(daily))
	AsyncStorage.setItem('trim1', JSON.stringify(trim1))
	AsyncStorage.setItem('trim2', JSON.stringify(trim2))
	AsyncStorage.setItem('trim3', JSON.stringify(trim3))
	
	AsyncStorage.setItem('appMode', JSON.stringify(appMode))
	AsyncStorage.setItem('dueDay', JSON.stringify(dueDay))
	AsyncStorage.setItem('dueMonth', JSON.stringify(dueMonth))
	AsyncStorage.setItem('dueYear', JSON.stringify(dueYear))
	AsyncStorage.setItem('birthDay', JSON.stringify(birthDay))
	AsyncStorage.setItem('birthMonth', JSON.stringify(birthMonth))
	AsyncStorage.setItem('birthYear', JSON.stringify(birthYear))
	AsyncStorage.setItem('imagePath', JSON.stringify(imagePath))

	AsyncStorage.setItem('map', JSON.stringify(map))

} catch (err) {
	alert(err)
}