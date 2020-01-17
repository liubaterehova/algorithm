const DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;
const MONTH = DAY_IN_MILISECONDS * 31;
const YEAR = MONTH * 12;

const LIST_OF_MONTHES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = {
  formatFromString: str =>
    `${str[0]}${str[1]}.${str[2]}${str[3]}.${str.slice(4)}`,

  formatFromStringToMonth(str) {
    let numberofMonth = str[2] + str[3];

    if (str[2] === 0) {
      numberofMonth = str[3];
    }

    // TODO: ???
    // return (
    //   `${str[0]
    //   + str[1]
    //   } ${
    //     this.monthes[numberofMonth - 1]
    //   } ${
    //     str.slice(4)}`
    // );

    return `${str[0] + str[1]} ${[numberofMonth - 1]} ${str.slice(4)}`;
  },

  formatInExample(str) {
    let numberofMonth = str[4] + str[5];

    if (str[4] === 0) {
      numberofMonth = str[5];
    }

    // TODO: Same
    return (
      `${str[6]
      + str[7]
      } ${
        LIST_OF_MONTHES[numberofMonth - 1]
      } ${
        str.slice(0, 4)}`
    );
  },

  formatWithHyphen(str) {
    const numberofMonth = str[4] + str[5];

    return `${numberofMonth}-${str[6]}${str[7]}-${str.slice(0, 4)}`;
  },

  formatDateFromHyphen(str) {
    return {
      fromNow() {
        // const now = new Date();
        const currentDate = new Date();
        const enteredDay = str[6] + str[7];
        const enteredMonth = str[4] + str[5] - 1;
        const enteredYear = str.slice(0, 4);
        // const date = new Date(year, month, day);
        const enteredDate = new Date(enteredYear, enteredMonth, enteredDay);
        // const DAY = 1000 * 60 * 60 * 24;
        const DATE_DIFFERENCE = currentDate - enteredDate;

        if (DATE_DIFFERENCE < DAY_IN_MILISECONDS) {
          return 'less than a day ago';
        }

        if (DATE_DIFFERENCE < MONTH) {
          return `less than ${Math.floor(DATE_DIFFERENCE / DAY_IN_MILISECONDS)} days ago`;
        }

        if (DATE_DIFFERENCE < YEAR) {
          return `less than ${Math.floor(DATE_DIFFERENCE / MONTH)} monthes ago`;
        }

        return `${Math.ceil(DATE_DIFFERENCE / YEAR)} years ago`;
      },
    };
  },
};

export default formatDate;
