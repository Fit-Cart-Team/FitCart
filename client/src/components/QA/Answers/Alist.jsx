import React, { useState, useEffect, Fragment } from 'react';
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

  if (aList.length > 0) {
    return (
      <Fragment>
        <span>
          <b>A: </b>
          {aList.map((a, index) => {
            return <Answer a={a} key={index} />;
          })}
        </span>
      </Fragment>
    );
  } else {
    return <div></div>;
  }
};
export default AList;
