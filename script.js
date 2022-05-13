/* Selectors */
const numbersSelector = document.querySelectorAll('[data-numbers]')
const operatorsSelector = document.querySelectorAll('[data-operators]')
const displayOperation = document.querySelector('.operation')
const displayResult = document.querySelector('.result')
const evaluate = document.querySelector('.equal')
const deleteBtn = document.querySelector('.delete')
const clearBtn = document.querySelector('.clear')
const firstNumber = document.querySelector('.first-number')
const secondNumber = document.querySelector('.second-number')
const operator = document.querySelector('.operator')

function createNumber(number) {
  if (operator.textContent == '') {
    const create = document.createElement('span')
    create.textContent = number
    firstNumber.appendChild(create)
  }
  if (operator.textContent !== '') {
    const create = document.createElement('span')
    create.textContent = number
    secondNumber.appendChild(create)
  }
}

function evaluates (operators) {
    evaluate.addEventListener ('click', e => {
      const number1 = parseInt(firstNumber.textContent)
      const number2 = parseInt(secondNumber.textContent)
      if (operators == '+') {
        const result = number1 + number2
        displayResult.textContent = result
      }
      if (operators == '-') {
        const result = number1 - number2
        displayResult.textContent = result
      }
      if (operators == 'X') {
        const result = number1 * number2
        displayResult.textContent = result
      }
      if (operators == '÷') {
        const result = number1 / number2
        displayResult.textContent = result
      }
  })
}

function nextOperation (operators, operatorSelector) {
  operatorSelector.addEventListener('click', e => {
    if (displayResult.textContent !== '' && operators == '+') {
      secondNumber.textContent = ''
      operator.textContent = operators
      firstNumber.textContent = displayResult.textContent
    }
    if (displayResult.textContent !== '' && operators == '-') {
      secondNumber.textContent = ''
      operator.textContent = operators
      firstNumber.textContent = displayResult.textContent
    }
    if (displayResult.textContent !== '' && operators == 'X') {
      secondNumber.textContent = ''
      operator.textContent = operators
      firstNumber.textContent = displayResult.textContent
    }
    if (displayResult.textContent !== '' && operators == '÷') {
      secondNumber.textContent = ''
      operator.textContent = operators
      firstNumber.textContent = displayResult.textContent
    }
  })
}

// Select Numbers //
numbersSelector.forEach(numberSelector => {
  numberSelector.addEventListener('click', e => {
    const number = numberSelector.dataset.numbers
    if (displayResult.textContent !== '' && operator.textContent !== '' && firstNumber.textContent !== '' && secondNumber.textContent !== '') {
      clearContent()
      createNumber(number)
    }
    else {
      createNumber(number)
    }     
  })
})


// Delete Button //
deleteBtn.addEventListener('click', e => {
  const child = document.querySelector('span')
  if (firstNumber.textContent !== '' ) {
    firstNumber.removeChild(child)
  }
  else if (operator.textContent !== '') {
    operator.textContent = ''
  } 
  else {
    secondNumber.removeChild(child)
  }
})

// Clear Button //
clearBtn.addEventListener('click', e => {
  clearContent()
})

// Select Operators //
operatorsSelector.forEach(operatorSelector => {
  operatorSelector.addEventListener('click', e => {
    const operators = operatorSelector.dataset.operators
    operator.textContent = operators 
    evaluates(operators)
    nextOperation(operators, operatorSelector) 
  })
})

function clearContent() {
  firstNumber.textContent = ''
  secondNumber.textContent = ''
  operator.textContent = ''
  displayResult.textContent = ''
}

