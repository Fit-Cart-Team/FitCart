import React from 'react';
import Helpful from './Helpful';
import Report from './Report';

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
          by <b> {a.answerer_name}</b>,{' '}
          <span>
            {formattedDate} | <Helpful answer={a} /> | <Report answer={a} />
          </span>
        </small>
      </p>
    </span>
  );
};

export default Answer;
