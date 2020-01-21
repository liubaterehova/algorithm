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

const maxLengthFunc = (str, length) =>
  str.length > Number(length)
    ? str.slice(0, +length)
    : str;

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
  let newstr = '';
  const arrFromStr = str.split();

  arrFromStr.forEach((item) => {
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
}) => {
  let str = typeFormat(inputValue, format);

  if (maxLength) {
    str = maxLengthFunc(str, maxLength);
  }

  if (maxNumStr) {
    str = maxNumberOfStrings(str, maxNumStr);
  }

  return str;
};

export {
  checkAllFields,
  maxNumberOfStrings,
  typeFormat,
  TYPE_FORMATS,
};
