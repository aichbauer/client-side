const checkInput = function (i) {
  if (typeof i !== 'number') {
    throw new Error('Your input must be a number!');
  }
};

const isGreater = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return secondNumber > firstNumber;
  };
};

const isLower = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return secondNumber < firstNumber;
  };
};

const isEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return secondNumber === firstNumber;
  };
};

const isGreaterOrEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return secondNumber >= firstNumber;
  };
};

const isLowerOrEqual = (firstNumber) => {
  checkInput(firstNumber);

  return (secondNumber) => {
    checkInput(secondNumber);

    return secondNumber <= firstNumber;
  };
};

export {
  isGreater,
  isLower,
  isEqual,
  isGreaterOrEqual,
  isLowerOrEqual,
};
