import React, { useState, useEffect } from 'react';
import Helpful from './Helpful';
import Report from './Report';
import dateFormatter from './dateFormatter';

const Answer = ({ a }) => {
  let formattedDate = dateFormatter(a.date);

  return (
    <span>
      {a.body}
      <p>
        <small>
          by <b> {a.answerer_name}</b>,{' '}
          <span>
            {formattedDate} | <Helpful answer={a} /> |{' '}
            <Report answer_id={a.answer_id} />
          </span>
        </small>
      </p>
    </span>
  );
};

export default Answer;
