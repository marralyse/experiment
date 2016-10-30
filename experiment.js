$(document).ready(function() {

	$('#calculate').click(function(){

var macros = ["pro", "carb", "fat"];
var weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var week = ["one", "two", "three"];
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
	var LBM = weight + bodyFatTwo;
	var bmrNeg = Math.round(LBM * 10);
	var bmrPos = Math.round(LBM * 12);
	$('#lbm').html(LBM);
	$('#bmrneg').html(bmrNeg);
	$('#bmrpos').html(bmrPos);

	$("#water_intake").html("150.3 oz");
	$("#fiber_intake").html("50.1 g");

var differential = 0;
  for (var i = 0; i < week.length; i++){
  for (var j = 0; j < weekdays.length; j++) {
    for (var k = 0; k < macros.length; k++) {
      name = "#" + macros[k] + weekdays[j] + week[i];
      console.log(name);
      //console.log("passing week: " + week[i] + " weekday: " + weekdays[j] + " macro: " + macros[k]);
      differential = calcDifferential(week[i], weekdays[j], macros[k]);
      console.log("calcdifferential returned " + differential);
      //result = anyCalc(LBM, differential);
      //$('name').html(result + 'g');
    }
  }
}

});

function calcDifferential(week, weekdays, macros) {
  //console.log("The week is " + week + "the weekday is " + weekdays + "the macro is " + macros);
  //return true;
  if (macros == "pro") {
    console.log ("proteing equal 1.1")
    return 1.1;
  }
  if (macros == "carb" && week == "one") {
    return 1.5;
  }
  if (macros == "carb" && week == "two") {
    if (weekdays == "wed" || weekdays == "sat") {
      //console.log("the weeks should be two and is "  + week + "the weekday should be wed or sat. It is " + weekdays);
      return 1.1;
    }
    else {
    //console.log("the weeks should be two and is "  + week + "the weekday should not be wed or sat. It is " + weekdays);
    return .4;
    }
  }
  if (macros == "carb" && week == "three") {
    if (weekdays == "wed" || weekdays == "sat") {
        //console.log("the weeks should be three and is "  + week + "the weekday should be wed or sat. It is " + weekdays);
      return .7;
    }
    else {
        //console.log("the weeks should be three and is "  + week + "the weekday should not be wed or sat. It is " + weekdays);
    return .4;
    }
  }
  if (macros == "fat") {
    if (week == "one") {
      return .75;
    }
    if (week == "two") {
      return .3;
    }
    else {
      return .35;
    }
  }

};

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

function calcCalories(protein, carb, fat)
{
	calories = (protein * 4) + (carb * 4) + (fat * 9);
	return calories;
}

});
