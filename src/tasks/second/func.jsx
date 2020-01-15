import React, { Component } from 'react';

export default class FormatDate extends Component {
  monthes = [
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

  // Should be write with `...${}...`
  formatFromString = str =>
    `${str[0] + str[1]}.${str[2]}${str[3]}.${str.slice(4)}`;

  formatFromStringToMonth = str => {
    let numberofMonth = str[2] + str[3];

    if (str[2] === 0) {
      numberofMonth = str[3];
    }

    // TODO: Same
    // return (
    //   str[0] +
    //   str[1] +
    //   " " +
    //   this.monthes[numberofMonth - 1] +
    //   " " +
    //   str.slice(4)
    // );

    return `${str[0] + str[1]}${this.monthes[numberofMonth - 1]}${str.slice(4)}`;
  };
  formatInExample = (str, ex /* TODO: What means ex ? */) => {
    if (ex === 'YYYYMMDD') {
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
    }
  };

  formatWithHyphen = (str, ex, how) => {
    if (ex === 'YYYYMMDD' && how === 'MM-DD-YYYY') {
      const numberofMonth = str[4] + str[5]; // TODO: should be constant

      return `${numberofMonth}-${str[6]}${str[7]}-${str.slice(0, 4)}`;
    }
  };
  formatDateFromHyphen = (str, ex) => {
    if (ex === 'YYYY-MM-DD') {
      return {
        fromNow() {
          const now = new Date();
          const date = new Date(str);
          const duration = now - date;

          if (duration < 1000 * 60 * 60 * 24) {
            return 'less than a day ago';
          }

          if (duration < 1000 * 60 * 60 * 24 * 31) {
            return 'less than duration.getMonth()';
          }
        },
      };
    }
  };

  render() {
    return (
      <div> {this.formatWithHyphen('20130431', 'YYYYMMDD', 'MM-DD-YYYY')} </div>
    );
  }
}
