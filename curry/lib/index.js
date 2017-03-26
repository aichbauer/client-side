const checkInput = function (i) {
  if (typeof i !== 'number') {
    throw new Error('Your input must be a number!');
  }
};

const isGreater = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return firstNumber > secondNumber;
  };
};

const isLower = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return firstNumber < secondNumber;
  };
};

const isEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return firstNumber === secondNumber;
  };
};

const isGreaterOrEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return firstNumber >= secondNumber;
  };
};

const isLowerOrEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return firstNumber <= secondNumber;
  };
};

export default {
  isGreater,
  isLower,
  isEqual,
  isGreaterOrEqual,
  isLowerOrEqual,
};
