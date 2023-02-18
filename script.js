// 'use strict';

const input = document.querySelector('input');
const button = document.querySelector('.check');

input.focus();
let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

function messageFunc(message) {
  document.querySelector('.message').textContent = message;
}

function gameOver() {
  input.setAttribute('disabled', true);
  button.style.display = 'none';
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  let inputVal = Number(input.value);
  if (!inputVal) {
    messageFunc('raqam kiriting! ⛔');
  } else if (inputVal === secretNumber) {
    messageFunc('Siz meni raqamimni topdingiz😎');
    document.body.style.background = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('h1').textContent = "G'alaba🏆";
    gameOver();
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (inputVal !== secretNumber) {
    if (score > 1) {
      messageFunc(
        inputVal > secretNumber
          ? 'Mening raqamim kichik🙃'
          : 'Mening raqamim katta😎'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageFunc('Siz yutqazdingiz🤦‍♂️');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('h1').textContent = "O'yin tugadi.";
      document.body.style.background = 'brown';
      document.querySelector('h1').style.color = 'black';

      gameOver();
    }
  }
  input.value = '';
});
// ikkinchi hol

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('h1').textContent = 'Sonni toping.';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  console.log(secretNumber);

  score = 20;
  score = document.querySelector('.score').textContent = score;

  messageFunc('Boshlang...');

  input.removeAttribute('disabled', true);

  button.style.display = 'inline-block';

  input.focus();

  document.body.style.background = '#222';
});
