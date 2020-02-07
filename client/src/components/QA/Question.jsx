import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Alist from './Alist';
import Helpful from './Helpful';

const Question = ({ q }) => {
  const [alist, setalist] = useState([]);

  const getAnswers = () => {
    axios
      .get(
        `http://3.134.102.30/qa/${q.question_id}/answers?page=${1}&count=${100}`
      )
      .then(res => {
        setalist(res.data.results);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <div>
      <p>
        <b>Q: {q.question_body} </b>
        <small>
          <Helpful question={q} />
        </small>
      </p>
      <div>
        <b>A: </b>
        <span>
          <Alist list={alist} />
        </span>
      </div>
    </div>
  );
};

export default Question;
