'use strict';

const resultDivision = document.querySelector("#result-area");
const omikujiButton = document.querySelector("#omikuji-button");

const result = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

omikujiButton.addEventListener(
  'click',
  () => {
    const newPar = document.createElement("p");
    const randomIndex = Math.floor(Math.random() * result.length);
    newPar.textContent = result[randomIndex];
    resultDivision.append(newPar);
  }
);