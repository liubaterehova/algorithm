const arrayProcessingTool = {
  getMaxSubSum: function(arr) {
    let sum = 0;
    let maxSum = 0;

    for (let i of arr) {
      sum += i;
      if (sum < 0) {
        sum = 0;
      }
      if (sum >= maxSum) {
        maxSum = sum;
      }
    }
    return maxSum;
  },

  getMaxSubSumSecond: function(arr) {
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

  findMin: function(arr) {
    let max = +Infinity;
    let min = 0;
    for (let i of arr) {
      if (i < max) {
        max = i;
        min = i;
      }
    }
    return min;
  },

  findMax: function(arr) {
    let max = 0;
    let min = -Infinity;
    for (let i of arr) {
      if (i > min) {
        max = i;
        min = i;
      }
    }
    return min;
  },

  findMediana: function(arr) {
    let sum = 0;
    let copyarr = arr.slice();
    let newArr = copyarr.sort((a, b) => a - b);
    for (let i of copyarr) {
      sum += i;
    }
    let average = sum / copyarr.length;
    if (copyarr.length % 2 == 0) {
      let leftIndex = copyarr.length / 2 - 1;
      let rightIndex = copyarr.length / 2;
      let rightNumber = newArr[rightIndex];
      let leftNumber = newArr[leftIndex];
      if (Math.abs(average - leftNumber) > Math.abs(rightNumber - average)) {
        return rightNumber;
      }
      return leftNumber;
    } else return newArr[Math.ceil(copyarr.length / 2)];
  },

  findNumberOfUpperSequence: function(arr) {
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
