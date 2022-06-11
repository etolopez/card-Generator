/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let symUp = document.querySelector(".card-symbol-up");
  let symDow = document.querySelector(".card-symbol-down");

  function randomCard() {
    let rand = Math.floor(Math.random() * 14) + 2;
    let randLetter = ["J", "Q", "K", "A"];
    var letter = randLetter[Math.floor(Math.random() * randLetter.length)];

    if (rand > 10) {
      return letter;
    } else return rand;
  }

  function randomSymbol() {
    let symbols = ["♦", "♥", "♠", "♣"];
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];

    if (symbol == "♥") {
      symUp.style.color = "red";
      symDow.style.color = "red";
    } else if (symbol == "♦") {
      symUp.style.color = "red";
      symDow.style.color = "red";
    }
    return symbol;
  }

  let letter = document.querySelector("#midLetter");
  letter.innerHTML = randomCard();
  symUp.innerHTML = symDow.innerHTML = randomSymbol();
};

let button = document.querySelector(".btn");
button.addEventListener("click", window.onload);
