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
let isChainOperations = false;
let num = null;

//////////////////////////////////////////////////////////////////////////
additionBtn.addEventListener("click", () => {
  //Stores the two numbers into variables
  if(selectedNumOne === null) {
    setWasOperationSelected();
    selectedNumOne = screen.textContent;

  } else if (selectedNumTwo === null) {
    setWasOperationSelected();

    /*
    Bug: Due to the code below it causes a bug where
    if this is triggered then the user keeps pressing the operator
    it'll have the last number stored and do calculations with it
    */
    if(isChainOperations) {
      selectedNumTwo = num;
    } else {
      selectedNumTwo = screen.textContent;
    }

  }

  /* 
    Code below is also updating the screen....
    It's updating the screen with the result

  */

    /*
      Bug-1: The screen doesn't update correctly after the chain code
      running

      Bug-2: The chain code doesn't work correctly because it only stores
      the last instance of the button pressed and not all passed 
      instances prior to an operator being selected.


    */
  if(selectedNumOne != null && selectedNumTwo != null && isChainOperations === false) {
    selectedNumOne = add(selectedNumOne, selectedNumTwo);
    screen.textContent = selectedNumOne;
    selectedNumTwo = null;
    isChainOperations = true;
  }

  if(selectedNumOne != null && selectedNumTwo != null && isChainOperations === true) {
    selectedNumOne = add(selectedNumOne, selectedNumTwo);
    screen.textContent = selectedNumOne;
    selectedNumTwo = null;
    isChainOperations = true;
  }


});

clearBtn.addEventListener("click", () => {
  clear();
});

//////////////////////////////////////////////////////////////////////////

function updateScreen(index) {
  //Stops the screen from updating if the number is too long
  if(numbersOnScreen >= screenLength) {
    return;
  }

  if(!wasOperationSelected && !isChainOperations) {
    updateScreenBasedOnBtnPressed(index);
  } else if(wasOperationSelected && !isChainOperations) {
    updateScreenIfOperationWasSelected(index);
  } else if(isChainOperations) {
    num = numbers[index].lastChild.nodeValue;
  }
}

function updateScreenBasedOnBtnPressed(index) {
  setScreenBasedOnBtnPressed(index);
  numbersOnScreen++;
}

function updateScreenIfOperationWasSelected(index) {
  resetNumbersOnScreen();
  resetWasOperationSelected();
  resetScreen();
  setScreenBasedOnBtnPressed(index);
}

function setScreenBasedOnBtnPressed(index) {
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

function resetNums() {
  selectedNumOne = null;
  selectedNumTwo = null;
  num = null;
}

function clear() {
  resetScreen();
  resetNumbersOnScreen();
  resetWasOperationSelected();
  resetNums();
  isChainOperations = false;

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