const formatDate = { // TODO: Only classes are capitalized in JS
  monthes: [
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
  ],

  formatFromString: str =>
    `${str[0]}${str[1]}.${str[2]}${str[3]}.${str.slice(4)}`,

  formatFromStringToMonth(str) {
    let numberofMonth = str[2] + str[3];

    if (str[2] === 0) {
      numberofMonth = str[3];
    }

    return (
      `${str[0]
      + str[1]
      } ${
        this.monthes[numberofMonth - 1]
      } ${
        str.slice(4)}`
    );
  },
  formatInExample(str) {
    let numberofMonth = str[4] + str[5];

    if (str[4] === 0) {
      numberofMonth = str[5];
    }

    return (
      `${str[6]
      + str[7]
      } ${
        this.monthes[numberofMonth - 1]
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
        const now = new Date();
        const day = str[6] + str[7];
        const month = str[4] + str[5] - 1;
        const year = str.slice(0, 4);
        const date = new Date(year, month, day);
        const DAY = 1000 * 60 * 60 * 24;
        const MONTH = DAY * 31;
        const YEAR = MONTH * 12;
        const duration = now - date;

        if (duration < DAY) {
          return 'less than a day ago';
        }

        if (duration < MONTH) {
          return `less than ${Math.floor(duration / DAY)} days ago`;
        }

        if (duration < YEAR) {
          return `less than ${Math.floor(duration / MONTH)} monthes ago`;
        }

        return `${Math.ceil(duration / YEAR)} years ago`;
      },
    };
  },
};

export default formatDate;
