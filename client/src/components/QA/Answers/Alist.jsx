import React, { useState, useEffect, Fragment } from 'react';
import Answer from './Answer';
import axios from 'axios';

const AList = ({ question }) => {
  const [aList, setAList] = useState([]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(true);

  const getAnswers = () => {
    axios
      .get(
        `http://3.134.102.30/qa/${
          question.question_id
        }/answers?page=${1}&count=${100}`
      )
      .then(res => {
        return sorter(res.data.results);
      })
      .then(sortedArray => {
        return filter(sortedArray);
      })
      .then(filteredArray => {
        return setAList(filteredArray);
      })
      .catch(err => console.error(err));
  };

  const sorter = array => {
    return array.sort((a, b) => b.helpfulness - a.helpfulness);
  };

  const filter = array => {
    return array.sort(
      (a, b) =>
        b.answerer_name.includes('Seller') - a.answerer_name.includes('Seller')
    );
  };

  useEffect(() => {
    getAnswers();
  }, [question]);

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
            <u onClick={() => handleClick(false)} style={{ cursor: 'pointer' }}>
              LOAD MORE ANSWERS
            </u>
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
        <u onClick={() => handleClick(true)} style={{ cursor: 'pointer' }}>
          LESS ANSWERS
        </u>
      </div>
    );
  }
};

export default AList;
