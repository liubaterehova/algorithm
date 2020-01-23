const TYPE_FORMATS = {
  NONE: 'none',
  SYMBOL: 'symbol',
  WORD: 'word',
  SENTENCE: 'sentence',
};

// TODO: If it not needed, it should be remove
// function maxLengthFunc(str, length) {
//   if (str.length > +length) {
//     return str.slice(0, +length);
//   }

//   return str;
// }
const countEnters = (str) => {
  let numberOfEnters = 0;

  if (str.includes('\n')) {
    let pos = -1;

    while ((pos = str.indexOf('\n', pos + 1)) !== -1) {
      numberOfEnters += 1;
    }

    return numberOfEnters;
  }

  return 0;
};

const maxLengthFunc = (str, length) => {
  debugger;
  const strLength = str.length;
  const numberOfEnters = countEnters(str);
  const lengthWithEnters = Number(length) + numberOfEnters;

  return strLength > lengthWithEnters
    ? str.slice(0, lengthWithEnters)
    : str;
};

const maxNumberOfStrings = (strs, number) => {
  const arr = strs.split('\n');
  const toNumber = Number(number);

  return arr.length > toNumber
    ? arr.slice(0, toNumber).join('\n')
    : strs;
};

const typeWord = (str) => {
  const words = str.split(' ');
  let newstr = '';

  words.forEach(item => {
    newstr += `${item}\n`;
  });

  return newstr;
};

const typeSymbol = (str) => {
  debugger;
  let newstr = '';
  const numberOfEnters = countEnters(str);

  const arrFromStr = str.split('');
  const newArr = [...arrFromStr];

  if (arrFromStr.includes('\n')) {
    arrFromStr.forEach((letter, index) => {
      if (letter === '\n') {
        newArr.splice(index, 1);
      }
      index --;
    });
  }
  debugger;

  newArr.forEach((item) => {
    newstr += `${item}\n`;
  });

  return newstr;
};

const typeSentence = (str) => {
  const sentences = str.split('.');
  let newstr = '';

  sentences.forEach(item => {
    newstr += `${item}\n`;
  });

  return newstr;
};

const typeFormat = (str, type) => {
  switch (type) {
    case TYPE_FORMATS.WORD:
    {
      return typeWord(str);
    }

    case TYPE_FORMATS.SYMBOL:
    {
      return typeSymbol(str);
    }

    case TYPE_FORMATS.SENTENCE:
    {
      return typeSentence(str);
    }

    default:
      return str;
  }
};

const checkAllFields = ({
  inputValue,
  format,
  maxLength,
  maxNumStr,
  result,
}) => {
  debugger;

  let str = (format !== 'format' && !maxLength && !maxNumStr) ? typeFormat(inputValue, format) : typeFormat(result, format);

  // str = result
  //   ? typeFormat(result, format)
  //   : typeFormat(inputValue, format);

  if (maxLength) {
    str = maxLengthFunc(str, maxLength);
  }

  if (maxNumStr) {
    str = maxNumberOfStrings(str, maxNumStr);
  }

  return str;
};

const changeTypeFormat = (changeState, state, event) => {
  const { key } = event;

  changeState(() => ({
    format: key,
    result: checkAllFields({
      ...state,
      format: key,
    }),
  }));
};

export {
  checkAllFields,
  maxNumberOfStrings,
  typeFormat,
  TYPE_FORMATS,
  changeTypeFormat,
};
