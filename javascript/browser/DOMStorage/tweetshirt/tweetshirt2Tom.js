'use strict';

window.onload = function() {
	bgColor=document.getElementById("kleur1").value;
	figColor=document.getElementById("kleur2").value;
	textColor=document.getElementById("kleur3").value;
	selectObj = document.getElementById("shape");
	index = selectObj.selectedIndex;
	shape = selectObj[index].value;
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	var select = document.getElementById("shape");
	select.onchange = colorPicker;
	var button2 = document.getElementById("saveButton");
	button2.onclick = saveContent;
	var button3 = document.getElementById("reloadButton");
	button3.onclick = reloadContent;

	// Easter Egg ;-)
	makeImage();
}

var bgColor;
var figColor;
var textColor;
var selectObj;
var index
var shape;

function saveContent(){
	localStorage.setItem('bgColorOpslag', JSON.stringify(bgColor));
	localStorage.setItem('figColorOpslag', JSON.stringify(figColor));
	localStorage.setItem('textColorOpslag', JSON.stringify(textColor));
	localStorage.setItem('shapeOpslag', JSON.stringify(shape));
}

function reloadContent(){
	var temp = JSON.parse(localStorage.getItem('bgColorOpslag'));
	if (temp != null) {bgColor=temp}
	temp = JSON.parse(localStorage.getItem('figColorOpslag'));
	if (temp != null) {figColor=temp}
	temp = JSON.parse(localStorage.getItem('textColorOpslag'));
	if (temp != null) {textColor=temp}
	temp = JSON.parse(localStorage.getItem('shapeOpslag'));
	if (temp != null) {shape=temp}
	loadHandler();
}

function colorPicker(){
	if (shape != "Neither"){
		document.getElementById("kleur2").style.visibility="visible";
	}
}

function loadHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	//bgColor = document.getElementById("kleur1").value;
	fillBackgroundColor(canvas, context);

	/*var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;*/

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}


function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	bgColor = document.getElementById("kleur1").value;
	fillBackgroundColor(canvas, context);

	figColor=document.getElementById("kleur2").value;
	textColor = document.getElementById("kleur3").value;
	

	selectObj = document.getElementById("shape");
	index = selectObj.selectedIndex;
	shape = selectObj[index].value;
	
	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

function fillBackgroundColor(canvas, context) {
	//bgColor = document.getElementById("kleur1").value;
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}

// Draws a square at a random location
function drawSquare(canvas, context) {
	var w = Math.floor(Math.random() * 40);    
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	//figColor=document.getElementById("kleur2").value;
	context.fillStyle = figColor;
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	
	//figColor=document.getElementById("kleur2").value;
	context.fillStyle = figColor;
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	
	//textColor = document.getElementById("kleur3").value;

	context.fillStyle = textColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	selectObj = document.getElementById("tweets");
	var index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic 1.2em serif";
	var textSize = "italic "+document.getElementById("textSize").value+"em serif";
	context.font = textSize;
	context.textAlign = "center";
	context.fillText(tweet, 300, 100);

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!", 
		canvas.width-20, canvas.height-40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space+1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space+1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}