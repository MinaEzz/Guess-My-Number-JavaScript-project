"use strict";
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const highScore = document.querySelector(".highscore");

let currentScore = 20;
score.innerHTML = currentScore;
let secretNum = Math.trunc(Math.random() * 20) + 1;
let currentHighScore = 0;
highScore.innerHTML = currentHighScore;

function displayMessage(msg) {
  message.innerHTML = msg;
}

checkBtn.addEventListener("click", function () {
  let guessInputValue = Number(guessInput.value);
  if (!guessInputValue) {
    displayMessage("❌ No Number !");
  } else if (guessInputValue === secretNum) {
    displayMessage("🎉 Correct Number !");
    number.innerHTML = secretNum;
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      highScore.innerHTML = currentHighScore;
    }
  } else if (guessInputValue !== secretNum) {
    if (currentScore > 1) {
      guessInputValue > secretNum
        ? displayMessage("📈 Too High !")
        : displayMessage("📉 Too Low !");
      currentScore--;
      score.innerHTML = currentScore;
    } else {
      displayMessage("💥 You Lost The Game !");
      score.innerHTML = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  number.style.width = "15rem";
  body.style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  currentScore = 20;
  score.innerHTML = currentScore;
  guessInput.value = "";
  secretNum = Math.trunc(Math.random() * 20) + 1;
  number.innerHTML = "?";
});
