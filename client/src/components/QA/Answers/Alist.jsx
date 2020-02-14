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
        <b>A: </b>
        <span>
          <Answer a={aList[0]} key={aList[0].answer_id} />
        </span>
      </span>
    );
  } else if (aList.length === 2) {
    return (
      <span>
        <b>A: </b>
        <Answer a={aList[0]} key={aList[0].answer_id} />
        <Answer a={aList[1]} key={aList[1].answer_id} />
      </span>
    );
  } else if (aList.length > 2 && showMoreAnswers) {
    return (
      <div>
        <span>
          <b>A: </b>
          <span>
            <Answer a={aList[0]} key={aList[0].answer_id} />
            <Answer a={aList[1]} key={aList[1].answer_id} />
            <a
              onClick={() => handleClick(false)}
              style={{ cursor: 'pointer' }}
              className='expand-answer-list'
            >
              <small>
                <u>Load More Answers</u>
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
            maxHeight: '35vh',
            overflow: 'auto',
          }}
        >
          <b>A: </b>
          <span>
            {aList.map(a => (
              <Answer a={a} key={a.answer_id} />
            ))}
          </span>
        </div>
        <a
          onClick={() => handleClick(true)}
          style={{ cursor: 'pointer' }}
          className='collapse-answer-list'
        >
          <small>
            <u>Less Answers</u>
          </small>
        </a>
      </div>
    );
  }
};

export default AList;
