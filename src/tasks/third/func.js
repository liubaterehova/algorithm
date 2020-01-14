function allCheck(inputValue, format, maxLength, maxNumStr) {
    let str = '';
    if (format !== 'select') {
        str = typeFormat(inputValue, format);
    }
    if (maxLength) {
        str = maxLength(str, maxLength);
    }
    if (maxNumStr) {
        str = maxNumberOfStrings(str, maxNumStr)
    }
    return str;
}

function maxLength(str, length) {
    if (str.length > length) {
        return str.slice(0, length);
    }
    return str;
}

function maxNumberOfStrings(strs, number) {
    debugger;
    let arr = strs.split(' ');
    if (arr.length > number) {
        return arr.slice(0, number).join(' ');
    }
    return strs
}

function typeFormat(str, type) {

    let arr = str.split(' ');
    switch (type) {
        case 'перенос по слову':
            {
                let newstr = '';
                for (let i = 0; i < arr.length; i++) {
                    newstr += `${arr[i]} + \n`;

                }
                return newstr;
            }
        case 'перенос по символу':
            {
                let newstr = '';
                for (let i = 0; i < str.length; i++) {
                    newstr += str[i] + '/n';
                }
                console.log(str)
                return newstr;
            }
        case 'перенос по предложению':
            {
                debugger;
                alert("lll");
                let newstr = '';
                arr.find((item, index) => {
                    if (item === '.') {
                        let newarr = arr.slice(0, index);
                        let rightPart = arr.slice(index + 1);
                        newstr = `${[...newarr]} + '/n' + ${[...rightPart]}`;
                        console.log(newstr);
                    }
                })

                return newstr;
            }
        case 'переносов нет':
            {
                return str
            }
    }
}

export {
    allCheck,
    maxNumberOfStrings,
    typeFormat,
    maxLength
}