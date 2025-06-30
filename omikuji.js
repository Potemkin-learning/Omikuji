'use strict';

const omikujiButton = document.querySelector("#omikuji-button");

const result = ["大吉", "中吉", "吉", "末吉", "凶", "大凶"];

omikujiButton.addEventListener(
  'click',
  () => {
    const randomIndex = Math.floor(Math.random() * result.length);
    const resultText = result[randomIndex];
    console.log(resultText);
    const resultDivision = document.querySelector("#result-area");
    const resultPar = document.querySelector("#result-area p");
    if (resultPar){
      resultPar.textContent = resultText;
    } else {
      const newPar = document.createElement("p");
      newPar.textContent = resultText;
      resultDivision.append(newPar);
    }
  }
);