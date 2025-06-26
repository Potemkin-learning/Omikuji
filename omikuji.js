'use strict';

const resultDivision = document.querySelector("#result-area");
const omikujiButton = document.querySelector("#omikuji-button");

const result = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

let randomIndex = Math.floor(Math.random() * result.length);

omikujiButton.addEventListener(
  'click',
  () => {
    const newPar = document.createElement("p");
    newPar.textContent = result[randomIndex];
    resultDivision.append(newPar);
  },
);