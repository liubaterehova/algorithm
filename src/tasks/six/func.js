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