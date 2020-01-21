// TODO: What ???)))
// May be "convertFromBinaryToDecimal" would be better ?)
const convertFrom2 = (number) => {
  if (number.includes('0') && number.includes('1')) {
    let res = 0; // Res again ?)
    const arrOfNum = number.split('');

    arrOfNum.forEach((num, index) => {
      res += num * 2 ** index;
    });

    return res; // Same
  }

  return 'mistake';
};

// TODO: Same)
const convertFrom10 = (number) => {
  let str = '';
  let copyNum = number;

  if (number === '1') {
    return 1;
  }

  while (copyNum !== 1) {
    if (copyNum % 2 === 0) {
      copyNum /= 2;
      str += '0';
    } else {
      copyNum = Math.floor(copyNum / 2);
      str += '1';
    }
  }

  str += '1';

  return (str.length > 1) // TODO: Why do you wrap that in brackets ?
    ? str.split('').reverse().join('')
    : str;
};

const converter = {
  // convertFrom2To10: (number) => convertFrom2(number), // TODO: It's not necessary
  convertFrom2To10: convertFrom2,
  convertFrom10To2: convertFrom10,
};

export default converter;
