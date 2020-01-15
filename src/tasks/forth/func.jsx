function numbersFromStr(str) {
  let arrofStr = str.split("+");
  let firstNumber = Number(arrofStr[0]);
  let secondNumber = Number(arrofStr[1]);
  return { firstNumber, secondNumber };
}

const calculator = {
  sum: function(str) {
    const { firstNumber, secondNumber } = numbersFromStr(str);
    return firstNumber + secondNumber;
  },
  minus: function(str) {
    const { firstNumber, secondNumber } = numbersFromStr(str);
    return firstNumber - secondNumber;
  },
  multiply: function(str) {
    const { firstNumber, secondNumber } = numbersFromStr(str);
    return firstNumber * secondNumber;
  },
  divide: function(str) {
    const { firstNumber, secondNumber } = numbersFromStr(str);
    return firstNumber / secondNumber;
  }
};

export default calculator;
