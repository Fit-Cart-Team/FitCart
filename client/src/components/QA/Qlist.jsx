import React, { useState, useEffect } from 'react';
import Question from './Question';

const QList = ({ productName, list }) => {
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  const handleClick = isOn => {
    setShowMoreQuestions(isOn);
  };

  if (list.length === 0) {
    return <div></div>;
  } else if (list.length === 1) {
    return (
      <span>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
        />
      </span>
    );
  } else if (list.length === 2) {
    return (
      <span>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
        />
        <Question
          productName={productName}
          q={list[1]}
          key={list[1].question_id}
        />
      </span>
    );
  } else if (list.length > 2 && showMoreQuestions) {
    return (
      <span>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
        />
        <Question
          productName={productName}
          q={list[1]}
          key={list[1].question_id}
        />
        <br />
        <button onClick={() => handleClick(false)}>
          More Answered Questions
        </button>
      </span>
    );
  } else {
    return (
      <span>
        <div
          style={{
            maxHeight: '75vh',
            overflow: 'auto',
          }}
        >
          <span>
            {list.map(q => (
              <Question productName={productName} q={q} key={q.question_id} />
            ))}
          </span>
        </div>
        <br />
        <button onClick={() => handleClick(true)}>
          Less Answered Questions
        </button>
      </span>
    );
  }
};
export default QList;
