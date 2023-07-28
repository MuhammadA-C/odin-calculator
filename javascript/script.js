/*


*/

const screen = document.getElementById("screen").firstChild;
const numbers = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector("button:nth-child(2)");
const divisionBtn = document.querySelector("button:nth-child(5)");
const multiplyBtn = document.querySelector("button:nth-child(9)");
const subtractBtn = document.querySelector("button:nth-child(13)");
const additionBtn = document.querySelector("button:nth-child(17)");
const equalsBtn = document.querySelector("button:nth-child(20)");

const maxNumbersOnScreen = 9;
let totalNumbers = 0;





/*
  Adds the number selected to the screen if its less than
  or equal to the max numbers allowed on the screen.
*/
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    console.log(numbers[i].lastChild);

    if(totalNumbers <= maxNumbersOnScreen) {
      screen.textContent += numbers[i].lastChild.nodeValue;
      totalNumbers++;
    }
  });
}

clearBtn.addEventListener("click", () => {
  clear();
});




let num1;
let num2;
let operatorSelectedl

function operate() {}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function clear() {
  screen.textContent = "";
  totalNumbers = 0;
}