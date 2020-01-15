function numbersFromStr(str, operator) {
  let arrofStr = str.split(operator);
  let firstNumber = Number(arrofStr[0]);
  let secondNumber = Number(arrofStr[1]);
  return { firstNumber, secondNumber };
}

const calculator = {
  sum: function(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);
    return firstNumber + secondNumber;
  },
  minus: function(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);
    return firstNumber - secondNumber;
  },
  multiply: function(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);
    return firstNumber * secondNumber;
  },
  divide: function(str, operator) {
    const { firstNumber, secondNumber } = numbersFromStr(str, operator);
    return firstNumber / secondNumber;
  }
};

export default calculator;
