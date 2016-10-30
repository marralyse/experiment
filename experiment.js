$(document).ready(function() {

	$('#calculate').click(function(){

var macros = ["pro", "carb", "fat"];
var weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var week = ["one", "two"];
var differential = [];

	//get the values for body fat percentage
	//var feet = $('#height-feet').val();
	//var inches = $('#height-inches').val();

	//var height = feet * 12 + parseInt(inches);

	var height = $('#height').val();

	var hip = $('#hip').val();
	var waist = $('#waist').val();
	var neck = $('#neck').val();
	console.log("height: "+ height);

	var bodyFatPercentage;

	//select male or female formula
	if($('#female').is(':checked')){
		console.log("hip inside checked if female " + hip);
		bodyFatPercentage = female(hip, waist, neck, height);
		};
	if($('#male').is(':checked')){
		bodyFatPercentage = male(waist, neck, height);
	};
	//round to nearest integer
	bodyFatPercentage = Math.round(bodyFatPercentage);
	//show the percentage for display purposes
	displayBodyFatPercentage = bodyFatPercentage;
	//display user friendly percentage
	$('#bfone').html(displayBodyFatPercentage + "%");

	//convert for formula
	bodyFatPercentage = bodyFatPercentage / -100;
	console.log(bodyFatPercentage);

	//determine 2nd body fat number
	//get weight variable
	var weight = $('#weight').val();
	console.log("weight: " + weight);
	var bodyFatTwo = bodyFatPercentage * weight;
	console.log("body fat two " + bodyFatTwo);

	//Need to treat weight as an int
	var weight = parseInt(weight);
	//calculate Lean Body Mass
	var LBM = weight + bodyFatTwo;
	//calculate BMR-
	var bmrNeg = Math.round(LBM * 10);
	//calculate BRM+
	var bmrPos = Math.round(LBM * 12);
	//display LBM, BMR-, BMR+
	$('#lbm').html(LBM);
	$('#bmrneg').html(bmrNeg);
	$('#bmrpos').html(bmrPos);

	var protein = calcProtein(LBM);
	console.log("protein: " + protein);

	$("#water_intake").html("150.3 oz");
	$("#fiber_intake").html("50.1 g");

	$('#promon').html(protein + "g");
	$('#protue').html(protein + "g");
	$('#prowed').html(protein + "g");
	$('#prothu').html(protein + "g");
	$('#profri').html(protein + "g");
	$('#prosat').html(protein + "g");
	$('#prosun').html(protein + "g");

	$('#promontwo').html(protein + "g");
	carb = anyCalc(LBM, .4);
	$('#carbmontwo').html(carb + "g");
	fat = 	anyCalc(LBM, .3);
	$('#fatmontwo').html(fat + "g");
	$('#calmontwo').html(calcCalories(protein, carb, fat) + "g");

	$('#protuetwo').html(protein + "g");
	$('#prowedtwo').html(protein + "g");
	$('#prothutwo').html(protein + "g");
	$('#profritwo').html(protein + "g");
	$('#prosattwo').html(protein + "g");
	$('#prosuntwo').html(protein + "g");

	$('#promonthree').html(protein + "g");
	$('#protuethree').html(protein + "g");
	$('#prowedthree').html(protein + "g");
	$('#prothuthree').html(protein + "g");
	$('#profrithree').html(protein + "g");
	$('#prosatthree').html(protein + "g");
	$('#prosunthree').html(protein + "g");

	var carb = calcCarb(LBM);

	$('#carbmon').html(carb + "g");
	$('#carbtue').html(carb + "g");
	$('#carbwed').html(carb + "g");
	$('#carbthu').html(carb + "g");
	$('#carbfri').html(carb + "g");
	$('#carbsat').html(carb + "g");
	$('#carbsun').html(carb + "g");

	//$('#carbmontwo').html(anyCalc(LBM, .4) + "g");
	$('#carbtuetwo').html(anyCalc(LBM, .4) + "g");
	$('#carbwedtwo').html(anyCalc(LBM, 1.1) + "g");
	$('#carbthutwo').html(anyCalc(LBM, .4) + "g");
	$('#carbfritwo').html(anyCalc(LBM, .4) + "g");
	$('#carbsattwo').html(anyCalc(LBM, 1.1) + "g");
	$('#carbsuntwo').html(anyCalc(LBM, .4) + "g");

	$('#carbmonthree').html(anyCalc(LBM, .4) + "g");
	$('#carbtuethree').html(anyCalc(LBM, .4) + "g");
	$('#carbwedthree').html(anyCalc(LBM, .7) + "g");
	$('#carbthuthree').html(anyCalc(LBM, .4) + "g");
	$('#carbfrithree').html(anyCalc(LBM, .4) + "g");
	$('#carbsatthree').html(anyCalc(LBM, .7) + "g");
	$('#carbsunthree').html(anyCalc(LBM, .4) + "g");

	var fat = calcFat(LBM);
	$('#fatmon').html(fat + "g");
	$('#fattue').html(fat + "g");
	$('#fatwed').html(fat + "g");
	$('#fatthu').html(fat + "g");
	$('#fatfri').html(fat + "g");
	$('#fatsat').html(fat + "g");
	$('#fatsun').html(fat + "g");

	//$('#fatmontwo').html(anyCalc(LBM, .3) + "g");
	$('#fattuetwo').html(anyCalc(LBM, .3) + "g");
	$('#fatwedtwo').html(anyCalc(LBM, .3) + "g");
	$('#fatthutwo').html(anyCalc(LBM, .3) + "g");
	$('#fatfritwo').html(anyCalc(LBM, .3) + "g");
	$('#fatsattwo').html(anyCalc(LBM, .3) + "g");
	$('#fatsuntwo').html(anyCalc(LBM, .3) + "g");

	$('#fatmonthree').html(anyCalc(LBM, .35) + "g");
	$('#fattuethree').html(anyCalc(LBM, .35) + "g");
	$('#fatwedthree').html(anyCalc(LBM, .35) + "g");
	$('#fatthuthree').html(anyCalc(LBM, .35) + "g");
	$('#fatfrithree').html(anyCalc(LBM, .35) + "g");
	$('#fatsatthree').html(anyCalc(LBM, .35) + "g");
	$('#fatsunthree').html(anyCalc(LBM, .35) + "g");

	$('#calmon').html(calcCalories(protein, carb, fat) + "g");
	$('#caltue').html(calcCalories(protein, carb, fat) + "g");
	$('#calwed').html(calcCalories(protein, carb, fat) + "g");
	$('#calthu').html(calcCalories(protein, carb, fat) + "g");
	$('#calfri').html(calcCalories(protein, carb, fat) + "g");
	$('#calsat').html(calcCalories(protein, carb, fat) + "g");
	$('#calsun').html(calcCalories(protein, carb, fat) + "g");

	//$('#calmontwo').html(calcCalories(protein, carb, fat) + "g");
	$('#caltuetwo').html(calcCalories(protein, carb, fat) + "g");
	$('#calwedtwo').html(calcCalories(protein, carb, fat) + "g");
	$('#calthutwo').html(calcCalories(protein, carb, fat) + "g");
	$('#calfritwo').html(calcCalories(protein, carb, fat) + "g");
	$('#calsattwo').html(calcCalories(protein, carb, fat) + "g");
	$('#calsuntwo').html(calcCalories(protein, carb, fat) + "g");

	$('#calmonthree').html(calcCalories(protein, carb, fat) + "g");
	$('#caltuethree').html(calcCalories(protein, carb, fat) + "g");
	$('#calwedthree').html(calcCalories(protein, carb, fat) + "g");
	$('#calthuthree').html(calcCalories(protein, carb, fat) + "g");
	$('#calfrithree').html(calcCalories(protein, carb, fat) + "g");
	$('#calsatthree').html(calcCalories(protein, carb, fat) + "g");
	$('#calsunthree').html(calcCalories(protein, carb, fat) + "g");

	//$('#calmontwo').html(protein(LBM, 1.1));




});
//call the function
function female(hip, waist, neck, height){
	console.log("The function was called hip:(" + hip + ") waist: " + waist + " neck: " + neck + " height " + height);
	console.log((height * 2.54));
	bodyFatPercentage = 495/(1.29579 - .35004 * Math.log10(waist * 2.54 + hip * 2.54 - neck * 2.54) + .22100 * Math.log10(height * 2.54)) - 450;
	console.log("female inside function body fat percentage" + bodyFatPercentage);
	return bodyFatPercentage;
};

function male(waist, neck, height) {
		console.log("The function was called waist: " + "neck: " + neck + "height " + height);
		bodyFatPercentage = 495/(1.0324 - .19077 * Math.log10(waist * 2.54 - neck * 2.54) + .15456 * Math.log10(height * 2.54)) - 450;
		console.log(bodyFatPercentage);
		return bodyFatPercentage;
}

function anyCalc(LBM, measurement){
	console.log("fatTest: (LBM) " + LBM + " measurement" + measurement);
	return Math.round(LBM * measurement);
}


function calcProtein(LBM)
{
	protein = LBM * 1.1;
	protein = Math.round(protein);
	return protein;
}

function calcCarb(LBM)
{
	carb = LBM * 1.5;
	carb = Math.round(carb);
	return carb;
}

function calcFat(LBM)
{
	fat = LBM * .75;
	fat = Math.round(fat);
	return fat;
}

function calcCalories(protein, carb, fat)
{
	calories = (protein * 4) + (carb * 4) + (fat * 9);
	return calories;
}

});
