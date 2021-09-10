'use strict';

const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const btnCheck = document.querySelector('#btn-check');
const outputMessage = document.querySelector('#output-message');

const sumOfString = value => {
  let sum = 0;
  for (const v of value) {
    sum += Number(v);
  }
  return sum;
};

const checkIfDateIsLucky = (sum, luckyNum) => {
  return sum % luckyNum === 0;
};

const displayMessage = message => {
  outputMessage.innerText = message;
};

btnCheck.addEventListener('click', () => {
  displayMessage('');
  if (dateOfBirth.value && luckyNumber.value) {
    const dateString = dateOfBirth.value.split('-').join('');
    const sum = sumOfString(dateString);
    if (checkIfDateIsLucky(sum, Number(luckyNumber.value))) {
      displayMessage('Your birthday is lucky! 🥳');
    } else {
      displayMessage('Your birthday is not that lucky! 😐');
    }
  } else {
    displayMessage('Please enter values for both fields! 🤕');
  }
});
