convertFrom2 = (number) => {
  if (number.includes('0') && number.includes('1')) {
    let res = 0;
    const arrOfNum = number.split('');
    arrOfNum.forEach((num, index) => {
      res += num * 2 ** index;
    });

    return res;
  }

  return 'mistake';
}

const converter = {
    convertFrom2To10: number => {
        let res = 0;
        let arrOfNum = number.split("");
        for (let i = 0; i < arrOfNum.length; i++) {
            res += arrOfNum[i] * 2 ** i;
        }
        return res;
    }
};

export default converter;