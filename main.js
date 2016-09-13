//THEME IS CITIES OF THE WORLD;
//contain the logic of your app. Running it in Terminal start the game. The app should end when a player guesses the correct word or runs out of guesses.
//if statements
//USE INQUIRER FOR PROMPTING. Don't forget toUpperCase();

var converted = require('./letter.js');
var Verify = require('./word.js');
var inquirer = require('inquirer');
var count = 0;
var attempts = converted.arrayedWord.length + 10;

function Interrogation(inputChoice) {
    this.inputChoice = inputChoice;
    this.printInfo = function() {
    console.log("You Typed: " + this.inputChoice);
    // converted.displayDashedWord();
    }
}

var askQuestion = function (){
	if(count < attempts){
		inquirer.prompt([{
		    name: "Typed letter",
		    message: "Type your letter"
					}]).then(function(answers) {
				    var userTyped = new Interrogation(answers['Typed letter'].toUpperCase());
				    userTyped.printInfo();
				    var checkedLetter = new Verify(converted.arrayedWord, answers['Typed letter'].toUpperCase());
				    checkedLetter.check();
				    count++;
				    askQuestion();
		})
	} else {
		console.log('Game Over!');
	}				
}

askQuestion();







