//use constructors
//should control whether or not a letter appears as a "_" or as itself on-screen.
//use var something = require('./game.js'); to access game.js
//use a constructors to select the random word and convert it _ _ _ _ _
// var initialWord = require('./game.js');
var randomCity = require('./game.js');

var Conversion = function(randomCity){
	this.randomCity = randomCity;
	this.arrayedWord = [];//stores the city as an array
	this.dashedWord = [];//stores the city as dashes
	this.arrayMe = function(word){
		for(var i = 0; i < randomCity.length; i++){
			this.arrayedWord.push(randomCity[i]);
		}
	}	
	this.dashMe = function(array){
		for (var i = 0; i < array.length; i++){
			var space = " "; 
			var dash = "_";
			if(array[i].valueOf() !== space){
				this.dashedWord.push(dash);
			}else{
				this.dashedWord.push(space);
			}
		}
	}
	this.displayDashedWord = function() {
		var textWithComas = this.dashedWord.toString();
		var noComas = textWithComas.replace(/,/g, " ");//g replaces all matches
		console.log(noComas);
	}
}	


var converted = new Conversion(randomCity[0]);// Conversion Instance
converted.arrayMe(randomCity);
console.log(converted.arrayedWord);
converted.dashMe(converted.arrayedWord);
// console.log(converted.dashedWord);
converted.displayDashedWord();
module.exports = converted;

