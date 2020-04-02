let option1 = '(1) check if you are the sharpest tool in the shed';
let option2 = '(2) contemplate your position in life (loser or rockstar)';
let option3 = '(3) go for a walk';
let option4 = '(4) wait';
let gameText =
  'sample text - sombody once told you the world was gonna roll you';
let openingText = '';
let gameTitle = "Josh's Game";
let password = "1234Josh's Game";
let firstTimeJoiningMessage =
  'Hello, if this is your first time using this game please choose a unique username, if there is already progress on that account please refresh the page and try again';
//let username = prompt('Username')
let storyLineId = 0;
let turnNumber = 0;
username = 'josh';
let buttonInput = '';
//designated area for button imput//

//storyLineId + (buttonImput * 10 ^ turnNumber) = storyLineId
//

// var tid = setInterval(mainLoop, 200);
// function mainLoop() {
//   mainRender();
// }
const gameState = {
  currentStep: 'step0'
};

const gameSteps = {
  step0: {
    text: 'You wake up with a start the moon shines just bright enough for you to know that you are outside, but not enough to reveal your surroundings',
    options: {
      option1: { text: '1: look around', target: 'step1' },
      option2: { text: '2: Option 2', target: 'step2' },
      option3: { text: '3: Option 3', target: 'step3' },
      option4: { text: '4: Option 4', target: 'step4' }
    }
  },
  step1: {
    text: 'this is step 1',
    options: {
      option1: { text: '1: Option 1', target: 'step11' },
      option2: { text: '2: Option 2', target: 'step12' },
      option3: { text: '3: Option 3', target: 'step13' },
      option4: { text: '4: Option 4', target: 'step14' }
    }
  } step2: {
    text: 'this is step 1',
    options: {
      option1: { text: '1: Option 1', target: 'step2' },
      option2: { text: '2: Option 2', target: 'step2' },
      option3: { text: '3: Option 3', target: 'step2' },
      option4: { text: '4: Option 4', target: 'step2' }
    } step3: {
      text: 'this is step 1',
      options: {
        option1: { text: '1: Option 1', target: 'step2' },
        option2: { text: '2: Option 2', target: 'step2' },
        option3: { text: '3: Option 3', target: 'step2' },
        option4: { text: '4: Option 4', target: 'step2' }
      } step4: {
        text: 'this is step 1',
        options: {
          option1: { text: '1: Option 1', target: 'step2' },
          option2: { text: '2: Option 2', target: 'step2' },
          option3: { text: '3: Option 3', target: 'step2' },
          option4: { text: '4: Option 4', target: 'step2' }
        }
      }

renderText(gameSteps.step0.text, 'gametext');
    renderText(gameSteps.step0.options.option1.text, 'option1');
  renderText(gameSteps.step0.options.option2.text, 'option2');
renderText(gameSteps.step0.options.option3.text, 'option3');
renderText(gameSteps.step0.options.option4.text, 'option4');

function renderText(str, element) {
  document.getElementById(element).innerHTML = str;
}

function optionClick() {
  let option = document.getElementById('myInput').value;
  console.log(option);
  console.log(gameState.currentStep);
  let target =
    gameSteps[gameState.currentStep].options['option' + option].target;
  gameState.currentStep = target;
  console.log(target);
  renderText(gameSteps[target].text, 'gametext');
  renderText(gameSteps[target].options.option1.text, 'option1');
  renderText(gameSteps[target].options.option2.text, 'option2');
  renderText(gameSteps[target].options.option3.text, 'option3');
  renderText(gameSteps[target].options.option4.text, 'option4');
}
