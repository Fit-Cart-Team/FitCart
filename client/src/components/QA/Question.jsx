import React from 'react';
import AList from './AList';
import Helpful from './Helpful';

const Question = ({ q }) => {
  return (
    <div>
      <p>
        <b>Q: {q.question_body} </b>
        <small>
          <Helpful question={q} /> |{' '}
          <u style={{ cursor: 'pointer' }}>Add Answer</u>
        </small>
      </p>
      <AList question={q} />
    </div>
  );
};

export default Question;
