import React from 'react';

const Answer = ({ a }) => {
  let date = new Date(a.date);

  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  let dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  let formattedDate = dateTimeFormat.format(date);

  return (
    <span>
      {a.body}
      <p>
        <small>
          by <b> {a.answerer_name}</b>, <span>{formattedDate}</span>
        </small>
      </p>
    </span>
  );
};

export default Answer;
