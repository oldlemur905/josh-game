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
username = 'josh'





















































































openingText = 
  username ? `hello ${username} welcome to ${gameTitle}` 
  : `hello stranger welcome to ${gameTitle}`;

console.log(openingText);
gameText = new Vue({
  el: '#gametext',
  data: {
    gametext: gameText
  }
})
option1 = new Vue({
  el: '#option1',
  data: {
    option1: option1
  }
})
option2 = new Vue({
  el: '#option2',
  data: {
    option2: option2
  }
})
option3 = new Vue({
  el: '#option3',
  data: {
    option3: option3
  }
})
option4 = new Vue({
  el: '#option4',
  data: {
    option4: option4
  }
})
var response = new Vue({
  el: '#myInput',
  data: {
    myInput: response
  }
})