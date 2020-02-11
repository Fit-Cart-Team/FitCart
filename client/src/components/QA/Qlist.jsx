import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';

const QList = ({ product_id }) => {
  const [qList, setQList] = useState([]);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  const getQList = () => {
    axios
      .get(`http://3.134.102.30/qa/${product_id}?page=${1}&count=${100}`)
      .then(res => {
        return setQList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getQList();
  }, [product_id]);

  const handleClick = isOn => {
    setShowMoreQuestions(isOn);
  };

  if (qList.length === 0) {
    return <div></div>;
  } else if (qList.length === 1) {
    return (
      <span>
        <b>Q: </b>
        <span>
          <Question q={qList[0]} key={qList[0].question_id} />;
        </span>
      </span>
    );
  } else if (qList.length === 2) {
    return (
      <span>
        <Question q={qList[0]} key={qList[0].question_id} />
        <Question q={qList[1]} key={qList[1].question_id} />
      </span>
    );
  } else if (qList.length > 2 && showMoreQuestions) {
    return (
      <div>
        <span>
          <Question q={qList[0]} key={qList[0].question_id} />
          <Question q={qList[1]} key={qList[1].question_id} />
          <button onClick={() => handleClick(false)}>
            MORE ANSWERED QUESTIONS
          </button>
        </span>
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
            {qList.map(q => {
              return <Question q={q} key={q.question_id} />;
            })}
          </span>
        </div>
        <button onClick={() => handleClick(true)}>
          LESS ANSWERED QUESTIONS
        </button>
      </div>
    );
  }
};
export default QList;
