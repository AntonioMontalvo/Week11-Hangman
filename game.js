//randomly select a word for the player.
//npm install random-words
//use module.exports ?;
//create an object. it will contain an array of words.
//create a prototype method for randomly choosing a word from the array.
// Create dependency for 'request' npm package
var warehouse = ['LONDON', 'PARIS', 'BANGKOK', 'SINGAPORE', 'DUBAI', 'NEW YORK', 'ISTANBUL', 'KUALA LUMPUR', 'HONG KONG', 'SEOUL', 'BARCELONA', 'AMSTERDAM', 'MILAN', 'ROME', 'TAIPEI', 'SHANGHAI', 'VIENNA', 'RIYADH', 'TOKYO', 'LIMA'];

var randomCity = [];

function WordToGuess(warehouse,randomCity){
	this.warehouse = warehouse;
	this.randomCity = randomCity;
}

WordToGuess.prototype.printCity = function() {
	var number = Math.floor(Math.random() * warehouse.length);
	this.randomCity.unshift(this.warehouse[number]);
  	console.log("City: " + this.randomCity);
}

var initialWord = new WordToGuess(warehouse, randomCity);
initialWord.printCity();

// function getCity(){
// 	randomCity.unshift(warehouse[number]);
// }
// getCity();

// console.log(randomCity[0]);


//random-words
//npm install random-words
// var randomWords = require('random-words');
// var aleatory = [];
// aleatory.push(randomWords());
// for (var i = 0; i < aleatory.length; i++){
// 	console.log(aleatory[i].toUpperCase());
// }
// console.log(aleatory.length);


