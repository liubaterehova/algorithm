const containOnly1and0 = (number) => number === '0' || number === '1';

const convertFromBinaryToDecimal = (number) => {
  let result = 0;
  const arrOfNum = number.split('');

  if (!arrOfNum.every(containOnly1and0)) return 'mistake';

  arrOfNum.forEach((num, index) => {
    result += num * 2 ** index;
  });

  return result;
};

const convertFromDecimalToBinary = (number) => {
  let str = '';
  let copyNumber = number;

  if (number === '1') {
    return 1;
  }

  if (!(number.match('^[0-9]+$'))) return 'mistake';

  while (copyNumber !== 1) {
    if (copyNumber % 2 === 0) {
      copyNumber /= 2;
      str += '0';
    } else {
      copyNumber = Math.floor(copyNumber / 2);
      str += '1';
    }
  }

  str += '1';

  return str.length > 1
    ? str.split('').reverse().join('')
    : str;
};

const converter = {
  convertFromBinaryToDecimal,
  convertFromDecimalToBinary,
};

export default converter;
