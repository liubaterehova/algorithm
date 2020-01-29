// const TYPE_FORMATS = {
//   NONE: 'none',
//   SYMBOL: 'symbol',
//   WORD: 'word',
//   SENTENCE: 'sentence',
// };

// function maxLengthFunc(str, length) {
//   if (str.length > +length) {
//     return str.slice(0, +length);
//   }

//   return str;
// }

// function maxNumberOfStrings(strs, number) {
//   const arr = strs.split('\n');

//   if (arr.length > +number) {
//     return arr.slice(0, +number).join('\n');
//   }

//   return strs;
// }

// function typeWord(str) {
//   const words = str.split(' ');
//   let newstr = '';

//   for (let i = 0; i < words.length; i += 1) {
//     newstr += `${words[i]}\n`;
//   }

//   return newstr;
// }

// function typeSymbol(str) {
//   let newstr = '';

//   for (let i = 0; i < str.length; i += 1) {
//     newstr += `${str[i]}\n`;
//   }

//   return newstr;
// }

// function typeSentence(str) {
//   const sentences = str.split('.');
//   let newstr = '';

//   for (let i = 0; i < sentences.length; i += 1) {
//     newstr += `${sentences[i]}\n`;
//   }

//   return newstr;
// }

// function typeFormat(str, type) {
//   switch (type) {
//     case TYPE_FORMATS.WORD:
//     {
//       return typeWord(str);
//     }

//     case TYPE_FORMATS.SYMBOL:
//     {
//       return typeSymbol(str);
//     }

//     case TYPE_FORMATS.SENTENCE:
//     {
//       return typeSentence(str);
//     }

//     default:
//       return str;
//   }
// }

// function allCheck({
//   inputValue,
//   format,
//   maxLength,
//   maxNumStr,
// }) {
//   let str = typeFormat(inputValue, format);

//   if (maxLength) {
//     str = maxLengthFunc(str, maxLength);
//   }

//   if (maxNumStr) {
//     str = maxNumberOfStrings(str, maxNumStr);
//   }

//   return str;
// }

// export {
//   allCheck,
//   maxNumberOfStrings,
//   typeFormat,
//   TYPE_FORMATS,
// };
