let option1 = 'check if you are the sharpest tool in the shed'
let option2 = 'contemplate your position in life (looser or rockstar)'
let option3 = 'go for a walk'
let option4 = 'wait'
let gameText = 'sample text - sombody once told you the world was gonna roll you'
let openingText = '';
let gameTitle = 'Josh\'s Game';
let password = '1234Josh\'s Game'
let firstTimeJoiningMessage = ('Hello, if this is your first time using this game please choose a unique username, if there is already progress on that account please refresh the page and try again')
//let username = prompt('Username')
let storyLineId = 0
let turnNumber = 0
username = 'josh'
let buttonInput = ''
//designated area for button imput//

//storyLineId + (buttonImput * 10 ^ turnNumber) = storyLineId
//

// renderText(gameText,'gametext')

function renderText(str, element) {
	document.getElementById(element).innerHTML.replace(str)
}

var tid = setInterval(mycode, 1000);
function mycode() {
	clockDisplay();
	// do some stuff...
}
function abortTimer() { // to be called when you want to stop the timer
	clearInterval(tid);
}
var time = 0;
function timerBar() {
	time += 1;
	renderText(time, 'gametext')

}



renderText(option1, 'option1')













