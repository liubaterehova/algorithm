function numbersFromStr(str, operator) {

  const [firstNumber, secondNumber] = str.split(operator);

  return {
    firstNumber: Number(firstNumber),
    secondNumber: Number(secondNumber),
  };
}

const calculator = {
  sum(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);

    return firstNumber + secondNumber;
  },
  minus(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);

    return firstNumber - secondNumber;
  },
  multiply(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);

    return firstNumber * secondNumber;
  },
  divide(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);

    return firstNumber / secondNumber;
  },
};

export default calculator;
