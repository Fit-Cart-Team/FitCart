import React, { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';

const QList = ({ product_id }) => {
  const [qList, setQList] = useState([]);

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

  if (qList.length > 0) {
    return (
      <div>
        {qList.map((q, index) => {
          return <Question q={q} key={index} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default QList;
