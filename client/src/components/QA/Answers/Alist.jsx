import React, { useState } from 'react';
import Answer from './Answer';

const AList = ({ aList }) => {
  const [showMoreAnswers, setShowMoreAnswers] = useState(true);

  const handleClick = isOn => {
    setShowMoreAnswers(isOn);
  };

  if (aList.length === 0) {
    return <div></div>;
  } else if (aList.length === 1) {
    return (
      <span>
        <b className='question-body'>A: </b>{' '}
        <span>
          <Answer a={aList[0]} key={aList[0].answer_id} />
        </span>
      </span>
    );
  } else if (aList.length === 2) {
    return (
      <span>
        <b className='question-body'>A: </b>{' '}
        <Answer a={aList[0]} key={aList[0].answer_id} />
        <span className='answer-list-indent'>
          <Answer a={aList[1]} key={aList[1].answer_id} />
        </span>
      </span>
    );
  } else if (aList.length > 2 && showMoreAnswers) {
    return (
      <div>
        <span>
          <b className='question-body'>A: </b>
          <span>
            <Answer a={aList[0]} key={aList[0].answer_id} />
            <span className='answer-list-indent'>
              <Answer a={aList[1]} key={aList[1].answer_id} />
            </span>
            <a
              onClick={() => handleClick(false)}
              style={{ cursor: 'pointer' }}
              className='expand-answer-list'
            >
              <small>
                <span className='load-more-answers'>Load More Answers</span>
              </small>
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            maxHeight: '50vh',
            overflow: 'auto',
          }}
        >
          <b className='question-body'>A: </b>
          <Answer a={aList[0]} key={aList[0].answer_id} />
          {aList.slice(1).map((a, i) => (
            <span className='answer-list-indent' key={i}>
              <Answer a={a} key={a.answer_id} />
            </span>
          ))}
        </div>
        <a
          onClick={() => handleClick(true)}
          style={{ cursor: 'pointer' }}
          className='collapse-answer-list'
        >
          <small>
            <span className='less-answers'>Less Answers</span>
          </small>
        </a>
      </div>
    );
  }
};

export default AList;
