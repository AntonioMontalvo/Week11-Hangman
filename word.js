//use constructors
// should contain all of the methods which will check the letters guessed versus the random word selected.
//create prototypes 

var randomCity = require('./game.js');
var converted = require('./letter.js');


var Verify = function(arrayedWord, inputChoice) {
	this.arreyedWord = arrayedWord;
	this.inputChoice =inputChoice;
	this.check = function(){
	  for (var i = 0; i < arrayedWord.length; i++){
	  	if(arrayedWord[i].valueOf() === inputChoice){
	  		converted.dashedWord[i] = inputChoice;
	  	}
  	  }
  	converted.displayDashedWord();
  	
  
	}
}

module.exports = Verify;






