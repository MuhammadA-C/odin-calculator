/*

Note: There's a bug after you click the plus sign twice
with the numbers printing to the screen. Need to fix!


*/

const screen = document.getElementById("screen").firstChild;
const numbers = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector("button:nth-child(2)");
const divisionBtn = document.querySelector("button:nth-child(5)");
const multiplyBtn = document.querySelector("button:nth-child(9)");
const subtractBtn = document.querySelector("button:nth-child(13)");
const additionBtn = document.querySelector("button:nth-child(17)");
const equalsBtn = document.querySelector("button:nth-child(20)");

///////////////////////////////////////////////////////////////////////////

const screenLength = 9;
let numbersOnScreen = 0;

//////////////////////////////////////////////////////////////////////////
/* 
  Adds an event listner to each of the numbered buttons
  to obtain the button that was pressed and update the screen.
*/
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    updateScreen(i);
    printBtnPressed(i);
  });
}

///////////////////////////////////////////////////////////////////////////

let selectedNumOne = null;
let selectedNumTwo = null;
let wasOperationSelected = false;

//////////////////////////////////////////////////////////////////////////
additionBtn.addEventListener("click", () => {


  if(selectedNumOne === null) {
    setWasOperationSelected();
    selectedNumOne = screen.textContent;

  } else if (selectedNumTwo === null) {
    setWasOperationSelected();
    selectedNumTwo = screen.textContent;
  }

  if(selectedNumOne != null && selectedNumTwo != null) {
    screen.textContent = add(selectedNumOne, selectedNumTwo);

    resetSelectedNums();
    resetWasOperationSelected();
  }


});

clearBtn.addEventListener("click", () => {
  clear();
});

//////////////////////////////////////////////////////////////////////////

function updateScreen(index) {
  if(numbersOnScreen < screenLength) {
    switch(wasOperationSelected) {
      case true:
        resetNumbersOnScreen();
        resetWasOperationSelected();
        resetScreen();
        setScreen(index);
        break;

      case false:
        setScreen(index);
        numbersOnScreen++;
        break;
    }
  } 
}

function setScreen(index) {
  screen.textContent += numbers[index].lastChild.nodeValue;
}

function resetScreen() {
  screen.textContent = "";
}

function resetNumbersOnScreen() {
  numbersOnScreen = 0;
}

function resetWasOperationSelected() {
  wasOperationSelected = false;
}

function setWasOperationSelected() {
  wasOperationSelected = true;
}

function resetSelectedNums() {
  selectedNumOne = null;
  selectedNumTwo = null;
}

function clear() {
  resetScreen();
  resetNumbersOnScreen();
  resetSelectedNums();
  resetWasOperationSelected();

  console.log("Clear");
}

function printBtnPressed(index) {
  console.log(numbers[index].lastChild);
}

//////////////////////////////////////////////////////////////////////

function operate() {}

function add(num1, num2) {
  return Number(num1) + Number(num2);
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