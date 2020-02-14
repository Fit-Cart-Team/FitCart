import React, { useState } from 'react';
import Question from './Question';

const QList = ({ productName, list, searchTerm }) => {
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  const handleClick = isOn => {
    setShowMoreQuestions(isOn);
  };

  if (list.length === 0) {
    return <div></div>;
  } else if (list.length === 1) {
    return (
      <span className='question-list'>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
        />
      </span>
    );
  } else if (list.length === 2) {
    return (
      <span className='question-list'>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[1]}
          key={list[1].question_id}
          searchTerm={searchTerm}
        />
      </span>
    );
  } else if (list.length === 3) {
    return (
      <span className='question-list'>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[1]}
          key={list[1].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[2]}
          key={list[2].question_id}
          searchTerm={searchTerm}
        />
        <br />
        <button
          onClick={() => handleClick(false)}
          className='more-answered-questions'
        >
          More Answered Questions
        </button>
      </span>
    );
  } else if (list.length >= 4 && showMoreQuestions) {
    return (
      <span className='question-list'>
        <Question
          productName={productName}
          q={list[0]}
          key={list[0].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[1]}
          key={list[1].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[2]}
          key={list[2].question_id}
          searchTerm={searchTerm}
        />
        <Question
          productName={productName}
          q={list[3]}
          key={list[3].question_id}
          searchTerm={searchTerm}
        />
        <br />
        <button
          onClick={() => handleClick(false)}
          className='more-answered-questions'
        >
          More Answered Questions
        </button>
      </span>
    );
  } else {
    return (
      <span className='question-list'>
        <div
          style={{
            maxHeight: '75vh',
            overflow: 'auto',
          }}
        >
          <span>
            {list.map(q => (
              <Question
                productName={productName}
                q={q}
                key={q.question_id}
                searchTerm={searchTerm}
              />
            ))}
          </span>
        </div>
        <br />
        <button
          onClick={() => handleClick(true)}
          className='less-answered-questions'
        >
          Less Answered Questions
        </button>
      </span>
    );
  }
};
export default QList;
