import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import axios from 'axios';

const AList = ({ question }) => {
  const [aList, setAList] = useState([]);

  const getAnswers = () => {
    axios
      .get(
        `http://3.134.102.30/qa/${
          question.question_id
        }/answers?page=${1}&count=${100}`
      )
      .then(res => {
        return setAList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAnswers();
  }, []);

  if (aList.length > 0) {
    return (
      <span>
        <b>A: </b>
        {aList.map((a, index) => {
          return <Answer a={a} key={index} />;
        })}
      </span>
    );
  } else {
    return <div></div>;
  }
};
export default AList;
