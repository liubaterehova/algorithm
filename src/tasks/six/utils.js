const convertFrom2 = (number) => {
  if (number.includes('0') && number.includes('1')) {
    let res = 0;
    const arrOfNum = number.split('');

    arrOfNum.forEach((num, index) => {
      res += num * 2 ** index;
    });

    return res;
  }

  return 'mistake';
};

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

  return (str.length > 1)
    ? str.split('').reverse().join('')
    : str;
};

const converter = {
  convertFrom2To10: (number) => convertFrom2(number),
  convertFrom10To2: (number) => convertFrom10(number),
};

export default converter;
