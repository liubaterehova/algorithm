
const TYPE_FORMATS = {
  NONE: 'none',
  SYMBOL: 'symbol',
  WORD: 'word',
  SENTENCE: 'sentence',
};

const maxLengthFunc = (str, length) => (
  str.length > Number(length)
    ? str.slice(0, Number(length))
    : str
);

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
  const arrFromStr = str.split('');

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
  let str = inputValue;

  if (maxLength) {
    str = maxLengthFunc(str, maxLength);
  }

  if (maxNumStr) {
    str = maxNumberOfStrings(str, maxNumStr);
  }

  str = typeFormat(str, format);

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
