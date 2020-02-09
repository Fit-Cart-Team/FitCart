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
        console.log('orig ', res.data.results);
        // sorter(res.data.results);
        filter(res.data.results);
        return setAList(res.data.results);
      })
      .catch(err => console.error(err));
  };

  // const sorter = array => {
  //   array.sort((a, b) => b.helpfulness - a.helpfulness);
  //   // console.log('sorted ', array);
  // };

  const filter = array => {
    array.sort(
      (a, b) =>
        b.answerer_name.includes('Seller') - a.answerer_name.includes('Seller')
    );
    console.log('filtered ', array);
  };

  useEffect(() => {
    getAnswers();
  }, [question]);

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
