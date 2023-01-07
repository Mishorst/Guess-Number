'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let highScore1 = 0;
let level = 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const again = function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No Number');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');

    document.querySelector('body').style.backgroundColor = '#40c057';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score && level == 1) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // Level 2
    // Finish Level 2
    console.log(level);
    console.log('level');
    if (guess === secretNumber && level >= 2) {
      document.querySelector('.next-level').style.display = 'none';
      displayMessage('🥳 Congrats! You won level 2!');

      if (highScore1 < score) {
        highScore1 = score;
        document.querySelector('.highscore').textContent = score + highScore;
      }

      // Next Level button
    } else if (guess === secretNumber && level == 1) {
      document.querySelector('.next-level').style.display = 'block';
      document
        .querySelector('.next-level')
        .addEventListener('click', function () {
          score = 25;
          secretNumber = Math.trunc(Math.random() * 50) + 1;

          document.querySelector('.between').textContent =
            'Level 2 (Between 1 and 50)';
          document.querySelector('.next-level').style.display = 'none';
          document.querySelector('.label-level').textContent = 'Level 2:';
          displayMessage('🤔 Start guessing...');

          again();
          level++;
        });
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too Hight' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You lost game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  level = 1;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('🤔 Start guessing...');
  again();

  document.querySelector('.label-level').textContent = 'Level 1:';
  document.querySelector('.between').textContent = 'Level 1 (Between 1 and 20)';
});
