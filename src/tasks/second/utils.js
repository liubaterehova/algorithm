const DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24;
const MONTH_IN_MILISECONDS = DAY_IN_MILISECONDS * 31;
const YEAR_IN_MILISECONDS = MONTH_IN_MILISECONDS * 12;

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
    const day = `${str[0]}${str[1]}`;
    const year = `${str.slice(4)}`;

    // make check if month starts with '0'
    const month = (str[2] === 0)
      ? LIST_OF_MONTHES[str[3] - 1]
      : LIST_OF_MONTHES[`${str[2]}${str[3]}` - 1];

    return `${day} ${month} ${year}`;
  },

  formatStartsFromYear(str) {
    const day = `${str[6]}${str[7]}`;
    const year = `${str.slice(0, 4)}`;

    //  make check if month starts with '0'
    const month = (str[4] === 0)
      ? LIST_OF_MONTHES[str[5] - 1]
      : LIST_OF_MONTHES[`${str[4]}${str[5]}` - 1];

    return `${day} ${month} ${year}`;
  },

  formatDateWithHyphen(str) {
    const day = `${str[6]}${str[7]}`;
    const month = `${str[4]}${str[5]}`;
    const year = `${str.slice(0, 4)}`;

    return `${month}-${day}-${year}`;
  },

  formatDateFromHyphen(str) {
    return {
      fromNow() {
        const currentDate = new Date();
        const enteredDay = str[6] + str[7];
        const enteredMonth = str[4] + str[5] - 1;
        const enteredYear = str.slice(0, 4);
        const enteredDate = new Date(enteredYear, enteredMonth, enteredDay);
        const DATE_DIFFERENCE = currentDate - enteredDate;

        if (DATE_DIFFERENCE < DAY_IN_MILISECONDS) {
          return 'less than a day ago';
        }

        if (DATE_DIFFERENCE < MONTH_IN_MILISECONDS) {
          return `less than ${Math.floor(DATE_DIFFERENCE / DAY_IN_MILISECONDS)} days ago`;
        }

        if (DATE_DIFFERENCE < YEAR_IN_MILISECONDS) {
          return `less than ${Math.floor(DATE_DIFFERENCE / MONTH_IN_MILISECONDS)} monthes ago`;
        }

        return `${Math.ceil(DATE_DIFFERENCE / YEAR_IN_MILISECONDS)} years ago`;
      },
    };
  },
};

export default formatDate;
