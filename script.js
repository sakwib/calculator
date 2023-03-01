const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

let calculation = '';
let result = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      calculation += ` ${button.innerText} `;
    } else {
      calculation += button.value;
    }
    display.value = calculation;
  });
});

equalButton.addEventListener('click', () => {
  result = eval(calculation);
  display.value = result;
});

clearButton.addEventListener('click', () => {
  calculation = '';
  result = null;
  display.value = '';
});
