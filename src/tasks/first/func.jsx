const arrayProcessingTool = {
  getMaxSubSum(arr) {
    let sum = 0;
    let maxSum = 0;

    // TODO:
    // for (const i of arr) {
    //   sum += i;

    //   if (sum < 0) {
    //     sum = 0;
    //   }

    //   if (sum >= maxSum) {
    //     maxSum = sum;
    //   }
    // }

    arr.forEach((item) => {
      sum += item;

      if (sum < 0) {
        sum = 0;
      }

      if (sum >= maxSum) {
        maxSum = sum;
      }
    });

    return maxSum;
  },

  getMaxSubSumSecond(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
      let sum = 0;

      for (let k = 0; k < arr.length; k++) {
        sum += arr[k + i];

        if (sum >= maxSum) {
          maxSum = sum;
        }
      }
    }

    return maxSum;
  },

  // TODO:
  // findMin(arr) {
  //   let max = +Infinity;
  //   let min = 0;

  //   for (const i of arr) {
  //     if (i < max) {
  //       max = i;
  //       min = i;
  //     }
  //   }

  //   return min;
  // },

  findMin: arr => Math.min(...arr),

  // TODO:
  // findMax(arr) {
  //   let max = 0;
  //   let min = -Infinity;

  //   for (const i of arr) {
  //     if (i > min) {
  //       max = i;
  //       min = i;
  //     }
  //   }

  //   return min;
  // },

  findMax: arr => Math.max(...arr),

  findMediana(arr) {
    let sum = 0;
    // const copyArr = arr.slice();
    const copyArr = [...arr];
    const newArr = copyArr.sort((a, b) => a - b);

    // for (const i of copyarr) {
    //   sum += i;
    // }

    copyArr.forEach(item => {
      sum += item;
    });

    const average = sum / copyArr.length;

    if (copyArr.length % 2 == 0) {
      const leftIndex = copyArr.length / 2 - 1;
      const rightIndex = copyArr.length / 2;
      const rightNumber = newArr[rightIndex];
      const leftNumber = newArr[leftIndex];

      if (Math.abs(average - leftNumber) > Math.abs(rightNumber - average)) {
        return rightNumber;
      }

      return leftNumber;
    }

    return newArr[Math.ceil(copyArr.length / 2)];
  },

  findNumberOfUpperSequence(arr) {
    let numberOfUpperSequence = 1;
    let maxNumberOfUpperSequence = 1;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        numberOfUpperSequence += 1;

        if (numberOfUpperSequence > maxNumberOfUpperSequence) {
          maxNumberOfUpperSequence = numberOfUpperSequence;
        }
      } else numberOfUpperSequence = 1;
    }

    return maxNumberOfUpperSequence;
  }
};

export default arrayProcessingTool;
