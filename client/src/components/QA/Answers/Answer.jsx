import React, { useState, useEffect } from 'react';
import Helpful from '../Helpful';
import Report from '../Report';
import dateFormatter from '../dateFormatter';
import Name from '../Name';
import AnswerPhotos from './AnswerPhotos';

const Answer = ({ a }) => {
  let formattedDate = dateFormatter(a.date);

  return (
    <span className='answer-tile'>
      <span className='answer-body'>{a.body}</span>
      {a.photos.length > 0 ? <AnswerPhotos photos={a.photos} /> : <></>}
      <br />
      <span className='answer-name-date-helpful'>
        <span className='answer-name'>
          by <Name unformattedName={a.answerer_name} />,
        </span>
        <span>
          <span className='date'>{formattedDate}</span> |
          <span className='helpful-answer'>
            <Helpful answer={a} />
          </span>
          |
          <span className='report-answer'>
            <Report answer_id={a.answer_id} />
          </span>
        </span>
      </span>
      <br />
      <br />
    </span>
  );
};

export default Answer;
