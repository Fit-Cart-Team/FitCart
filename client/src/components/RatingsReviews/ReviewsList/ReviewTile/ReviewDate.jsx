import React from 'react';

const ReviewDate = (props) => {
  let rawDate = props.date;
  let dashedDate = rawDate.split('T')[0];
  let months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
  let splitDate = dashedDate.split('-');
  let year = splitDate[0];
  let month = months[splitDate[1]];
  let day = splitDate[2];

  return (
    <span>{`${month} ${day}, ${year}`}</span>
  );
};

export default ReviewDate;