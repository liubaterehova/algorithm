import React, { Component } from "react";

const FormatDate = {
  monthes: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  formatFromString: function(str) {
    return str[0] + str[1] + "." + str[2] + str[3] + "." + str.slice(4);
  },

  formatFromStringToMonth: function(str) {
    let numberofMonth = str[2] + str[3];
    if (str[2] == 0) {
      numberofMonth = str[3];
    }
    return (
      str[0] +
      str[1] +
      " " +
      this.monthes[numberofMonth - 1] +
      " " +
      str.slice(4)
    );
  },
  formatInExample: function(str) {
    let numberofMonth = str[4] + str[5];
    if (str[4] == 0) {
      numberofMonth = str[5];
    }
    return (
      str[6] +
      str[7] +
      " " +
      this.monthes[numberofMonth - 1] +
      " " +
      str.slice(0, 4)
    );
  },

  formatWithHyphen: function(str) {
    let numberofMonth = str[4] + str[5];
    return numberofMonth + "-" + str[6] + str[7] + "-" + str.slice(0, 4);
  },

  formatDateFromHyphen: function(str, ex) {
    return {
      fromNow: function() {
        let now = new Date();
        let day = str[6] + str[7];
        let month = str[4] + str[5] - 1;
        let year = str.slice(0, 4);
        let date = new Date(year, month, day);
        const DAY = 1000 * 60 * 60 * 24;
        const MONTH = DAY * 31;
        const YEAR = MONTH * 12;
        let duration = now - date;
        if (duration < DAY) {
          return "less than a day ago";
        }
        if (duration < MONTH) {
          return `less than ${Math.floor(duration / DAY)} days ago`;
        }
        if (duration < YEAR) {
          return `less than ${Math.floor(duration / MONTH)} monthes ago`;
        } else return `${Math.ceil(duration / YEAR)} years ago`;
      }
    };
  }
};

export default FormatDate;
