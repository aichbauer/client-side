const _checkInput = function (i) {
  if (typeof i !== 'number') {
    throw new Error('Your input must be a number!');
  }
};

const isGreater = (firstNumber) => {
  _checkInput(firstNumber);

  return (secondNumber) => {
    _checkInput(secondNumber);

    return firstNumber > secondNumber;
  }
};

const isLower = (firstNumber) => {
  _checkInput(firstNumber);

  return (secondNumber) => {
    _checkInput(secondNumber);

    return firstNumber < secondNumber;
  }
};

const isEqual = (firstNumber) => {
  _checkInput(firstNumber);

  return (secondNumber) => {
    _checkInput(secondNumber);

    return firstNumber === secondNumber;
  }
};

const isGreaterOrEqual = (firstNumber) => {
  _checkInput(firstNumber);

  return (secondNumber) => {
    _checkInput(secondNumber);

    return firstNumber >= secondNumber;
  }
};

const isLowerOrEqual = (firstNumber) => {
  _checkInput(firstNumber);

  return (secondNumber) => {
    _checkInput(secondNumber);

    return firstNumber <= secondNumber;
  }
};

export default {
  isGreater,
  isLower,
  isEqual,
  isGreaterOrEqual,
  isLowerOrEqual
};
