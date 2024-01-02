//generate a Random Number
let randomNum = parseInt(Math.random() * 100 + 1);
//access submit button
const submit = document.querySelector('#subt');
//access user Input value in guessField
const UserInput = document.querySelector('#guessField');
//accsess previsous guess for stor array of previsous guess
const GuessSlot = document.querySelector('.guesses');
//accsess Guesses Remaining
const remainig = document.querySelector('.lastResult');
//accessing lowOrHi
const lowOrHi = document.querySelector('.lowOrHi');
//accsing resultParas for
const startOver = document.querySelector('.resultParas');
//create new element peragraph

const p = document.createElement('p');

let PrevGuess = [];
let numGuess = 0;
let PlayGame = true;

if (PlayGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validate(guess);
  });
}

//function for inptute validation

function validate(guess) {
  //validate is number is between 1 to 100
  if (isNaN(guess)) {
    alert(`Please Enter a Valid Number `);
  } else if (guess < 1) {
    alert(`Please Enter a more than 0 Number `);
  } else if (guess > 100) {
    alert(`Please Enter a Less than 100 Number `);
  } else {
    PrevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game Over and Rnadom Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check is input num is queal to rendom num or not or high or low
  if (guess === randomNum) {
    displayMessage('Congratulations ! Right Guess');
  } else if (guess < randomNum) {
    displayMessage('Number is too Low');
  } else if (guess > randomNum) {
    displayMessage('number is too high');
  }
}

function displayGuess(guess) {
  //clean values , update previsous guess and remaining guess ,
  UserInput.value = '';
  GuessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainig.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {
  //display message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //stop/end the game
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="Newgame">Start New Game</h2>';
  startOver.appendChild(p);
  PlayGame = false;
  newGame();
}

function newGame() {
  //start new game
  const newGameButton = document.querySelector('#Newgame');
  newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    PrevGuess = [];
    numGuess = 1;
    GuessSlot.innerHTML = '';
    remainig.innerHTML = `${12 - numGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    PlayGame = true;
  });
}
