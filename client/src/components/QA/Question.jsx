import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
      <p>Q: {q.question_body}</p>
    </div>
  );
};

export default Question;
