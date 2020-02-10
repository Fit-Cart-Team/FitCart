import React, { useState, useEffect } from 'react';
import Helpful from '../Helpful';
import Report from '../Report';
import dateFormatter from '../dateFormatter';
import Name from '../Name';
import AnswerPhotos from './AnswerPhotos';

const Answer = ({ a }) => {
  let formattedDate = dateFormatter(a.date);

  return (
    <span>
      {a.body}
      {a.photos.length > 0 ? <AnswerPhotos photos={a.photos} /> : <div></div>}
      <p>
        <small>
          by <Name unformattedName={a.answerer_name} />,{' '}
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
