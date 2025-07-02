'use strict';

const omikujiButton = document.querySelector("#omikuji-button");

const result = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

omikujiButton.addEventListener(
  'click',
  () => {
    const randomIndex = Math.floor(Math.random() * result.length);
    const resultText = result[randomIndex];
    const resultPar = document.querySelector("#result-text");
    resultPar.textContent = resultText;
  }
);