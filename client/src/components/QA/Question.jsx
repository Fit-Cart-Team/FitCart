import React from 'react';
import AList from './Answers/Alist';
import Helpful from './Helpful';
import Aform from './Answers/Aform';

const Question = ({ productName, q }) => {
  return (
    <div>
      <p>
        <b>Q: {q.question_body} </b>
        <span className='helpful-add-answer'>
          <Helpful question={q} /> |{' '}
          <Aform
            productName={productName}
            questionId={q.question_id}
            questionBody={q.question_body}
          />
        </span>
      </p>
      <AList question={q} />
      <br />
    </div>
  );
};

export default Question;
