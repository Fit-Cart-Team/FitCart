import React, { useState, useEffect } from 'react';
import Question from './Question';

const QList = ({ list }) => {
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  const handleClick = isOn => {
    setShowMoreQuestions(isOn);
  };

  if (list.length === 0) {
    return <div></div>;
  } else if (list.length === 1) {
    return (
      <div>
        <span>
          <Question q={list[0]} key={list[0].question_id} />
        </span>
      </div>
    );
  } else if (list.length === 2) {
    return (
      <div>
        <Question q={list[0]} key={list[0].question_id} />
        <Question q={list[1]} key={list[1].question_id} />
      </div>
    );
  } else if (list.length > 2 && showMoreQuestions) {
    return (
      <div>
        <Question q={list[0]} key={list[0].question_id} />
        <Question q={list[1]} key={list[1].question_id} />
        <button onClick={() => handleClick(false)}>
          More Answered Questions
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            maxHeight: '75vh',
            overflow: 'auto',
          }}
        >
          <span>
            {list.map(q => (
              <Question q={q} key={q.question_id} />
            ))}
          </span>
        </div>
        <br />
        <button onClick={() => handleClick(true)}>
          Less Answered Questions
        </button>
      </div>
    );
  }
};
export default QList;
