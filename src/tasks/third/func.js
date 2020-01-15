const TYPE_FORMATS = {
    NONE: "none",
    SYMBOL: "symbol",
    WORD: "word",
    SENTENCE: "sentence"
};

function allCheck({ inputValue, format, maxLength, maxNumStr }) {
    let str = typeFormat(inputValue, format);

    if (maxLength) {
        str = maxLengthFunc(str, maxLength);
    }
    if (maxNumStr) {
        str = maxNumberOfStrings(str, maxNumStr);
    }
    return str;
}

function maxLengthFunc(str, length) {
    if (str.length > +length) {
        return str.slice(0, +length);
    }
    return str;
}

function maxNumberOfStrings(strs, number) {
    let arr = strs.split("\n");
    if (arr.length > +number) {
        return arr.slice(0, +number).join("\n");
    }
    return strs;
}

function typeFormat(str, type) {
    switch (type) {
        case TYPE_FORMATS.WORD:
            {
                let words = str.split(" ");
                let newstr = "";
                for (let i = 0; i < words.length; i++) {
                    newstr += words[i] + "\n";
                }
                return newstr;
            }
        case TYPE_FORMATS.SYMBOL:
            {
                let newstr = "";
                for (let i = 0; i < str.length; i++) {
                    newstr += str[i] + "\n";
                }
                return newstr;
            }
        case TYPE_FORMATS.SENTENCE:
            {
                const sentences = str.split(".");
                let newstr = "";
                for (let i = 0; i < sentences.length; i++) {
                    newstr += sentences[i] + "\n";
                }
                return newstr;
            }
        default:
            {
                return str;
            }
    }
}

export { allCheck, maxNumberOfStrings, typeFormat, TYPE_FORMATS };